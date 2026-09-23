import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

/**
 * The half of the loop the staff runs.
 *
 * Usage data made the case for this section: the employee portal —
 * schedule, open shifts, clock, tips, pay — is by a wide margin the most
 * touched surface in the product, and the homepage never mentioned it.
 */

const upcoming = [
  { day: "Fri", date: "14", role: "Front counter", time: "4:00p – 12:00a", state: "confirmed" },
  { day: "Sat", date: "15", role: "Closing", time: "4:00p – 12:00a", state: "confirmed" },
  { day: "Tue", date: "18", role: "Opening", time: "6:00a – 2:00p", state: "confirmed" },
]

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[310px]">
      <div className="overflow-hidden rounded-[2.25rem] border-[7px] border-ink bg-card shadow-[0_32px_70px_-32px_rgba(0,0,0,0.6)]">
        {/* status bar */}
        <div className="flex items-center justify-between bg-ink px-6 pb-2 pt-2.5">
          <span className="font-ledger text-[10px] text-ink-foreground/70">9:41</span>
          <span className="h-3.5 w-16 rounded-full bg-ink-foreground/10" />
          <span className="font-ledger text-[10px] text-ink-foreground/70">100%</span>
        </div>

        <div className="px-4 pb-5 pt-4">
          <p className="label-mark text-muted-foreground">This week</p>
          <p className="font-display mt-1 text-2xl">Hey, Ana</p>

          {/* clock state */}
          <div className="anim-rise mt-4 rounded-xl border border-[var(--under)]/25 bg-[var(--under)]/[0.07] px-3.5 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] font-semibold text-[var(--under)]">
                  Clocked in
                </p>
                <p className="font-ledger mt-0.5 text-[11px] text-muted-foreground">
                  since 3:58p · 4h 12m
                </p>
              </div>
              <span className="anim-dot h-2.5 w-2.5 rounded-full bg-[var(--under)]" />
            </div>
          </div>

          {/* upcoming shifts */}
          <p className="label-mark mt-5 text-muted-foreground">Upcoming</p>
          <div className="mt-2 space-y-1.5">
            {upcoming.map((s, i) => (
              <div
                key={s.date}
                className="anim-rise flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-3 py-2.5"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <div className="text-center">
                  <p className="font-ledger text-[9px] uppercase tracking-wider text-muted-foreground">
                    {s.day}
                  </p>
                  <p className="font-ledger text-[15px] font-medium leading-tight">
                    {s.date}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-semibold">{s.role}</p>
                  <p className="font-ledger truncate text-[11px] text-muted-foreground">
                    {s.time}
                  </p>
                </div>
                <Check className="h-3.5 w-3.5 shrink-0 text-[var(--under)]" aria-hidden />
              </div>
            ))}
          </div>

          {/* open shift up for grabs */}
          <p className="label-mark mt-5 text-muted-foreground">Open shifts</p>
          <div
            className="anim-rise mt-2 rounded-xl border border-dashed border-primary/45 bg-primary/[0.06] px-3 py-2.5"
            style={{ animationDelay: "420ms" }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold">
                  Sun 16 · Mid shift
                </p>
                {/* Truncated, this read "11:00a – 7:00p · poste…" — the
                    byline cut mid-word. It wraps instead, and the byline
                    travels to the second line whole. */}
                <p className="font-ledger text-[11px] leading-snug text-muted-foreground">
                  11:00a – 7:00p
                  <span className="whitespace-nowrap"> · posted by Marco</span>
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                Claim
              </span>
            </div>
          </div>

          {/* pay */}
          <div className="mt-5 flex items-end justify-between border-t border-dashed border-rule pt-3.5">
            <div>
              <p className="text-[11px] text-muted-foreground">This pay period</p>
              <p className="font-ledger mt-0.5 text-lg font-medium">$742.50</p>
            </div>
            <p className="font-ledger text-[11px] text-muted-foreground">
              38.5 hrs · $61 tips
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TeamSide() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border py-20 md:py-28">
      {/* gridpaper keeps this band distinct from the four operator stations */}
      <div className="pointer-events-none absolute inset-0 bg-gridpaper opacity-60" />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label-mark text-muted-foreground/70">
              01b <span className="mx-1 text-rule">/</span>{" "}
              <span className="text-primary">The team side</span>
            </p>

            <h2 className="font-display mt-4 text-4xl leading-[1.06] md:text-5xl">
              You write the schedule.
              <br />
              <span className="italic text-primary">They live in it.</span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every person on your payroll gets their own portal — shifts,
              trades, clock-in, tips, and pay. It is the most-opened part of
              EasyShiftHQ by a wide margin, and it is the reason the numbers on
              your side are real instead of estimated.
            </p>

            <dl className="mt-8 space-y-4 border-t border-dashed border-rule pt-6">
              {[
                {
                  term: "The gaps get covered without you",
                  detail:
                    "Post an open shift and the team claims it. Trades route through an approval you control, so coverage happens without a group chat.",
                },
                {
                  term: "Clock-ins you can trust",
                  detail:
                    "Verified punches on phone or kiosk. They're the same punches that become labor % of sales and the same ones that run payroll.",
                },
                {
                  term: "Hours and tips, visible to them",
                  detail:
                    "Staff see their own timecard, tip pool, and pay period totals — which is most of your payday questions answered before they're asked.",
                },
              ].map((p) => (
                <div key={p.term} className="grid gap-1">
                  <dt className="text-[15px] font-semibold">{p.term}</dt>
                  <dd className="text-[15px] leading-relaxed text-muted-foreground">
                    {p.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/features/employee-portal"
              className="group mt-5 inline-flex items-center gap-2 py-3 text-sm font-semibold text-primary sm:mt-8 sm:py-0"
            >
              Walk through a week in the employee portal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  )
}
