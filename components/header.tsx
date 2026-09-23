"use client"

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { TrialCTA } from "@/components/trial-cta"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const features = [
  // Ordered by what operators actually open, not by module hierarchy.
  {
    name: "Scheduling & Payroll",
    href: "/features/scheduling-payroll",
    description: "Scheduling, time clock, tip pooling, and payroll",
  },
  {
    name: "Employee Portal",
    href: "/features/employee-portal",
    description:
      "The app your staff opens: shifts, open-shift board, clock, tips, pay",
  },
  {
    name: "Financial Management",
    href: "/features/financial-management",
    description: "Real-time P&L, banking, and transaction management",
  },
  {
    name: "Integrations",
    href: "/features/integrations",
    description: "POS systems, banking, and third-party connections",
  },
  {
    name: "Inventory Management",
    href: "/features/inventory-management",
    description: "Live stock tracking, OCR scanning, and waste management",
  },
  {
    name: "Recipe & Menu",
    href: "/features/recipe-menu",
    description: "Recipe costing, profitability analysis, and menu engineering",
  },
  {
    name: "Guest Reviews",
    href: "/features/reviews",
    description: "QR review funnel: happy guests to Google, complaints to you",
  },
]

// The desktop bar and the mobile sheet used to spell these out separately,
// which is how a link gets added to one and forgotten in the other.
const pages = [
  { name: "Why Inventory Matters", href: "/why-inventory-matters" },
  { name: "Why Operations Matter", href: "/why-operations-matter" },
  { name: "Pricing", href: "/pricing" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Compare", href: "/vs" },
  { name: "Free Tools", href: "/tools/daily-pl-cheat-sheet" },
  { name: "Blog", href: "/blog" },
]

/** Rows enter one after another; this is the step between them. */
const STEP_MS = 34

/**
 * One block of the mobile sheet: a ruled heading and a numbered index of
 * entries beneath it. `start` is the running line number, so the two blocks
 * read as one continuous ledger rather than two lists that both begin at 01.
 */
function SheetSection({
  label,
  items,
  start,
  onNavigate,
}: {
  label: string
  items: { name: string; href: string }[]
  start: number
  onNavigate: () => void
}) {
  return (
    <section className="mt-9 first:mt-0">
      <p
        className="anim-rise label-mark border-b border-rule pb-2 text-muted-foreground"
        style={{ animationDelay: `${(start - 1) * STEP_MS}ms` }}
      >
        {label}
      </p>
      <ul>
        {items.map((item, i) => (
          <li key={item.href} className="border-b border-rule/45">
            <Link
              href={item.href}
              onClick={onNavigate}
              className="anim-rise group flex items-baseline gap-4 py-3.5"
              style={{ animationDelay: `${(start + i) * STEP_MS}ms` }}
            >
              <span className="font-ledger w-5 shrink-0 text-[11px] text-muted-foreground/60">
                {String(start + i).padStart(2, "0")}
              </span>
              <span className="font-display flex-1 text-[1.6rem] leading-[1.15] tracking-[-0.01em]">
                {item.name}
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 translate-y-1 text-muted-foreground/45 transition-transform group-active:translate-x-0.5 group-active:-translate-y-0"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  // Everything that has to be true only while the sheet is open lives here:
  // the page behind it must not scroll, Escape must close it and hand focus
  // back, Tab must stay inside it, and it must not survive the viewport
  // growing past md — where both the sheet and the button that closes it are
  // display:none and the lock would have no way out.
  useEffect(() => {
    if (!mobileMenuOpen) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const close = () => {
      setMobileMenuOpen(false)
      toggleRef.current?.focus()
    }

    // The sheet is hidden by a media query, not by state, so the state has to
    // listen to the same query the class does.
    const desktop = window.matchMedia("(min-width: 768px)")
    const onBreakpoint = () => {
      if (desktop.matches) setMobileMenuOpen(false)
    }
    desktop.addEventListener("change", onBreakpoint)

    // The sheet covers the page but is a sibling of it, so nothing stops the
    // browser tabbing on into content the user cannot see. Wrap the ring.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
        return
      }
      if (e.key !== "Tab") return

      const sheet = sheetRef.current
      const toggle = toggleRef.current
      if (!sheet || !toggle) return

      const ring = [
        toggle,
        ...Array.from(
          sheet.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ),
        ),
      ]
      const first = ring[0]
      const last = ring[ring.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previous
      desktop.removeEventListener("change", onBreakpoint)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)
  const ctaDelay = (features.length + pages.length + 2) * STEP_MS

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex gap-2 items-center py-1.5 text-xl font-semibold tracking-tight"
          >
            <Image
              src="/icon-192.png"
              alt="EasyShiftHQ"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span>EasyShiftHQ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <div className="relative group">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={featuresOpen}
                onClick={() => setFeaturesOpen((open) => !open)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
                <ChevronDown
                  className={`h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180 ${
                    featuresOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 group-hover:block group-focus-within:block ${
                  featuresOpen ? "block" : "hidden"
                }`}
                role="menu"
              >
                <div className="w-80 bg-card border border-border rounded-xl shadow-lg p-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      role="menuitem"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <p className="font-medium text-foreground">
                        {feature.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex rounded-full bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <TrialCTA>Start Free Trial</TrialCTA>
            </Button>

            {/* Mobile menu button */}
            <button
              ref={toggleRef}
              type="button"
              className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation.
          A full sheet of ledger paper rather than a strip pushed under the
          bar: the whole viewport below the header, ruled headings, entries
          set in the display serif and numbered down the left margin the way
          every other figure on this site is numbered. */}
      {mobileMenuOpen && (
        <div
          ref={sheetRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="anim-sheet bg-gridpaper fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-background md:hidden"
        >
          <nav className="grain container relative pb-14 pt-7">
            <SheetSection
              label="Features"
              items={features}
              start={1}
              onNavigate={closeMenu}
            />
            <SheetSection
              label="Company"
              items={pages}
              start={features.length + 1}
              onNavigate={closeMenu}
            />

            <div
              className="anim-rise mt-10"
              style={{ animationDelay: `${ctaDelay}ms` }}
            >
              <Button
                className="h-14 w-full rounded-full bg-foreground text-base text-background hover:bg-foreground/90"
                asChild
              >
                <TrialCTA onClick={closeMenu}>Start Free Trial</TrialCTA>
              </Button>
              <p className="font-ledger mt-3 text-center text-[11px] text-muted-foreground">
                14 days free · No credit card
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
