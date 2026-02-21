import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  Users,
  DollarSign,
  Shield,
  Lightbulb,
  CalendarX,
  Timer,
  Banknote,
  Scale,
  TrendingDown,
  CheckCircle,
  XCircle,
  Building2,
  FileWarning,
  Gavel,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Why Operations Matter - The Cost of Missing Restaurant Operations Systems | EasyShiftHQ",
  description:
    "Labor is ~1/3 of sales, but profit is only 3-4%. Scheduling failures, time theft, tip disputes, and payroll errors silently drain restaurants. Learn why operations systems are a profit lever.",
  keywords: [
    "restaurant operations cost",
    "restaurant labor management",
    "scheduling compliance",
    "time clock fraud",
    "tip pooling compliance",
    "restaurant payroll errors",
    "predictive scheduling laws",
    "restaurant profit optimization",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/why-operations-matter",
  },
  openGraph: {
    type: "article",
    url: "https://easyshifthq.com/why-operations-matter",
    title: "The Cost of Missing Restaurant Operations Systems",
    description:
      "Labor is ~1/3 of sales, profit is only 3-4%. Learn why scheduling, time clock, tip pooling, and payroll systems are loss prevention, not admin convenience.",
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

function StatCard({ value, label, subtext }: { value: string; label: string; subtext: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 text-center">
      <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{subtext}</p>
    </div>
  )
}

function CostLeakCard({
  icon,
  title,
  cost,
  description,
}: {
  icon: React.ReactNode
  title: string
  cost: string
  description: string
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm font-bold text-destructive">{cost}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

export default function WhyOperationsMatterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Why Operations Matter", url: "https://easyshifthq.com/why-operations-matter" },
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
                <span>The Margin You Cannot Afford to Lose</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Labor Is a Third of Sales.
                <br />
                <span className="text-destructive">Profit Is Only 3-4%.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
                A one-point swing in labor cost as a percentage of sales can represent a large
                fraction of a restaurant{"'"}s remaining profit. Scheduling failures, time theft, tip disputes,
                and payroll errors are not admin headaches — they are direct profit leaks.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                This page breaks down the four operational leaks that silently drain chain restaurants,
                the compliance risks that make them dangerous, and how connected operations systems
                stop the bleeding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link href="/features/scheduling-payroll">
                    See Our Operations Features
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
        <section className="w-full py-12 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">~33%</p>
                <p className="text-sm text-background/70">of sales goes to labor</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">2.8-4%</p>
                <p className="text-sm text-background/70">pre-tax profit margin</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">$5,864</p>
                <p className="text-sm text-background/70">cost to replace one hourly employee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">110%</p>
                <p className="text-sm text-background/70">annual hourly turnover rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Financial Sensitivity */}
        <section id="the-cost" className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="01" title="Why a 1% Swing Matters More Than You Think">
              <p>
                Industry benchmarking from the National Restaurant Association puts restaurant labor at roughly{" "}
                <strong className="text-foreground">one-third of sales</strong>. In 2024, survey medians were
                36.5% for full-service operators and 31.7% for limited-service operators.
              </p>
              <p>
                At the same time, <strong className="text-foreground">median pre-tax income was just 2.8% for
                full-service and 4.0% for limited-service</strong>. This means a one-point improvement in labor
                efficiency does not just help margins — it can represent 25-35% of your entire profit.
              </p>
              <p>
                This is the core argument for operations systems: at restaurant-industry margins, even small
                operational leaks are disproportionately expensive. Scheduling volatility, payroll mistakes,
                and perceived unfairness don{"'"}t just create soft problems — they show up as{" "}
                <strong className="text-foreground">measurable replacement cost and execution drag</strong>.
              </p>
              <p>
                With limited-service hourly turnover still exceeding 110% and management churn elevated, the
                Cornell hospitality research estimate of{" "}
                <strong className="text-foreground">$5,864 to replace one hourly employee</strong> turns
                scheduling quality and payroll accuracy into retention levers, not just admin features.
              </p>
            </NarrativeSection>

            <div className="mt-16 max-w-5xl mx-auto">
              <h3 className="text-lg font-semibold text-center mb-8">The Profit Sensitivity Problem</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                  value="36.5%"
                  label="Full-Service Labor Cost"
                  subtext="Median labor cost as % of sales for full-service operators (NRA 2024)"
                />
                <StatCard
                  value="2.8%"
                  label="Full-Service Pre-Tax Profit"
                  subtext="When labor is 13x your profit margin, every inefficiency compounds"
                />
                <StatCard
                  value="4.1 pts"
                  label="Labor Gap: Profitable vs. Unprofitable"
                  subtext="Profitable limited-service operators had 30.0% labor costs vs. 34.1% for those reporting losses"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Four Labor Leaks */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="02" title="The Four Labor Leaks Draining Your Restaurants">
              <p>
                Operations tooling — Scheduling, Time Clock, Tip Pooling, Payroll — is better framed as{" "}
                <strong className="text-foreground">loss prevention, risk containment, and throughput protection</strong>,
                not admin convenience. Each pillar addresses a specific, measurable cost leak that chain operators
                already recognize.
              </p>
            </NarrativeSection>

            <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <CostLeakCard
                icon={<CalendarX className="h-5 w-5 text-destructive" />}
                title="Scheduling Failures"
                cost="4.4% drop in check size from chaos scheduling"
                description="Weak scheduling hits four ways: direct labor variance, revenue loss from last-minute changes, regulatory penalties, and accelerated turnover. INFORMS research found real-time schedule extensions reduced check size by 4.4% for affected servers."
              />
              <CostLeakCard
                icon={<Timer className="h-5 w-5 text-destructive" />}
                title="Time Clock Leakage"
                cost="2.2% of gross payroll from buddy punching alone"
                description="Inaccuracies at the time clock compound into payroll errors, overtime miscalculations, and tip misallocations. Nucleus Research found eliminating buddy punching saved 2.2% of gross payroll — often larger than a restaurant's entire pre-tax margin."
              />
              <CostLeakCard
                icon={<Scale className="h-5 w-5 text-destructive" />}
                title="Tip Pooling Disputes"
                cost="$3.6M settlement (Rosa Mexicano)"
                description="When tip pooling is informal or inconsistent across stores, chains face legal liability and retention damage. Employers cannot keep employees' tips, and managers generally may not participate in tip pools — violations trigger costly settlements."
              />
              <CostLeakCard
                icon={<Banknote className="h-5 w-5 text-destructive" />}
                title="Payroll Errors"
                cost="$291 average correction cost per error"
                description="One in five payrolls contains errors (EY). High employee counts multiplied by frequent pay cycles create a significant recurring correction burden, plus IRS deposit penalties escalate from 2% to 15% based on lateness."
              />
            </div>
          </div>
        </section>

        {/* Section 3: Scheduling Deep Dive */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="03" title="Scheduling: Where Revenue Meets Labor Cost">
              <p>
                The cost of weak scheduling hits chains in four ways:{" "}
                <strong className="text-foreground">direct labor variance, revenue loss, regulatory penalties, and turnover</strong>.
              </p>
              <p>
                In the NRA{"'"}s analysis of 2024 operations data, limited-service operators who reported a
                pre-tax profit had median labor costs around <strong className="text-foreground">30.0% of sales</strong>,
                while those reporting a loss showed <strong className="text-foreground">34.1%</strong> — a 4.1-point swing
                in an expense that already consumes a third of revenue.
              </p>
              <p>
                But scheduling does not only affect cost. A peer-reviewed research program highlighted by INFORMS
                analyzed ~1.5 million transactions from 25 restaurants and found that{" "}
                <strong className="text-foreground">"real-time scheduling" — changing hours during a shift with
                no advance notice — was associated with an average 4.4% drop in check size</strong> for affected
                servers, with meaningful profit impacts in low-margin restaurants.
              </p>
              <p>
                Chaos scheduling can look like "flexibility," but it translates into lower upsell effort,
                lower guest spend, and weaker unit economics.
              </p>
              <p>
                Schedule instability is also a <strong className="text-foreground">retention accelerant</strong>.
                A peer-reviewed study using Shift Project panel data on retail and food-service workers finds
                that exposure to schedule instability is a strong predictor of turnover. For chains already
                facing 110%+ annual hourly turnover, schedule quality becomes an economic variable, not a culture perk.
              </p>
            </NarrativeSection>

            {/* Compliance Warning */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Gavel className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Compliance Surface Area Is Growing</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Scheduling has become a regulatory risk. NYC requires fast-food employers to provide schedules
                      14 days in advance and pay premiums for changes. Chicago has similar predictability-pay and
                      rest protections under its Fair Workweek rules.
                    </p>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <p className="text-sm font-bold text-foreground mb-1">Real-World Consequence</p>
                      <p className="text-sm text-muted-foreground">
                        Starbucks agreed to a <strong className="text-foreground">$38.9 million settlement</strong> after
                        a city investigation alleged 500,000+ violations of NYC fair scheduling rules over three years,
                        with payments to over 15,000 workers plus penalties and costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How EasyShiftHQ Helps */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">How EasyShiftHQ Scheduling Helps</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Weekly totals with scheduled hours and estimated labor cost breakdowns support managing labor as the largest controllable expense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Conflict detection against availability and time-off prevents avoidable last-minute edits that degrade revenue and performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Publish/unpublish with change history creates an audit trail for jurisdictions requiring advance-notice documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Recurring shifts, role/position filters, and controlled status transitions reduce manager-by-manager variability across locations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Time Clock Deep Dive */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="04" title="Time Clock: Where Payroll Leakage Begins">
              <p>
                In restaurants, inaccuracies at the time clock compound: they become payroll errors, overtime
                miscalculations, tip misallocations, and compliance exposure. For chains, they also become{" "}
                <strong className="text-foreground">class-action-sized risk</strong> because the same process
                repeats across dozens or hundreds of locations.
              </p>
              <p>
                A core, measurable leakage is time theft. Nucleus Research found that eliminating buddy punching
                saved organizations an average of{" "}
                <strong className="text-foreground">2.2% of gross payroll</strong>. Even without biometrics, this
                benchmark provides an order-of-magnitude estimate for what weak punch controls cost — often more
                than a restaurant{"'"}s entire pre-tax margin.
              </p>
              <p>
                The U.S. Department of Labor requires FLSA-covered employers to keep accurate wage-and-hour
                records, with payroll records retained at least three years and time cards retained two years.
                When time records are incomplete, <strong className="text-foreground">"reconstructed" payroll
                is hard to defend</strong>.
              </p>
              <p>
                Overtime is a frequent failure mode when timekeeping is fragmented. If punches are missing,
                breaks are not tracked, or open shifts are not resolved, payroll engines either mispay employees
                or managers "round and guess" — both create back-pay exposure.
              </p>
            </NarrativeSection>

            {/* Settlement callout */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <FileWarning className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Real-World Consequence</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A class action involving McDonald{"'"}s franchise operators in Oregon resulted in a settlement
                      of up to <strong className="text-foreground">$3.55 million</strong> over alleged unpaid meal
                      periods shorter than 30 minutes. The point for chains is not the specific fact pattern — it is
                      that break compliance + accurate time capture can become an expensive, repeatable liability
                      when the process is weak.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How EasyShiftHQ Helps */}
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">How EasyShiftHQ Time Clock Helps</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Punch verification (photo/GPS/device), kiosk mode, and PIN policy reduce ambiguous timecards that force payroll guesswork</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Open-session detection and manager force clock-out prevent runaway punches from inflating hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Anomaly surfacing, punch editing with notes, and CSV export create traceability aligned to FLSA recordkeeping expectations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Import/mapping workflow with quality warnings (overlaps, missing employees) normalizes punch data from disparate sources across locations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Tip Pooling Deep Dive */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="05" title="Tip Pooling: Compensation, Compliance, and Culture">
              <p>
                Tips are simultaneously compensation, compliance, and culture. When tip pooling is informal,
                undocumented, or inconsistently applied across stores, chains face two kinds of cost:{" "}
                <strong className="text-foreground">legal liability and retention damage</strong>.
              </p>
              <p>
                At the federal level, the DOL provides explicit guidance that employers cannot keep employees{"'"} tips,
                and managers/supervisors generally may not keep other employees{"'"} tips. The DOL{"'"}s Opinion Letter
                FLSA2025-1 further emphasizes that an employer may not allow managers or supervisors to keep any
                portion of other employees{"'"} tips, including from an employer-mandated tip pool.
              </p>
              <p>
                The financial consequences show up in settlements. Rosa Mexicano agreed to pay{" "}
                <strong className="text-foreground">$3.6 million</strong> to settle litigation related to
                tip-sharing practices. These cases are costly because they frequently involve back pay, attorneys{"'"} fees,
                and operational disruption — especially when the same policy was applied system-wide.
              </p>
              <p>
                There is also a second-order cost chains often underestimate:{" "}
                <strong className="text-foreground">tip disputes undermine trust immediately</strong> because
                they affect take-home pay. Persistent mistrust translates into faster turnover in a workforce
                where replacement cost is already $5,864 per employee.
              </p>
            </NarrativeSection>

            {/* How EasyShiftHQ Helps */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">How EasyShiftHQ Tip Pooling Helps</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Configurable share methods and participants move tip handling from ad hoc to documented and defensible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{"Draft → Approve → Archive (lock)"} lifecycle with audit trail on changes and reopenings creates compliance traceability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Payout recording and dispute handling with resolution notes protect against back-pay claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Payroll inclusion only from approved/archived records (excluding drafts) prevents running payroll off unapproved math</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Payroll Deep Dive */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="06" title="Payroll: Where Every Error Compounds">
              <p>
                Payroll failures are rarely "just payroll." In restaurants, errors typically cascade into
                staff churn, emergency off-cycle payments, and compliance risk, because pay is frequent and
                wage components — overtime, tips, break deductions — are variable.
              </p>
              <p>
                A widely cited EY survey found that{" "}
                <strong className="text-foreground">one in five payrolls contains errors</strong>, and each error
                costs <strong className="text-foreground">$291 on average to correct</strong>. For chains with
                high employee counts and frequent pay cycles, this creates a significant, recurring correction burden.
              </p>
              <p>
                Tax compliance adds hard penalties. The IRS explains that deposit penalties escalate with
                lateness: <strong className="text-foreground">2% for 1-5 days late, 5% for 6-15 days late,
                10% for more than 15 days late, and 15% in certain notice-and-demand situations</strong>.
                A breakdown in the time data to payroll calculation to cashflow timing chain can trigger
                avoidable penalties alongside internal rework.
              </p>
              <p>
                There is also a "time tax." 7shifts reported that{" "}
                <strong className="text-foreground">67% of operators spend more than 100 hours per year
                processing payroll manually</strong>. Integration between timekeeping, tips, and payroll
                is the key lever.
              </p>
            </NarrativeSection>

            {/* How EasyShiftHQ Helps */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">How EasyShiftHQ Payroll Helps</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Calculates regular and overtime (40+ hours/week at 1.5x) automatically, removing manual calculation errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Excludes break time from worked hours and integrates tips from approved/archived tip splits only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Surfaces incomplete punch anomalies in the payroll view, enabling upstream resolution before export</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Reduces the $291-per-error correction cycle and prevents the employee-trust damage from missed or incorrect pay</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: The Connected System Advantage */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="07" title="Why Connected Systems Beat Point Solutions">
              <p>
                The real value is not any single module — it is the{" "}
                <strong className="text-foreground">closed loop between all four</strong>. When scheduling
                feeds the time clock, the time clock feeds tip pooling, and tip pooling feeds payroll, you
                eliminate the re-keying, reconciliation, and "payroll chaos weeks" that cause errors, churn,
                and compliance exposure.
              </p>
              <p>
                Disconnected systems create data gaps. A manager builds a schedule in one tool, employees
                punch in on another, tips are calculated on a spreadsheet, and payroll is assembled manually
                from three different exports. Every handoff is an error opportunity.
              </p>
            </NarrativeSection>

            <div className="mt-16 max-w-5xl mx-auto">
              {/* Comparison Table */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3">
                  <div className="p-5 bg-muted/50 font-semibold text-sm border-b border-border">&nbsp;</div>
                  <div className="p-5 bg-muted/50 font-semibold text-sm text-center border-b border-l border-border">
                    Disconnected Tools
                  </div>
                  <div className="p-5 bg-primary/5 font-semibold text-sm text-center border-b border-l border-border text-primary">
                    EasyShiftHQ Connected System
                  </div>
                </div>
                {[
                  {
                    label: "Schedule to Time Clock",
                    disconnected: "Manual comparison; variance found days later",
                    connected: "Schedule feeds clock; conflicts caught in real time",
                  },
                  {
                    label: "Punches to Tip Splits",
                    disconnected: "Hours copied from one export to another spreadsheet",
                    connected: "Verified hours flow directly into tip pool calculations",
                  },
                  {
                    label: "Tips to Payroll",
                    disconnected: "Manager re-keys tip amounts; errors in transcription",
                    connected: "Only approved/archived tip splits feed payroll automatically",
                  },
                  {
                    label: "Error Discovery",
                    disconnected: "Found when employees complain after payday",
                    connected: "Anomalies surfaced before payroll export",
                  },
                  {
                    label: "Audit Trail",
                    disconnected: "Scattered across emails, texts, and paper notes",
                    connected: "Single system with change history, notes, and timestamps",
                  },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3">
                    <div className="p-4 text-sm font-medium border-b border-border">{row.label}</div>
                    <div className="p-4 text-sm text-muted-foreground border-b border-l border-border flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      {row.disconnected}
                    </div>
                    <div className="p-4 text-sm text-muted-foreground border-b border-l border-border flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {row.connected}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Numbers-Forward Framing */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <NarrativeSection number="08" title="The Numbers That Should Keep Operators Up at Night">
              <p>
                If you want one page to make the case for operations systems, these are the benchmarks
                that matter. Every one maps to a specific, preventable failure mode.
              </p>
            </NarrativeSection>

            <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
                  <div className="p-5 font-semibold text-sm">Benchmark</div>
                  <div className="p-5 font-semibold text-sm border-l border-border">Source</div>
                  <div className="p-5 font-semibold text-sm border-l border-border">What It Means</div>
                </div>
                {[
                  {
                    benchmark: "Labor is ~33% of sales; profit is 2.8-4%",
                    source: "National Restaurant Association (2024)",
                    meaning: "Operational drift is disproportionately expensive",
                  },
                  {
                    benchmark: "$5,864 to replace one hourly employee",
                    source: "Cornell Hospitality Research / NRA",
                    meaning: "Scheduling quality and payroll accuracy are retention levers",
                  },
                  {
                    benchmark: "2.2% of gross payroll lost to buddy punching",
                    source: "Nucleus Research",
                    meaning: "Often exceeds the restaurant's entire pre-tax margin",
                  },
                  {
                    benchmark: "4.4% check-size drop from real-time scheduling",
                    source: "INFORMS / Peer-reviewed study (~1.5M transactions)",
                    meaning: "Scheduling chaos reduces revenue, not only increases labor",
                  },
                  {
                    benchmark: "$291 average cost to correct one payroll error",
                    source: "EY Survey",
                    meaning: "High frequency + high volume = significant recurring burden",
                  },
                  {
                    benchmark: "$38.9M scheduling settlement (Starbucks / NYC)",
                    source: "NYC Fair Workweek Enforcement",
                    meaning: "Compliance fines can be enormous under predictive scheduling regimes",
                  },
                  {
                    benchmark: "67% of operators spend 100+ hours/year on manual payroll",
                    source: "7shifts",
                    meaning: "Integration between timekeeping, tips, and payroll is the key lever",
                  },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 border-b border-border last:border-b-0">
                    <div className="p-4 text-sm font-medium">{row.benchmark}</div>
                    <div className="p-4 text-sm text-muted-foreground border-l border-border">{row.source}</div>
                    <div className="p-4 text-sm text-muted-foreground border-l border-border">{row.meaning}</div>
                  </div>
                ))}
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
                Every Payroll Cycle Without Controls Is Money and Trust You Will Not Get Back
              </h2>
              <p className="text-lg text-background/70 leading-relaxed mb-4">
                When labor is a third of sales and profit is under 4%, you cannot afford scheduling chaos,
                time theft, tip disputes, or payroll errors. Each one erodes margin. Together, they can
                erase it entirely.
              </p>
              <p className="text-lg text-background/70 leading-relaxed mb-8">
                EasyShiftHQ connects scheduling, time clock, tip pooling, and payroll into a single
                system where data flows forward and anomalies are caught before they become losses.
                That is not a convenience — it is loss prevention for your largest expense.
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
                  variant="ghost"
                  className="rounded-full h-14 px-8 text-base border border-background/60 text-background hover:bg-background/10 hover:text-background"
                  asChild
                >
                  <Link href="/features/scheduling-payroll">Explore Operations Features</Link>
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
