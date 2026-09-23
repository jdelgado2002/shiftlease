import { Check, MapPin, Camera } from "lucide-react"
import { Phone, TabBar } from "@/components/portal/phone"

/**
 * Stills of the five portal screens this page walks through.
 *
 * Every label, badge and status string here is taken from the shipped app
 * (nimble-pnl, src/pages/Employee*.tsx) rather than invented for the mock —
 * the argument of the page is that staff already live in this thing, so the
 * screens have to be the ones they'd recognize. Four tabs, in the real order.
 */

const TABS = ["Schedule", "Pay", "Clock", "More"]

export function BoardScreen({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark"
  const muted = dark ? "text-ink-foreground/55" : "text-muted-foreground"
  const card = dark
    ? "border-ink-foreground/12 bg-ink-foreground/[0.04]"
    : "border-border bg-muted/40"
  const chip = dark ? "bg-ink-foreground/10" : "bg-muted"

  return (
    <Phone
      tone={tone}
      time="3:41"
      label="The shift marketplace, with one open shift being claimed"
    >
      <p className={`label-mark ${muted}`}>Available shifts</p>
      <p className="font-display mt-1 text-[1.55rem] leading-tight">
        Shifts Available
      </p>
      <p className={`mt-0.5 text-[11.5px] ${muted}`}>
        Open shifts and trades you can pick up
      </p>

      {/* The claim moment — the reason this screen leads the page. */}
      <div className="anim-rise relative mt-4 rounded-xl border border-primary/45 bg-primary/[0.09] px-3.5 py-3">
        <span
          className={`label-mark rounded-full px-1.5 py-0.5 text-[8px] ${chip}`}
        >
          Open shift
        </span>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[12.5px] font-semibold">Sun, Mar 16 · Mid</p>
            <p className={`font-ledger mt-0.5 text-[11px] ${muted}`}>
              11:00a – 7:00p
            </p>
            <p className={`mt-1 text-[10.5px] font-medium ${muted}`}>
              1 spot left
            </p>
          </div>
          <span className="relative shrink-0">
            <span className="anim-ping absolute inset-0 rounded-full bg-primary" />
            <span className="relative inline-block rounded-full bg-primary px-3.5 py-1 text-[11px] font-semibold text-primary-foreground">
              Claim
            </span>
          </span>
        </div>
      </div>

      <div
        className={`anim-rise mt-2 rounded-xl border px-3.5 py-3 ${card}`}
        style={{ animationDelay: "160ms" }}
      >
        <span
          className={`label-mark rounded-full px-1.5 py-0.5 text-[8px] ${chip}`}
        >
          Shift trade
        </span>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[12.5px] font-semibold">Thu, Mar 13 · Prep</p>
            <p className={`font-ledger mt-0.5 text-[11px] ${muted}`}>
              6:00a – 2:00p
            </p>
            <p className={`mt-1 text-[10.5px] font-medium ${muted}`}>
              From: Marco
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-current/20 px-3 py-1 text-[11px] font-semibold text-primary">
            Accept
          </span>
        </div>
        <p className={`mt-1.5 text-[10.5px] italic ${muted}`}>
          &ldquo;Family event, can&rsquo;t make the open.&rdquo;
        </p>
      </div>

      {/* Conflict detection: blocked, not warned. */}
      <div
        className={`anim-rise mt-2 rounded-xl border px-3.5 py-3 opacity-60 ${card}`}
        style={{ animationDelay: "250ms" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[12.5px] font-semibold">Fri, Mar 14 · Close</p>
            <p className={`font-ledger mt-0.5 text-[11px] ${muted}`}>
              4:00p – 12:00a
            </p>
          </div>
          <span className={`shrink-0 text-[10.5px] ${muted}`}>
            Schedule conflict
          </span>
        </div>
      </div>

      <TabBar active="More" tone={tone} items={TABS} />
    </Phone>
  )
}

export function ClockScreen() {
  return (
    <Phone time="3:58" label="The time clock, one punch in progress">
      <p className="label-mark text-muted-foreground">Time clock</p>
      <p className="font-display mt-1 text-[1.55rem] leading-tight">
        Welcome, Ana
      </p>

      <div className="anim-rise mt-3 text-center">
        <p className="font-ledger text-[2.15rem] leading-none tracking-tight">
          3:58:04<span className="ml-1 text-sm">pm</span>
        </p>
        <p className="font-ledger mt-1 text-[10.5px] text-muted-foreground">
          Friday, March 14, 2026
        </p>
      </div>

      <div
        className="anim-rise mt-4 rounded-xl bg-[var(--under)] px-4 py-5 text-center text-white"
        style={{ animationDelay: "140ms" }}
      >
        <p className="text-[15px] font-semibold">Clock In</p>
        <p className="mt-0.5 text-[11px] text-white/75">
          Tap to start your shift
        </p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <span className="flex items-center gap-1 text-[10.5px] text-muted-foreground">
          <Camera className="h-3 w-3" aria-hidden />
          Photo verified
        </span>
        <span className="flex items-center gap-1 text-[10.5px] text-muted-foreground">
          <MapPin className="h-3 w-3" aria-hidden />
          Location verified
        </span>
      </div>

      <p className="label-mark mt-4 text-muted-foreground">
        Today&rsquo;s activity
      </p>
      <p className="mt-1.5 rounded-lg bg-muted/50 px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
        No punches recorded today. Scheduled 4:00p – 12:00a.
      </p>

      <TabBar active="Clock" items={TABS} />
    </Phone>
  )
}

export function TipsScreen() {
  return (
    <Phone time="9:12" label="A tip split, with the calculation shown">
      <p className="label-mark text-muted-foreground">My tips</p>
      <p className="font-display mt-1 text-[1.55rem] leading-tight">
        Friday, Mar 14
      </p>

      <div className="anim-rise mt-4 flex items-end justify-between border-b border-dashed border-rule pb-3">
        <p className="font-ledger text-[2rem] leading-none">$61.40</p>
        <span className="rounded-full bg-[var(--under)]/12 px-2 py-0.5 text-[10px] font-semibold text-[var(--under)]">
          Approved
        </span>
      </div>

      <p className="label-mark mt-4 text-muted-foreground">
        How this was calculated
      </p>
      <dl className="mt-1.5 divide-y divide-border">
        {[
          ["You worked", "7.75 hrs"],
          ["Team worked", "61.25 hrs"],
          ["Your portion", "12.7%"],
          ["Total tips split", "$486.00"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className="anim-rise flex items-baseline justify-between py-2"
            style={{ animationDelay: `${120 + i * 70}ms` }}
          >
            <dt className="text-[12px] text-muted-foreground">{k}</dt>
            <dd className="font-ledger text-[12px]">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 rounded-lg bg-muted/50 px-3 py-2 text-[11.5px] leading-relaxed text-muted-foreground">
        Tips were shared by hours worked. Something doesn&rsquo;t look right?
      </p>

      <TabBar active="More" items={TABS} />
    </Phone>
  )
}

export function TimecardScreen() {
  const days = [
    ["Mon, Mar 10", "4:00p", "12:04a", "8h 04m"],
    ["Wed, Mar 12", "3:58p", "11:51p", "7h 53m"],
    ["Fri, Mar 14", "6:02a", "2:00p", "7h 58m"],
  ]
  return (
    <Phone time="8:20" label="A weekly timecard with every punch listed">
      <p className="label-mark text-muted-foreground">My timecard</p>
      <p className="font-display mt-1 text-[1.55rem] leading-tight">
        Current week
      </p>

      <div className="anim-rise mt-4 grid grid-cols-2 gap-2">
        {[
          ["Net hours", "23h 55m", "After breaks"],
          ["Regular", "23h 55m", "Up to 40 hrs"],
          ["Overtime", "0h 00m", "Over 40 hrs"],
          ["Break time", "1h 30m", "Total taken"],
        ].map(([k, v, s], i) => (
          <div
            key={k}
            className="anim-rise rounded-xl border border-border bg-muted/40 px-3 py-2.5"
            style={{ animationDelay: `${100 + i * 60}ms` }}
          >
            <p className="label-mark text-[8px] text-muted-foreground">{k}</p>
            <p className="font-ledger mt-1 text-[15px] leading-none">{v}</p>
            <p className="mt-1 text-[9.5px] text-muted-foreground">{s}</p>
          </div>
        ))}
      </div>

      <p className="label-mark mt-4 text-muted-foreground">Daily breakdown</p>
      <div className="mt-1.5 overflow-hidden rounded-xl border border-border">
        {days.map((d, i) => (
          <div
            key={d[0]}
            className="anim-rise flex items-center gap-2 border-b border-border px-3 py-2 last:border-0"
            style={{ animationDelay: `${340 + i * 70}ms` }}
          >
            <span className="flex-1 truncate text-[11.5px] font-medium">
              {d[0]}
            </span>
            <span className="font-ledger w-11 text-right text-[10.5px] text-muted-foreground">
              {d[1]}
            </span>
            <span className="font-ledger w-11 text-right text-[10.5px] text-muted-foreground">
              {d[2]}
            </span>
            <span className="font-ledger w-14 text-right text-[10.5px]">
              {d[3]}
            </span>
          </div>
        ))}
      </div>

      <TabBar active="More" items={TABS} />
    </Phone>
  )
}

export function PayScreen() {
  return (
    <Phone time="7:05" label="Estimated earnings for the current pay period">
      <p className="label-mark text-muted-foreground">My pay</p>
      <p className="font-display mt-1 text-[1.55rem] leading-tight">
        Current period
      </p>
      <p className="font-ledger mt-0.5 text-[10.5px] text-muted-foreground">
        Ana Reyes · $17.00/hr
      </p>

      <div className="anim-rise mt-4 grid grid-cols-2 gap-2">
        {[
          ["Hours worked", "38.5", "2.5 OT"],
          ["Gross wages", "$675.75", "Before taxes"],
          ["Tips earned", "$66.75", "Cash + credit"],
        ].map(([k, v, s], i) => (
          <div
            key={k}
            className="anim-rise rounded-xl border border-border bg-muted/40 px-3 py-2.5"
            style={{ animationDelay: `${100 + i * 60}ms` }}
          >
            <p className="label-mark text-[8px] text-muted-foreground">{k}</p>
            <p className="font-ledger mt-1 text-[15px] leading-none">{v}</p>
            <p className="mt-1 text-[9.5px] text-muted-foreground">{s}</p>
          </div>
        ))}
        <div
          className="anim-rise rounded-xl border border-[var(--under)]/30 bg-[var(--under)]/[0.08] px-3 py-2.5"
          style={{ animationDelay: "280ms" }}
        >
          <p className="label-mark text-[8px] text-[var(--under)]">Total pay</p>
          <p className="font-ledger mt-1 text-[15px] leading-none text-[var(--under)]">
            $742.50
          </p>
          <p className="mt-1 text-[9.5px] text-muted-foreground">
            Wages + tips
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-1.5 border-t border-dashed border-rule pt-3">
        <Check
          className="mt-[3px] h-3 w-3 flex-shrink-0 text-[var(--under)]"
          aria-hidden
        />
        <p className="text-[10.5px] leading-relaxed text-muted-foreground">
          An estimate from your own punches. Final pay may differ after manager
          adjustments and withholdings.
        </p>
      </div>

      <TabBar active="Pay" items={TABS} />
    </Phone>
  )
}
