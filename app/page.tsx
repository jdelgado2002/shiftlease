import {
  ArrowRight,
  CalendarCheck,
  Check,
  DollarSign,
  PackageSearch,
  Users,
  Zap,
  Target,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center text-xl font-semibold tracking-tight">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <CalendarCheck className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>EasyShiftHQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#problems" className="text-muted-foreground hover:text-foreground transition-colors">
              The Problem
            </Link>
            <Link href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
          </nav>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                <div className="flex-1 space-y-8">
                  <p className="text-sm font-medium text-primary tracking-wide uppercase">
                    Profit Clarity for Restaurant Operators
                  </p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
                    Stop Guessing.
                    <br />
                    <span className="text-muted-foreground">Start Knowing.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    See your real profits — every day. Not weeks later when it's too late to fix anything.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                      asChild
                    >
                      <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                        Get started — it's free
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
                  <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>15-minute setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section id="problems" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                Your Business Is Speaking. Your Systems Aren't Listening.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                POS, inventory, and labor live in separate worlds. Meanwhile, your profit disappears silently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto rounded-2xl overflow-hidden">
              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">1</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"I don't know if I made money today."</h3>
                    <p className="text-muted-foreground">
                      Most operators run blind day-to-day. You only learn the truth when the accountant closes the books
                      weeks later.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">2</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">
                      "Everyone has their own numbers… and none of them match."
                    </h3>
                    <p className="text-muted-foreground">
                      POS says one thing. Payroll says another. Inventory never lines up. You're stuck reconciling
                      realities manually.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">3</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"I'm working hard… but I don't feel in control."</h3>
                    <p className="text-muted-foreground">
                      You manage chaos instead of running a business. Always reacting. Never ahead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 md:p-10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-muted-foreground/30">4</span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">"I know I'm losing money… I just don't know where."</h3>
                    <p className="text-muted-foreground">
                      Shrinkage, waste, poor ordering, broken recipes — but no visibility into which is hurting you
                      most.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl font-medium max-w-2xl mx-auto">
                You don't have a data problem. You have a{" "}
                <span className="text-primary font-semibold">visibility problem</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Running Blind Is Exhausting.</h2>
              <p className="text-xl text-background/70 leading-relaxed">
                You didn't open a restaurant to chase spreadsheets. You opened it to build something real.
              </p>
              <div className="w-16 h-px bg-background/20 mx-auto"></div>
              <p className="text-2xl font-semibold text-primary">It's time to turn "hope" into certainty.</p>
            </div>
          </div>
        </section>

        <section id="solution" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Chaos Into Clarity</h2>
              <p className="text-xl text-muted-foreground">
                One place. All truth. What's working. What's leaking. What's costing you money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Daily Financial Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Know today's outcome before tomorrow starts. Profit shouldn't be a surprise — it should be visible
                    every day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">One Truth. One Dashboard.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your data shouldn't fight itself. POS, labor, and inventory finally speak the same language.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <PackageSearch className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Catch Loss Early</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Money doesn't disappear. It leaks. We find every leak — and show you how to fix it.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Menu Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cost updates the moment prices change. Know what sells — and what steals margin.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Variance reports highlight what's costing you. Profit loss is not a mystery anymore.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Team Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Let the system be the referee. Run on facts, not gut feelings. Build trust with transparency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-muted/30">
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
              <p className="text-center text-xl text-muted-foreground mt-12">
                From firefighter to operator. Regain control of your business.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Simple Pricing</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">One Price. Everything Included.</h2>
              <p className="text-xl text-muted-foreground">No setup fees. No hidden costs. No long-term contracts.</p>
            </div>

            <div className="max-w-lg mx-auto">
              <Card className="border-2 border-foreground overflow-hidden">
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-lg font-medium text-muted-foreground mb-4">Per Location</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-bold">$199</span>
                    <span className="text-xl text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">or $1,990/year (save $398)</p>
                </CardHeader>
                <CardContent className="pb-10">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base mb-8"
                    asChild
                  >
                    <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                      Start Your Free Trial
                    </Link>
                  </Button>
                  <div className="space-y-4">
                    {[
                      "Unlimited users per location",
                      "Real-time daily P&L",
                      "Recipe costing & management",
                      "Inventory tracking & variance reports",
                      "POS & labor integrations",
                      "AI-powered insights & alerts",
                      "Cross-location analytics",
                      "Dedicated onboarding assistance",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-2xl mx-auto mt-12">
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { locations: "1", price: "$199" },
                  { locations: "3", price: "$597" },
                  { locations: "5", price: "$995" },
                  { locations: "10", price: "$1,990" },
                ].map((tier) => (
                  <div key={tier.locations} className="p-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-bold">{tier.locations}</p>
                    <p className="text-xs text-muted-foreground mb-2">location{tier.locations !== "1" ? "s" : ""}</p>
                    <p className="text-sm font-medium">{tier.price}/mo</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get Started in 3 Steps</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold">Connect Your Tools</h3>
                <p className="text-muted-foreground">
                  Link your POS, labor, and accounting systems with one-click integrations.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold">Set Up Recipes</h3>
                <p className="text-muted-foreground">
                  Import your menu items. Our AI helps match them to your POS data automatically.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold">See Your Truth</h3>
                <p className="text-muted-foreground">
                  Watch your dashboard populate with real-time insights. Your financial analyst — every day.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
                asChild
              >
                <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
                  Get Started Free — No Credit Card
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "We used to wait weeks for our accountant's reports. Now we see daily profits before lunch. This
                platform helped us identify a 12% food cost variance we never knew existed."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">SJ</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Multi-Unit Operator, Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Run Your Restaurant — Don't Let It Run You.
                </h2>
                <p className="text-xl text-background/70 leading-relaxed">
                  Profit clarity for operators who hate accounting. Financial truth, daily.
                </p>
                <div className="space-y-4">
                  {[
                    "Free 14-day trial — no credit card required",
                    "Set up in 15 minutes with guided onboarding",
                    "Cancel anytime — no commitments",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                </div>
              </div>

              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle>Questions? We're Here to Help</CardTitle>
                  <CardDescription>Send us a message and our team will get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <WaitlistForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-primary">
                <CalendarCheck className="h-3 w-3 text-primary-foreground" />
              </div>
              <span>EasyShiftHQ</span>
            </div>
            <nav className="flex gap-6">
              <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/terms">
                Terms
              </Link>
              <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/privacy">
                Privacy
              </Link>
              <Link
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="mailto:contact@easyshifthq.com"
              >
                Contact
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EasyShiftHQ</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
