import { Metadata } from "next"
import { Star } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Guest Reviews - Turn Happy Guests Into Google Reviews",
  description:
    "QR-code review funnel for restaurants. Happy guests get routed to Google Reviews; unhappy guests reach you privately first. Printable table tents, counter cards, and a feedback inbox built in.",
  keywords: [
    "restaurant review management",
    "Google reviews for restaurants",
    "QR code review funnel",
    "restaurant reputation management",
    "guest feedback software",
    "review QR code table tent",
    "get more Google reviews",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/reviews",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/reviews",
    title:
      "Guest Reviews - Turn Happy Guests Into Google Reviews | EasyShiftHQ",
    description:
      "QR-code review funnel: happy guests get routed to Google, unhappy guests reach you privately first.",
    siteName: "EasyShiftHQ",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Guest Reviews - Turn Happy Guests Into Google Reviews | EasyShiftHQ",
    description:
      "QR-code review funnel: happy guests get routed to Google, unhappy guests reach you privately first.",
  },
}

const features = [
  {
    title: "The Review Funnel",
    description:
      "One QR code, two paths. Guests tap a star rating on their phone — no app, no login.",
    features: [
      "Happy guests get handed straight to your Google review link",
      "Unhappy guests get a private feedback form instead",
      "Complaints reach you before they reach the internet",
      "Works on any phone with a camera",
    ],
  },
  {
    title: "Print-Ready QR Materials",
    description:
      "Generate everything you need to put the funnel in front of guests — right from the app.",
    features: [
      "Printable table tents for every table",
      "Counter cards for the register",
      "Sticker sheets for to-go bags and receipts",
      "Each location gets its own QR code and page",
    ],
  },
  {
    title: "Your Branded Review Page",
    description:
      "A clean public page at your own link, built with the in-app page builder.",
    features: [
      "Customizable public review page per restaurant",
      "Your name and branding, not ours",
      "Mobile-first design guests actually finish",
      "Spam and bot protection built in",
    ],
  },
  {
    title: "Private Feedback Capture",
    description:
      "When a guest has a bad night, you want to hear about it first — and quietly.",
    features: [
      "Structured feedback form for low ratings",
      "Full detail view of every response",
      "A chance to make it right before a public review",
      "Feedback tied to the location it came from",
    ],
  },
  {
    title: "Feedback Inbox",
    description:
      "Every rating and comment in one place, filtered by what needs your attention.",
    features: [
      "See all ratings and written feedback in one inbox",
      "Filter by needs-a-reply to work the queue",
      "Silent ratings surfaced so no signal is lost",
      "Follow up on feedback directly from the inbox",
    ],
  },
  {
    title: "Rating Trends",
    description:
      "Watch guest sentiment move over time — and catch a slide before it costs you.",
    features: [
      "Aggregate rating trends per location",
      "Spot dips tied to specific days or shifts",
      "Compare sentiment across locations",
      "Included on every plan",
    ],
  },
]

const benefits = [
  "More Google reviews",
  "Catch complaints privately",
  "Print-ready QR cards",
  "No app for guests",
  "Per-location QR codes",
  "Feedback in one inbox",
  "Rating trends over time",
  "Included in every plan",
]

export default function ReviewsPage() {
  return (
    <FeaturePageLayout
      badge="Guest Reviews"
      mark="06"
      title="Happy guests go to Google."
      subtitle="Unhappy guests come to you."
      description="One QR code, two paths. A good night turns into public proof; a bad one reaches your inbox instead of your rating — while the table is still yours to fix."
      icon={<Star className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      indexTitle={
        <>
          One code on the table,{" "}
          <span className="italic text-primary">
            two very different nights.
          </span>
        </>
      }
      indexLede="The funnel, the printed materials that carry it, and the inbox where the private half lands."
      benefitsTitle={
        <>
          What it&apos;s worth{" "}
          <span className="italic text-primary">
            by next month&apos;s rating.
          </span>
        </>
      }
      ctaTitle="Put a code on every table tonight."
      ctaDescription="Print the table tents today. Good service becomes public proof; a bad night becomes a second chance."
      schemaUrl="https://easyshifthq.com/features/reviews"
    />
  )
}
