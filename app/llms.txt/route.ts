import { getAllBlogPosts, publicSlug } from "@/lib/blog"
import { ROUTES, SECTIONS } from "@/lib/site-routes"

/**
 * /llms.txt — a plain-text index of what is on this site and what each page
 * answers.
 *
 * Honest framing, so nobody over-invests in it later: no major model provider
 * has confirmed that it reads this file. It is a proposed convention, not a
 * ranking signal, and it is here because it costs one route and is trivially
 * kept current — not because it is expected to move anything on its own.
 *
 * What does get us quoted is ordinary retrieval: pages that render without
 * JavaScript, answer a real question in their first sentence, and carry
 * accurate schema. This file is generated from lib/site-routes, the same
 * source the sitemap reads, so it can never describe a page that no longer
 * exists or miss one that was just added.
 */

const BASE = "https://easyshifthq.com"

export const dynamic = "force-static"

export function GET() {
  const indexed = Object.entries(ROUTES).flatMap(([path, route]) =>
    "index" in route ? [{ path, ...route.index }] : [],
  )

  const body = [
    "# EasyShiftHQ",
    "",
    "> Restaurant operations software for independent operators and small groups.",
    "> Scheduling against a live labor budget, a daily P&L built from POS sales and",
    "> actual clocked labor, inventory and recipe costing, and an employee app for",
    "> shifts, clock-in, tips and pay.",
    "",
    "Pricing: $99 / $199 / $299 per location per month. 14-day free trial, no credit card.",
    "POS systems read: Square, Toast, Clover, Shift4, Focus POS, Revel.",
    "",
    ...SECTIONS.flatMap((section) => [
      `## ${section}`,
      "",
      ...indexed
        .filter((e) => e.section === section)
        .map((e) => `- [${e.title}](${BASE}${e.path}): ${e.note}`),
      "",
    ]),
    "## Articles",
    "",
    ...getAllBlogPosts().map(
      (p) =>
        `- [${p.title}](${BASE}/blog/${publicSlug(p.slug)}): ${p.description}`,
    ),
    "",
    "## Canonical",
    "",
    `- Sitemap: ${BASE}/sitemap.xml`,
    "- All pages are server-rendered; no JavaScript is required to read them.",
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  })
}
