import type { Metadata } from "next"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Check,
  FileSpreadsheet,
  Printer,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrialCTA } from "@/components/trial-cta"
import { EmailCaptureForm } from "./email-capture-form"

export const metadata: Metadata = {
  title: "Daily P&L Cheat Sheet — Free Excel + PDF for Restaurant Operators",
  description:
    "A printable one-pager and matching Excel template that reads your day's profit in 5 minutes. Built for restaurant operators who don't want to wait on their accountant.",
  alternates: {
    canonical: "https://easyshifthq.com/tools/daily-pl-cheat-sheet",
  },
  openGraph: {
    title: "Daily P&L Cheat Sheet — Free for Restaurant Operators",
    description:
      "Print the one-pager. Fill the spreadsheet. Read your real profit in 5 minutes a day.",
    url: "https://easyshifthq.com/tools/daily-pl-cheat-sheet",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily P&L Cheat Sheet — Free for Restaurant Operators",
    description:
      "Print the one-pager. Fill the spreadsheet. Read your real profit in 5 minutes a day.",
  },
}

const insideCards = [
  {
    icon: FileSpreadsheet,
    title: "Excel cheat sheet",
    body: "Pre-built rows for sales, COGS, labor, and prime cost — drop in last night's numbers and the margins fill themselves in.",
  },
  {
    icon: BookOpen,
    title: "1-page printable PDF",
    body: "The exact ratios you should hit (food cost, labor %, prime cost) with the math written out so any manager can run it.",
  },
  {
    icon: BarChart3,
    title: "Daily-read framework",
    body: "What to look at first, what's a red flag, and the one number that tells you if today actually made money.",
  },
] as const

const previewBullets = [
  "Sales recap (net of comps, voids, and discounts) — the only top line that matters",
  "Cost of Goods Sold with a target food cost % and the variance to flag",
  "Labor cost with a target labor %, plus the line where you write in regular vs OT split",
  "Prime cost (COGS + Labor) — the single number that decides if today was profitable",
  "Cash + tip reconciliation row so the deposit ties out before close",
  "Notes block for one-line root cause when a number is off",
]

const whoItsForBullets = [
  "Owner-operators running 1–5 locations who can't wait until the 15th to see last month's P&L",
  "GMs and chefs who own the floor but get a flat \"how'd we do\" question every morning",
  "Multi-unit operators training new managers on how to actually read the numbers",
]

export default function DailyPLCheatSheetPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section id="top" className="border-b border-border bg-gradient-to-b from-card/40 to-transparent">
          <div className="container py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-sm font-medium text-primary mb-3">
                  Free for restaurant operators
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
                  Read your restaurant&apos;s P&amp;L every day. In 5 minutes.
                </h1>
                <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl">
                  A printable one-pager plus a ready-to-fill Excel template that
                  turns last night&apos;s POS, labor, and invoices into a
                  clean profit number — without an accountant.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span>Excel cheat sheet + 1-page printable PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span>Targets, formulas, and the daily-read framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span>Use it tonight at close. No login required.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:pt-2">
                <EmailCaptureForm />
              </div>
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="border-b border-border">
          <div className="container py-16 md:py-20">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What&apos;s inside
              </h2>
              <p className="mt-3 text-muted-foreground">
                Two files, one job: turn last night&apos;s numbers into a real
                answer about whether the day actually made money.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {insideCards.map((card) => {
                const Icon = card.icon
                return (
                  <Card key={card.title} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.body}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="border-b border-border bg-card/40">
          <div className="container py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  A look at the cheat sheet
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Every row is something you can actually fill in tonight from
                  your POS report, schedule, and stack of invoices. Nothing
                  fancy — just the numbers that matter.
                </p>

                <ul className="mt-6 space-y-3">
                  {previewBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="h-4 w-4 mt-1 text-emerald-500 shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base text-foreground/90">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  <span>Daily P&amp;L — sample</span>
                </div>

                <div className="space-y-3 text-sm">
                  <SampleRow label="Net Sales" value="$8,420" />
                  <SampleRow label="COGS" value="$2,690" sub="32.0% • target 30%" tone="warn" />
                  <SampleRow label="Labor" value="$2,240" sub="26.6% • target 28%" tone="ok" />
                  <div className="border-t border-border pt-3">
                    <SampleRow label="Prime Cost" value="$4,930" sub="58.5% • target 60%" tone="ok" emphasis />
                  </div>
                  <div className="border-t border-border pt-3">
                    <SampleRow label="Daily Profit" value="$1,310" emphasis />
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Sample numbers. Your file ships blank — paste your day in and
                  the percentages calculate themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-b border-border">
          <div className="container py-16 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Who this is for
              </h2>
              <p className="mt-4 text-muted-foreground">
                If you&apos;ve ever closed a busy night and had no idea if you
                actually made money, this is built for you. It&apos;s the same
                framework restaurant operators use to stop running on
                end-of-month surprises.
              </p>

              <ul className="mt-6 space-y-3">
                {whoItsForBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm md:text-base text-foreground/90">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA repeat */}
        <section>
          <div className="container py-16 md:py-24">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Grab the files. Read tonight&apos;s P&amp;L tomorrow.
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Drop your email and we&apos;ll send the Excel cheat sheet
                    and the printable PDF straight to your inbox.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                      <Link href="#top" aria-label="Scroll to email form">
                        Send me the cheat sheet
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <TrialCTA>
                        Or try EasyShiftHQ free
                      </TrialCTA>
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>
                    Want this number delivered to your phone every morning
                    instead of running it by hand? That&apos;s exactly what
                    EasyShiftHQ does — it pulls your POS, labor, and invoices
                    into one daily P&amp;L automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function SampleRow({
  label,
  value,
  sub,
  tone,
  emphasis,
}: {
  label: string
  value: string
  sub?: string
  tone?: "ok" | "warn"
  emphasis?: boolean
}) {
  const toneClass =
    tone === "ok"
      ? "text-emerald-600 dark:text-emerald-400"
      : tone === "warn"
        ? "text-amber-600 dark:text-amber-400"
        : "text-muted-foreground"

  return (
    <div className="flex items-baseline justify-between gap-4">
      <div>
        <p className={emphasis ? "font-semibold" : "font-medium"}>{label}</p>
        {sub && <p className={`text-xs ${toneClass}`}>{sub}</p>}
      </div>
      <p className={emphasis ? "text-lg font-semibold" : "text-base"}>{value}</p>
    </div>
  )
}
