import { MetadataRoute } from "next"
import { getAllBlogPosts, publicSlug } from "@/lib/blog"
import { ROUTES } from "@/lib/site-routes"

const BASE = "https://easyshifthq.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = Object.entries(ROUTES).map(
    ([path, route]) => ({
      url: path === "/" ? BASE : `${BASE}${path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  )

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => {
    const modified = post.updatedAt ?? post.publishedAt
    return {
      url: `${BASE}/blog/${publicSlug(post.slug)}`,
      lastModified: modified ? new Date(modified) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }
  })

  return [...staticEntries, ...blogEntries]
}
