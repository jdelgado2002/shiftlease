import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllBlogSlugs, getBlogPostBySlug, publicSlug } from "@/lib/blog"
import { BreadcrumbSchema, ORG } from "@/components/structured-data"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

type PageProps = Readonly<{
  params: Promise<{ slug: string }>
}>

/** Shared by generateMetadata and the page so both point at the same URL. */
function canonicalUrl(slug: string): string {
  return `https://easyshifthq.com/blog/${publicSlug(slug)}`
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: publicSlug(slug),
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  const { meta } = post
  const canonical = canonicalUrl(meta.slug)

  return {
    title: meta.seoTitle ?? meta.title,
    description: meta.description,
    authors: meta.author ? [{ name: meta.author }] : undefined,
    keywords: meta.tags,
    alternates: { canonical },
    // No images here. The co-located opengraph-image.tsx already renders a
    // card for every post; frontmatter ogImage pointed at /og/*.jpg files
    // that were never created.
    openGraph: {
      type: "article",
      siteName: "EasyShiftHQ",
      locale: "en_US",
      title: meta.title,
      description: meta.description,
      url: canonical,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: meta.author ? [meta.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()
  const { meta, content } = post
  const url = canonicalUrl(meta.slug)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: meta.author ? { "@type": "Person", name: meta.author } : undefined,
    publisher: ORG,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <article className="container max-w-3xl mx-auto">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
            }}
          />
          <BreadcrumbSchema
            items={[
              { name: "Home", url: "https://easyshifthq.com" },
              { name: "Blog", url: "https://easyshifthq.com/blog" },
              { name: meta.title, url },
            ]}
          />
          <header className="mb-12">
            {meta.publishedAt && (
              <p className="text-sm text-muted-foreground mb-4">
                {new Date(meta.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {meta.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {meta.description}
            </p>
            {meta.author && (
              <p className="mt-6 text-sm text-muted-foreground">
                By <strong className="text-foreground">{meta.author}</strong>
                {meta.authorTitle ? ` — ${meta.authorTitle}` : ""}
              </p>
            )}
          </header>

          <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Want this number delivered every morning instead of running it by
              hand?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/daily-pl-cheat-sheet"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Get the Daily P&amp;L Cheat Sheet
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium hover:border-primary/40"
              >
                More articles
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
