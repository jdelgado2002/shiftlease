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
      mark="05"
      title="The supplier raises a price."
      subtitle="Your plate cost already knows."
      description="Build the recipe once and the cost follows your invoices from then on. You find out a dish stopped making money while you can still do something about it."
      icon={<ChefHat className="h-4 w-4" />}
      features={features}
      benefits={benefits}
      indexTitle={
        <>
          From the recipe card{" "}
          <span className="italic text-primary">to the margin report.</span>
        </>
      }
      indexLede="Everything between what goes on the plate and what the plate is worth — costing, the engineering matrix, and the POS tie-in that keeps it honest."
      benefitsTitle={
        <>
          What it&apos;s worth{" "}
          <span className="italic text-primary">the next time you re-price.</span>
        </>
      }
      ctaTitle="Cost one dish. You'll see the rest."
      ctaDescription="Enter a single recipe and the plate cost, margin, and menu position come back immediately."
      schemaUrl="https://easyshifthq.com/features/recipe-menu"
    />
  )
}
