import { Metadata } from "next"
import Link from "next/link"
import {
  PackageSearch,
  ArrowRight,
  Check,
  AlertTriangle,
  DollarSign,
  Clock,
  TrendingDown,
  Scan,
  Trash2,
  BarChart3,
  Smartphone,
  Zap,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturePageSchema, BreadcrumbSchema } from "@/components/structured-data"
import {
  InventoryStatsBanner,
  InventoryCostCalculator,
  ManualVsAutomatedComparison,
  inventoryStats,
} from "@/components/inventory-impact"

export const metadata: Metadata = {
  title: "Inventory Management - Real-Time Stock Tracking for Restaurants | EasyShiftHQ",
  description:
    "Reduce inventory loss by 18% with real-time stock tracking, AI-powered receipt scanning (OCR), waste management, and automatic POS deductions. Restaurants lose 2-10% of revenue to shrinkage — stop the bleeding.",
  keywords: [
    "restaurant inventory management",
    "real-time stock tracking",
    "AI receipt scanning",
    "restaurant waste management",
    "inventory control software",
    "food inventory tracking",
    "restaurant shrinkage prevention",
    "automated inventory deductions",
    "restaurant theft prevention",
    "food cost management",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/inventory-management",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/inventory-management",
    title: "Inventory Management - Stop Losing 2-10% of Revenue | EasyShiftHQ",
    description:
      "Real-time inventory tracking that catches theft, waste, and errors instantly. Save $30,000+ annually per location.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Inventory Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Management - Stop Losing 2-10% of Revenue | EasyShiftHQ",
    description:
      "Real-time inventory tracking that catches theft, waste, and errors instantly.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-Time Inventory Tracking",
    description:
      "Live stock levels updated automatically with every sale. No more guessing, no more theoretical numbers hiding real losses.",
    points: [
      "Live stock levels updated with every POS transaction",
      "Low stock alerts at custom reorder thresholds",
      "Theoretical vs actual variance analysis",
      "Multiple view modes with instant search",
    ],
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Counting in Minutes",
    description:
      "Replace 5-7 hours of weekly clipboard counting with fast mobile-based cycle counts that take minutes, not hours.",
    points: [
      "Count from phone, tablet, or desktop",
      "Barcode scanning with camera or scanner",
      "Photo documentation for verification",
      "Complete adjustment history and audit trail",
    ],
  },
  {
    icon: <Trash2 className="h-6 w-6" />,
    title: "Waste Tracking & Analysis",
    description:
      "10% of restaurant food is wasted before serving. Document, categorize, and analyze every loss to find patterns and stop the bleed.",
    points: [
      "Spoilage documentation with photos and notes",
      "Waste categorization and trend analysis",
      "Transfer management between locations",
      "Cost impact reporting per waste event",
    ],
  },
  {
    icon: <Scan className="h-6 w-6" />,
    title: "AI-Powered Receipt Scanning",
    description:
      "Scan vendor invoices with your phone camera. AI extracts items, prices, and quantities — eliminating manual data entry errors.",
    points: [
      "OCR reads vendor, date, items, and prices",
      "Automatic vendor detection from receipts",
      "Line item matching to your product catalog",
      "Cost updates from invoices automatically",
    ],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automated POS Deductions",
    description:
      "Every sale triggers recipe-based inventory deductions. You always know what you should have, making theft and waste instantly visible.",
    points: [
      "POS integration for automatic deductions",
      "Recipe-based ingredient usage tracking",
      "Real-time theoretical vs actual comparison",
      "Shrinkage detection alerts",
    ],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Multi-Location Benchmarking",
    description:
      "One dashboard shows variance, waste, and food cost across all locations. Spot which store needs attention and replicate winners.",
    points: [
      "Cross-location variance comparison",
      "Performance benchmarking dashboard",
      "Export reports as PDF or CSV",
      "Unified audit trail across all sites",
    ],
  },
]

const allFeaturePoints = features.flatMap((f) => f.points)

