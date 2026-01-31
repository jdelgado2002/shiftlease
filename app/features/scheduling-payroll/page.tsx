import { Metadata } from "next"
import { Clock } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Scheduling & Payroll - Employee Scheduling & Time Tracking",
  description: "Save 10+ hours weekly with drag-and-drop scheduling, digital time tracking, tip management, and one-click payroll export to ADP, Gusto, or Paychex. Know labor costs before you publish.",
  keywords: [
    "restaurant employee scheduling",
    "restaurant time tracking",
    "tip management software",
    "payroll export",
    "labor cost management",
    "shift scheduling software",
    "restaurant workforce management",
    "employee time clock",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/scheduling-payroll",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/scheduling-payroll",
    title: "Scheduling & Payroll - Employee Scheduling & Time Tracking | EasyShiftHQ",
    description: "Save 10+ hours weekly with drag-and-drop scheduling, time tracking, and one-click payroll export.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Scheduling and Payroll System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scheduling & Payroll - Employee Scheduling | EasyShiftHQ",
    description: "Save 10+ hours weekly with drag-and-drop scheduling and digital time tracking.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    title: "Schedule Builder",
    description: "Create schedules visually with drag-and-drop simplicity.",
    features: [
      "Drag-and-drop weekly schedule creation",
      "Save and reuse shift templates",
      "Position-based scheduling (server, cook, host)",
      "Multi-week planning capability",
      "One-click schedule publishing",
    ],
  },
  {
    title: "Conflict Detection",
    description: "Automatically catch scheduling conflicts before they become problems.",
    features: [
      "Double-booking overlap warnings",
      "Time-off violation prevention",
      "Overtime threshold alerts",
      "Availability matching for each shift",
    ],
  },
  {
    title: "Labor Cost Forecasting",
    description: "Know your labor costs before you publish the schedule.",
    features: [
      "Shift cost preview before publishing",
      "Weekly budget comparison",
      "Position-based labor costing",
      "Overtime expense projections",
    ],
  },
  {
    title: "Time Tracking",
    description: "Digital time clock with verification options from any device.",
    features: [
      "Clock in/out from phone, tablet, or kiosk",
      "Optional photo verification",
      "GPS location tracking",
      "Break tracking (paid and unpaid)",
      "Manager adjustment with audit trail",
    ],
  },
  {
    title: "Time-Off & Shift Trading",
    description: "Employees manage availability while you maintain control.",
    features: [
      "Time-off request submission",
      "Manager approval queue",
      "Shift marketplace for open shifts",
      "Shift trade requests with approval",
      "Coverage finding for call-outs",
    ],
  },
  {
    title: "Payroll Management",
    description: "Calculate pay, track tips, and export to your payroll provider.",
    features: [
      "Automatic wage calculation from time punches",
      "Multiple pay types (hourly, salary, contractor)",
      "Automatic overtime calculation",
      "Tip collection and distribution tracking",
      "Export to ADP, Gusto, Paychex",
    ],
  },
  {
    title: "Tip Management",
    description: "Track tips from all sources and manage distribution fairly.",
    features: [
      "Tip collection from POS and cash",
      "Tip distribution by role",
      "Tip pooling configuration",
      "Individual employee tip statements",
    ],
  },
  {
    title: "Kiosk Mode",
    description: "Dedicated time clock interface for quick employee punch-in/out.",
    features: [
      "Clean, focused time clock interface",
      "Locked to time clock functionality only",
      "Photo capture for identity verification",
      "Fast clock-in under 5 seconds",
    ],
  },
]

const benefits = [
  "Save 10+ hours weekly",
  "Prevent schedule conflicts",
  "Know labor costs upfront",
  "Digital time tracking",
  "Tip management",
  "Payroll export",
  "Shift trading",
  "Kiosk mode",
]

export default function SchedulingPayrollPage() {
  return (
    <FeaturePageLayout
      badge="Scheduling & Payroll"
      title="Labor Without"
      subtitle="Payroll Panic."
      description="Know your labor cost before payroll hits. Schedule smarter, track time accurately, and export to your payroll provider with one click."
      icon={<Clock className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      ctaTitle="Take Control of Labor Costs"
      ctaDescription="Stop being surprised by payroll. See labor costs in real-time and schedule with confidence."
      schemaUrl="https://easyshifthq.com/features/scheduling-payroll"
    />
  )
}
