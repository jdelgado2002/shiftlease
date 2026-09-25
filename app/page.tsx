import {
  ArrowRight,
  Check,
  PackageSearch,
  ChefHat,
  Star,
  Zap,
  Inbox,
  Newspaper,
} from "lucide-react"
import Link from "next/link"
import { TrialCTA } from "@/components/trial-cta"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WaitlistForm } from "@/components/waitlist-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OperatingLoop } from "@/components/home/operating-loop"
import { StationPanels } from "@/components/home/station-panels"
import { OrganizationSchema } from "@/components/structured-data"

import type { Metadata } from "next"

// The root layout no longer declares a canonical, so the homepage declares
// its own like every other page does.
export const metadata: Metadata = {
  alternates: { canonical: "https://easyshifthq.com" },
}

/**
 * The rest of the platform. These are real, shipped, and linked — they are
 * simply not the daily loop, so they sit below it instead of in front of it.
 */
const alsoInTheBox = [
  {
    icon: PackageSearch,
    title: "Inventory & Audits",
    description:
      "Live stock levels, counts, purchase orders, and variance that catches waste and shrink.",
    href: "/features/inventory-management",
  },
  {
    icon: ChefHat,
    title: "Recipes & Menu Costing",
    description:
      "Plate costs that move with supplier prices, prep recipes, and menu profitability.",
    href: "/features/recipe-menu",
  },
  {
    icon: Star,
    title: "Guest Reviews",
    description:
      "A QR funnel that sends happy guests to Google and unhappy guests straight to you.",
    href: "/features/reviews",
  },
  {
    icon: Zap,
    title: "POS & Multi-Location",
    description:
      "Square, Toast, Clover, Shift4, Focus, and Revel — with roll-up reporting across locations.",
    href: "/features/integrations",
  },
  {
    icon: Inbox,
    title: "Ops Inbox",
    description:
      "One feed for anomalies, reconciliation gaps, and anything left uncoded. Work it to zero.",
    href: "/features/financial-management",
  },
  {
    icon: Newspaper,
    title: "Weekly Brief",
    description:
      "An AI-written recap of what moved and why, emailed to you. No dashboard required.",
    href: "/features/financial-management",
  },
]

/** A receipt-tape line: label on the left, figure on the right. */
function TapeLine({
  label,
  value,
  tone = "default",
  delay = 0,
}: {
  label: string
  value: string
  tone?: "default" | "under" | "watch" | "muted"
  delay?: number
}) {
  const toneClass = {
    default: "text-foreground",
    under: "text-[var(--under)]",
    watch: "text-[var(--watch)]",
    muted: "text-muted-foreground",
  }[tone]

  return (
    <div
      className="anim-rise flex items-baseline justify-between gap-4"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-ledger text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className={`font-ledger text-[15px] font-medium ${toneClass}`}>
        {value}
      </span>
    </div>
  )
}

