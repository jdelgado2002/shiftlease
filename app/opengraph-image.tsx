import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt =
  "EasyShiftHQ — from the shift you schedule to the check that clears"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Restaurant operations",
    title: "From the shift you schedule to the check that clears.",
  })
}
