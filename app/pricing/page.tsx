import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Restaurant ops priced for indie operators. Starter $99, Growth $199, Pro $299. Free 14-day trial, no credit card.",
  alternates: {
    canonical: "https://easyshifthq.com/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const pricingFaqs = [
  {
    q: "Do I need a credit card to start the free trial?",
    a: "No. The 14-day free trial requires no credit card. You only add a payment method if you decide to continue after the trial.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes. You can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately; downgrades take effect at your next billing cycle.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data stays available in read-only mode for 30 days after cancellation. You can export everything to CSV at any time, including after cancellation.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing saves 17% on every tier. You can switch from monthly to annual at any time.",
  },
  {
    q: "I have multiple locations. How does pricing work?",
    a: "Each tier is priced per location. We offer automatic volume discounts: 5% off at 3-5 locations, 10% off at 6-10 locations, 15% off at 11+ locations.",
  },
  {
    q: "Which POS systems do you integrate with?",
    a: "Square, Toast, Clover, and Shift4 today, with daily automatic sync. More providers are added regularly — if you use a different POS, get in touch and we'll tell you our timeline.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero / Pricing Section */}
        <section className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Simple Pricing</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple. Transparent. Powerful.</h1>
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
                  <p className="text-sm text-muted-foreground mb-4">Daily P&amp;L and basic inventory tools for single-location restaurants</p>
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
                      "Print checks for payroll, vendors, draws on real check paper",
                      "Bank account connections + automated transaction sync",
                      "Auto-reconciliation: every check printed → expense logged → bank match",
                      "Customer invoicing & expense management",
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
              <h2 className="text-center text-lg font-semibold mb-2">Volume Discounts</h2>
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

        {/* FAQ Section */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Frequently Asked</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Pricing Questions</h2>
                <p className="text-xl text-muted-foreground">
                  The questions operators ask before they sign up.
                </p>
              </div>

              <div className="space-y-3">
                {pricingFaqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold list-none">
                      <span>{item.q}</span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Try it free for 14 days.
              </h2>
              <p className="text-xl text-background/70 leading-relaxed">
                No credit card. No contracts. Cancel anytime.
                <br />
                See your real profits — every single day.
              </p>
              <div className="flex justify-center pt-4">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
