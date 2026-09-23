/**
 * Every static route on the site, described once.
 *
 * Three things need to know what pages exist and what each one is for: the
 * sitemap, the /llms.txt index, and the share card each page renders. They
 * were three hand-kept lists, which meant a page could be added to one and
 * missed by the others, and the copy describing the same page could say three
 * different things. (The /llms.txt header already claimed it was generated
 * from the same source of truth as the sitemap. It was not. Now it is.)
 *
 * Adding a page means adding one entry here. Blog posts are not listed —
 * they come from the MDX frontmatter via lib/blog.
 */

type ChangeFrequency = "weekly" | "monthly"

/** The headings /llms.txt groups pages under, in the order they appear. */
export const SECTIONS = ["Start here", "What it does", "Reference"] as const

type Section = (typeof SECTIONS)[number]

/** A page's share card: the eyebrow tab and headline it renders. */
export type OgCard = { eyebrow: string; title: string; alt?: string }

type Route = {
  /** Sitemap weighting. Required — every page belongs in the sitemap. */
  changeFrequency: ChangeFrequency
  priority: number
  /**
   * How the page is listed in /llms.txt. Omitted for pages that exist but
   * don't answer a question worth indexing — /privacy, /terms, hubs.
   */
  index?: { section: Section; title: string; note: string }
  /**
   * The page's share card. Omitted means it inherits the nearest parent's
   * opengraph-image, which is how Next's metadata file convention works.
   */
  card?: OgCard
}

export const ROUTES = {
  "/": {
    changeFrequency: "weekly",
    priority: 1,
    index: {
      section: "Start here",
      title: "EasyShiftHQ",
      note: "Restaurant operations software. Schedule against a live labor budget, read POS sales into a daily P&L, and give staff their shifts, clock-in, tips and pay in the same app.",
    },
    card: {
      eyebrow: "Restaurant operations",
      title: "From the shift you schedule to the check that clears.",
    },
  },
  "/pricing": {
    changeFrequency: "weekly",
    priority: 0.9,
    index: {
      section: "Start here",
      title: "Pricing",
      note: "Three tiers priced per location per month: Starter $99, Growth $199, Pro $299. 14-day free trial, no credit card. Volume discounts from 3 locations.",
    },
    card: {
      eyebrow: "Pricing",
      title: "$99, $199, $299 per location. No contract.",
    },
  },
  "/why-inventory-matters": {
    changeFrequency: "monthly",
    priority: 0.8,
    index: {
      section: "Reference",
      title: "The true cost of poor inventory management",
      note: "What restaurants lose to shrinkage — theft, waste and error — and the arithmetic behind the range.",
    },
    card: {
      eyebrow: "Reference",
      title: "What shrinkage actually costs a restaurant.",
    },
  },
  "/why-operations-matter": {
    changeFrequency: "monthly",
    priority: 0.8,
    index: {
      section: "Reference",
      title: "Why restaurant operations matter",
      note: "How scheduling, labor cost and daily numbers connect to margin.",
    },
    card: {
      eyebrow: "Reference",
      title: "Why restaurant operations decide the margin.",
    },
  },
  "/features/employee-portal": {
    changeFrequency: "monthly",
    priority: 0.8,
    index: {
      section: "What it does",
      title: "Employee portal",
      note: "The app staff open: schedule, open-shift board, clock-in, timecard, tips and pay. The most-used surface in the product.",
    },
    card: {
      eyebrow: "Employee portal",
      title: "The app your staff already opens every shift.",
    },
  },
  "/features/scheduling-payroll": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Scheduling and payroll",
      note: "Building a week against a live labor budget, shift trades with manager approval, and the time clock those hours come from.",
    },
    card: {
      eyebrow: "Scheduling",
      title: "Build the week against the labor dollar, not after it.",
    },
  },
  "/features/financial-management": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Financial management",
      note: "Daily P&L, bank accounts, categorized expenses and printed checks.",
    },
    card: {
      eyebrow: "Financials",
      title: "Yesterday’s P&L, before today’s lunch rush.",
    },
  },
  "/features/inventory-management": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Inventory management",
      note: "Counts, purchase orders, and the variance between what should have been used and what was.",
    },
    card: {
      eyebrow: "Inventory",
      title: "What should have been used, and what was.",
    },
  },
  "/features/recipe-menu": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Recipe and menu costing",
      note: "Plate cost per item, and what a price change does to margin.",
    },
    card: {
      eyebrow: "Recipe costing",
      title: "What every plate costs, before you price it.",
    },
  },
  "/features/reviews": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Guest reviews",
      note: "Guest review collection and response.",
    },
    card: {
      eyebrow: "Guest reviews",
      title: "Happy guests to Google. Unhappy guests to you.",
    },
  },
  "/features/integrations": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "What it does",
      title: "Integrations",
      note: "POS systems read today: Square, Toast, Clover, Shift4, Focus POS and Revel. Bank connections are read-only.",
    },
    card: {
      eyebrow: "Integrations",
      title: "Six POS systems, read daily. Banks, read-only.",
    },
  },
  "/vs": {
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/vs/restaurant365": {
    changeFrequency: "monthly",
    priority: 0.7,
    index: {
      section: "Start here",
      title: "EasyShiftHQ vs Restaurant365",
      note: "Where the two differ: self-serve setup versus an implementation project, and per-location pricing versus enterprise contracts.",
    },
    card: {
      eyebrow: "Comparison",
      title: "EasyShiftHQ vs Restaurant365.",
      alt: "EasyShiftHQ compared with Restaurant365",
    },
  },
  "/tools/daily-pl-cheat-sheet": {
    changeFrequency: "monthly",
    priority: 0.8,
    index: {
      section: "Reference",
      title: "Daily P&L cheat sheet",
      note: "A one-page reference for reading a restaurant P&L.",
    },
    card: {
      eyebrow: "Cheat sheet",
      title: "How to read a restaurant P&L in five minutes.",
    },
  },
  "/blog": {
    changeFrequency: "weekly",
    priority: 0.7,
    card: {
      eyebrow: "Field notes",
      title: "Working notes on restaurant margin.",
    },
  },
  "/privacy": {
    changeFrequency: "monthly",
    priority: 0.3,
  },
  "/terms": {
    changeFrequency: "monthly",
    priority: 0.3,
  },
} satisfies Record<string, Route>

export type RoutePath = keyof typeof ROUTES

/** The routes that render their own share card, narrowed for lib/og. */
export type CardRoute = {
  [K in RoutePath]: (typeof ROUTES)[K] extends { card: unknown } ? K : never
}[RoutePath]
