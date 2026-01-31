import { Metadata } from "next"
import { ChefHat } from "lucide-react"
import { FeaturePageLayout } from "@/components/feature-page-layout"

export const metadata: Metadata = {
  title: "Recipe & Menu Management - Recipe Costing & Menu Engineering",
  description: "Know exactly what each dish costs with real-time recipe costing, menu engineering matrix (Stars, Plowhorses, Puzzles, Dogs), profitability analysis, and automatic inventory deductions when items sell.",
  keywords: [
    "recipe costing software",
    "menu engineering",
    "restaurant menu optimization",
    "food cost calculator",
    "menu profitability analysis",
    "recipe management software",
    "menu pricing strategy",
    "restaurant profit margin",
  ],
  alternates: {
    canonical: "https://easyshifthq.com/features/recipe-menu",
  },
  openGraph: {
    type: "website",
    url: "https://easyshifthq.com/features/recipe-menu",
    title: "Recipe & Menu Management - Recipe Costing & Menu Engineering | EasyShiftHQ",
    description: "Know exactly what each dish costs with real-time recipe costing and menu engineering tools.",
    siteName: "EasyShiftHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ Recipe and Menu Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe & Menu Management - Recipe Costing | EasyShiftHQ",
    description: "Know exactly what each dish costs with real-time recipe costing and menu engineering.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    title: "Recipe Creation",
    description: "Build detailed recipes with exact quantities and automatic unit conversion.",
    features: [
      "Ingredient-based recipes with exact quantities",
      "Smart unit conversion between measurements",
      "Sub-recipe support for batch items",
      "Recipe variations tracking",
      "AI-powered ingredient suggestions",
    ],
  },
  {
    title: "Real-Time Cost Analysis",
    description: "Know exactly how much each dish costs to make — updated when prices change.",
    features: [
      "Automatic food cost calculation from ingredient prices",
      "Profit margin analysis for every dish",
      "Price optimization recommendations",
      "Cost trend tracking over time",
    ],
  },
  {
    title: "Menu Engineering Matrix",
    description: "Classify items by profitability and popularity to optimize your menu.",
    features: [
      "Stars: High profit, high popularity",
      "Plowhorses: Low profit, high popularity",
      "Puzzles: High profit, low popularity",
      "Dogs: Low profit, low popularity",
      "Data-driven menu optimization",
    ],
  },
  {
    title: "POS Integration",
    description: "Link recipes to menu items for automatic inventory tracking.",
    features: [
      "Map recipes to POS menu items",
      "Automatic inventory deductions on sale",
      "Unmapped item alerts",
      "Actual vs theoretical food cost",
    ],
  },
  {
    title: "Profitability Reports",
    description: "Rank your menu items by profit contribution and make smarter decisions.",
    features: [
      "Best and worst performers ranking",
      "Contribution margin analysis",
      "Historical profitability tracking",
      "Export reports for analysis",
    ],
  },
  {
    title: "AI Recipe Assistance",
    description: "Get intelligent suggestions for ingredients and preparation methods.",
    features: [
      "Ingredient recommendations",
      "Preparation method suggestions",
      "Cost optimization tips",
      "Recipe scaling calculations",
    ],
  },
]

const benefits = [
  "Know exact recipe costs",
  "Optimize menu pricing",
  "Auto inventory deductions",
  "Menu engineering tools",
  "Profit margin visibility",
  "POS integration",
  "AI-powered suggestions",
  "Track cost changes",
]

export default function RecipeMenuPage() {
  return (
    <FeaturePageLayout
      badge="Recipe & Menu Management"
      title="Menu Profitability."
      subtitle="Visible Daily."
      description="Recipe costs adjust the moment supplier prices change. Know exactly what sells, what makes money, and what's eroding your margins."
      icon={<ChefHat className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      ctaTitle="Optimize Your Menu Today"
      ctaDescription="Stop guessing which dishes make money. Get real-time recipe costing and menu engineering tools."
      schemaUrl="https://easyshifthq.com/features/recipe-menu"
    />
  )
}
