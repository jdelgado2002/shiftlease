import type { ReactNode } from "react"

/**
 * The device the staff side actually lives on.
 *
 * The operator stations on the homepage are drawn in browser chrome; the
 * portal is a phone, and the whole page leans on that difference. Two tones:
 * `light` for screens sitting on paper, `dark` for the hero, where the phone
 * is the only lit object on the ink.
 */

export function Phone({
  children,
  time = "9:41",
  tone = "light",
  className = "",
  label,
}: {
  children: ReactNode
  time?: string
  tone?: "light" | "dark"
  className?: string
  /** Accessible name for the screen being depicted. */
  label: string
}) {
  const dark = tone === "dark"

  return (
    <figure
      className={`relative w-full max-w-[312px] ${className}`}
      aria-label={label}
      role="img"
    >
      <div
        className={[
          "overflow-hidden rounded-[2.1rem] border-[6px] border-ink",
          dark
            ? "device-glow bg-[hsl(28_10%_13%)]"
            : "bg-card shadow-[0_26px_60px_-30px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between bg-ink px-5 pb-1.5 pt-2">
          <span className="font-ledger text-[10px] text-ink-foreground/70">
            {time}
          </span>
          <span className="h-3 w-14 rounded-full bg-ink-foreground/10" />
          <span className="font-ledger text-[10px] text-ink-foreground/70">
            100%
          </span>
        </div>
        <div className={`px-4 pb-5 pt-4 ${dark ? "text-ink-foreground" : ""}`}>
          {children}
        </div>
      </div>
    </figure>
  )
}

/** The portal's own bottom tab bar, drawn small under a screen. */
export function TabBar({
  active,
  tone = "light",
  items,
}: {
  active: string
  tone?: "light" | "dark"
  items: string[]
}) {
  const dark = tone === "dark"
  return (
    <div
      className={`mt-4 flex items-center justify-between border-t pt-2.5 ${
        dark ? "border-ink-foreground/12" : "border-border"
      }`}
    >
      {items.map((t) => {
        const on = t === active
        return (
          <span
            key={t}
            className={[
              "label-mark text-[8.5px] tracking-[0.12em]",
              on
                ? "text-primary"
                : dark
                  ? "text-ink-foreground/35"
                  : "text-muted-foreground/55",
            ].join(" ")}
          >
            {t}
          </span>
        )
      })}
    </div>
  )
}