function TapeRule() {
  return <div className="my-3 border-t border-dashed border-rule" />
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <OrganizationSchema />
      <Header />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-gridpaper opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

          <div className="container relative py-20 md:py-28 lg:py-36">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-12">
              {/* Copy */}
              <div className="lg:col-span-7">
                <p className="anim-rise label-mark text-primary">
                  Restaurant operations · closed loop
                </p>

                <h1
                  className="font-display anim-rise mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.5rem]"
                  style={{ animationDelay: "80ms" }}
                >
                  From the shift{" "}
                  <br />
                  you schedule{" "}
                  <br />
                  <span className="italic text-primary">
                    to the check that clears.
                  </span>
                </h1>

                <p
                  className="anim-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                  style={{ animationDelay: "180ms" }}
                >
                  You commit your biggest controllable cost on Tuesday when you
                  build the schedule. You find out what it cost three weeks
                  later in a bank statement. EasyShiftHQ closes that gap — labor
                  dollars while you schedule, a budget that knows your
                  break-even, and every transaction named on the way out.
                </p>

                <div
                  className="anim-rise mt-10 flex flex-col gap-4 sm:flex-row"
                  style={{ animationDelay: "260ms" }}
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
                    <Link href="#the-loop">See the loop</Link>
                  </Button>
                </div>

                <p
                  className="anim-rise font-ledger mt-6 text-[12px] text-muted-foreground"
                  style={{ animationDelay: "320ms" }}
                >
                  No credit card · 14 days free · Self-serve setup
                </p>
              </div>

              {/* Receipt tape — all four stations, one object. */}
              <div className="lg:col-span-5">
                <div
                  className="anim-rise relative mx-auto max-w-[360px] rotate-[-1.2deg] lg:ml-auto lg:mr-0"
                  style={{ animationDelay: "220ms" }}
                >
                  {/* torn top edge */}
                  <div
                    aria-hidden
                    className="h-2 bg-card"
                    style={{
                      clipPath:
                        "polygon(0 100%, 0 40%, 4% 75%, 8% 30%, 12% 70%, 16% 25%, 20% 72%, 24% 35%, 28% 68%, 32% 28%, 36% 74%, 40% 32%, 44% 70%, 48% 26%, 52% 73%, 56% 34%, 60% 66%, 64% 29%, 68% 71%, 72% 33%, 76% 69%, 80% 27%, 84% 74%, 88% 31%, 92% 67%, 96% 36%, 100% 45%, 100% 100%)",
                    }}
                  />

                  <div className="grain relative overflow-hidden bg-card px-7 pb-8 pt-6 shadow-[0_26px_60px_-30px_rgba(0,0,0,0.5)]">
                    <div className="relative z-10">
                      <div className="text-center">
                        <p className="font-ledger text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                          EasyShiftHQ
                        </p>
                        <p className="font-ledger mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                          Week of Mar 10 · San Antonio
                        </p>
                      </div>

                      <TapeRule />

                      <p className="label-mark mb-2.5 text-muted-foreground/70">
                        01 · Schedule
                      </p>
                      <div className="space-y-1.5">
                        <TapeLine
                          label="Scheduled labor"
                          value="$4,182"
                          delay={340}
                        />
                        <TapeLine
                          label="Labor budget"
                          value="$5,100"
                          tone="muted"
                          delay={370}
                        />
                        <TapeLine
                          label="Remaining"
                          value="$918"
                          tone="under"
                          delay={400}
                        />
                      </div>

                      <TapeRule />

                      <p className="label-mark mb-2.5 text-muted-foreground/70">
                        02 · Labor
                      </p>
                      <div className="space-y-1.5">
                        <TapeLine
                          label="Labor % of sales"
                          value="28.4%"
                          delay={440}
                        />
                        <TapeLine
                          label="Your target"
                          value="27.0%"
                          tone="muted"
                          delay={470}
                        />
                        <TapeLine
                          label="Rev / labor hour"
                          value="$47.20"
                          delay={500}
                        />
                      </div>

                      <TapeRule />

                      <p className="label-mark mb-2.5 text-muted-foreground/70">
                        03 · Budget
                      </p>
                      <div className="space-y-1.5">
                        <TapeLine
                          label="Break-even"
                          value="Day 19 / 31"
                          tone="under"
                          delay={540}
                        />
                        <TapeLine
                          label="Projected net"
                          value="+$9,140"
                          tone="under"
                          delay={570}
                        />
                        <TapeLine
                          label="vs. target"
                          value="−$860"
                          tone="watch"
                          delay={600}
                        />
                      </div>

                      <TapeRule />

                      <p className="label-mark mb-2.5 text-muted-foreground/70">
                        04 · Money
                      </p>
                      <div className="space-y-1.5">
                        <TapeLine
                          label="Checks printed"
                          value="4"
                          delay={640}
                        />
                        <TapeLine
                          label="Uncategorized"
                          value="0"
                          tone="under"
                          delay={670}
                        />
                      </div>

                      <TapeRule />

                      <p
                        className="anim-rise font-ledger text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        style={{ animationDelay: "720ms" }}
                      >
                        Nothing here waited on an accountant
                      </p>
                    </div>
                  </div>

                  {/* torn bottom edge */}
                  <div
                    aria-hidden
                    className="h-2 bg-card"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 55%, 96% 64%, 92% 33%, 88% 69%, 84% 26%, 80% 73%, 76% 31%, 72% 67%, 68% 29%, 64% 71%, 60% 34%, 56% 66%, 52% 27%, 48% 74%, 44% 30%, 40% 68%, 36% 26%, 32% 72%, 28% 32%, 24% 65%, 20% 28%, 16% 75%, 12% 30%, 8% 70%, 4% 25%, 0 60%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ledger strip ─────────────────────────────────── */}
        <section className="w-full border-b border-border bg-card">
          <div className="container">
            <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
              {[
                { figure: "1", label: "app for the office and the floor" },
                { figure: "4", label: "screens in the weekly loop" },
                { figure: "0", label: "numbers re-keyed between them" },
                { figure: "6", label: "POS systems it reads from" },
              ].map((item) => (
                <div key={item.label} className="px-5 py-9 text-center">
                  <p className="font-ledger text-3xl font-medium text-primary md:text-4xl">
                    {item.figure}
                  </p>
                  <p className="mx-auto mt-2 max-w-[16ch] text-sm leading-snug text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The gap ──────────────────────────────────────── */}
        <section className="w-full py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="label-mark text-primary">The gap</p>
                <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                  Your money decisions and your{" "}
                  <br />
                  money data live{" "}
                  <span className="italic text-muted-foreground">
                    three weeks apart.
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
                {[
                  {
                    n: "01",
                    head: "The schedule is written blind.",
                    body: "You place shifts in one app and hope the labor percentage lands. The tool that knows your sales isn't the tool that knows your roster, so the two never meet until payroll runs.",
                  },
                  {
                    n: "02",
                    head: "The budget is a document, not a signal.",
                    body: "A spreadsheet built in January can't tell you on March 12 that you're trending $860 short. By the time the month closes, the only thing left to do is explain it.",
                  },
                  {
                    n: "03",
                    head: "The bank feed is a backlog.",
                    body: "Hundreds of uncoded transactions, checks written with no memo anyone remembers, and a quarterly scramble to hand your accountant something honest.",
                  },
                ].map((item) => (
                  <div key={item.n} className="bg-card p-8 md:p-9">
                    <span className="font-ledger text-4xl text-muted-foreground/25">
                      {item.n}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold leading-snug">
                      {item.head}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-14 max-w-2xl border-l-2 border-primary pl-6">
                <p className="font-display text-2xl leading-snug md:text-3xl">
                  You don&apos;t need another dashboard. You need the number to
                  show up{" "}
                  <span className="italic text-primary">
                    at the moment you&apos;re deciding.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The loop ─────────────────────────────────────── */}
        <OperatingLoop />

        {/* ── Station deep-dives ───────────────────────────── */}
        <StationPanels />

        {/* ── Ink band ─────────────────────────────────────── */}
        <section className="grain relative w-full overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-ruled opacity-[0.14]" />
          <div className="container relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="label-mark text-primary">Why it compounds</p>
              <h2 className="font-display mt-5 text-4xl leading-[1.07] md:text-6xl">
                One target. Four screens.{" "}
                <br />
                <span className="italic text-ink-foreground/60">
                  Nothing typed twice.
                </span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/70 md:text-xl">
                Set a labor budget once and the scheduler checks against it. The
                clock-ins that feed labor percentage are the same ones that feed
                payroll. The check you print is the expense in your P&amp;L and
                the line on your bank feed. Each screen makes the next one truer
                — which is why the loop gets more valuable the longer you run
                it.
              </p>

              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Budget", "sets the bar the schedule checks"],
                  ["Schedule", "commits the hours payroll pays"],
                  ["Clock-ins", "prove the labor % against sales"],
                  ["Bank", "confirms what actually left"],
                ].map(([term, detail]) => (
                  <div key={term} className="bg-ink px-6 py-7 text-left">
                    <p className="font-ledger text-[13px] font-medium text-primary">
                      {term}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-ink-foreground/65">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────── */}
        <section
          id="how-it-works"
          className="w-full border-b border-border py-24 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="label-mark text-primary">How it works</p>
                <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
                  In the loop by Friday.
                </h2>
              </div>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
                {[
                  {
                    n: "1",
                    head: "Connect POS and bank",
                    body: "Square, Toast, Clover, Shift4, Focus, or Revel on one side; your accounts through Stripe Financial Connections on the other. Both are OAuth — you sign in, you are done.",
                  },
                  {
                    n: "2",
                    head: "Set two numbers",
                    body: "Your labor target and your fixed costs. That's enough for the scheduler to check against a budget and for break-even to calculate.",
                  },
                  {
                    n: "3",
                    head: "Build next week's schedule",
                    body: "The loop starts on the first shift you drag. Everything downstream — labor %, run rate, categorized spend — fills in from there.",
                  },
                ].map((step) => (
                  <div key={step.n} className="bg-card p-8 md:p-9">
                    <div className="font-ledger flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-lg text-background">
                      {step.n}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{step.head}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
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
              </div>
            </div>
          </div>
        </section>

        {/* ── Also in the box ──────────────────────────────── */}
        <section
          id="features"
          className="w-full border-b border-border bg-muted/40 py-24 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="label-mark text-primary">Also in the box</p>
                <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
                  The loop is the habit.{" "}
                  <br />
                  <span className="italic text-muted-foreground">
                    The rest is still yours.
                  </span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Inventory, recipe costing, reviews, and POS integrations ship
                  in the same platform and feed the same P&amp;L. Turn them on
                  when you&apos;re ready — the loop works without them.
                </p>
              </div>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
                {alsoInTheBox.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group bg-card p-7 transition-colors hover:bg-card/60"
                  >
                    <item.icon
                      className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden
                    />
                    <h3 className="mt-4 text-base font-semibold transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-x-8 sm:mt-10 sm:gap-y-3">
                <Link
                  href="/why-operations-matter"
                  className="group inline-flex items-center gap-2 py-3 text-sm font-semibold text-primary md:py-0"
                >
                  Why operations matter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/why-inventory-matters"
                  className="group inline-flex items-center gap-2 py-3 text-sm font-semibold text-primary md:py-0"
                >
                  Why inventory matters
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────── */}
        <section
          id="pricing"
          className="w-full border-b border-border py-24 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="label-mark text-primary">Simple pricing</p>
                  <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
                    Three plans. No contracts.
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground">
                    Per location, per month. Free 14-day trial, no credit card.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="divide-y divide-dashed divide-rule rounded-2xl border border-border bg-card px-6">
                    {[
                      ["Starter", "$99"],
                      ["Growth", "$199"],
                      ["Pro", "$299"],
                    ].map(([plan, price]) => (
                      <div
                        key={plan}
                        className="flex items-baseline justify-between py-4"
                      >
                        <span className="text-[15px] font-medium">{plan}</span>
                        <span className="font-ledger text-lg">{price}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="mt-6 h-14 w-full rounded-full text-base"
                    asChild
                  >
                    <Link href="/pricing">
                      See full pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Lead magnet ──────────────────────────────────── */}
        <section className="w-full border-b border-border bg-card">
          <div className="container py-14">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
              <div className="shrink-0">
                <p className="label-mark text-primary">Free for operators</p>
                <h2 className="font-display mt-2 text-2xl md:text-3xl">
                  Read your P&amp;L every day. In 5 minutes.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:flex-1">
                The printable Daily P&amp;L Cheat Sheet plus the matching Excel
                — built for operators who don&apos;t want to wait on their
                accountant.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full md:shrink-0"
                asChild
              >
                <Link href="/tools/daily-pl-cheat-sheet">
                  Get the cheat sheet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Founder ──────────────────────────────────────── */}
        <section className="w-full border-b border-border py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <p className="label-mark text-primary">From the founder</p>
              <blockquote className="font-display mt-6 text-3xl leading-[1.18] md:text-4xl">
                &ldquo;I built the loop because I was living the gap. I run a
                Cold Stone Creamery and Wetzel&apos;s Pretzels co-brand in San
                Antonio — every feature here has to survive a weekend at my
                store before it ships to you.{" "}
                <span className="italic text-primary">
                  If it can&apos;t, it doesn&apos;t.
                </span>
                &rdquo;
              </blockquote>
              <p className="font-ledger mt-8 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                Founder · EasyShiftHQ
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          id="contact"
          className="grain relative w-full overflow-hidden bg-ink py-24 text-ink-foreground md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-ruled opacity-[0.14]" />
          <div className="container relative">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl leading-[1.06] md:text-6xl">
                  Close the loop.{" "}
                  <br />
                  <span className="italic text-ink-foreground/60">
                    Starting with next week.
                  </span>
                </h2>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-foreground/70">
                  Schedule with the dollar on screen. Know your labor percentage
                  before payday. Watch break-even arrive. Hand your accountant
                  books that are already clean.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    "Free 14 days",
                    "No credit card",
                    "Cancel anytime",
                    "Guided setup",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Check className="h-3.5 w-3.5 text-primary-foreground" />
                      </span>
                      <p className="text-[15px]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-9">
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
                    asChild
                  >
                    <TrialCTA>
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </TrialCTA>
                  </Button>
                </div>
              </div>

              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle>Questions? We&apos;re here.</CardTitle>
                  <CardDescription>We reply within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <WaitlistForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