export default function InventoryManagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <FeaturePageSchema
        name="Inventory Management"
        description="Reduce inventory loss by 18% with real-time stock tracking, AI-powered receipt scanning, waste management, and automatic POS deductions."
        url="https://easyshifthq.com/features/inventory-management"
        features={allFeaturePoints}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Features", url: "https://easyshifthq.com/#features" },
          {
            name: "Inventory Management",
            url: "https://easyshifthq.com/features/inventory-management",
          },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <PackageSearch className="h-4 w-4" />
                <span>Inventory Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Stop Losing 2-10% of Revenue
                <br />
                <span className="text-muted-foreground">To Invisible Shrinkage</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Restaurants lose $20,000 to $100,000 per million in sales from theft, waste,
                spoilage, and errors. EasyShiftHQ gives you real-time visibility to catch losses
                the day they happen — not weeks later.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link
                    href="https://app.easyshifthq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-border"
                  asChild
                >
                  <Link href="/why-inventory-matters">See the Evidence</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <InventoryStatsBanner />

        {/* The Problem Narrative */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-sm font-medium text-destructive tracking-wide uppercase">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Your Inventory Is Lying to You
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you are relying on periodic manual counts and spreadsheets, the numbers you see
                  are already outdated. Between counts, theft goes unnoticed, waste goes unlogged,
                  and delivery shortages slip through. The average restaurant has a{" "}
                  <strong className="text-foreground">5% gap</strong> between what their food cost
                  should be and what it actually is.
                </p>
                <p>
                  On $2.5 million in sales, that 5% gap represents{" "}
                  <strong className="text-foreground">$125,000 in vanishing profit</strong>. And
                  because manual systems only catch problems weeks later, the window to investigate
                  and act has long closed.
                </p>
                <p>
                  <strong className="text-foreground">75% of inventory shrinkage</strong> comes from
                  employee theft — but most operators never have the real-time data to prove it. The
                  remaining losses come from spoilage, over-portioning, and simple human error in
                  record-keeping.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-5xl mx-auto">
              <InventoryCostCalculator />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
                The Solution
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Real-Time Visibility That Pays for Itself
              </h2>
              <p className="text-lg text-muted-foreground">
                Operators using inventory control software consistently report 2-10% profit
                increases. Here is exactly how EasyShiftHQ makes it happen.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manual vs Automated */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6 mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                The Comparison
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Manual Counting vs. Real-Time Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Managers spend 5-7 hours per week on manual inventory counts — and those counts are
                still riddled with errors and blind spots. Here is what changes when you switch to
                automated, real-time inventory management.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ManualVsAutomatedComparison />
            </div>
          </div>
        </section>

        {/* Time Savings Narrative */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-sm font-medium text-primary tracking-wide uppercase">
                    Time Savings
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Give Your Managers Back 25+ Hours a Month
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      At 5-7 hours per week, manual inventory counts consume{" "}
                      <strong className="text-foreground">over 300 hours per year</strong> of
                      manager time per location. That is time spent in the walk-in cooler with a
                      clipboard instead of on the floor training staff, engaging customers, and
                      driving sales.
                    </p>
                    <p>
                      With mobile cycle counts and automatic POS deductions, the same visibility
                      takes minutes per day. Your best people spend time on what actually grows
                      your business.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-destructive">5-7</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Hours per week manual counting
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-primary">Min</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Per day with mobile counts
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-destructive">17%</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Error rate with manual entry
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-primary">$14</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Return per $1 on waste reduction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                The Bottom-Line Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven results from operators who switched to real-time inventory management
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                "18% inventory loss reduction",
                "2.5% food cost savings",
                "2-10% profit increase",
                "17% fewer counting errors",
                "Real-time shrinkage alerts",
                "AI-powered receipt scanning",
                "Multi-location benchmarking",
                "Complete audit trails",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
                Stop the Silent Bleed. Start Seeing the Truth.
              </h2>
              <p className="text-lg text-background/70 mb-4 leading-relaxed">
                At $249/month per location, EasyShiftHQ typically saves operators 10-40x that
                amount in recovered inventory losses alone. That is not counting the manager time
                you get back.
              </p>
              <p className="text-base text-background/50 mb-8">
                Want the full data? Read our{" "}
                <Link
                  href="/why-inventory-matters"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  deep dive into the true cost of inventory loss
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link
                    href="https://app.easyshifthq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-background/20 text-background hover:bg-background/10"
                  asChild
                >
                  <Link href="/#pricing">See Pricing</Link>
                </Button>
              </div>
              <p className="text-sm text-background/50 mt-6">
                Set up in minutes &middot; No credit card required &middot; Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
