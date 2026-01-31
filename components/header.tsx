"use client"

import { CalendarCheck, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const features = [
  { name: "Financial Management", href: "/features/financial-management", description: "Real-time P&L, banking, and transaction management" },
  { name: "Inventory Management", href: "/features/inventory-management", description: "Live stock tracking, OCR scanning, and waste management" },
  { name: "Recipe & Menu", href: "/features/recipe-menu", description: "Recipe costing, profitability analysis, and menu engineering" },
  { name: "Scheduling & Payroll", href: "/features/scheduling-payroll", description: "Employee scheduling, time tracking, and payroll management" },
  { name: "Integrations", href: "/features/integrations", description: "POS systems, banking, and third-party connections" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex gap-2 items-center text-xl font-semibold tracking-tight">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <CalendarCheck className="h-4 w-4 text-primary-foreground" />
          </div>
          <span>EasyShiftHQ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div 
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              Features
              <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-80 bg-card border border-border rounded-xl shadow-lg p-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <p className="font-medium text-foreground">{feature.name}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground px-2">Features</p>
              {features.map((feature) => (
                <Link
                  key={feature.name}
                  href={feature.href}
                  className="block px-2 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {feature.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <Link
                href="/#pricing"
                className="block px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/#how-it-works"
                className="block px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
            </div>
            <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
              <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
