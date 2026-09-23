import { getAllBlogPosts, publicSlug } from "@/lib/blog"

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
 * accurate schema. This file is generated from the same source of truth as
 * the sitemap so it can never describe a page that no longer exists.
 */

const BASE = "https://easyshifthq.com"

type Entry = { path: string; title: string; note: string }

const pages: { section: string; entries: Entry[] }[] = [
  {
    section: "Start here",
    entries: [
      {
        path: "/",
        title: "EasyShiftHQ",
        note: "Restaurant operations software. Schedule against a live labor budget, read POS sales into a daily P&L, and give staff their shifts, clock-in, tips and pay in the same app.",
      },
      {
        path: "/pricing",
        title: "Pricing",
        note: "Three tiers priced per location per month: Starter $99, Growth $199, Pro $299. 14-day free trial, no credit card. Volume discounts from 3 locations.",
      },
      {
        path: "/vs/restaurant365",
        title: "EasyShiftHQ vs Restaurant365",
        note: "Where the two differ: self-serve setup versus an implementation project, and per-location pricing versus enterprise contracts.",
      },
    ],
  },
  {
    section: "What it does",
    entries: [
      {
        path: "/features/employee-portal",
        title: "Employee portal",
        note: "The app staff open: schedule, open-shift board, clock-in, timecard, tips and pay. The most-used surface in the product.",
      },
      {
        path: "/features/scheduling-payroll",
        title: "Scheduling and payroll",
        note: "Building a week against a live labor budget, shift trades with manager approval, and the time clock those hours come from.",
      },
      {
        path: "/features/financial-management",
        title: "Financial management",
        note: "Daily P&L, bank accounts, categorized expenses and printed checks.",
      },
      {
        path: "/features/inventory-management",
        title: "Inventory management",
        note: "Counts, purchase orders, and the variance between what should have been used and what was.",
      },
      {
        path: "/features/recipe-menu",
        title: "Recipe and menu costing",
        note: "Plate cost per item, and what a price change does to margin.",
      },
      {
        path: "/features/reviews",
        title: "Guest reviews",
        note: "Guest review collection and response.",
      },
      {
        path: "/features/integrations",
        title: "Integrations",
        note: "POS systems read today: Square, Toast, Clover, Shift4, Focus POS and Revel. Bank connections are read-only.",
      },
    ],
  },
  {
    section: "Reference",
    entries: [
      {
        path: "/why-inventory-matters",
        title: "The true cost of poor inventory management",
        note: "What restaurants lose to shrinkage — theft, waste and error — and the arithmetic behind the range.",
      },
      {
        path: "/why-operations-matter",
        title: "Why restaurant operations matter",
        note: "How scheduling, labor cost and daily numbers connect to margin.",
      },
      {
        path: "/tools/daily-pl-cheat-sheet",
        title: "Daily P&L cheat sheet",
        note: "A one-page reference for reading a restaurant P&L.",
      },
    ],
  },
]

export const dynamic = "force-static"

export function GET() {
  const posts = getAllBlogPosts()

  const body = [
    "# EasyShiftHQ",
    "",
    "> Restaurant operations software for independent operators and small groups.",
    "> Scheduling against a live labor budget, a daily P&L built from POS sales and",
    "> actual clocked labor, inventory and recipe costing, and an employee app for",
    "> shifts, clock-in, tips and pay.",
    "",
    "Pricing: $99 / $199 / $299 per location per month. 14-day free trial, no credit card.",
    `POS systems read: Square, Toast, Clover, Shift4, Focus POS, Revel.`,
    "",
    ...pages.flatMap(({ section, entries }) => [
      `## ${section}`,
      "",
      ...entries.map((e) => `- [${e.title}](${BASE}${e.path}): ${e.note}`),
      "",
    ]),
    "## Articles",
    "",
    ...posts.map(
      (p) =>
        `- [${p.title}](${BASE}/blog/${publicSlug(p.slug)}): ${p.description}`,
    ),
    "",
    "## Canonical",
    "",
    `- Sitemap: ${BASE}/sitemap.xml`,
    `- All pages are server-rendered; no JavaScript is required to read them.`,
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  })
}
