import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllBlogSlugs, getBlogPostBySlug, publicSlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

type PageProps = Readonly<{
  params: Promise<{ slug: string }>
}>

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
  const canonical = `https://easyshifthq.com/blog/${publicSlug(meta.slug)}`

  return {
    title: meta.title,
    description: meta.description,
    authors: meta.author ? [{ name: meta.author }] : undefined,
    keywords: meta.tags,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: canonical,
      publishedTime: meta.publishedAt,
      authors: meta.author ? [meta.author] : undefined,
      images: meta.ogImage
        ? [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage] : undefined,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()
  const { meta, content } = post

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    author: meta.author
      ? { "@type": "Person", name: meta.author }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "EasyShiftHQ",
      url: "https://easyshifthq.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://easyshifthq.com/blog/${publicSlug(meta.slug)}`,
    },
    image: meta.ogImage
      ? `https://easyshifthq.com${meta.ogImage}`
      : undefined,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <article className="container px-4 md:px-6 max-w-3xl mx-auto">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
            }}
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

          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
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
              <a
                href="/tools/daily-pl-cheat-sheet"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Get the Daily P&amp;L Cheat Sheet
              </a>
              <a
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium hover:border-primary/40"
              >
                More articles
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
