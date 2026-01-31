import { Metadata } from "next"
import { Wallet } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Financial Management - Real-Time P&L Dashboard for Restaurants",
  description: "Know your restaurant profits daily with real-time P&L tracking, automated bank connections, AI-powered transaction categorization, and tax-ready financial statements. Stop waiting weeks for reports.",
  keywords: [
    "restaurant financial management",
    "real-time P&L dashboard",
    "restaurant profit tracking",
    "automated bookkeeping",
    "restaurant accounting software",
    "food cost tracking",
    "restaurant bank integration",
    "financial statements for restaurants",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/financial-management",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/financial-management",
    title: "Financial Management - Real-Time P&L Dashboard | EasyShiftHQ",
    description: "Know your restaurant profits daily with real-time P&L tracking, automated bank connections, and tax-ready financial statements.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Financial Management Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Management - Real-Time P&L Dashboard | EasyShiftHQ",
    description: "Know your restaurant profits daily with real-time P&L tracking and automated bookkeeping.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    title: "Real-Time Dashboard",
    description: "See your financial health at a glance with live updates throughout the day.",
    features: [
      "Live P&L overview with net revenue, COGS, and labor costs",
      "Critical alerts for cash runway and prime cost thresholds",
      "Monthly performance trends with historical comparison",
      "Interactive cashflow visualization (Sankey chart)",
      "Break-even tracking with daily analysis",
      "AI-powered insights and recommendations",
    ],
  },
  {
    title: "Bank Account Management",
    description: "Connect all your accounts securely and see your complete financial picture.",
    features: [
      "Secure connections via Stripe Financial Connections",
      "Real-time balance sync across all accounts",
      "Multi-account support (checking, savings, credit)",
      "Total balance aggregation across institutions",
      "Banking snapshot on your dashboard",
    ],
  },
  {
    title: "Transaction Management",
    description: "AI-powered categorization and bulk management tools save hours every week.",
    features: [
      "Automatic daily transaction import",
      "AI-powered category suggestions based on patterns",
      "Bulk categorization with one click",
      "Smart rules for recurring transactions",
      "Search and filter by payee, amount, date, or category",
      "CSV and PDF export for accountants",
    ],
  },
  {
    title: "Chart of Accounts",
    description: "Pre-configured for restaurant operations with full customization options.",
    features: [
      "Restaurant-specific category structure",
      "Organized hierarchy for revenue, COGS, and expenses",
      "Real-time balances for each account",
      "Custom account creation for your operation",
    ],
  },
  {
    title: "Financial Statements",
    description: "Generate professional reports for any date range, always tax-ready.",
    features: [
      "Automated Income Statement (P&L) generation",
      "Balance Sheet with assets, liabilities, and equity",
      "Cash Flow Statement tracking",
      "Trial Balance for accounting verification",
      "Period comparison across time ranges",
    ],
  },
  {
    title: "Outflow Analysis",
    description: "Understand exactly where your money is going with detailed breakdowns.",
    features: [
      "Spending breakdown by category",
      "Top vendor analysis",
      "Revenue breakdown by category",
      "Unmapped item tracking and alerts",
    ],
  },
]

const benefits = [
  "Know your profit daily",
  "Tax-ready reports always",
  "Hours saved on bookkeeping",
  "AI-powered categorization",
  "Bank-level security",
  "Real-time bank sync",
  "Accountant-ready exports",
  "Multi-account support",
]

export default function FinancialManagementPage() {
  return (
    <FeaturePageLayout
      badge="Financial Management"
      title="Know Your Numbers."
      subtitle="Every Single Day."
      description="Stop waiting weeks for financial reports. See your real P&L, track every transaction, and keep your books tax-ready automatically."
      icon={<Wallet className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      ctaTitle="Get Financial Clarity Today"
      ctaDescription="Connect your bank accounts and start seeing your real profits in minutes, not weeks."
      schemaUrl="https://easyshifthq.com/features/financial-management"
    />
  )
}
