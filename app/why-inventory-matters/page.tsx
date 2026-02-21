import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, PackageSearch, DollarSign, AlertTriangle, Clock, Users, TrendingDown, BarChart3, CheckCircle, XCircle, Shield, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import {
  InventoryStatsBanner,
  InventoryCostCalculator,
  InventoryProblemsGrid,
  ManualVsAutomatedComparison,
  ROICaseStudies,
  InventoryBenchmarkTable,
} from "@/components/inventory-impact"

export const metadata: Metadata = {
  title: "Why Inventory Management Matters - The True Cost of Inventory Loss | EasyShiftHQ",
  description:
    "Restaurants lose 2-10% of revenue to shrinkage from theft, waste, and errors. Learn how real-time inventory management saves $30,000+ annually per location.",
  keywords: [
    "restaurant inventory loss",
    "food cost management",
    "restaurant shrinkage",
    "inventory theft prevention",
    "food waste reduction",
    "restaurant profit optimization",
    "inventory management ROI",
    "real-time inventory tracking",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/why-inventory-matters",
  },
  openGraph: {
    type: "article",
    url: "https://easyshifthq.com/why-inventory-matters",
    title: "The True Cost of Poor Inventory Management in Restaurants",
    description:
      "Restaurants lose 2-10% of revenue to shrinkage. Learn how real-time inventory management prevents theft, reduces waste, and saves thousands.",
    siteName: "EasyShiftHQ",
  },
}

function NarrativeSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-start gap-4 mb-6">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight pt-1">{title}</h2>
      </div>
      <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

