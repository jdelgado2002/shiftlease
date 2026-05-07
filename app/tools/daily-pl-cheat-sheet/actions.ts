"use server"

import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  firstName: z.string().trim().min(1).max(80).optional().or(z.literal("")),
  restaurantName: z.string().trim().max(120).optional().or(z.literal("")),
  utm_source: z.string().max(120).optional().or(z.literal("")),
  utm_medium: z.string().max(120).optional().or(z.literal("")),
  utm_campaign: z.string().max(120).optional().or(z.literal("")),
  utm_term: z.string().max(120).optional().or(z.literal("")),
  utm_content: z.string().max(120).optional().or(z.literal("")),
  mkt_landing_page: z.string().max(500).optional().or(z.literal("")),
})

export type LeadMagnetInput = z.infer<typeof schema>

export type LeadMagnetResult =
  | { ok: true }
  | { ok: false; error: string }

const SITE_URL = "https://easyshifthq.com"
const XLSX_PATH = "/downloads/EasyShiftHQ-Daily-PnL-Cheat-Sheet.xlsx"
const PDF_PATH = "/downloads/EasyShiftHQ-Restaurant-Daily-PnL-Guide.pdf"

export async function sendDailyPLCheatSheet(
  raw: unknown,
): Promise<LeadMagnetResult> {
  const sanitized = sanitizeMarketingFields(raw)
  const parsed = schema.safeParse(sanitized)
  if (!parsed.success) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      error: "Email service is not configured. Please try again later.",
    }
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "EasyShiftHQ <hello@easyshifthq.com>"

  const { email, firstName, restaurantName } = parsed.data
  const safeFirstName = firstName ? escapeHtml(firstName) : ""
  const greeting = safeFirstName ? `Hi ${safeFirstName},` : "Hi there,"
  const restaurantLine = restaurantName
    ? `<p>We hope this helps the team at <strong>${escapeHtml(restaurantName)}</strong> spot money issues before they snowball.</p>`
    : ""

  const xlsxUrl = `${SITE_URL}${XLSX_PATH}`
  const pdfUrl = `${SITE_URL}${PDF_PATH}`

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #111;">
      <p>${greeting}</p>
      <p>Thanks for grabbing the <strong>Daily P&amp;L Cheat Sheet</strong>. Both files are attached and also available here:</p>
      <ul>
        <li><a href="${xlsxUrl}">Daily P&amp;L Cheat Sheet (Excel)</a></li>
        <li><a href="${pdfUrl}">Restaurant Daily P&amp;L Guide (PDF)</a></li>
      </ul>
      <p>Print the one-pager, hang it next to your POS, and use the cheat sheet at end-of-day to read your numbers in 5 minutes.</p>
      ${restaurantLine}
      <p>If you want to skip the spreadsheet entirely and have your daily P&amp;L delivered to your phone every morning, that's exactly what EasyShiftHQ does — it pulls your POS, labor, and invoices into a single number every night.</p>
      <p>— The EasyShiftHQ team</p>
    </div>
  `.trim()

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Daily P&L Cheat Sheet (Excel + PDF inside)",
      html,
      attachments: [
        { path: xlsxUrl, filename: "EasyShiftHQ-Daily-PnL-Cheat-Sheet.xlsx" },
        { path: pdfUrl, filename: "EasyShiftHQ-Restaurant-Daily-PnL-Guide.pdf" },
      ],
    })

    if (error) {
      return {
        ok: false,
        error: "We couldn't send the email. Please try again or download below.",
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: "We couldn't send the email. Please try again or download below.",
    }
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const MARKETING_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const

function sanitizeMarketingFields(raw: unknown): unknown {
  if (!raw || typeof raw !== "object") return raw
  const obj = { ...(raw as Record<string, unknown>) }
  for (const key of MARKETING_FIELDS) {
    const v = obj[key]
    if (typeof v === "string" && v.length > 120) {
      obj[key] = v.slice(0, 120)
    }
  }
  const landing = obj.mkt_landing_page
  if (typeof landing === "string" && landing.length > 500) {
    obj.mkt_landing_page = landing.slice(0, 500)
  }
  return obj
}
