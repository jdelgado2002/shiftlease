import Link from "next/link"
import { ArrowRight, AlertTriangle, Users, Clock, DollarSign } from "lucide-react"
import { TeamSide } from "@/components/home/team-side"

/* ── Shared band ────────────────────────────────────────────── */

type StationProps = {
  mark: string
  eyebrow: string
  title: React.ReactNode
  lede: string
  points: { term: string; detail: string }[]
  href: string
  hrefLabel: string
  mock: React.ReactNode
  flip?: boolean
  tinted?: boolean
}

function Station({
  mark,
  eyebrow,
  title,
  lede,
  points,
  href,
  hrefLabel,
  mock,
  flip = false,
  tinted = false,
}: StationProps) {
  return (
    <section
      className={`w-full border-b border-border py-20 md:py-28 ${
        tinted ? "bg-muted/40" : "bg-background"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <p className="label-mark text-muted-foreground/70">
              {mark} <span className="mx-1 text-rule">/</span>{" "}
              <span className="text-primary">{eyebrow}</span>
            </p>

            <h2 className="font-display mt-4 text-4xl leading-[1.06] md:text-5xl">
              {title}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {lede}
            </p>

            <dl className="mt-8 space-y-4 border-t border-dashed border-rule pt-6">
              {points.map((p) => (
                <div key={p.term} className="grid gap-1">
                  <dt className="text-[15px] font-semibold">{p.term}</dt>
                  <dd className="text-[15px] leading-relaxed text-muted-foreground">
                    {p.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href={href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {hrefLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mock */}
          <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
            {mock}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Chrome that makes a mock read as a product surface, not a marketing card. */
function Frame({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_44px_-28px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <p className="label-mark ml-2 text-muted-foreground">{title}</p>
      </div>
      {children}
    </div>
  )
}

/* ── 01 · Schedule ──────────────────────────────────────────── */

const week = [
  { day: "Mon", shifts: [{ who: "Maya", time: "6a–2p" }] },
  { day: "Tue", shifts: [{ who: "Dev", time: "10a–6p" }] },
  { day: "Wed", shifts: [{ who: "Maya", time: "6a–2p" }, { who: "Sam", time: "2p–10p" }] },
  { day: "Thu", shifts: [{ who: "Sam", time: "2p–10p" }] },
  { day: "Fri", shifts: [{ who: "Dev", time: "10a–6p" }, { who: "Ana", time: "4p–12a" }], hot: true },
  { day: "Sat", shifts: [{ who: "Ana", time: "11a–7p" }, { who: "Sam", time: "4p–12a" }] },
  { day: "Sun", shifts: [{ who: "Maya", time: "8a–4p" }] },
]

function ScheduleMock() {
  return (
    <Frame title="Scheduling · week of Mar 10">
      {/* Metrics ribbon — what the app actually shows above the grid. */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
        {[
          { icon: Users, value: "6", unit: "staff" },
          { icon: Clock, value: "214.5", unit: "hrs" },
          { icon: DollarSign, value: "4,182", unit: "labor" },
        ].map((pill) => (
          <span
            key={pill.unit}
            className="inline-flex h-7 items-center gap-1.5 rounded-full bg-muted/60 pl-2 pr-2.5 text-[13px]"
          >
            <pill.icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <span className="font-ledger font-medium">{pill.value}</span>
            <span className="text-muted-foreground">{pill.unit}</span>
          </span>
        ))}
        <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-[var(--watch)]/10 pl-2 pr-2.5 text-[13px] text-[var(--watch)]">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
          <span className="font-medium">1 overtime risk</span>
        </span>
      </div>

      {/* Week grid */}
      <div className="grid grid-cols-7 divide-x divide-border border-b border-border">
        {week.map((d, i) => (
          <div key={d.day} className="min-h-[104px] p-1.5">
            <p className="label-mark mb-1.5 px-1 text-muted-foreground/70">{d.day}</p>
            <div className="space-y-1">
              {d.shifts.map((s) => (
                <div
                  key={s.who + s.time}
                  className={`anim-rise rounded-md border px-1.5 py-1 ${
                    d.hot
                      ? "border-primary/40 bg-primary/10"
                      : "border-border bg-muted/50"
                  }`}
                  style={{ animationDelay: `${140 + i * 60}ms` }}
                >
                  <p className="truncate text-[11px] font-semibold leading-tight">
                    {s.who}
                  </p>
                  <p className="font-ledger truncate text-[10px] leading-tight text-muted-foreground">
                    {s.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The labor budget indicator — the number that changes as you drag. */}
      <div className="p-4">
        <div className="rounded-xl border border-[var(--under)]/20 bg-[var(--under)]/[0.06] p-3.5">
          <div className="flex items-baseline justify-between">
            <span className="font-ledger text-xl font-semibold text-[var(--under)]">
              82%
            </span>
            <span className="font-ledger text-[13px] text-[var(--under)]">
              $918 remaining
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--under)]/15">
            <div
              className="anim-bar h-full rounded-full bg-[var(--under)]/70"
              style={{ width: "82%", animationDelay: "500ms" }}
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            $4,182 scheduled against a $5,100 labor budget
          </p>
        </div>
      </div>
    </Frame>
  )
}

/* ── 02 · Labor ─────────────────────────────────────────────── */

/** Deterministic demand curve — busier Thu–Sat, busier at dinner. */
const HOURS = ["11a", "1p", "3p", "5p", "7p", "9p"]
const DAYS = ["M", "T", "W", "T", "F", "S", "S"]
const heat = [
  [3, 4, 2, 3, 5, 4],
  [3, 4, 2, 4, 5, 3],
  [4, 5, 3, 4, 6, 4],
  [4, 5, 3, 5, 7, 5],
  [5, 6, 4, 7, 9, 7],
  [6, 7, 5, 8, 9, 8],
  [5, 6, 4, 5, 6, 3],
]

function LaborMock() {
  return (
    <Frame title="Labor · last 7 days">
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
        {[
          { label: "Labor % of sales", value: "28.4%", tone: "text-[var(--under)]" },
          { label: "Rev / labor hour", value: "$47.20", tone: "text-foreground" },
          { label: "Net sales", value: "$14,720", tone: "text-foreground" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4">
            <p className="text-[11px] leading-tight text-muted-foreground">
              {stat.label}
            </p>
            <p className={`font-ledger mt-1.5 text-[22px] font-medium ${stat.tone}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Busy hours heatmap */}
      <div className="border-b border-border px-4 py-4">
        <p className="label-mark mb-3 text-muted-foreground">Busy hours</p>
        <div className="flex gap-2">
          <div className="flex flex-col justify-between py-0.5">
            {HOURS.map((h) => (
              <span key={h} className="font-ledger text-[9px] text-muted-foreground">
                {h}
              </span>
            ))}
          </div>
          <div className="grid flex-1 grid-cols-7 gap-1">
            {heat.map((col, ci) => (
              <div key={ci} className="grid gap-1">
                {col.map((v, ri) => (
                  <div
                    key={ri}
                    className="anim-rise h-3.5 rounded-[3px] bg-primary"
                    style={{
                      opacity: 0.1 + v * 0.095,
                      animationDelay: `${(ci * 6 + ri) * 14}ms`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-1.5 ml-7 grid grid-cols-7 gap-1">
          {DAYS.map((d, i) => (
            <span
              key={i}
              className="font-ledger text-center text-[9px] text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* The verdict line */}
      <div className="space-y-2.5 px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="anim-dot h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--watch)]" />
          <p className="text-[14px] font-medium">
            You&apos;re 1.4 points over your 27% labor target.
          </p>
        </div>
        <p className="border-l-2 border-rule pl-3 text-[13px] leading-relaxed text-muted-foreground">
          Tuesday 2p–5p ran 3 people against $180/hr in sales. Cutting one
          closer on slow weekdays recovers about{" "}
          <span className="font-ledger text-foreground">$310</span> a week.
        </p>
      </div>
    </Frame>
  )
}

/* ── 03 · Budget ────────────────────────────────────────────── */

function BudgetMock() {
  return (
    <Frame title="Budget & run rate · March">
      <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
        <div className="px-4 py-4">
          <p className="label-mark text-muted-foreground">Fixed</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Doesn&apos;t scale with sales
          </p>
          <ul className="mt-3 space-y-1.5">
            {[
              ["Rent", "$6,400"],
              ["Insurance", "$740"],
              ["Software", "$312"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-ledger">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-4">
          <p className="label-mark text-muted-foreground">Variable</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Percentages that scale
          </p>
          <ul className="mt-3 space-y-1.5">
            {[
              ["Food cost", "29.0%"],
              ["Labor", "27.0%"],
              ["Card fees", "2.8%"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-ledger">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Break-even progress */}
      <div className="px-4 py-5">
        <div className="flex items-baseline justify-between">
          <p className="label-mark text-muted-foreground">Break-even</p>
          <p className="font-ledger text-[13px] text-[var(--under)]">
            cleared day 19 of 31
          </p>
        </div>

        <div className="relative mt-3 h-9 overflow-hidden rounded-lg bg-muted">
          <div
            className="anim-bar h-full bg-[var(--under)]/25"
            style={{ width: "61%" }}
          />
          <div
            className="absolute inset-y-0 w-px bg-[var(--under)]"
            style={{ left: "61%" }}
          />
          <div
            className="anim-bar absolute inset-y-0 bg-[var(--under)]/55"
            style={{ left: "61%", width: "22%", animationDelay: "420ms" }}
          />
          <p className="font-ledger absolute inset-y-0 right-3 flex items-center text-[11px] text-muted-foreground">
            11 days of upside
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-dashed border-rule pt-4">
          <div>
            <p className="text-[11px] text-muted-foreground">
              Projected net, at today&apos;s run rate
            </p>
            <p className="font-ledger mt-1 text-2xl font-medium text-[var(--under)]">
              +$9,140
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-muted-foreground">vs. target</p>
            <p className="font-ledger mt-1 text-[15px] text-[var(--watch)]">
              −$860
            </p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

/* ── 04 · Money ─────────────────────────────────────────────── */

const ledgerRows = [
  { date: "03/18", payee: "Sysco Foods", amount: "−2,418.90", cat: "Food & Bev", fresh: false },
  { date: "03/18", payee: "CPS Energy", amount: "−684.12", cat: "Utilities", fresh: false },
  { date: "03/17", payee: "Check #1042 · A. Reyes", amount: "−1,260.00", cat: "Payroll", fresh: true },
  { date: "03/17", payee: "Square payout", amount: "+7,309.44", cat: "Sales", fresh: false },
  { date: "03/16", payee: "Restaurant Depot", amount: "−391.07", cat: "Supplies", fresh: false },
]

function MoneyMock() {
  return (
    <div className="space-y-4">
      <Frame title="Transactions · auto-categorized">
        <div className="divide-y divide-border">
          {ledgerRows.map((r, i) => (
            <div
              key={r.payee}
              className="anim-rise flex items-center gap-3 px-4 py-2.5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-ledger w-11 shrink-0 text-[11px] text-muted-foreground">
                {r.date}
              </span>
              <span className="flex-1 truncate text-[13px]">{r.payee}</span>
              <span
                className={`font-ledger shrink-0 text-[13px] ${
                  r.amount.startsWith("+")
                    ? "text-[var(--under)]"
                    : "text-foreground"
                }`}
              >
                {r.amount}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  r.fresh
                    ? "bg-[var(--under)]/12 text-[var(--under)] ring-1 ring-[var(--under)]/25"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {r.cat}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5">
          <p className="text-[12px] text-muted-foreground">Needs review</p>
          <p className="font-ledger text-[13px] font-medium text-[var(--under)]">
            0 left
          </p>
        </div>
      </Frame>

      {/* Check stub — printed, logged, matched. */}
      <div className="edge-perforated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-start justify-between gap-4 px-5 py-4 pl-7">
          <div>
            <p className="label-mark text-muted-foreground">Check #1042</p>
            <p className="mt-1.5 text-[15px] font-semibold">Alejandro Reyes</p>
            <p className="font-ledger mt-0.5 text-[11px] text-muted-foreground">
              Payroll · pay period Mar 3–16
            </p>
          </div>
          <div className="text-right">
            <p className="font-ledger text-xl font-medium">$1,260.00</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-[var(--under)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--under)]" />
              Expense logged · bank matched
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Exported band ──────────────────────────────────────────── */

export function StationPanels() {
  return (
    <>
      <Station
        mark="01"
        eyebrow="Schedule"
        title={
          <>
            The schedule is a{" "}
            <span className="italic text-primary">spending decision.</span>
          </>
        }
        lede="Every other scheduling tool treats the week as a staffing puzzle. It's the largest discretionary check you write, and you write it in advance — so the dollar should be on screen while you're writing it."
        points={[
          {
            term: "Labor cost that moves as you drag",
            detail:
              "Staff count, scheduled hours, and dollars recompute on every change — split by hourly, salary, contractor, and daily rate.",
          },
          {
            term: "A budget bar, not a post-mortem",
            detail:
              "Green under budget, amber close, red over. You find out before you publish, not on payday.",
          },
          {
            term: "Guardrails while you build",
            detail:
              "Overtime risk, availability conflicts, and time-off collisions get flagged in the grid — plus AI-assisted generation and templates so week two takes minutes.",
          },
          {
            term: "Publish once, everybody has it",
            detail:
              "The moment you publish, every person on the schedule sees their shifts in their own portal. No printout on the office door, no group chat.",
          },
        ]}
        href="/features/scheduling-payroll"
        hrefLabel="Scheduling, time clock, tips & payroll"
        mock={<ScheduleMock />}
      />

      {/* The other half of station 01 — the side the staff actually lives in. */}
      <TeamSide />

      <Station
        mark="02"
        eyebrow="Labor"
        title={
          <>
            Then find out what
            <br />
            those hours <span className="italic text-primary">earned.</span>
          </>
        }
        lede="A schedule is a forecast. Labor is the reckoning: clock-ins meet real sales and you get the two numbers that decide a restaurant's margin."
        points={[
          {
            term: "Labor % of sales, against your target",
            detail:
              "Set the target once. Every range compares against it with a plain-English verdict — no chart reading required.",
          },
          {
            term: "Revenue per labor hour",
            detail:
              "The number that says whether an extra body on the floor paid for itself. Trended, by day and by daypart.",
          },
          {
            term: "Busy hours vs. who you staffed",
            detail:
              "A demand heatmap next to your actual coverage, with auto-flagged fixes worth real dollars a week.",
          },
        ]}
        href="/features/scheduling-payroll"
        hrefLabel="See how labor connects to payroll"
        mock={<LaborMock />}
        flip
        tinted
      />

      <Station
        mark="03"
        eyebrow="Budget"
        title={
          <>
            Know if the month clears
            <br />
            <span className="italic text-primary">while you can still fix it.</span>
          </>
        }
        lede="You set this up once — fixed costs in dollars, variable costs in percentages — and break-even falls out of the two. After that the run rate does the watching, and you only hear about the month when it needs you."
        points={[
          {
            term: "Break-even you can actually see",
            detail:
              "The exact day of the month your sales cover your costs. Everything after it is profit, and you watch it arrive.",
          },
          {
            term: "The projection updates without you",
            detail:
              "Sales post, the run rate re-forecasts, and the variance against your target is waiting on the dashboard. An overspend becomes a Tuesday problem instead of a month-end surprise.",
          },
          {
            term: "Set the labor budget here, once",
            detail:
              "It's the same number the schedule checks against every time you drag a shift. One target, entered in one place, enforced on the screen you actually work in.",
          },
        ]}
        href="/features/financial-management"
        hrefLabel="Budget, run rate & break-even"
        mock={<BudgetMock />}
      />

      <Station
        mark="04"
        eyebrow="Money"
        title={
          <>
            Every dollar named
            <br />
            <span className="italic text-primary">on the way out the door.</span>
          </>
        }
        lede="Connected bank accounts, AI categorization, and check printing that reconciles itself. This is the part that makes the other three honest — a budget only works if the spending is actually coded."
        points={[
          {
            term: "Bank sync + AI categorization",
            detail:
              "Accounts connect through Stripe Financial Connections. Transactions import daily, get category suggestions from your own history, and post journal entries when you accept.",
          },
          {
            term: "Rules that clear the backlog",
            detail:
              "Bulk categorize, set rules for recurring vendors, scan statements and invoices. The Ops Inbox tracks what's still uncoded so the number reaches zero.",
          },
          {
            term: "Print checks that reconcile themselves",
            detail:
              "Real check paper for payroll, vendors, and draws. The expense logs when it prints and ties to the bank transaction when the money moves.",
          },
          {
            term: "Books that stay tax-ready",
            detail:
              "Restaurant chart of accounts, P&L, balance sheet, and cash flow generated for any range. Export clean to your accountant.",
          },
        ]}
        href="/features/financial-management"
        hrefLabel="Banking, expenses & statements"
        mock={<MoneyMock />}
        flip
        tinted
      />
    </>
  )
}
