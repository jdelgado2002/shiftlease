import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  BreadcrumbSchema,
  FeaturePageSchema,
} from "@/components/structured-data"
import {
  BoardScreen,
  ClockScreen,
  PayScreen,
  TimecardScreen,
  TipsScreen,
} from "@/components/portal/screens"
import { shareMetadata } from "@/lib/share-metadata"

const description =
  "The app your staff actually opens: open-shift marketplace, shift trades, verified clock-in, tip splits, and pay-period earnings on their phone."

export const metadata: Metadata = {
  title: "Employee Portal: Shifts, Clock-In & Tips",
  description,
  keywords: [
    "restaurant employee app",
    "open shift marketplace",
    "shift trade app",
    "employee time clock app",
    "tip pool transparency",
    "employee self service restaurant",
  ],
  alternates: { canonical: "https://easyshifthq.com/features/employee-portal" },
  ...shareMetadata(
    "/features/employee-portal",
    "Employee Portal: Shifts, Clock-In & Tips | EasyShiftHQ",
    description,
  ),
}

/** The five beats of a week, staff-side, each paired with its operator consequence. */
const beats = [
  {
    stamp: "Wed 3:41p",
    kicker: "The marketplace",
    title: "A shift comes open. Someone takes it.",
    body: "Open shifts and coworker trades land in one feed with the position, the time, and how many spots are left. Overlaps with a shift they already have are blocked outright, not warned about — so nobody claims their way into a double.",
    yours:
      "Coverage happens in the app instead of the group chat. Claims can auto-approve or wait for your sign-off, and every trade routes through you before the schedule changes.",
    screen: <BoardScreen />,
    side: "right" as const,
  },
  {
    stamp: "Fri 3:58p",
    kicker: "The clock",
    title: "One button, and the punch carries proof.",
    body: "Clock in or out from the phone, or from the kiosk with a PIN they set themselves. A selfie and a location check ride along with the punch — the app explains why, in plain language, on the screen where it asks.",
    yours:
      "Geofencing is yours to set: off, warn, or block, with your own radius. Out-of-range clock-ins get flagged instead of quietly counted, and the hours that reach payroll are the ones you can stand behind.",
    screen: <ClockScreen />,
    side: "left" as const,
  },
  {
    stamp: "Fri 9:12p",
    kicker: "The tip pool",
    title: "The split shows its work.",
    body: "Once you approve a pool, everyone on it sees their share and the arithmetic behind it: their hours, the team's hours, their percentage, the pool total. They never see another person's name or amount.",
    yours:
      "The payday argument arrives as a dated dispute with a reason attached — missing hours, wrong amount, wrong date — instead of a cornering at the pass.",
    screen: <TipsScreen />,
    side: "right" as const,
  },
  {
    stamp: "Sat 8:20a",
    kicker: "The timecard",
    title: "They check their hours before you do.",
    body: "Net hours after breaks, regular against overtime, and every individual punch for every day of the period. Read-only by design: corrections route to you, so nobody edits their way to a bigger week.",
    yours:
      "Discrepancies surface on Saturday instead of during the payroll run, and they arrive already narrowed to a day and a punch.",
    screen: <TimecardScreen />,
    side: "left" as const,
  },
  {
    stamp: "Mon 7:05a",
    kicker: "Pay",
    title: "The question you get asked most, already answered.",
    body: "Hours, gross wages, tips, and the total for the period — built from their own punches, labeled as an estimate, with incomplete shifts called out so they can come tell you about them.",
    yours:
      "Fewer interruptions, and the one interruption you do get is useful: a named person pointing at a shift that never got closed out.",
    screen: <PayScreen />,
    side: "right" as const,
  },
]

/** Straight from the portal's own "More" screen — these are the real labels. */
const inventory = [
  {
    tab: "Schedule",
    detail: "Their week, published times, and who's on with them",
  },
  { tab: "Pay", detail: "Earnings for the pay period, wages and tips" },
  { tab: "Clock", detail: "Clock in and out, with today's punches listed" },
  { tab: "Timecard", detail: "Hours worked this period", sub: true },
  { tab: "Shift Marketplace", detail: "Pick up available shifts", sub: true },
  { tab: "Tips", detail: "Tip history & breakdown", sub: true },
  { tab: "Requests", detail: "Time off & availability", sub: true },
  { tab: "Kiosk PIN", detail: "Manage your clock-in PIN", sub: true },
]

