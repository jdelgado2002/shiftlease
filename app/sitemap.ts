import { MetadataRoute } from "next"
import { getAllBlogPosts, publicSlug } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easyshifthq.com"
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/why-inventory-matters`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/why-operations-matter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/financial-management`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/inventory-management`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/recipe-menu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/scheduling-payroll`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/restaurant365`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/daily-pl-cheat-sheet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ]

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${publicSlug(post.slug)}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
