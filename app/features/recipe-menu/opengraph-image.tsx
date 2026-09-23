import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — What every plate costs, before you price it"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Recipe costing",
    title: "What every plate costs, before you price it.",
  })
}