/** Every one of these is a deliberate limit in the shipped app, not a gap. */
const guardrails = [
  {
    term: "They can\u2019t edit a punch.",
    detail:
      "The timecard is read-only. A wrong punch becomes a message to you, not a correction they make themselves.",
  },
  {
    term: "They can\u2019t see anyone else\u2019s money.",
    detail:
      "Tip splits show the pool total and their own percentage. Other people\u2019s names and amounts never appear.",
  },
  {
    term: "They can\u2019t take a shift you didn\u2019t offer.",
    detail:
      "Trades post to the marketplace or to one named coworker, and the transfer only happens after a manager approves it.",
  },
  {
    term: "They can\u2019t clock in from home.",
    detail:
      "Set the geofence to block and an out-of-range punch is refused. Set it to warn and it goes through flagged, with the distance recorded.",
  },
  {
    term: "They can\u2019t reuse a PIN you reset.",
    detail:
      "Kiosk PINs are hashed, never stored readable, and a manager-forced reset shows on their phone as temporary until they change it.",
  },
]

export default function EmployeePortalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <FeaturePageSchema
        name="Employee Portal"
        description="A mobile portal for restaurant staff: open-shift marketplace, shift trades with manager approval, verified time clock, tip-split transparency, timecards, and pay-period earnings."
        url="https://easyshifthq.com/features/employee-portal"
        features={[
          "Open-shift marketplace and shift trades",
          "Manager-approved claims and transfers",
          "Verified time clock with photo and location",
          "Self-service kiosk PIN",
          "Tip-split transparency",
          "Timecards and pay-period earnings",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Features", url: "https://easyshifthq.com/#features" },
          {
            name: "Employee Portal",
            url: "https://easyshifthq.com/features/employee-portal",
          },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* ───────────────────────── hero ─────────────────────────
          The only dark hero on the site, and deliberately so: the staff
          side runs at night, on a phone, in a dim building. The inversion
          announces that this page is not about the office. */}
        <section className="grain relative w-full overflow-hidden bg-ink pb-24 pt-16 text-ink-foreground md:pb-32 md:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-gridpaper opacity-[0.05]" />
          <div
            className="pointer-events-none absolute -right-[10%] top-[-20%] h-[560px] w-[560px] rounded-full opacity-25 blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            }}
          />

          <div className="container relative">
            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="anim-rise inline-flex items-center gap-2.5 border-b-2 border-primary pb-2">
                  <Smartphone className="h-4 w-4 text-primary" aria-hidden />
                  <span className="label-mark text-ink-foreground">
                    Employee portal
                  </span>
                  <span className="label-mark text-ink-foreground/40">
                    / 01b
                  </span>
                </div>

                <h1
                  className="font-display anim-rise mt-6 text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]"
                  style={{ animationDelay: "90ms" }}
                >
                  Someone picks up{" "}
                  <br />
                  the shift{" "}
                  <span className="italic text-primary">
                    while you&rsquo;re{" "}
                    <br />
                    still on the line.
                  </span>
                </h1>

                <p
                  className="anim-rise mt-7 max-w-lg text-lg leading-relaxed text-ink-foreground/70"
                  style={{ animationDelay: "180ms" }}
                >
                  Every person on your payroll gets a portal on their own phone
                  — the open-shift marketplace, the clock, their timecard, their
                  tip splits, their pay. It is the most-opened part of
                  EasyShiftHQ by a wide margin, and it is the reason the numbers
                  on your side are measured instead of estimated.
                </p>

                <div
                  className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row"
                  style={{ animationDelay: "270ms" }}
                >
                  <Button asChild size="lg" className="h-14 px-7 text-base">
                    <Link href="/#waitlist">
                      Get early access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-ink-foreground/25 bg-transparent px-7 text-base text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
                  >
                    <Link href="/features/scheduling-payroll">
                      See the manager side
                    </Link>
                  </Button>
                </div>
              </div>

              <div
                className="anim-rise flex justify-center lg:col-span-5 lg:col-start-8 lg:justify-end"
                style={{ animationDelay: "360ms" }}
              >
                <BoardScreen tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── what's actually in it ───────────────────── */}
        <section className="w-full border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="label-mark text-muted-foreground/70">
                  Contents <span className="mx-1 text-rule">/</span> everything
                  they can open
                </p>
                <h2 className="font-display mt-4 text-4xl leading-[1.06] md:text-5xl">
                  Four tabs.{" "}
                  <br />
                  <span className="italic text-primary">No training day.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  The portal is mobile-first and deliberately small. A
                  dishwasher should be able to claim a shift on the bus without
                  anyone walking them through it, which is why there is no
                  dashboard, no onboarding flow, and nothing on a screen that
                  isn&rsquo;t about their own week.
                </p>
              </div>

              <dl className="lg:col-span-6 lg:col-start-7">
                {inventory.map((row, i) => (
                  <div
                    key={row.tab}
                    className="anim-rise flex items-baseline gap-5 border-b border-border py-3.5"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <span className="label-mark w-6 shrink-0 text-muted-foreground/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <dt
                      className={`w-[9.5rem] shrink-0 text-[15px] font-semibold ${
                        row.sub ? "text-muted-foreground" : ""
                      }`}
                    >
                      {row.tab}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-muted-foreground">
                      {row.detail}
                    </dd>
                  </div>
                ))}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70">
                  The last five sit under{" "}
                  <span className="font-medium">More</span>. Managers get the
                  full desktop app; staff get this.
                </p>
              </dl>
            </div>
          </div>
        </section>

        {/* ───────────────────────── the week ─────────────────────────
          The page's signature device: a hairline time rail down the left,
          five beats in order, each staff action paired with what it does
          to the operator's side. That pairing is the actual argument. */}
        <section className="w-full border-b border-border py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="label-mark text-muted-foreground/70">
                  One week <span className="mx-1 text-rule">/</span> both sides
                  of it
                </p>
                <h2 className="font-display mt-4 text-4xl leading-[1.06] md:text-5xl">
                  What they do on the phone{" "}
                  <br />
                  <span className="italic text-primary">
                    is what lands on your desk.
                  </span>
                </h2>
              </div>

              <ol className="relative mt-16 space-y-20 pl-8 md:pl-36">
                {/* the rail itself — its own element so the draw animation
                  scales a hairline and not the content sitting beside it */}
                <span
                  aria-hidden
                  className="rail-line anim-rail absolute bottom-0 left-[0.375rem] top-0 w-px md:left-[7.5rem]"
                />
                {beats.map((beat, i) => (
                  <li
                    key={beat.stamp}
                    className="relative grid gap-10 md:grid-cols-12 md:items-center md:gap-14"
                  >
                    {/* node on the rail, centred on the hairline at both sizes */}
                    <span
                      className="absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:-left-[1.875rem]"
                      aria-hidden
                    />

                    <div
                      className={`md:col-span-7 ${
                        beat.side === "left"
                          ? "md:order-2 md:col-start-6"
                          : "md:order-1"
                      }`}
                    >
                      <p className="label-mark text-muted-foreground/60 md:absolute md:left-[-9rem] md:top-0 md:w-[6.5rem] md:text-right">
                        {beat.stamp}
                      </p>
                      <p className="label-mark mt-2 text-primary md:mt-0">
                        {String(i + 1).padStart(2, "0")} · {beat.kicker}
                      </p>
                      <h3 className="font-display mt-3 text-[1.75rem] leading-tight md:text-[2.1rem]">
                        {beat.title}
                      </h3>
                      <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                        {beat.body}
                      </p>

                      <div className="mt-6 border-l-2 border-primary/35 bg-muted/35 py-3 pl-5 pr-4">
                        <p className="label-mark text-muted-foreground/70">
                          On your side
                        </p>
                        <p className="mt-1.5 text-[15px] leading-relaxed">
                          {beat.yours}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex justify-center md:col-span-5 ${
                        beat.side === "left"
                          ? "md:order-1 md:col-start-1 md:justify-start"
                          : "md:order-2 md:justify-end"
                      }`}
                    >
                      <div
                        className={
                          beat.side === "left" ? "md:-rotate-1" : "md:rotate-1"
                        }
                      >
                        {beat.screen}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────────── guardrails: what staff can't do ───────────────── */}
        <section className="bg-ruled w-full border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="label-mark text-muted-foreground/70">
                  Guardrails <span className="mx-1 text-rule">/</span> on
                  purpose
                </p>
                <h2 className="font-display mt-4 text-4xl leading-[1.06] md:text-5xl">
                  Self-service{" "}
                  <br />
                  <span className="italic text-primary">
                    is not self-approval.
                  </span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Giving staff their own app only works if it can&rsquo;t be
                  used to move money or hours. Everything that changes a number
                  goes through you.
                </p>
              </div>

              <ul className="space-y-5 lg:col-span-6 lg:col-start-7">
                {guardrails.map((g, i) => (
                  <li
                    key={g.term}
                    className="anim-rise flex gap-4 border-b border-dashed border-rule pb-5 last:border-0"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <Check
                      className="mt-[5px] h-4 w-4 flex-shrink-0 text-[var(--under)]"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[15px] font-semibold">{g.term}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                        {g.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <section className="grain relative w-full bg-ink py-20 text-ink-foreground md:py-24">
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl leading-[1.08] md:text-5xl">
                Your staff will open this{" "}
                <br />
                <span className="italic text-primary">
                  more than you open anything.
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-foreground/70">
                Which is why it&rsquo;s worth getting right. Start with the
                schedule, and the portal comes with it.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 px-7 text-base">
                  <Link href="/#waitlist">
                    Get early access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 border-ink-foreground/25 bg-transparent px-7 text-base text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
                >
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
