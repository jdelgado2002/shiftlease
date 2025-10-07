import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EasyShiftHQ - See Your Restaurant's True Profits — Every Day",
  description:
    "Stop guessing your margins. Connect your POS, inventory, and labor systems to reveal real-time food cost, labor %, and shrinkage insights — all automatically.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
