import type { ReactNode } from "react"
import Link from "next/link"
import { TrialCTA } from "@/components/trial-cta"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  FeaturePageSchema,
  BreadcrumbSchema,
} from "@/components/structured-data"

/**
 * The child-page counterpart to the homepage's operating loop.
 *
 * Where the homepage argues a cycle, a feature page is an index: a numbered
 * ledger of what the area actually does. Same type system, paper, and ink
 * bands — different structure, so the two don't read as the same page twice.
 */

interface FeatureItem {
  title: string
  description: string
  features: string[]
}

interface FeaturePageLayoutProps {
  badge: string
  title: string
  /** Rendered as the italic second clause of the headline. */
  subtitle: string
  description: string
  icon: ReactNode
  features: FeatureItem[]
  benefits: string[]
  ctaTitle: string
  ctaDescription: string
  schemaUrl: string
  /** Ledger mark in the file tab, e.g. "04". */
  mark?: string
  /** Real section heading for the capability index (was an h1→h3 skip). */
  indexTitle?: ReactNode
  indexLede?: string
  benefitsTitle?: ReactNode
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function FeaturePageLayout({
  badge,
  title,
  subtitle,
  description,
  icon,
  features,
  benefits,
  ctaTitle,
  ctaDescription,
  schemaUrl,
  mark = "—",
  indexTitle,
  indexLede,
  benefitsTitle,
}: FeaturePageLayoutProps) {
  // Flatten all feature bullet points for schema
  const allFeatures = features.flatMap((f) => f.features)
  const capabilityCount = allFeatures.length

  return (
    <div className="flex min-h-screen flex-col">
      <FeaturePageSchema
        name={badge}
        description={description}
        url={schemaUrl}
        features={allFeatures}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Features", url: "https://easyshifthq.com/#features" },
          { name: badge, url: schemaUrl },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* ── Hero: file tab, headline, and a mono contents rail ────── */}
        <section className="relative w-full overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-gridpaper opacity-70" />
          <div className="container relative py-20 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
              <div className="lg:col-span-7">
                {/* The file tab replaces the pill badge — same information,
                    read as a document rather than a chip. */}
                <div className="anim-rise inline-flex items-center gap-2.5 border-b-2 border-primary pb-2">
                  <span className="text-primary">{icon}</span>
                  <span className="label-mark text-foreground">{badge}</span>
                  <span className="label-mark text-muted-foreground/60">
                    / {mark}
                  </span>
                </div>

                <h1
                  className="font-display anim-rise mt-6 text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]"
                  style={{ animationDelay: "90ms" }}
                >
                  {title} <br />
                  <span className="italic text-primary">{subtitle}</span>
                </h1>

                <p
                  className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
                  style={{ animationDelay: "180ms" }}
                >
                  {description}
                </p>

                <div
                  className="anim-rise mt-9 flex flex-col gap-4 sm:flex-row"
                  style={{ animationDelay: "270ms" }}
                >
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
                    asChild
                  >
                    <TrialCTA>
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </TrialCTA>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-border bg-transparent px-8 text-base"
                    asChild
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Contents rail — doubles as in-page navigation. */}
              <aside
                className="anim-rise lg:col-span-4 lg:col-start-9 lg:mt-1"
                style={{ animationDelay: "360ms" }}
              >
                <div className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm">
                  <p className="label-mark text-muted-foreground">
                    In this section
                  </p>
                  <ol className="mt-4 divide-y divide-border">
                    {features.map((f, i) => (
                      <li key={f.title}>
                        <Link
                          href={`#${slug(f.title)}`}
                          className="group flex items-baseline gap-3 py-3.5 transition-colors hover:text-primary sm:py-2.5"
                        >
                          <span className="font-ledger text-[11px] text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[14px] leading-snug">
                            {f.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 border-t border-dashed border-rule pt-4 text-[13px] text-muted-foreground">
                    <span className="font-ledger text-foreground">
                      {capabilityCount}
                    </span>{" "}
                    capabilities in {badge.toLowerCase()}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── The index ─────────────────────────────────────────────── */}
        <section className="w-full border-b border-border py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="label-mark text-muted-foreground/70">The index</p>
                <h2 className="font-display mt-3 text-4xl leading-[1.06] md:text-5xl">
                  {indexTitle ?? (
                    <>
                      Everything {badge.toLowerCase()}{" "}
                      <span className="italic text-primary">
                        actually does.
                      </span>
                    </>
                  )}
                </h2>
                {indexLede ? (
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {indexLede}
                  </p>
                ) : null}
              </div>

              <div className="mt-14 border-t border-border">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    id={slug(feature.title)}
                    className="grid scroll-mt-24 gap-x-10 gap-y-4 border-b border-border py-9 md:grid-cols-12"
                  >
                    <div className="md:col-span-4">
                      <p className="label-mark text-muted-foreground/70">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-snug">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <ul className="grid content-start gap-x-8 gap-y-2.5 md:col-span-8 lg:grid-cols-2">
                      {feature.features.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] leading-relaxed"
                        >
                          <Check
                            className="mt-[5px] h-3.5 w-3.5 flex-shrink-0 text-[var(--under)]"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits, on ruled paper ──────────────────────────────── */}
        <section className="relative w-full overflow-hidden border-b border-border bg-muted/40 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-ruled opacity-40" />
          <div className="container relative">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display max-w-2xl text-3xl leading-[1.08] md:text-4xl">
                {benefitsTitle ?? (
                  <>
                    What it&apos;s worth{" "}
                    <span className="italic text-primary">on a Tuesday.</span>
                  </>
                )}
              </h2>
              <ul className="mt-10 grid gap-x-10 gap-y-px sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={benefit}
                    className="anim-rise flex items-start gap-3 border-t border-rule py-4"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="font-ledger mt-px text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA on the ink band ───────────────────────────────────── */}
        <section className="grain relative w-full overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-ruled opacity-[0.14]" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-4xl leading-[1.06] md:text-5xl">
                {ctaTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
                {ctaDescription}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-ink-foreground px-8 text-base text-ink hover:bg-ink-foreground/90"
                  asChild
                >
                  <TrialCTA>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </TrialCTA>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-ink-foreground/25 bg-transparent px-8 text-base text-ink-foreground hover:bg-ink-foreground/10"
                  asChild
                >
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
              <p className="label-mark mt-8 text-ink-foreground/45">
                Set up in minutes · No credit card · Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
