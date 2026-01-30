import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import { OrganizationSchema, WebsiteSchema, FAQSchema } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://easyshifthq.com'),
  title: {
    default: "EasyShiftHQ - See Your Restaurant's True Profits Every Day",
    template: "%s | EasyShiftHQ",
  },
  description:
    "Stop guessing your margins. Connect your POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights — all automatically.",
  keywords: [
    "restaurant management software",
    "restaurant profit tracking",
    "food cost calculator",
    "labor cost management",
    "restaurant inventory management",
    "POS integration",
    "restaurant analytics",
    "profit margin software",
    "restaurant operations",
    "food service management",
  ],
  authors: [{ name: "EasyShiftHQ" }],
  creator: "EasyShiftHQ",
  publisher: "EasyShiftHQ",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easyshifthq.com",
    siteName: "EasyShiftHQ",
    title: "EasyShiftHQ - See Your Restaurant's True Profits Every Day",
    description:
      "Stop guessing your margins. Connect your POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights — all automatically.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyShiftHQ - Restaurant Profit Tracking Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyShiftHQ - See Your Restaurant's True Profits Every Day",
    description:
      "Stop guessing your margins. Connect your POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights.",
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
    <html lang="en">
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
      <body className={inter.className}>
        <OrganizationSchema />
        <WebsiteSchema />
        <FAQSchema />
        {children}
      </body>
    </html>
  )
}
