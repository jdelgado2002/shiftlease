import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  CalendarDays,
  Timer,
  Banknote,
  Receipt,
  Users,
  ShieldCheck,
  Fingerprint,
  FileDown,
  AlertCircle,
  Repeat,
  ArrowLeftRight,
  MapPin,
  Camera,
  Smartphone,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturePageSchema, BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Operations - Scheduling, Time Clock, Tips & Payroll | EasyShiftHQ",
  description:
    "Complete restaurant workforce management: conflict-aware scheduling, verified time clock with kiosk mode, configurable tip pooling with dispute handling, and payroll calculations with overtime and tip integration.",
  keywords: [
    "restaurant employee scheduling",
    "restaurant time clock",
    "tip pooling software",
    "restaurant payroll",
    "shift trade management",
    "kiosk time clock",
    "labor cost management",
    "restaurant workforce management",
    "tip distribution",
    "overtime calculation",
    "employee availability",
    "time-off management",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/scheduling-payroll",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/scheduling-payroll",
    title: "Operations - Scheduling, Time Clock, Tips & Payroll | EasyShiftHQ",
    description:
      "Complete restaurant workforce management with conflict-aware scheduling, verified time clock, configurable tip pooling, and integrated payroll.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Operations Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations - Scheduling, Time Clock, Tips & Payroll | EasyShiftHQ",
    description:
      "Complete restaurant workforce management with scheduling, time clock, tip pooling, and payroll.",
    images: ["/og-image.jpg"],
  },
}

const operationsPillars = [
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Scheduling",
    tagline: "Build conflict-free schedules in minutes, not hours",
    description:
      "Weekly schedule builder with real-time conflict detection, recurring shifts, time-off management, availability tracking, and shift trading — all with one-click publishing.",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Time Clock",
    tagline: "Every punch verified, every minute accounted for",
    description:
      "Digital time clock with optional photo and GPS verification, kiosk mode with PIN access, manual time entry, punch import, and open session management.",
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: "Tip Pooling",
    tagline: "Fair tips, no disputes, full audit trail",
    description:
      "Configurable tip distribution by hours worked, role weighting, or even split. Full lifecycle from daily entry through approval, payout tracking, period lock, and dispute resolution.",
  },
  {
    icon: <Receipt className="h-6 w-6" />,
    title: "Payroll",
    tagline: "Accurate pay calculations, every period",
    description:
      "Automatic wage calculation with overtime logic, multi-compensation support (hourly, salary, contractor, daily rate), tip integration, and CSV export.",
  },
]

