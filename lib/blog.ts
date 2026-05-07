import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export interface BlogPostMeta {
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  authorTitle?: string
  tags?: string[]
  ogImage?: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")
const DATE_PREFIX_RE = /^\d{4}-\d{2}-\d{2}-/

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getBlogPostBySlug(slug: string): {
  meta: BlogPostMeta
  content: string
  filename: string
} | null {
  if (!fs.existsSync(BLOG_DIR)) return null

  // Match either "<slug>.mdx" or "<YYYY-MM-DD>-<slug>.mdx"
  const allFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))
  const filename = allFiles.find((f) => {
    const basename = f.replace(/\.mdx$/, "")
    const datelessSlug = basename.replace(DATE_PREFIX_RE, "")
    return datelessSlug === slug || basename === slug
  })
  if (!filename) return null

  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8")
  const { data, content } = matter(raw)
  const meta = {
    ...data,
    slug: data.slug || filename.replace(/\.mdx$/, "").replace(DATE_PREFIX_RE, ""),
    publishedAt:
      typeof data.publishedAt === "string"
        ? data.publishedAt
        : data.publishedAt instanceof Date
          ? data.publishedAt.toISOString().slice(0, 10)
          : "",
  } as BlogPostMeta
  return { meta, content, filename }
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return getAllBlogSlugs()
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map((p) => p.meta)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
}

/** Return the public-facing URL slug (no date prefix). */
export function publicSlug(slug: string): string {
  return slug.replace(DATE_PREFIX_RE, "")
}
