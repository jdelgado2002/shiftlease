import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — Yesterday’s P&L, before today’s lunch rush"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Financials",
    title: "Yesterday’s P&L, before today’s lunch rush.",
  })
}
