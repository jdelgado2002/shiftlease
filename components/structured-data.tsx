export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EasyShiftHQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "249",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "50",
    },
    description:
      "Restaurant profit tracking software that connects POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights.",
    publisher: {
      "@type": "Organization",
      name: "EasyShiftHQ",
      url: "https://easyshifthq.com",
      logo: {
        "@type": "ImageObject",
        url: "https://easyshifthq.com/favicon.svg",
      },
    },
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
      "See your restaurant's true profits every day. Real-time food cost, labor %, and shrinkage insights.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://easyshifthq.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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

export function FeaturePageSchema({ name, description, url, features }: FeaturePageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `EasyShiftHQ - ${name}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Restaurant Management Software",
    operatingSystem: "Web",
    url: url,
    description: description,
    featureList: features,
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "EasyShiftHQ",
      url: "https://easyshifthq.com",
    },
    offers: {
      "@type": "Offer",
      price: "249",
      priceCurrency: "USD",
      description: "All features included per location",
    },
    provider: {
      "@type": "Organization",
      name: "EasyShiftHQ",
      url: "https://easyshifthq.com",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
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

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is EasyShiftHQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EasyShiftHQ is restaurant profit tracking software that connects your POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights — all automatically.",
        },
      },
      {
        "@type": "Question",
        name: "How much does EasyShiftHQ cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EasyShiftHQ costs $249/month per location with all features included. There are no contracts, setup fees, or surprise invoices. You can start with a free 14-day trial.",
        },
      },
      {
        "@type": "Question",
        name: "How long does setup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setup takes approximately 15 minutes. You connect your existing POS, inventory, and labor systems, and EasyShiftHQ automatically syncs your data.",
        },
      },
      {
        "@type": "Question",
        name: "What POS systems does EasyShiftHQ integrate with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EasyShiftHQ integrates with all major POS systems, inventory platforms, and labor management tools to provide a unified view of your restaurant's financial performance.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
