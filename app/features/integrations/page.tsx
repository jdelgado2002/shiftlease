import { Metadata } from "next"
import { Zap } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Square, Toast, Clover, Shift4, and your bank accounts for automatic data sync and unified restaurant management.",
  openGraph: {
    title: "Integrations | EasyShiftHQ",
    description: "Connect Square, Toast, Clover, Shift4, and your bank accounts for automatic data sync and unified restaurant management.",
  },
}

const features = [
  {
    title: "Square POS",
    description: "Full integration with Square for automatic sales and payment sync.",
    features: [
      "Automatic daily sales sync",
      "Item-level sales detail",
      "Payment breakdown (cash, card, other)",
      "Historical data import (up to 90 days)",
      "Real-time updates",
    ],
  },
  {
    title: "Toast POS",
    description: "Import order and payment data automatically from Toast.",
    features: [
      "Order data import",
      "Payment type breakdown",
      "Daily transaction sync",
      "Menu item mapping",
      "Historical import support",
    ],
  },
  {
    title: "Clover POS",
    description: "Transaction and item-level data integration with Clover.",
    features: [
      "Transaction data sync",
      "Item-level sales tracking",
      "Payment method breakdown",
      "Automatic daily updates",
    ],
  },
  {
    title: "Shift4 Payments",
    description: "Payment processor integration for complete transaction visibility.",
    features: [
      "Payment data integration",
      "Transaction reconciliation",
      "Fee tracking",
      "Settlement reporting",
    ],
  },
  {
    title: "Bank Connections",
    description: "Secure bank connections powered by Stripe Financial Connections.",
    features: [
      "Bank-level encryption",
      "Real-time balance sync",
      "Automatic transaction import",
      "Multi-bank support",
      "Checking, savings, and credit accounts",
    ],
  },
  {
    title: "Multi-Location Support",
    description: "Manage unlimited restaurants with consolidated reporting.",
    features: [
      "Unlimited restaurant locations",
      "Quick switching between locations",
      "Location-specific data isolation",
      "Roll-up reporting across all locations",
      "Volume discounts available",
    ],
  },
  {
    title: "Team Management",
    description: "Centralized employee records with role-based access control.",
    features: [
      "Centralized employee directory",
      "Role-based permissions (owner, manager, staff)",
      "Collaborator access (accountant, chef)",
      "Email invitations and bulk onboarding",
    ],
  },
  {
    title: "Data Export",
    description: "Export your data in multiple formats for any purpose.",
    features: [
      "CSV export for spreadsheets",
      "PDF reports for stakeholders",
      "Payroll export (ADP, Gusto, Paychex)",
      "Coming soon: QuickBooks, 7shifts integration",
    ],
  },
  {
    title: "AI Assistant",
    description: "Natural language queries about your business, available 24/7.",
    features: [
      "Ask questions in plain English",
      "Instant insights about sales and costs",
      "Contextual recommendations",
      "Always available from chat bubble",
    ],
  },
]

const benefits = [
  "One-click POS setup",
  "Automatic daily sync",
  "Bank-level security",
  "Multi-location support",
  "Role-based access",
  "Export anywhere",
  "AI assistant",
  "15-minute setup",
]

export default function IntegrationsPage() {
  return (
    <FeaturePageLayout
      badge="Integrations"
      title="Connect Everything."
      subtitle="See Everything."
      description="POS, banking, and your whole team — connected in minutes. One-click integrations bring all your data together automatically."
      icon={<Zap className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      ctaTitle="Connect Your Systems Today"
      ctaDescription="Set up in 15 minutes. POS, banking, and team — all connected and syncing automatically."
    />
  )
}
