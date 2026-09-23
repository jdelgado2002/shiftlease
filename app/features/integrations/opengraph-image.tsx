import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const alt = "EasyShiftHQ — Six POS systems, read daily. Banks, read-only"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Integrations",
    title: "Six POS systems, read daily. Banks, read-only.",
  })
}
