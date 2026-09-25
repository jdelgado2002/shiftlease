import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const title = "Page not found"
const description = "That page moved or never existed."

// robots overrides the layout's "index, follow", which would otherwise sit
// next to the noindex Next adds on its own. The share block keeps a pasted
// dead link from previewing as the homepage; it has no url because a 404 has
// no address of its own.
export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    siteName: "EasyShiftHQ",
    locale: "en_US",
    title: `${title} | EasyShiftHQ`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | EasyShiftHQ`,
    description,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container max-w-2xl mx-auto py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
        >
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </div>
  )
}
