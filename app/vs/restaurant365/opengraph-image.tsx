import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — EasyShiftHQ vs Restaurant365"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Comparison",
    title: "EasyShiftHQ vs Restaurant365.",
  })
}
