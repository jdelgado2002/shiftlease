import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllBlogPosts, publicSlug } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Restaurant operations insights",
  description:
    "Articles on restaurant P&L, prime cost, labor scheduling, inventory shrinkage, and the daily ritual indie operators use to run profitable shops.",
  alternates: { canonical: "https://easyshifthq.com/blog" },
  openGraph: {
    type: "website",
    title: "Restaurant operations insights | EasyShiftHQ",
    description:
      "How to read your numbers, run a tighter shop, and stop finding out two weeks late.",
    url: "https://easyshifthq.com/blog",
  },
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              For operators, by an operator
            </h1>
            <p className="text-xl text-muted-foreground">
              How to read your numbers, run a tighter shop, and stop finding
              out two weeks late.
            </p>
          </div>

          <div className="space-y-8">
            {posts.length === 0 && (
              <p className="text-muted-foreground text-center py-12">
                More articles coming soon.
              </p>
            )}
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${publicSlug(post.slug)}`}
                className="group block rounded-2xl border border-border p-8 hover:border-primary/40 transition-colors"
              >
                <p className="text-xs text-muted-foreground mb-2">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <h2 className="text-2xl font-bold mb-3 transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.description}</p>
                <p className="mt-4 text-sm text-primary font-medium">Read →</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
