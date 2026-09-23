import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — Happy guests to Google. Unhappy guests to you"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Guest reviews",
    title: "Happy guests to Google. Unhappy guests to you.",
  })
}
