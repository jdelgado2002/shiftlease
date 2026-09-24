import Link from "next/link"
import { TrialCTA } from "@/components/trial-cta"
import { SocialProofRow } from "@/components/social-proof"
import Image from "next/image"

const features = [
  { name: "Financial Management", href: "/features/financial-management" },
  { name: "Inventory Management", href: "/features/inventory-management" },
  { name: "Recipe & Menu", href: "/features/recipe-menu" },
  { name: "Operations", href: "/features/scheduling-payroll" },
  { name: "Guest Reviews", href: "/features/reviews" },
  { name: "Integrations", href: "/features/integrations" },
]

const company = [
  { name: "Why Inventory Matters", href: "/why-inventory-matters" },
  { name: "Why Operations Matter", href: "/why-operations-matter" },
  { name: "Pricing", href: "/pricing" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Compare", href: "/vs" },
  { name: "Free Tools", href: "/tools/daily-pl-cheat-sheet" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "mailto:contact@easyshifthq.com" },
]

const legal = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
]

/**
 * One footer column.
 *
 * The links used to be 17px tall with 12px of dead space between them — a
 * 17px target against a 44px guideline, and the gap was doing the work the
 * link should have been doing. On a phone the list gap becomes link padding
 * instead: same rhythm on the page, a row you can actually hit.
 *
 * All of it reverts at md rather than sm, because that is where the footer
 * grid goes four-up and stops being a phone layout — and because the heading
 * borrows the ledger label only while the list beneath it is ruled. Above md
 * it is the plain bold heading it has always been. (The label is spelled out
 * in utilities rather than as `label-mark`: that class is declared after
 * Tailwind's own utilities in the same layer, so it would outrank the md:
 * overrides sitting beside it.)
 */
function FooterColumn({
  title,
  items,
}: {
  title: string
  items: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="border-b border-rule/60 pb-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground md:border-0 md:pb-0 md:font-sans md:text-base md:font-semibold md:normal-case md:tracking-normal md:text-foreground">
        {title}
      </h3>
      <ul className="mt-1 divide-y divide-border/40 md:mt-4 md:space-y-3 md:divide-y-0">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground md:py-0"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="mb-4 flex w-fit items-center gap-2 py-2 text-lg font-semibold tracking-tight"
            >
              <Image
                src="/icon-192.png"
                alt="EasyShiftHQ"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span>EasyShiftHQ</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Profit clarity for restaurant operators. See your real profits
              every day.
            </p>
          </div>

          <FooterColumn title="Features" items={features} />
          <FooterColumn title="Company" items={company} />
          <FooterColumn title="Legal" items={legal} />
        </div>

        <div className="mt-8 border-t border-border/50 pt-8">
          <SocialProofRow variant="compact" />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EasyShiftHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <TrialCTA className="py-3 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:py-0">
              Sign In
            </TrialCTA>
          </div>
        </div>
      </div>
    </footer>
  )
}