export default function SchedulingPayrollPage() {
  const allFeatures = [
    "Weekly schedule with conflict detection",
    "Recurring shifts with custom recurrence",
    "Time-off and availability management",
    "Shift trade approvals",
    "Schedule publishing and history",
    "Kiosk mode with PIN access",
    "Photo and GPS verification",
    "Manual time entry and punch import",
    "Configurable tip pooling",
    "Tip payout and dispute tracking",
    "Multi-compensation payroll",
    "Overtime and tip integration",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <FeaturePageSchema
        name="Operations - Scheduling, Time Clock, Tips & Payroll"
        description="Complete restaurant workforce management with conflict-aware scheduling, verified time clock, configurable tip pooling, and integrated payroll."
        url="https://easyshifthq.com/features/scheduling-payroll"
        features={allFeatures}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://easyshifthq.com" },
          { name: "Features", url: "https://easyshifthq.com/#features" },
          {
            name: "Operations",
            url: "https://easyshifthq.com/features/scheduling-payroll",
          },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Clock className="h-4 w-4" />
                <span>Operations</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Schedule. Clock. Tip. Pay.
                <br />
                <span className="text-muted-foreground">All Connected.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Four pillars of restaurant labor management that actually talk to each other.
                Scheduling feeds the time clock. Punches feed tip pools. Tips feed payroll. No re-keying. No gaps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base"
                  asChild
                >
                  <Link
                    href="https://app.easyshifthq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-border"
                  asChild
                >
                  <Link href="/#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars Overview */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
                The Four Pillars
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
                One Workflow From Schedule to Paycheck
              </h2>
              <p className="text-lg text-muted-foreground">
                Each pillar is powerful alone. Together they eliminate the manual handoffs
                that eat your week.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {operationsPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary">{pillar.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{pillar.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scheduling Deep Dive ── */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Scheduling
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                Build, publish, and manage weekly schedules with real-time conflict detection.
                Your staff sees the schedule instantly — and you see labor costs before you commit.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Schedule Builder */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Schedule Builder</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Weekly view by employee and day with position filtering and scheduling metrics.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View weekly schedule by employee and day",
                      "Navigate with Previous / Today / Next controls",
                      "Filter by position",
                      "See active employees, total hours, and estimated labor cost",
                      "Labor cost breakdown: hourly, salary, contractor, daily rate",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shift Management */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Shift Management</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Create, edit, and manage shifts with full status tracking and recurrence.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Create, edit, and delete shifts",
                      "Set status: Scheduled, Confirmed, Completed, Cancelled",
                      "Add break duration and notes",
                      "Create recurring shifts with repeat presets and custom rules",
                      "Edit recurring shifts: this only, this and following, or all in series",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conflict Detection */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Conflict Detection
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Real-time conflict alerts as you build the schedule.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Time-off conflict detection in real time",
                      "Availability conflict detection in real time",
                      "Publish weekly schedule with optional notes",
                      "Unpublish for corrections",
                      "View schedule change history: created, updated, deleted, unpublished",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Time-Off */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Time-Off Management</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Full request lifecycle with approval workflow.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Create time-off requests",
                      "Edit pending requests",
                      "Approve or reject with optional reason",
                      "Delete requests",
                      "Requests feed into conflict detection automatically",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Availability */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Availability Management
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Recurring weekly availability with one-time exceptions.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Set recurring weekly availability per employee per weekday",
                      "Define available/unavailable with start and end times",
                      "Add one-time date exceptions (available or unavailable)",
                      "Optional notes or reason for each entry",
                      "Feeds into scheduling conflict detection",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shift Trades & PDF */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Shift Trades & Export
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Manager-controlled trade approvals and PDF export.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View and approve or reject shift trade requests",
                      "Add optional manager notes",
                      "Monitor open marketplace trade postings",
                      "Print or export weekly schedule as PDF",
                      "Optional position labels and hours summary in export",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Time Clock Deep Dive ── */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Timer className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Time Clock
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                A manager-facing time clock dashboard with punch management, verification,
                manual entry tools, kiosk mode, and import capabilities.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Status & Filtering */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Dashboard & Filtering
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    At-a-glance status with flexible filtering.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Kiosk status, worked hours, PIN coverage, open sessions, anomalies",
                      "Filter and search punches by employee",
                      "Switch scope: Day, Week, or Month",
                      "Navigate period dates",
                      "Export filtered punches to CSV",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Punch Management */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Punch Management
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    View, verify, edit, and delete punches with full detail.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View punch list with type, employee, position, date/time",
                      "View verification: photo, GPS coordinates, device info",
                      "Open GPS location in Google Maps",
                      "Edit punch timestamp and notes",
                      "Delete punches",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Manual Entry */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Manual Time Entry</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Visual timeline editor for corrections and historical entry.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Desktop: drag-and-adjust timeline editor in Day view",
                      "Mobile: slider-based time block entry in Day view",
                      "Add break minutes and notes per block",
                      "Auto-save to punch records",
                      "Add, edit, and delete time blocks",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Views */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Operational Views
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Multiple visualization modes for different workflows.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Card view: per-employee session summaries",
                      "Stripe/barcode-style timeline view",
                      "Punch stream timeline and debug view",
                      "Receipt-style single-employee timeline view",
                      "Detect and force clock-out for open sessions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Import */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Punch Import</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Upload and map punch files with quality validation.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Upload CSV or TXT punch files",
                      "Flexible column mapping for identifiers and timestamps",
                      "Preview quality signals: incomplete, overlapping, missing, invalid",
                      "Map unmatched names to existing employees",
                      "Create missing employees during import and bulk import tips",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kiosk & PIN */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Kiosk & PIN Controls</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Dedicated device mode with full PIN management.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Launch and exit kiosk mode for any location",
                      "Set PIN policy: 4-6 digit minimum, force reset on first use",
                      "Set, reset, or auto-generate employee PINs",
                      "View PIN coverage status",
                      "Create and rotate kiosk login credentials for tablets",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tip Pooling Deep Dive ── */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Tip Pooling
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                Configure how tips are split, enter daily amounts, approve allocations,
                record payouts, lock periods for payroll, and resolve disputes — all with a
                complete audit trail.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Configuration */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Configuration</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Flexible setup for any tip distribution model.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Tip source: manual entry or POS import",
                      "Share method: by hours worked, role weighting, or even split",
                      "Split cadence: daily, weekly, or per shift",
                      "Configure participating employees",
                      "Set role weight values; auto-save settings as you go",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Daily Entry */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Daily Entry & Review</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enter tips, preview allocations, and approve.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Enter total tips for a selected date",
                      "Use POS-imported or employee-declared amounts",
                      "Auto-calculate hours from time punches",
                      "Manually override hours before approval",
                      "Preview and edit allocations; save as draft or approve",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lifecycle */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Split Lifecycle</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Draft, approve, reopen, and archive with full history.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Statuses: Draft, Approved, Archived (locked)",
                      "Resume or edit draft splits",
                      "Reopen approved splits back to draft",
                      "View audit trail on all changes",
                      "Archived history entries for payroll reference",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Period & Payroll */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Period & Payroll Lock</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Weekly period timeline with validation and lock.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Overview period timeline with day-level statuses",
                      "Click any day to jump into daily entry",
                      "Validate readiness before locking",
                      "Lock period when all splits approved and allocated",
                      "No drafts remaining at lock time",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payouts */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Tip Payouts</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Record and track cash tip payouts by employee.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Record cash payouts per employee per split",
                      "Edit payout amounts before confirmation",
                      "Delete existing payout entries",
                      "Payout status by day: none, partial, paid",
                      "Remaining tips owed visible in payroll",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disputes */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Disputes & Review</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Handle employee tip disputes with documentation.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View open employee tip disputes",
                      "Resolve disputes with manager notes",
                      "Dismiss disputes with documented reason",
                      "Full audit trail on dispute actions",
                      "Dispute resolution feeds back into split records",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Payroll Deep Dive ── */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Receipt className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Payroll
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                Accurate period calculations for every compensation type — hourly with
                overtime, salaried, contractor, daily rate, and per-job — with tip and
                payout integration built in.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Period Controls */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Period Controls</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Flexible period selection with on-demand refresh.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Current week, last week, last 2 weeks, or custom date range",
                      "Navigate periods with previous/next controls",
                      "Refresh payroll calculations on demand",
                      "Period summary: employee count, total hours, gross wages, tips owed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Calculations */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Pay Calculations
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Per-employee rows with full detail and totals.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Compensation type, rate, regular and overtime hours",
                      "Regular pay, overtime pay, tips earned",
                      "Tips paid out and tips still owed",
                      "Total pay per employee",
                      "1.5x overtime for hourly employees above 40 hours per week",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation Types */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Compensation Types
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Every pay model your restaurant uses.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Hourly: punch-based regular and overtime calculation",
                      "Salaried: prorated period pay",
                      "Contractors: prorated recurring contractor pay",
                      "Per-job contractors: manual payment entry",
                      "Daily-rate: pay based on worked days in period",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tip Integration */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Tip & Payout Integration
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Tip amounts flow directly from approved pools into payroll.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Pulls tips from approved and archived split data",
                      "Includes legacy and employee tip records",
                      "Applies tip payouts already recorded",
                      "Computes remaining tips owed per employee",
                      "Break time excluded from worked hours",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Anomalies & Export */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Anomalies & Export
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Surface issues and export clean payroll data.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Incomplete punch anomalies surfaced at employee and period level",
                      "Flag missing or invalid punch pairings",
                      "Export payroll period to CSV",
                      "Manual payment rows included in totals for per-job contractors",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Workflow Banner */}
        <section className="w-full py-16 md:py-24 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                The Whole Workflow, Connected
              </h2>
              <p className="text-lg text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Each pillar feeds the next. No re-keying data between systems. No
                spreadsheets bridging the gap.
              </p>

              <div className="grid md:grid-cols-4 gap-px bg-background/10 rounded-2xl overflow-hidden mb-12">
                {[
                  {
                    step: "1",
                    label: "Schedule",
                    desc: "Build and publish shifts",
                  },
                  {
                    step: "2",
                    label: "Clock",
                    desc: "Employees punch in and out",
                  },
                  {
                    step: "3",
                    label: "Pool Tips",
                    desc: "Auto-calculate from punches",
                  },
                  {
                    step: "4",
                    label: "Run Payroll",
                    desc: "Hours + tips + pay in one view",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-foreground p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <p className="font-semibold text-lg mb-1">{item.label}</p>
                    <p className="text-sm text-background/60">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-8 text-base"
                  asChild
                >
                  <Link
                    href="https://app.easyshifthq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full h-12 px-8 text-base border border-background/60 text-background hover:bg-background/10 hover:text-background"
                  asChild
                >
                  <Link href="/#pricing">See Pricing</Link>
                </Button>
              </div>
              <p className="text-sm text-background/50 mt-6">
                Set up in minutes &middot; No credit card required &middot; Cancel
                anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
