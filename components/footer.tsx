import Link from "next/link"
import Image from "next/image"

const features = [
  { name: "Financial Management", href: "/features/financial-management" },
  { name: "Inventory Management", href: "/features/inventory-management" },
  { name: "Recipe & Menu", href: "/features/recipe-menu" },
  { name: "Operations", href: "/features/scheduling-payroll" },
  { name: "Integrations", href: "/features/integrations" },
]

const company = [
  { name: "Why Inventory Matters", href: "/why-inventory-matters" },
  { name: "Why Operations Matter", href: "/why-operations-matter" },
  { name: "Pricing", href: "/#pricing" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Contact", href: "mailto:contact@easyshifthq.com" },
]

const legal = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex gap-2 items-center text-lg font-semibold tracking-tight mb-4">
              <Image
                src="/icon-192.png"
                alt="EasyShiftHQ"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span>EasyShiftHQ</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Profit clarity for restaurant operators. See your real profits every day.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              {features.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EasyShiftHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://app.easyshifthq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
