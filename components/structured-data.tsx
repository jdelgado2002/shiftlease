/**
 * Schema.org markup.
 *
 * Two rules hold everywhere in this file, because breaking either one costs
 * more than the markup is worth:
 *
 * 1. Every claim here must be true and must match what a person can see on
 *    the page. Structured data is the version of the site that Google turns
 *    into a rich result and that ChatGPT, Gemini and Perplexity quote back
 *    when someone asks about us — a wrong number here is a wrong number in
 *    someone else's answer, and we never see it happen.
 * 2. No aggregateRating until we have reviews we can point at. Self-serving
 *    review markup with nothing visible behind it is against Google's review
 *    snippet policy, and the penalty is a manual action against every rich
 *    result on the domain, not just the stars.
 */

// One Organization node with a stable @id, so every page's markup points at
// the same entity. sameAs is how a machine tells us apart from EasyShifts and
// EasyShift. Add each new profile (G2, LinkedIn, Crunchbase) as it goes live.
export const ORG = {
  "@type": "Organization",
  "@id": "https://easyshifthq.com/#organization",
  name: "EasyShiftHQ",
  url: "https://easyshifthq.com",
  logo: "https://easyshifthq.com/icon-512.png",
  sameAs: ["https://www.capterra.com/p/10040282/EasyShiftHQ/"],
} as const

/**
 * Pricing, mirrored from app/pricing/page.tsx. Stated as an AggregateOffer
 * because there are three tiers — a single Offer forces us to pick one price
 * to publish, which is how this markup previously came to advertise $249 for
 * a product whose tiers are $99, $199 and $299.
 */
const PRICING_OFFER = {
  "@type": "AggregateOffer",
  priceCurrency: "USD",
  lowPrice: "99",
  highPrice: "299",
  offerCount: 3,
  // unitText isn't an AggregateOffer property. The unit lives on a price spec.
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    priceCurrency: "USD",
    minPrice: "99",
    maxPrice: "299",
    unitText: "per location per month",
  },
} as const

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EasyShiftHQ",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Restaurant Management Software",
    operatingSystem: "Web",
    url: "https://easyshifthq.com",
    offers: PRICING_OFFER,
    description:
      "Restaurant operations software that schedules against a live labor budget, reads sales from the POS to produce a daily P&L, and gives every employee their shifts, clock-in, tips and pay in the same app.",
    featureList: [
      "Employee scheduling against a live labor budget",
      "Open-shift marketplace and shift trades with manager approval",
      "Time clock with photo verification and geofencing",
      "Daily profit and loss from POS sales and actual labor",
      "Labor cost as a percentage of sales",
      "Inventory counts, purchase orders and variance",
      "Recipe and menu costing",
      "Bank accounts, categorized expenses and printed checks",
    ],
    publisher: ORG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EasyShiftHQ",
    url: "https://easyshifthq.com",
    description:
      "Restaurant scheduling, labor cost and daily P&L in one loop — with the whole staff in the same app.",
    publisher: ORG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FeaturePageSchemaProps {
  name: string
  description: string
  url: string
  features: string[]
}

export function FeaturePageSchema({
  name,
  description,
  url,
  features,
}: Readonly<FeaturePageSchemaProps>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `EasyShiftHQ - ${name}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Restaurant Management Software",
    operatingSystem: "Web",
    url,
    description,
    featureList: features,
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "EasyShiftHQ",
      url: "https://easyshifthq.com",
    },
    offers: PRICING_OFFER,
    provider: ORG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: Readonly<{
  items: { name: string; url: string }[]
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * FAQ markup, driven by the questions a page actually renders.
 *
 * It takes the items rather than hard-coding them so it can only ever be used
 * on a page where the same questions and answers are visible — which is both
 * the policy requirement and the reason the markup is worth having: an answer
 * engine quoting us should be quoting something a reader can also see.
 */
export function FAQPageSchema({
  items,
}: Readonly<{
  items: { q: string; a: string }[]
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
