import fs from "node:fs"
import path from "node:path"
import { ImageResponse } from "next/og"

/**
 * The share card.
 *
 * This is the only piece of the site most people see before they decide
 * whether to click: it is what Google puts next to a result, what Slack and
 * LinkedIn unfurl, and what ChatGPT and Gemini show when they cite a page.
 * It was previously a 1024x1024 stock render declared as 1200x630, so every
 * one of those surfaces cropped it — and it did not look like the site.
 *
 * Rendering it here instead of shipping a flat file means the card is always
 * the real type system (Instrument Serif over IBM Plex Mono, ink and ledger
 * green) and every page can put its own headline on it.
 */

const FONT_DIR = path.join(process.cwd(), "assets", "fonts")

// Read once at module scope — these pages are generated at build time, so this
// is a build-time cost, not a per-request one.
const instrumentSerif = fs.readFileSync(
  path.join(FONT_DIR, "InstrumentSerif-Regular.ttf"),
)
const plexMono = fs.readFileSync(path.join(FONT_DIR, "IBMPlexMono-Medium.ttf"))

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

// Resolved from the CSS custom properties in app/globals.css so the card and
// the site cannot drift apart.
const INK = "#1A1614"
const PAPER = "#F3F1EC"
const LEDGER_GREEN = "#0B835B"

export function renderOgCard({
  eyebrow,
  title,
  footnote = "easyshifthq.com",
}: {
  eyebrow: string
  title: string
  footnote?: string
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 72px",
        backgroundColor: INK,
        // A single off-centre wash rather than a flat fill — the same
        // atmosphere the ink sections on the site carry.
        backgroundImage: `radial-gradient(900px 500px at 88% -10%, rgba(11,131,91,0.28), transparent 60%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Plex",
            fontSize: 23,
            letterSpacing: "0.2em",
            color: "rgba(243,241,236,0.58)",
          }}
        >
          EASYSHIFTHQ
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Plex",
            fontSize: 20,
            letterSpacing: "0.16em",
            color: LEDGER_GREEN,
            border: `1px solid rgba(11,131,91,0.55)`,
            borderRadius: 4,
            padding: "9px 18px",
          }}
        >
          {eyebrow.toUpperCase()}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "Serif",
          fontSize: title.length > 64 ? 74 : 88,
          lineHeight: 1.04,
          letterSpacing: "-0.015em",
          color: PAPER,
          maxWidth: 960,
        }}
      >
        {title}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            height: 1,
            width: "100%",
            backgroundColor: "rgba(243,241,236,0.16)",
            marginBottom: 22,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Plex",
            fontSize: 22,
            color: "rgba(243,241,236,0.62)",
          }}
        >
          {footnote}
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "Serif", data: instrumentSerif, style: "normal", weight: 400 },
        { name: "Plex", data: plexMono, style: "normal", weight: 500 },
      ],
    },
  )
}

/**
 * Card copy, one table.
 *
 * Every page gets its own headline, which is the point — but it also meant
 * fifteen opengraph-image.tsx files that were the same twelve lines with two
 * strings swapped. Keeping the copy here instead makes each route file a
 * binding, puts every headline on one screen where they can be read against
 * each other, and leaves no boilerplate to drift out of sync.
 */
export const OG_CARDS = {
  "/": {
    eyebrow: "Restaurant operations",
    title: "From the shift you schedule to the check that clears.",
  },
  "/pricing": {
    eyebrow: "Pricing",
    title: "$99, $199, $299 per location. No contract.",
  },
  "/blog": {
    eyebrow: "Field notes",
    title: "Working notes on restaurant margin.",
  },
  "/features/scheduling-payroll": {
    eyebrow: "Scheduling",
    title: "Build the week against the labor dollar, not after it.",
  },
  "/features/employee-portal": {
    eyebrow: "Employee portal",
    title: "The app your staff already opens every shift.",
  },
  "/features/financial-management": {
    eyebrow: "Financials",
    title: "Yesterday’s P&L, before today’s lunch rush.",
  },
  "/features/inventory-management": {
    eyebrow: "Inventory",
    title: "What should have been used, and what was.",
  },
  "/features/recipe-menu": {
    eyebrow: "Recipe costing",
    title: "What every plate costs, before you price it.",
  },
  "/features/integrations": {
    eyebrow: "Integrations",
    title: "Six POS systems, read daily. Banks, read-only.",
  },
  "/features/reviews": {
    eyebrow: "Guest reviews",
    title: "Happy guests to Google. Unhappy guests to you.",
  },
  "/vs/restaurant365": {
    eyebrow: "Comparison",
    title: "EasyShiftHQ vs Restaurant365.",
    alt: "EasyShiftHQ compared with Restaurant365",
  },
  "/why-inventory-matters": {
    eyebrow: "Reference",
    title: "What shrinkage actually costs a restaurant.",
  },
  "/why-operations-matter": {
    eyebrow: "Reference",
    title: "Why restaurant operations decide the margin.",
  },
  "/tools/daily-pl-cheat-sheet": {
    eyebrow: "Cheat sheet",
    title: "How to read a restaurant P&L in five minutes.",
  },
} satisfies Record<string, { eyebrow: string; title: string; alt?: string }>

type OgRoute = keyof typeof OG_CARDS

/** The alt text for a route's card — the headline unless it reads badly. */
export function ogAlt(route: OgRoute) {
  const card: { title: string; alt?: string } = OG_CARDS[route]
  return `EasyShiftHQ — ${card.alt ?? card.title.replace(/\.$/, "")}`
}

/** The default export a route's opengraph-image.tsx needs. */
export function ogImage(route: OgRoute) {
  return function OpengraphImage() {
    return renderOgCard(OG_CARDS[route])
  }
}