export default function WhyInventoryMattersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Why Inventory Matters", url: "https://easyshifthq.com/why-inventory-matters" },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive mb-6">
                <AlertTriangle className="h-4 w-4" />
                <span>The Silent Profit Killer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Your Restaurant Is Losing
                <br />
                <span className="text-destructive">Thousands Every Month</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
                Industry data shows restaurants lose 2-10% of total revenue to inventory shrinkage.
                For every $1 million in sales, that is $20,000 to $100,000 vanishing from waste,
                theft, spoilage, and errors — often undetected for weeks.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                This page breaks down exactly where the money goes, why manual methods fail, and
                how modern inventory management pays for itself many times over.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link href="/features/inventory-management">
                    See Our Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-border"
                  asChild
                >
                  <Link href="#the-cost">Read the Evidence</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Banner */}
        <InventoryStatsBanner />

        {/* Section 1: The Scale of the Problem */}
        <section id="the-cost" className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="01" title="The Scale of the Problem">
              <p>
                In the restaurant industry, <strong className="text-foreground">inventory shrinkage</strong> refers
                to the gap between what you should have on your shelves and what is actually there. The National
                Restaurant Association and multiple industry studies consistently report that restaurants lose{" "}
                <strong className="text-foreground">2% to 10% of total revenue</strong> to shrinkage.
              </p>
              <p>
                At a seemingly modest 3% shrinkage rate, a restaurant doing $1 million in annual sales is
                losing <strong className="text-foreground">$30,000 per year</strong>. Scale that to a $2.5 million
                operation, and the typical 5% variance between ideal and actual food cost represents{" "}
                <strong className="text-foreground">$125,000 in vanishing profit</strong>.
              </p>
              <p>
                For multi-unit operators, the numbers become staggering. A five-location group each doing
                $1 million could be hemorrhaging <strong className="text-foreground">$150,000 or more annually</strong>{" "}
                — enough to fund new equipment, expansion, or simply keep the lights on during slow months.
              </p>
            </NarrativeSection>

            <div className="mt-12">
              <InventoryCostCalculator />
            </div>
          </div>
        </section>

        {/* Section 2: Where the Money Goes */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="02" title="Where the Money Actually Goes">
              <p>
                Shrinkage is not a single problem — it is a web of interconnected losses, each one hard to see
                on its own. Understanding these categories is the first step toward plugging the leaks.
              </p>
              <p>
                <strong className="text-foreground">Employee theft accounts for roughly 75% of all shrinkage</strong>,
                costing the restaurant industry an estimated $20 billion annually. This is not just about
                someone walking out with a case of beer. It includes bartenders over-pouring and
                pocketing the difference, kitchen staff giving away food to friends, and cashiers voiding
                legitimate sales.
              </p>
              <p>
                Then there is <strong className="text-foreground">spoilage and expiration</strong> — about 10% of all
                food purchased by a restaurant is wasted before it ever reaches a customer plate. Improper
                FIFO rotation, over-ordering, and inconsistent storage temperatures all contribute. Add in{" "}
                <strong className="text-foreground">over-portioning</strong>, where cooks serve larger portions than
                recipes call for, and <strong className="text-foreground">administrative errors</strong> from manual
                record-keeping, and you have a perfect storm of invisible losses.
              </p>
            </NarrativeSection>

            <div className="mt-16">
              <InventoryProblemsGrid />
            </div>
          </div>
        </section>

        {/* Section 3: Why Manual Methods Fail */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="03" title="Why Spreadsheets and Clipboards Fail">
              <p>
                Most restaurants still rely on manual inventory processes — clipboard counts, Excel
                spreadsheets, and end-of-month reconciliation. These methods are not just tedious, they are{" "}
                <strong className="text-foreground">structurally incapable</strong> of catching problems in time.
              </p>
              <p>
                A typical manager spends <strong className="text-foreground">5 to 7 hours per week</strong> on
                manual inventory counts alone. That is time pulled away from training staff, improving
                customer experience, or actually running the restaurant. And despite all that effort, manual
                counts are riddled with errors — transposed numbers, missed items, inconsistent units.
              </p>
              <p>
                The worst part? Manual counts only happen weekly or monthly, meaning a theft pattern or
                spoilage issue could go{" "}
                <strong className="text-foreground">undetected for weeks</strong> before anyone
                notices. By then, the damage is done. The food is gone. The money is gone. And the person
                responsible may be long gone too.
              </p>
              <p>
                With spreadsheets, there is no real-time visibility, no automatic alerts when stock
                levels drop unexpectedly, and no way to benchmark performance across multiple locations
                without hours of manual consolidation.
              </p>
            </NarrativeSection>

            <div className="mt-16">
              <ManualVsAutomatedComparison />
            </div>
          </div>
        </section>

        {/* Section 4: The ROI of Real-Time Inventory */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="04" title="The ROI of Getting It Right">
              <p>
                The business case for automated inventory management is not theoretical — it is proven
                and documented across thousands of restaurant operations.
              </p>
              <p>
                A 24-location Taco John's franchisee reported a{" "}
                <strong className="text-foreground">2.5% food cost reduction in year one</strong> after
                implementing integrated inventory management, with an expected additional 1.5% savings
                in year two. At their revenue scale, that translated to{" "}
                <strong className="text-foreground">over $125,000 in annual savings</strong>.
              </p>
              <p>
                Industry analysis consistently shows that operators who conduct regular inventory and
                use control software report{" "}
                <strong className="text-foreground">2-10% profit increases</strong>. Automated counting
                reduces errors and overstocking by 17%. And the time savings alone — replacing 5-7
                hours of manual counting with minutes of mobile-based counts — frees managers to focus
                on what actually drives revenue.
              </p>
              <p>
                Perhaps most compelling: waste reduction programs that target food waste through better
                inventory controls are estimated to return{" "}
                <strong className="text-foreground">$14 in value for every $1 invested</strong>. That
                makes inventory management one of the highest-ROI investments a restaurant can make.
              </p>
            </NarrativeSection>

            <div className="mt-16">
              <ROICaseStudies />
            </div>
          </div>
        </section>

        {/* Section 5: Key Benchmarks */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="05" title="Industry Benchmarks You Should Know">
              <p>
                Every restaurant operator should know these numbers. They are the difference between
                running a profitable operation and slowly bleeding out without realizing it. If your
                shrinkage is above 2% of revenue, you have a control problem that is costing you real
                money every single day.
              </p>
              <p>
                The most important number to track:{" "}
                <strong className="text-foreground">
                  every 1% reduction in food cost saves approximately $10,000 per $1 million in sales
                </strong>
                . That is not a projection — it is arithmetic. And with proper inventory controls, most
                operators find they have been leaking far more than 1%.
              </p>
            </NarrativeSection>

            <div className="mt-12">
              <InventoryBenchmarkTable />
            </div>
          </div>
        </section>

        {/* Section 6: What Real-Time Inventory Actually Means */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="06" title="What Real-Time Inventory Actually Means">
              <p>
                "Real-time" is not marketing jargon — it is a fundamentally different approach to
                knowing what is in your restaurant. Here is what changes when you move from periodic
                counts to continuous visibility:
              </p>
            </NarrativeSection>

            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Automatic POS Deductions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every sale automatically decreases your theoretical inventory based on recipe
                  ingredients. You always know what you should have, making variance analysis instant
                  rather than a monthly nightmare.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Instant Anomaly Alerts</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If actual stock diverges from theoretical by more than your threshold, you know
                  today — not three weeks from now. This catches theft patterns, spoilage issues,
                  and delivery shortages while you can still act on them.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Minutes, Not Hours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mobile-based cycle counts take minutes instead of hours. Your managers spend time
                  on the floor coaching staff and driving sales, not hunched over a clipboard in
                  the walk-in cooler.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Multi-Location Benchmarking</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  One dashboard shows variance, waste, and food cost across all your locations. You
                  can instantly spot which store needs attention and which one is running tight —
                  then replicate the winners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Bottom Line CTA */}
        <section className="w-full py-20 md:py-28 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm font-medium text-background/70 mb-6">
                <Lightbulb className="h-4 w-4" />
                <span>The Bottom Line</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                Every Day Without Inventory Controls Is Money You Will Never Recover
              </h2>
              <p className="text-lg text-background/70 leading-relaxed mb-4">
                The math is simple. If your restaurant does $1 million in sales and your shrinkage
                is 5% instead of the best-in-class 2%, you are losing $30,000 per year that you
                did not have to lose.
              </p>
              <p className="text-lg text-background/70 leading-relaxed mb-8">
                EasyShiftHQ costs $249 per month. The inventory controls alone typically save operators
                10-40x that amount in recovered losses. That is not a cost — it is the best investment
                your restaurant will make this year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-background/20 text-background hover:bg-background/10"
                  asChild
                >
                  <Link href="/features/inventory-management">Explore Inventory Features</Link>
                </Button>
              </div>
              <p className="text-sm text-background/50 mt-6">
                14-day free trial &middot; No credit card required &middot; Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
