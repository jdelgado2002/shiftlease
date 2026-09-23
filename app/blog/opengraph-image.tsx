import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — Working notes on restaurant margin"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Field notes",
    title: "Working notes on restaurant margin.",
  })
}
