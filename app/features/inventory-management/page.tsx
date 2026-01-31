import { Metadata } from "next"
import { PackageSearch } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Inventory Management - Real-Time Stock Tracking for Restaurants",
  description: "Reduce inventory loss by 18% with real-time stock tracking, AI-powered receipt scanning (OCR), waste management, and automatic POS deductions. Know exactly what you have, always.",
  keywords: [
    "restaurant inventory management",
    "real-time stock tracking",
    "AI receipt scanning",
    "restaurant waste management",
    "inventory control software",
    "food inventory tracking",
    "restaurant shrinkage prevention",
    "automated inventory deductions",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/inventory-management",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/inventory-management",
    title: "Inventory Management - Real-Time Stock Tracking | EasyShiftHQ",
    description: "Reduce inventory loss by 18% with real-time stock tracking, AI receipt scanning, and automatic POS deductions.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Inventory Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Management - Real-Time Stock Tracking | EasyShiftHQ",
    description: "Reduce inventory loss by 18% with real-time tracking and AI-powered receipt scanning.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    title: "Real-Time Inventory Tracking",
    description: "Always know exactly what you have on hand with live stock levels.",
    features: [
      "Live stock levels updated automatically",
      "Low stock alerts when items hit reorder points",
      "Custom reorder point management per product",
      "Multiple view modes (card and list)",
      "Instant product search and filters",
    ],
  },
  {
    title: "Quick Inventory Updates",
    description: "Update inventory from any device in seconds with multiple input methods.",
    features: [
      "Fast count updates from phone, tablet, or desktop",
      "Barcode scanning with camera or dedicated scanner",
      "Photo documentation for verification",
      "Complete adjustment history and audit trail",
    ],
  },
  {
    title: "Waste Tracking",
    description: "Document and analyze waste to reduce losses and improve margins.",
    features: [
      "Spoilage documentation with photos and notes",
      "Waste categorization and analysis",
      "Transfer management between locations",
      "Waste trend reporting over time",
    ],
  },
  {
    title: "AI-Powered Receipt Scanning",
    description: "Scan paper receipts and invoices with your camera — AI extracts all the data.",
    features: [
      "OCR technology reads vendor, date, items, and prices",
      "Automatic vendor detection from receipts",
      "Line item matching to your product catalog",
      "Cost updates from invoices automatically",
    ],
  },
  {
    title: "Inventory Audit & Reporting",
    description: "Complete visibility into inventory movements with detailed audit trails.",
    features: [
      "Transaction history (purchases, usage, adjustments, waste)",
      "Timeline visualization of changes",
      "Variance analysis (expected vs actual)",
      "Export reports as PDF or CSV",
    ],
  },
  {
    title: "Automated Stock Deductions",
    description: "Inventory decreases automatically when items sell through your POS.",
    features: [
      "POS integration for automatic deductions",
      "Recipe-based inventory usage",
      "Real-time theoretical vs actual comparison",
      "Shrinkage detection and alerts",
    ],
  },
]

const benefits = [
  "18% inventory loss reduction",
  "Eliminate manual counting errors",
  "Automatic POS sync",
  "AI receipt scanning",
  "Real-time stock levels",
  "Waste documentation",
  "Complete audit trails",
  "Multi-location support",
]

export default function InventoryManagementPage() {
  return (
    <FeaturePageLayout
      badge="Inventory Management"
      title="Inventory That Tells"
      subtitle="The Truth."
      description="No more theoretical numbers or silent shrinkage. Track every item in real-time, scan receipts with AI, and know exactly what you have."
      icon={<PackageSearch className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      ctaTitle="Take Control of Your Inventory"
      ctaDescription="Stop losing money to waste and shrinkage. Get real-time visibility into every item in your restaurant."
      schemaUrl="https://easyshifthq.com/features/inventory-management"
    />
  )
}
