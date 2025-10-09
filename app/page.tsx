import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  DollarSign,
  Link2,
  PackageSearch,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center text-xl font-bold">
            <CalendarCheck className="h-6 w-6 text-emerald-600" />
            <span>EasyShiftHQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#how-it-works" className="hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link href="#proof" className="hover:text-emerald-600 transition-colors">
              Results
            </Link>
            <Link href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  Trusted by Growing Restaurant Groups
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  See Your Restaurant's True Profits — Every Day
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  Stop guessing your margins. Connect your POS, inventory, and labor systems to reveal real-time food
                  cost, labor %, and shrinkage insights — all automatically.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link
                      href="https://app.easyshifthq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Start Your Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">See How It Works</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>15-Minute Setup</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
                <Image
                  src="/images/dashboard-new.png"
                  alt="EasyShiftHQ Dashboard"
                  width={1200}
                  height={800}
                  className="relative w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Data Is Scattered. Your Margins Are Disappearing.
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                If your sales data lives in one system, your supplier invoices in another, and your staff hours in a
                third — you're not alone. Most operators spend hours juggling spreadsheets, still unsure where profits
                go.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  title: "Disconnected Data Systems",
                  description: "POS, labor, and inventory tools don't talk to each other",
                },
                {
                  title: "Manual Inventory Counts",
                  description: "Hours spent on spreadsheets with missing or inaccurate items",
                },
                {
                  title: "Recipe Costs Out of Sync",
                  description: "Ingredient prices change but your menu costs don't update",
                },
                {
                  title: "Untracked Labor & Waste",
                  description: "No visibility into your true prime cost until it's too late",
                },
                {
                  title: "Delayed Reports",
                  description: "Waiting weeks for accountants to tell you what happened last month",
                },
                {
                  title: "Reactive Decisions",
                  description: "Making menu and staffing decisions based on outdated data",
                },
              ].map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                    <CardDescription>{problem.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">
                  See How We Solve This
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                All Your Systems, Talking to Each Other — Finally
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                We connect your POS, labor, and inventory tools to create a live, accurate daily P&L.
              </p>
            </div>

            {/* Feature 1: Unified Dashboard */}
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800">Unified Intelligence</Badge>
                <h3 className="text-3xl font-bold">Disconnected Data → Unified Dashboard</h3>
                <p className="text-lg text-muted-foreground">
                  Sync sales, payments, shifts, and inventory into one source of truth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>See COGS, labor, and profit in real time — not weeks later</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>AI-powered insights highlight critical issues before they become problems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Track performance trends across all your locations</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border shadow-xl bg-card">
                <Image
                  src="/images/dashboard-new.png"
                  alt="Unified Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Feature 2: Inventory Accuracy */}
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden border shadow-xl bg-card">
                <Image
                  src="/images/scanner.png"
                  alt="Inventory Scanner"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <Badge className="bg-emerald-100 text-emerald-800">Daily Accuracy</Badge>
                <h3 className="text-3xl font-bold">Inventory Blind Spots → Daily Accuracy</h3>
                <p className="text-lg text-muted-foreground">Barcode or Bluetooth scanning + AI variance reports.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Instantly detect shrinkage and waste trends</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Automated reorder alerts prevent stockouts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>OCR invoice scanning eliminates manual data entry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Recipe Profitability */}
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800">Recipe Intelligence</Badge>
                <h3 className="text-3xl font-bold">Unclear Food Costs → Recipe-Level Profitability</h3>
                <p className="text-lg text-muted-foreground">POS-linked recipes that auto-update ingredient prices.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Know your food cost % and profit margin daily</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Track recipe profitability by menu item</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Automatic cost updates when supplier prices change</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border shadow-xl bg-card">
                <Image
                  src="/images/recipes.png"
                  alt="Recipe Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Feature 4: Variance Intelligence */}
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden border shadow-xl bg-card">
                <Image
                  src="/images/variance-report.png"
                  alt="Variance Intelligence"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <Badge className="bg-emerald-100 text-emerald-800">Actionable Accountability</Badge>
                <h3 className="text-3xl font-bold">Shrink & Waste → Actionable Accountability</h3>
                <p className="text-lg text-muted-foreground">
                  AI flags high-variance items and suggests corrective actions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Reduce waste and theft with measurable improvements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Track variance trends over time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Get specific recommendations to improve accuracy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Integrations */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800">Seamless Connections</Badge>
                <h3 className="text-3xl font-bold">Manual Workflows → Automated Accuracy</h3>
                <p className="text-lg text-muted-foreground">
                  Connect with Square, Toast, 7shifts, and more. Data syncs automatically in real-time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Less admin, fewer errors, faster updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>One-click setup for all major restaurant tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>Real-time sync keeps everything up to date</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border shadow-xl bg-card">
                <Image
                  src="/images/integrations.png"
                  alt="Integrations"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-800">Simple, Transparent Pricing</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pricing That Scales With Your Business
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                Start with a free trial. Pay less per location as you grow. No setup fees, no hidden costs.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
              {/* Single Location Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Single Location</CardTitle>
                  <CardDescription>Perfect for independent restaurants</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$49.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">or $490/year (save $110)</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1 restaurant location</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Unlimited users</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Real-time daily P&L</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Recipe costing & management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Inventory tracking & variance reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">POS & labor integrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">AI-powered insights</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Multi-Unit Plan */}
              <Card className="relative border-2 border-emerald-600 shadow-xl">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-emerald-600 text-white px-6 py-1">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Multi-Unit</CardTitle>
                  <CardDescription>For growing restaurant groups</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$39.99</span>
                      <span className="text-muted-foreground">/location/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">or $390/location/year (save $90)</div>
                    <div className="text-sm font-semibold text-emerald-600 mt-2">2-3 locations</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">2-3 restaurant locations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Everything in Single Location</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cross-location analytics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Consolidated reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Inter-location transfers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Priority email support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Onboarding assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>For established restaurant chains</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$29.99</span>
                      <span className="text-muted-foreground">/location/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">or $290/location/year (save $70)</div>
                    <div className="text-sm font-semibold text-emerald-600 mt-2">4+ locations</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </Link>
                  </Button>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">4+ restaurant locations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Everything in Multi-Unit</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics & benchmarking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">API access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Phone & priority support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom integrations available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing FAQ */}
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">What's included in the free trial?</h4>
                    <p className="text-sm text-muted-foreground">
                      Full access to all features for 14 days. No credit card required to start. Connect your systems
                      and experience the platform risk-free.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I switch plans later?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! Upgrade or downgrade anytime. Your pricing automatically adjusts based on your number of
                      active locations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Are there any setup fees or long-term contracts?</h4>
                    <p className="text-sm text-muted-foreground">
                      No setup fees, no hidden costs, no long-term contracts. Pay monthly or save with annual billing.
                      Cancel anytime.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What integrations are included?</h4>
                    <p className="text-sm text-muted-foreground">
                      All plans include integrations with major POS systems (Square, Toast, Clover), scheduling tools
                      (7shifts, When I Work), and accounting software. Enterprise plans can request custom integrations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Run Profitably
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Link2 className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Unified Data Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All your systems connected — POS, inventory, labor, and accounting in one dashboard
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <PackageSearch className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Smart Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Barcode scanning, OCR invoices, and AI variance detection for accurate stock management
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Recipe Costing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Auto-updating recipe costs tied to your POS for real-time profitability tracking
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Daily P&L</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    See your true financial performance daily — food cost, labor %, and prime cost in real time
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart alerts and recommendations help you prevent problems before they impact profits
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Team Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Role-based permissions and audit trails ensure everyone stays accountable
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof / Results */}
        <section id="proof" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                From Spreadsheet Chaos to Profit Clarity
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl">
                Restaurants using our unified data platform have seen remarkable results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
              <Card className="text-center border-emerald-200">
                <CardHeader>
                  <div className="text-5xl font-bold text-emerald-600 mb-2">18%</div>
                  <CardTitle>Inventory Loss Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Cut waste and shrinkage with daily accuracy tracking</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-emerald-200">
                <CardHeader>
                  <div className="text-5xl font-bold text-emerald-600 mb-2">10+</div>
                  <CardTitle>Hours Saved Per Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Eliminate manual data entry and spreadsheet work</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-emerald-200">
                <CardHeader>
                  <div className="text-5xl font-bold text-emerald-600 mb-2">3-5%</div>
                  <CardTitle>Margin Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Better decisions with real-time financial visibility</CardDescription>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-xl font-bold text-emerald-600">SJ</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg italic text-foreground">
                      "We used to wait weeks for our accountant's reports. Now we see daily profits before lunch. This
                      platform helped us identify a 12% food cost variance we never knew existed."
                    </p>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Multi-Unit Operator, Chicago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Started in 3 Simple Steps
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold">Connect Your Tools</h3>
                <p className="text-muted-foreground">
                  Link your POS, labor scheduling, and accounting systems with one-click integrations
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold">Set Up Your Recipes</h3>
                <p className="text-muted-foreground">
                  Import your menu items and recipes. Our AI helps match them to your POS data
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold">Start Saving Money</h3>
                <p className="text-muted-foreground">
                  Watch your dashboard populate with real-time insights. Start making data-driven decisions today
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link
                  href="https://app.easyshifthq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Get Started Free — No Credit Card
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA / Contact Form */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge className="bg-emerald-100 text-emerald-800">Ready to Transform Your Operations?</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stop Losing Money to Guesswork
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Join hundreds of restaurant operators who've taken control of their margins with real-time data and
                  AI-powered insights.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-lg">Free 14-day trial — no credit card required</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-lg">Set up in 15 minutes with guided onboarding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-lg">Cancel anytime — no commitments, no hassle</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link
                      href="https://app.easyshifthq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Start Your Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Questions? We're Here to Help</CardTitle>
                  <CardDescription>Send us a message and our team will get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <WaitlistForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EasyShiftHQ. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
