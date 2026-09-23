import { renderOgCard } from "@/lib/og"
import { getAllBlogSlugs, getBlogPostBySlug, publicSlug } from "@/lib/blog"

export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from "@/lib/og"

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
