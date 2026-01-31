import {
  ArrowRight,
  CalendarCheck,
  Check,
  PackageSearch,
  Users,
  Target,
  LineChart,
  Calculator,
  BookOpen,
  BrainCircuit,
  Shield,
  Wallet,
  Clock,
  Receipt,
  ChefHat,
  Zap,
  Building2,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WaitlistForm } from "@/components/waitlist-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featureCategories = [
  {
    icon: <Wallet className="h-5 w-5" />,
    title: "Financial Management",
    description: "Real-time P&L, bank connections, and automated transaction categorization",
    href: "/features/financial-management",
    highlights: ["Live P&L Dashboard", "Bank Account Sync", "AI Categorization"],
  },
  {
    icon: <PackageSearch className="h-5 w-5" />,
    title: "Inventory Management",
    description: "Live stock tracking, OCR receipt scanning, and waste documentation",
    href: "/features/inventory-management",
    highlights: ["Real-Time Tracking", "Receipt OCR Scanning", "Low Stock Alerts"],
  },
  {
    icon: <ChefHat className="h-5 w-5" />,
    title: "Recipe & Menu",
    description: "Recipe costing, profitability analysis, and menu engineering tools",
    href: "/features/recipe-menu",
    highlights: ["Recipe Costing", "Profit Analysis", "POS Integration"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scheduling & Payroll",
    description: "Employee scheduling, time tracking, and payroll management",
    href: "/features/scheduling-payroll",
    highlights: ["Drag-Drop Scheduling", "Time Clock", "Payroll Export"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "POS Integrations",
    description: "Connect Square, Toast, Clover, and Shift4 for automatic sales sync",
    href: "/features/integrations",
    highlights: ["Square & Toast", "Clover & Shift4", "Auto Daily Sync"],
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Multi-Location",
    description: "Manage unlimited restaurants with consolidated reporting",
    href: "/features/integrations",
    highlights: ["Unlimited Locations", "Quick Switching", "Roll-up Reports"],
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-6">
                Profit Clarity for Restaurant Operators
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Stop Guessing.
                <br />
                <span className="text-muted-foreground">Start Knowing.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                See your real profits — <span className="font-semibold text-foreground">every single day.</span>
                <br />
                Not weeks later when it's too late to fix anything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                  asChild
                >
                  <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-border bg-transparent"
                  asChild
                >
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required · 15-minute setup</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-border bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              <div className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">18%</div>
                <p className="text-sm text-muted-foreground mt-1">Inventory loss reduction</p>
              </div>
              <div className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
                <p className="text-sm text-muted-foreground mt-1">Hours saved per week</p>
              </div>
              <div className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">3-5%</div>
                <p className="text-sm text-muted-foreground mt-1">Margin improvement</p>
              </div>
              <div className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">15 min</div>
                <p className="text-sm text-muted-foreground mt-1">Setup time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                Your Business Is Talking.
                <br />
                <span className="text-muted-foreground">Your Systems Aren't Listening.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                POS, inventory, labor, and banking all live in separate worlds.
                <br />
                Meanwhile, your profit is leaking quietly in the background.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto rounded-2xl overflow-hidden">
              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">1</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"I don't actually know if I made money today."</h3>
                    <p className="text-muted-foreground">
                      Most operators run blind. You only discover the truth weeks later — when nothing can be changed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">2</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"Everyone has numbers… and none of them match."</h3>
                    <p className="text-muted-foreground">
                      POS says one thing. Payroll says another. Inventory tells a third story. You're left reconciling
                      reality manually.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">3</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"I'm working nonstop… but nothing feels in control."</h3>
                    <p className="text-muted-foreground">
                      You're reacting instead of running. Managing chaos instead of a business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">4</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">
                      "I know I'm bleeding money — I just don't know where."
                    </h3>
                    <p className="text-muted-foreground">
                      Waste, theft, ordering mistakes, broken pricing. All hidden. All costly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 space-y-4">
              <p className="text-2xl font-medium">You don't have a data problem.</p>
              <p className="text-2xl font-bold">
                You have a <span className="text-primary">visibility</span> problem.
              </p>
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Running blind is exhausting.</h2>
              <p className="text-xl text-background/70 leading-relaxed">
                You didn't open a restaurant to chase spreadsheets.
                <br />
                You opened it to build something meaningful.
              </p>
              <div className="w-16 h-px bg-background/20 mx-auto"></div>
              <p className="text-2xl font-semibold text-primary">
                It's time to turn <span className="italic">hope</span> into <span className="italic">certainty</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Chaos Into Clarity</h2>
              <p className="text-xl text-muted-foreground">
                One place. One truth.
                <br />
                What happened today. What's leaking. What's actually making you money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Daily Financial Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Know today's outcome before tomorrow starts. Profit should never be a surprise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">One Dashboard. One Reality.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">POS, labor, inventory — finally speaking the same language.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <PackageSearch className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Inventory That Tells The Truth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every sale updates stock automatically. No theoretical numbers. No silent shrinkage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Labor Without Payroll Panic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Know your labor cost before payroll hits. Control the biggest expense in your business.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Clean Books, All Year</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bank transactions sync automatically. Reports stay tax-ready. Always.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Menu Profitability, Daily</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recipe costs adjust the moment supplier prices change. Know what sells — and what erodes margin.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI That Thinks In Margins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Variance detection. Loss alerts. Clear recommendations, not noise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Trust Without Tension</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Facts replace assumptions. Accountability without confrontation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section id="features" className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Everything You Need</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Complete Restaurant Operations
              </h2>
              <p className="text-xl text-muted-foreground">
                From financial tracking to employee scheduling — all in one platform designed for restaurant operators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {featureCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Control Section */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
                Control Feels Like This
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">
                    <span className="font-semibold">Awareness</span> instead of anxiety
                  </p>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">
                    <span className="font-semibold">Data</span> instead of hope
                  </p>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">
                    <span className="font-semibold">Action</span> instead of reaction
                  </p>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">
                    <span className="font-semibold">Profit</span> instead of mystery
                  </p>
                </div>
              </div>
              <p className="text-center text-xl mt-12">
                <span className="font-semibold">From firefighter to operator.</span>
                <br />
                <span className="text-muted-foreground">Regain control.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Simple Pricing</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple. Transparent. Powerful.</h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your restaurant.
                <br />
                No contracts. No setup fees. No surprise invoices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <Card className="border overflow-hidden">
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-lg font-semibold mb-2">Starter</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">Daily P&L and basic inventory tools for single-location restaurants</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">$99</span>
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Save 17% with annual billing</p>
                </CardHeader>
                <CardContent className="pb-8">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full h-12 text-base mb-6"
                    asChild
                  >
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Select Starter
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    {[
                      "Daily P&L Dashboard",
                      "Basic Inventory Tracking",
                      "Labor Cost Tracking",
                      "POS Integration (Square, Toast, Clover)",
                      "Recipe Management",
                      "Multi-User Access",
                      "Email Support",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Growth Plan - Recommended */}
              <Card className="border-2 border-primary overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  Recommended
                </div>
                <CardHeader className="text-center pb-6 pt-12">
                  <CardTitle className="text-lg font-semibold mb-2">Growth</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">AI-powered automation and intelligence for growing restaurants</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">$199</span>
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Save 17% with annual billing</p>
                </CardHeader>
                <CardContent className="pb-8">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base mb-6"
                    asChild
                  >
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Select Growth
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Everything in Starter, plus:</p>
                    {[
                      "Financial Intelligence Dashboard",
                      "Inventory Automation (OCR)",
                      "Recipe & Menu Profitability Analytics",
                      "Employee Scheduling",
                      "AI Alerts & Anomaly Detection",
                      "AI Transaction Categorization",
                      "Priority Support",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border overflow-hidden">
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-lg font-semibold mb-2">Pro</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">Complete financial operations with Stripe-powered integrations</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">$299</span>
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Save 17% with annual billing</p>
                </CardHeader>
                <CardContent className="pb-8">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full h-12 text-base mb-6"
                    asChild
                  >
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Select Pro
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Everything in Growth, plus:</p>
                    {[
                      "AI Assistant",
                      "Bank Account Connections",
                      "Automated Transaction Sync",
                      "Customer Invoicing",
                      "Expense Management",
                      "Asset & Equipment Tracking",
                      "Payroll Reports & Export",
                      "VIP Support",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Volume Discounts */}
            <div className="max-w-2xl mx-auto mt-16">
              <h3 className="text-center text-lg font-semibold mb-2">Volume Discounts</h3>
              <p className="text-center text-sm text-muted-foreground mb-6">Save more when you manage multiple locations</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { locations: "3-5", discount: "5%" },
                  { locations: "6-10", discount: "10%" },
                  { locations: "11+", discount: "15%" },
                ].map((tier) => (
                  <div key={tier.locations} className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-2xl font-bold text-primary">{tier.discount}</p>
                    <p className="text-sm text-muted-foreground">{tier.locations} locations</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Up and Running in 3 Steps</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold">Connect Your Systems</h3>
                <p className="text-muted-foreground">POS, labor, banking — one-click integrations.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold">Set Up Recipes</h3>
                <p className="text-muted-foreground">AI maps food items to real inventory and pricing.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold">Start Seeing Truth</h3>
                <p className="text-muted-foreground">Live margins. Real costs. Every day.</p>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                asChild
              >
                <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-8">
                "We used to wait weeks for financial reports. Now we know by lunch if yesterday made money."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">SJ</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Multi-Unit Operator — Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Run Your Restaurant.
                  <br />
                  <span className="text-background/70">Don't Let It Run You.</span>
                </h2>
                <p className="text-xl text-background/70 leading-relaxed">
                  Profit clarity for operators who hate accounting.
                  <br />
                  Financial truth — daily.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Free 14 days", "No credit card", "Cancel anytime", "Guided setup"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <p className="text-base">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
                    asChild
                  >
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle>Questions? We're here.</CardTitle>
                  <CardDescription>We reply within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <WaitlistForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
