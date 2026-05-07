import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Comparisons",
  description:
    "Honest comparisons of EasyShiftHQ against other restaurant management platforms. Built for operators choosing between options.",
  alternates: {
    canonical: "https://easyshifthq.com/vs",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const comparisons = [
  {
    slug: "restaurant365",
    name: "Restaurant365",
    blurb:
      "Restaurant365 is built for enterprise restaurant groups. EasyShiftHQ is built for indie operators running 1–5 units. See where each one wins.",
  },
]

export default function VsIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Comparisons</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Choosing between tools? Read the honest version.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We&apos;ll tell you where the other tool is genuinely better. Credibility is more
                  useful than scoring points.
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/vs/${c.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div>
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        EasyShiftHQ vs {c.name}
                      </h2>
                      <p className="text-muted-foreground">{c.blurb}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
