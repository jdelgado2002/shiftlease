import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google"
import Script from "next/script"
import { OrganizationSchema, WebsiteSchema, FAQSchema } from "@/components/structured-data"
import { PostHogProvider } from "@/components/posthog-provider"

// Type system — "The Operator's Ledger":
// Instrument Serif sets the editorial voice, Instrument Sans carries the UI,
// IBM Plex Mono carries every figure (tabular by default, like a statement).
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://easyshifthq.com'),
  title: {
    default: "EasyShiftHQ - From the Shift You Schedule to the Check That Clears",
    template: "%s | EasyShiftHQ",
  },
  description:
    "Restaurant scheduling that shows the labor dollar while you build the week, then closes the loop: labor % of sales, live budget and run rate, and bank accounts with categorized expenses and printed checks. Your whole staff gets their shifts, clock-in, and tips in the same app.",
  keywords: [
    "restaurant scheduling software",
    "labor cost management",
    "restaurant labor percentage",
    "employee scheduling app",
    "shift trade marketplace",
    "restaurant budget and run rate",
    "restaurant expense tracking",
    "print checks for restaurants",
    "restaurant management software",
    "POS integration",
  ],
  authors: [{ name: "EasyShiftHQ" }],
  creator: "EasyShiftHQ",
  publisher: "EasyShiftHQ",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easyshifthq.com",
    siteName: "EasyShiftHQ",
    title: "EasyShiftHQ - From the Shift You Schedule to the Check That Clears",
    description:
      "Schedule against a live labor budget, see what those hours earned, and keep every dollar categorized on the way out — with your whole staff in the same app.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ - Restaurant Scheduling, Labor & Money in One Loop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyShiftHQ - From the Shift You Schedule to the Check That Clears",
    description:
      "Schedule against a live labor budget, see what those hours earned, and keep every dollar categorized on the way out — with your whole staff in the same app.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://easyshifthq.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59L6CWW9YN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59L6CWW9YN');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <PostHogProvider>
          <OrganizationSchema />
          <WebsiteSchema />
          <FAQSchema />
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
