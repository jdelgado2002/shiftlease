import type { Metadata } from "next"
import Link from "next/link"
import { TrialCTA } from "@/components/trial-cta"
import { ArrowRight, Check, Zap, DollarSign, Heart, Building2, Library } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "EasyShiftHQ vs Restaurant365 | Honest Comparison",
  description:
    "Restaurant365 is built for enterprise restaurant groups. EasyShiftHQ is built for indie operators running 1–5 units. Here's where each one wins.",
  alternates: {
    canonical: "https://easyshifthq.com/vs/restaurant365",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const comparisonRows = [
  { dimension: "Best fit", us: "Indie operators, 1–5 units", them: "Enterprise restaurant groups, 50+ units" },
  { dimension: "Setup time", us: "15 minutes", them: "Implementation typically takes weeks" },
  { dimension: "Pricing transparency", us: "Public: $99 / $199 / $299 per location/mo", them: "Quote-based; not published" },
  { dimension: "Free trial", us: "14 days, no credit card", them: "Demo-led sales process" },
  { dimension: "Daily P&L visibility", us: "Real-time, every day", them: "Available, depth varies by tier" },
  { dimension: "Built-in scheduling", us: "Yes (Growth tier and up)", them: "Available as add-on" },
  { dimension: "Integrated check printing", us: "Yes (Pro tier)", them: "Limited" },
  { dimension: "Accounting depth", us: "Bank sync + transaction reconciliation; not a full ledger", them: "Full GL / AP / AR — strong here" },
  { dimension: "Multi-unit reporting", us: "Yes, with volume discounts", them: "Yes, designed for it" },
  { dimension: "POS integrations", us: "Square, Toast, Clover, Shift4", them: "Broad POS support including legacy systems" },
]

const easyShiftWins = [
  {
    icon: Zap,
    title: "You're running by next week, not next quarter",
    body: "Connect your POS in 15 minutes. No implementation team, no kickoff calls, no project plan. If you can finish a waiver of liability you can finish setup.",
  },
  {
    icon: DollarSign,
    title: "The price is on the website",
    body: "Starter $99, Growth $199, Pro $299 per location per month. Volume discounts kick in at 3, 6, and 11 locations. No quote, no \"contact sales,\" no pricing-by-negotiation.",
  },
  {
    icon: Heart,
    title: "Built by an operator running the same kind of shop you are",
    body: "Our founder runs a Cold Stone / Wetzel's Pretzels co-brand in San Antonio. Every feature has to survive a weekend at his store before it ships to you. The tool is shaped by indie reality, not enterprise procurement.",
  },
]

const restaurant365Wins = [
  {
    icon: Building2,
    title: "Enterprise scale and multi-entity reporting",
    body: "If you're running 50+ units across multiple legal entities with a finance team that needs deep cost allocation and intercompany reporting, Restaurant365 is purpose-built for that. We're not.",
  },
  {
    icon: Library,
    title: "Full GL / AP / AR accounting depth",
    body: "Restaurant365 is, at its core, an accounting platform. If you need a full general ledger, accounts payable, accounts receivable, and the audit trail expected by an enterprise CFO, that's their strength. EasyShiftHQ does bank sync, transaction categorization, and reconciliation — not a full ledger.",
  },
]

export default function VsRestaurant365Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-6">
                Honest Comparison
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                EasyShiftHQ <span className="text-muted-foreground">vs</span> Restaurant365
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Restaurant365 is the right choice if you&apos;re running an enterprise restaurant
                group with a finance team and a multi-month implementation budget. EasyShiftHQ
                is the right choice if you&apos;re running 1&ndash;5 locations and need profit
                visibility this week, not next quarter.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Side by Side</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How they actually compare</h2>
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <caption className="sr-only">
                      Side-by-side comparison of EasyShiftHQ and Restaurant365 across ten dimensions
                    </caption>
                    <thead className="bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Dimension
                        </th>
                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-foreground">
                          EasyShiftHQ
                        </th>
                        <th scope="col" className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                          Restaurant365
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {comparisonRows.map((row) => (
                        <tr key={row.dimension} className="align-top">
                          <th scope="row" className="px-6 py-4 text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {row.dimension}
                          </th>
                          <td className="px-6 py-4 text-sm text-foreground">{row.us}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.them}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where EasyShiftHQ wins */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Our strengths</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Where EasyShiftHQ wins</h2>
              <p className="text-lg text-muted-foreground">
                Three things we do that an enterprise tool genuinely can&apos;t match for a small operator.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {easyShiftWins.map((item) => (
                <Card key={item.title} className="border-0 bg-muted/50 hover:bg-muted transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Where Restaurant365 wins */}
        <section className="w-full py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">Where they win</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Where Restaurant365 wins
              </h2>
              <p className="text-lg text-muted-foreground">
                Two areas where Restaurant365 is genuinely a better fit. If either of these is your
                primary need, save yourself the trial — they&apos;re the right call.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {restaurant365Wins.map((item) => (
                <Card key={item.title} className="border bg-card">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Honest Bottom Line */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">The honest bottom line</h2>
                <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">If you&apos;re 1&ndash;5 units</strong> and want
                      profit clarity this week, EasyShiftHQ ships you faster, costs less, and is
                      shaped by an operator running your same kind of shop.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-6 w-6 text-foreground/40 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">If you&apos;re 50+ units</strong> with a CFO,
                      a controller, and a multi-month implementation budget, Restaurant365&apos;s
                      depth is worth the price tag.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 md:py-32 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Try EasyShiftHQ free for 14 days.
              </h2>
              <p className="text-xl text-background/70 leading-relaxed">
                No credit card. No demo required. No quote.
                <br />
                See your real profits — every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="rounded-full bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
                  asChild
                >
                  <TrialCTA>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </TrialCTA>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
                  asChild
                >
                  <Link href="/pricing">See full pricing</Link>
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
