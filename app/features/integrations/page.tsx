import { Metadata } from "next"
import { Zap } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"
import { shareMetadata } from "@/lib/share-metadata"

const description =
  "One-click POS integration with Square, Toast, Clover, Shift4, Focus POS and Revel, plus secure bank connections. Self-serve setup."

export const metadata: Metadata = {
  title: "POS & Bank Integrations: Square, Toast, Clover",
  description,
  keywords: [
    "Square POS integration",
    "Toast POS integration",
    "Clover integration",
    "restaurant POS sync",
    "bank integration software",
    "multi-location restaurant management",
    "restaurant data integration",
    "POS data sync",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/integrations",
  },
  ...shareMetadata(
    "/features/integrations",
    "POS & Bank Integrations: Square, Toast, Clover | EasyShiftHQ",
    description,
  ),
}

const features = [
  {
    title: "Square POS",
    description:
      "Full integration with Square for automatic sales and payment sync.",
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
    description:
      "Payment processor integration for complete transaction visibility.",
    features: [
      "Payment data integration",
      "Transaction reconciliation",
      "Fee tracking",
      "Settlement reporting",
    ],
  },
  {
    title: "Focus POS",
    description: "Direct integration with Focus POS for daily sales sync.",
    features: [
      "Daily sales data sync",
      "Historical backfill import",
      "Multi-restaurant support",
      "Connection health testing",
    ],
  },
  {
    title: "Revel POS",
    description: "Sales and transaction sync from Revel Systems.",
    features: [
      "Daily transaction sync",
      "Bulk historical import",
      "Real-time webhook updates",
      "Connection health testing",
    ],
  },
  {
    title: "Sling Import",
    description: "Already scheduling in Sling? Bring your data with you.",
    features: [
      "Import employee schedules from Sling",
      "Import time punches and hours",
      "Bulk historical sync",
      "Switch without losing your history",
    ],
  },
  {
    title: "Bank Connections",
    description:
      "Secure bank connections powered by Stripe Financial Connections.",
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
      "Collaborator access (accountant, chef, inventory, operations)",
      "Custom collaborator roles with per-area permissions",
      "Email invitations and bulk onboarding",
    ],
  },
  {
    title: "Data Export",
    description: "Export your data in multiple formats for any purpose.",
    features: [
      "CSV export for spreadsheets",
      "PDF reports for stakeholders",
      "Payroll export (Gusto CSV, plus a standard CSV for any provider)",
      "Coming soon: QuickBooks, 7shifts integration",
    ],
  },
  {
    title: "AI Assistant",
    description:
      "Natural language queries about your business, available 24/7.",
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
  "Self-serve setup",
]

export default function IntegrationsPage() {
  return (
    <FeaturePageLayout
      badge="Integrations"
      mark="00"
      title="The loop needs two wires:"
      subtitle="your sales and your bank."
      description="Sales come in from the POS you already run. Money moves through the accounts you already have. Connect both once and every number on every other screen fills itself in."
      icon={<Zap className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      indexTitle={
        <>
          What we plug into{" "}
          <span className="italic text-primary">and what comes back.</span>
        </>
      }
      indexLede="Six point-of-sale systems, your bank, your locations, and your team — listed with exactly what each one syncs."
      benefitsTitle={
        <>
          Connected once,{" "}
          <span className="italic text-primary">then it stays connected.</span>
        </>
      }
      ctaTitle="Hook up the POS. The rest follows."
      ctaDescription="Pick your system, authorize it once, and the sales history backfills while you keep working."
      schemaUrl="https://easyshifthq.com/features/integrations"
    />
  )
}
