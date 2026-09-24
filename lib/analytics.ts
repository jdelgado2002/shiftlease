// Pure helpers for marketing-site analytics. Kept free of imports so they can be
// unit-tested with Node's built-in test runner (`pnpm test`).

// Only the live marketing site reports to PostHog. Preview deploys, localhost
// and stale mirrors (e.g. the old Netlify deploy) share the same project key
// and otherwise pollute the landing-page numbers.
export const PRODUCTION_HOSTS = ["easyshifthq.com", "www.easyshifthq.com"] as const

export function isProductionHost(hostname: string): boolean {
  return (PRODUCTION_HOSTS as readonly string[]).includes(hostname.toLowerCase())
}

export type CtaPlacement = "header" | "footer" | "body"

type ClosestCapable = { closest(selector: string): unknown }

export function ctaPlacement(el: ClosestCapable): CtaPlacement {
  if (el.closest("header")) return "header"
  if (el.closest("footer")) return "footer"
  return "body"
}

// How far down the page the CTA sits, 0–100. Distinguishes the hero button
// from the mid-page and closing buttons, which share the same label.
export function pageDepthPct(elementTop: number, scrollY: number, pageHeight: number): number {
  if (pageHeight <= 0) return 0
  const pct = Math.round(((elementTop + scrollY) / pageHeight) * 100)
  return Math.min(100, Math.max(0, pct))
}
