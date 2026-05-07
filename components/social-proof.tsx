import Link from "next/link"

const PLATFORMS = [
  {
    name: "Capterra",
    url: "https://www.capterra.com/p/10040282/EasyShiftHQ/",
    logoLabel: "Listed on Capterra",
  },
  // Add G2 / Software Advice / GetApp as those listings come online
] as const

type SocialProofRowProps = Readonly<{
  variant?: "compact" | "full"
}>

export function SocialProofRow({ variant = "compact" }: SocialProofRowProps) {
  const containerClass =
    variant === "compact"
      ? "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
      : "flex flex-wrap items-center justify-center gap-6"

  return (
    <div className={containerClass}>
      {PLATFORMS.map((p) => (
        <Link
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <span className="font-medium">{p.logoLabel}</span>
          <svg
            className="h-3 w-3 opacity-60"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 9l6-6M5 3h4v4" />
          </svg>
        </Link>
      ))}
    </div>
  )
}
