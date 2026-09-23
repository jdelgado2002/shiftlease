import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt =
  "EasyShiftHQ — Build the week against the labor dollar, not after it"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Scheduling",
    title: "Build the week against the labor dollar, not after it.",
  })
}
