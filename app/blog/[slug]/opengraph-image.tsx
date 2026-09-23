import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"
import { getAllBlogSlugs, getBlogPostBySlug, publicSlug } from "@/lib/blog"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "EasyShiftHQ"

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug: publicSlug(slug) }))
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  return renderOgCard({
    eyebrow: "Field notes",
    title: post?.meta.title ?? "EasyShiftHQ",
    footnote: post?.meta.publishedAt
      ? `easyshifthq.com  ·  ${post.meta.publishedAt}`
      : "easyshifthq.com",
  })
}
