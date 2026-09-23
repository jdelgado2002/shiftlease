import { CalendarCheck, Banknote, Target, Receipt } from "lucide-react"

/**
 * The Operating Loop — the homepage centerpiece.
 *
 * Four stations, one cycle: the shift you schedule becomes a labor number,
 * which becomes a budget position, which becomes money leaving the bank,
 * which sets next week's schedule. Pure CSS motion, no client JS.
 */

const stations = [
  {
    mark: "01",
    name: "Schedule",
    icon: CalendarCheck,
    verb: "You drag a shift onto Friday.",
    returns:
      "Labor cost updates before you publish — and your whole staff sees it the moment you do.",
    figure: "$4,182",
    figureNote: "82% of this week's labor budget",
    tone: "under" as const,
  },
  {
    mark: "02",
    name: "Labor",
    icon: Banknote,
    verb: "The week actually runs.",
    returns:
      "Their clock-ins meet your sales. You see what the hours earned.",
    figure: "28.4%",
    figureNote: "labor % of sales · $47.20 per labor hour",
    tone: "under" as const,
  },
  {
    mark: "03",
    name: "Budget",
    icon: Target,
    verb: "You set the target once.",
    returns: "Run rate tells you daily whether the month clears it.",
    figure: "Day 19",
    figureNote: "break-even cleared · 11 days of upside left",
    tone: "watch" as const,
  },
  {
    mark: "04",
    name: "Money",
    icon: Receipt,
    verb: "Payroll, vendors, rent go out.",
    returns: "Every dollar categorized on the way out the door.",
    figure: "0",
    figureNote: "uncategorized transactions left",
    tone: "under" as const,
  },
]

const toneText = {
  under: "text-[var(--under)]",
  watch: "text-[var(--watch)]",
  over: "text-[var(--over)]",
}

export function OperatingLoop() {
  return (
    <section
      id="the-loop"
      className="relative w-full overflow-hidden border-y border-border bg-background py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gridpaper opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

      <div className="container relative px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl md:mb-20">
          <p className="label-mark text-primary">The operating loop</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-6xl">
            Four screens. One loop.
            <br />
            <span className="text-muted-foreground italic">Every single week.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Most restaurant software hands you a pile of disconnected modules. The
            operators who stick with EasyShiftHQ use four of them, in the same
            order, forever — because each one answers the question the last one
            raised.
          </p>
        </div>

        {/* Desktop: four stations left→right with a return arc. */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {stations.map((station, i) => (
              <div
                key={station.mark}
                className="anim-rise group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_0_var(--rule)] transition-colors hover:border-primary/40"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="label-mark text-muted-foreground/70">
                    {station.mark}
                  </span>
                  <station.icon
                    className="h-4 w-4 text-muted-foreground/60 transition-colors group-hover:text-primary"
                    aria-hidden
                  />
                </div>

                <h3 className="font-display mt-3 text-3xl">{station.name}</h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {station.verb}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {station.returns}
                </p>

                <div className="mt-6 border-t border-dashed border-rule pt-4">
                  <p
                    className={`font-ledger text-2xl font-medium ${toneText[station.tone]}`}
                  >
                    {station.figure}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {station.figureNote}
                  </p>
                </div>

                {/* Connector to the next station (desktop only). */}
                {i < stations.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-4 hidden h-px w-4 bg-rule lg:block"
                  />
                )}
              </div>
            ))}
          </div>

          {/* The return arc: money spent informs next week's schedule. */}
          <div className="relative mt-6 hidden lg:block" aria-hidden>
            <svg
              viewBox="0 0 1200 90"
              className="h-[90px] w-full"
              preserveAspectRatio="none"
              role="presentation"
            >
              <path
                d="M 1050 0 L 1050 55 Q 1050 74 1031 74 L 169 74 Q 150 74 150 55 L 150 0"
                fill="none"
                stroke="var(--rule)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1050 0 L 1050 55 Q 1050 74 1031 74 L 169 74 Q 150 74 150 55 L 150 0"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                className="anim-dash"
              />
              <path
                d="M 150 12 l -5 -9 l 10 0 z"
                fill="var(--primary)"
                transform="translate(0,-4)"
              />
            </svg>
            <p className="label-mark absolute inset-x-0 bottom-[10px] text-center text-muted-foreground">
              <span className="bg-background px-4">
                What you spent sets what you schedule next
              </span>
            </p>
          </div>

          {/* Mobile version of the return statement. */}
          <p className="label-mark mt-8 text-center text-muted-foreground lg:hidden">
            ↺ What you spent sets what you schedule next
          </p>
        </div>
      </div>
    </section>
  )
}
