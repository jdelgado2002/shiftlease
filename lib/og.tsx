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
