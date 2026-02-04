import { AlertTriangle, TrendingDown, DollarSign, Clock, Users, BarChart3, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Key statistics from industry research
export const inventoryStats = {
  shrinkageRange: "2-10%",
  shrinkageLow: 2,
  shrinkageHigh: 10,
  shrinkageTypical: 3,
  theftPercentage: 75,
  theftCostBillions: 20,
  wasteBeforePlate: 10,
  acceptableShrinkage: 2,
  foodCostVarianceAverage: 5,
  managerHoursPerWeek: "5-7",
  errorReduction: 17,
  profitIncrease: "2-10%",
  foodCostReduction: "2.5%",
}

export function InventoryStatsBanner() {
  return (
    <section className="w-full border-y border-border bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          <div className="py-10 px-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-destructive">{inventoryStats.shrinkageRange}%</div>
            <p className="text-sm text-muted-foreground mt-1">Revenue lost to shrinkage</p>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-destructive">${inventoryStats.theftCostBillions}B</div>
            <p className="text-sm text-muted-foreground mt-1">Annual industry theft loss</p>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-destructive">{inventoryStats.wasteBeforePlate}%</div>
            <p className="text-sm text-muted-foreground mt-1">Food wasted before serving</p>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">{inventoryStats.profitIncrease}%</div>
            <p className="text-sm text-muted-foreground mt-1">Profit increase with controls</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InventoryCostCalculator() {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
      <h3 className="text-xl font-semibold mb-6 text-center">What Shrinkage Costs Your Restaurant</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-2">$1M Annual Revenue</p>
          <p className="text-3xl font-bold text-destructive">$30,000</p>
          <p className="text-sm text-muted-foreground mt-1">Lost at 3% shrinkage</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-2">$2.5M Annual Revenue</p>
          <p className="text-3xl font-bold text-destructive">$125,000</p>
          <p className="text-sm text-muted-foreground mt-1">Lost at 5% variance</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-2">Multi-Unit (5 locations)</p>
          <p className="text-3xl font-bold text-destructive">$150,000+</p>
          <p className="text-sm text-muted-foreground mt-1">Potential annual loss</p>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Each 1% of food cost overage equals ~$10,000 lost per $1M in sales
      </p>
    </div>
  )
}

export function InventoryProblemsGrid() {
  const problems = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Over-Portioning & Inconsistent Serving",
      description: "When cooks serve larger portions than recipes call for, unrecorded variances drive up actual food usage and cost.",
      stat: "Silent margin erosion"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Spoilage & Expiration",
      description: "Without proper tracking, food spoils unnoticed. Improper FIFO rotation and over-ordering lead to thousands in spoilage losses.",
      stat: "10% food wasted"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Employee Theft & Pilferage",
      description: "From bartenders under-reporting liquor to kitchen staff taking product out the back door. Without tracking, these losses go unnoticed.",
      stat: "75% of shrinkage"
    },
    {
      icon: <XCircle className="h-6 w-6" />,
      title: "Administrative Errors",
      description: "Manual record-keeping leads to mistakes — transposed digits, missed entries, vendor delivery shortages slipping through.",
      stat: "Hidden data errors"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Untracked Waste",
      description: "Food burned, spilled, or prepped incorrectly gets thrown out. Without logging, these incidents accumulate as unknown food cost.",
      stat: "Zero visibility"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Delayed Problem Detection",
      description: "With spreadsheets, you might not realize a theft or error occurred until weeks later when manual reports are compiled.",
      stat: "Weeks of blind spots"
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((problem, index) => (
        <div 
          key={index}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 text-destructive">
            {problem.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
            {problem.stat}
          </span>
        </div>
      ))}
    </div>
  )
}

export function ManualVsAutomatedComparison() {
  const comparisons = [
    {
      aspect: "Counting Time",
      manual: "5-7 hours per week",
      automated: "Minutes with mobile app",
      icon: <Clock className="h-5 w-5" />
    },
    {
      aspect: "Error Rate",
      manual: "High — missed items, transcription errors",
      automated: "17% fewer errors and overstocking",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      aspect: "Count Frequency",
      manual: "Monthly (delays problem detection)",
      automated: "Daily/weekly cycle counts",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      aspect: "Problem Detection",
      manual: "Discovered weeks later",
      automated: "Real-time alerts same day",
      icon: <TrendingDown className="h-5 w-5" />
    },
    {
      aspect: "Multi-Location",
      manual: "Separate books, nightmare to consolidate",
      automated: "One dashboard, benchmark all stores",
      icon: <Users className="h-5 w-5" />
    },
  ]

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3 border-b border-border">
        <div className="p-4 md:p-6 bg-muted/50 font-semibold">Aspect</div>
        <div className="p-4 md:p-6 bg-destructive/5 font-semibold text-center">Manual Tracking</div>
        <div className="p-4 md:p-6 bg-primary/5 font-semibold text-center">With EasyShiftHQ</div>
      </div>
      {comparisons.map((item, index) => (
        <div key={index} className="grid grid-cols-3 border-b border-border last:border-b-0">
          <div className="p-4 md:p-6 flex items-center gap-3 bg-muted/30">
            <span className="text-muted-foreground">{item.icon}</span>
            <span className="font-medium text-sm md:text-base">{item.aspect}</span>
          </div>
          <div className="p-4 md:p-6 flex items-center justify-center text-center bg-destructive/5">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive flex-shrink-0 hidden md:block" />
              <span className="text-sm text-muted-foreground">{item.manual}</span>
            </div>
          </div>
          <div className="p-4 md:p-6 flex items-center justify-center text-center bg-primary/5">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 hidden md:block" />
              <span className="text-sm font-medium">{item.automated}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ROICaseStudies() {
  const caseStudies = [
    {
      title: "Multi-Unit Fast Food Franchise",
      company: "24-Location Taco John's Franchisee",
      result: "2.5% food cost reduction",
      detail: "In the first year after implementing integrated inventory management. Expected additional 1.5% savings in year two.",
      savings: "$125,000+ annual savings",
    },
    {
      title: "Restaurant Management Platform Study",
      company: "Industry Analysis",
      result: "2-10% profit increase",
      detail: "Operators who conduct regular inventory and use control software consistently report significant bottom-line improvement.",
      savings: "Recovered losses",
    },
    {
      title: "Food Waste Reduction",
      company: "Multi-Unit Chain Operators",
      result: "20%+ waste reduction",
      detail: "Modern inventory systems directly target food waste through improved forecasting, rotation, and portion control.",
      savings: "$14 value per $1 saved",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <div key={index} className="bg-card border border-border rounded-2xl p-6">
          <p className="text-sm font-medium text-primary mb-2">{study.company}</p>
          <h3 className="text-xl font-bold mb-3">{study.result}</h3>
          <p className="text-muted-foreground text-sm mb-4">{study.detail}</p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm font-semibold text-primary">{study.savings}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function InventoryImpactHero() {
  return (
    <section className="w-full py-20 md:py-28 bg-foreground text-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">The Hidden Cost of Poor Inventory</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Every Day Without Inventory Controls
            <br />
            <span className="text-background/70">Is Money You'll Never Get Back</span>
          </h2>
          <p className="text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">
            Restaurant operators lose 2-10% of revenue to shrinkage — from theft, waste, spoilage, and errors. 
            For a $1M restaurant, that's $20,000 to $100,000 vanishing annually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
              asChild
            >
              <Link href="/features/inventory-management">
                See How We Stop It
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-background/20 text-background hover:bg-background/10"
              asChild
            >
              <Link href="/why-inventory-matters">Learn the Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InventoryBenchmarkTable() {
  const metrics = [
    { metric: "Inventory shrinkage (total loss)", figure: "2-10% of revenue lost to waste, theft. 3% shrink = ~$30K loss per $1M sales" },
    { metric: "Portion due to employee theft", figure: "~75% — costing ~$20B annually industry-wide" },
    { metric: "Food wasted (never served)", figure: "~10% of food in average restaurant wasted before reaching plate" },
    { metric: "Acceptable shrinkage (best-in-class)", figure: "< 2% of sales. Higher is a red flag for loss control" },
    { metric: "Average actual vs ideal food cost gap", figure: "5% of sales — on $2.5M, that's $125K vanishing" },
    { metric: "Impact of 1% food cost reduction", figure: "~$10,000 saved annually per $1M in sales" },
  ]

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-2 border-b border-border bg-muted/50">
        <div className="p-4 md:p-6 font-semibold">Metric</div>
        <div className="p-4 md:p-6 font-semibold">Industry Figure / Impact</div>
      </div>
      {metrics.map((item, index) => (
        <div key={index} className="grid grid-cols-2 border-b border-border last:border-b-0">
          <div className="p-4 md:p-6 font-medium text-sm">{item.metric}</div>
          <div className="p-4 md:p-6 text-sm text-muted-foreground">{item.figure}</div>
        </div>
      ))}
    </div>
  )
}

export function InventoryQuickFacts() {
  const facts = [
    { number: "$30K", label: "Lost annually at 3% shrinkage on $1M revenue" },
    { number: "75%", label: "Of shrinkage comes from employee theft" },
    { number: "5-7 hrs", label: "Manager time wasted weekly on manual counting" },
    { number: "5%", label: "Average gap between ideal and actual food cost" },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {facts.map((fact, index) => (
        <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-primary">{fact.number}</p>
          <p className="text-sm text-muted-foreground mt-2">{fact.label}</p>
        </div>
      ))}
    </div>
  )
}
