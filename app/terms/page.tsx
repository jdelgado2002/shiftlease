import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "End User License Agreement - EasyShiftHQ",
  description: "End User License Agreement (EULA) for EasyShiftHQ - Terms and conditions for using our platform.",
}

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex gap-2 items-center text-xl font-bold">
            <CalendarCheck className="h-6 w-6 text-emerald-600" />
            <span>EasyShiftHQ</span>
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="https://app.easyshifthq.com" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">End User License Agreement (EULA)</h1>
              <p className="text-muted-foreground">
                <strong>Effective Date:</strong> October 15, 2025
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Website:</strong>{" "}
                  <Link href="https://easyshifthq.com" className="text-emerald-600 hover:underline">
                    https://easyshifthq.com
                  </Link>
                </p>
                <p>
                  <strong>Contact:</strong>{" "}
                  <a href="mailto:contact@easyshifthq.com" className="text-emerald-600 hover:underline">
                    contact@easyshifthq.com
                  </a>
                </p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              <p>
                By creating an account or accessing EasyShiftHQ, you ("User", "you") agree to be bound by this End User
                License Agreement ("Agreement", "EULA") between you and EasyShiftHQ ("we", "our", "us").
              </p>
              <p>If you do not agree to these terms, do not access or use our services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Description of Service</h2>
              <p>
                EasyShiftHQ is a cloud-based SaaS platform designed to provide shift and workforce management tools for
                businesses. The service is provided via the website{" "}
                <Link href="https://easyshifthq.com" className="text-emerald-600 hover:underline">
                  https://easyshifthq.com
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. License Grant</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the EasyShiftHQ
                platform solely for your internal business purposes, in accordance with this Agreement and any
                applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Restrictions on Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Sell, sublicense, or distribute the platform or any part of it</li>
                <li>Interfere with or disrupt the integrity or performance of the service</li>
                <li>Use automated scripts (e.g., bots or scrapers) to access the service</li>
                <li>Upload or transmit any viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. User Accounts</h2>
              <p>
                To access our services, you must register for an account and provide accurate and complete information.
              </p>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p className="mt-4">We reserve the right to suspend or terminate accounts that violate this EULA.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Payment and Subscriptions</h2>
              <p>Certain features may require payment through our third-party provider, Stripe. By subscribing, you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Authorize recurring billing, where applicable</li>
                <li>Agree to the applicable pricing and billing terms displayed during checkout</li>
                <li>Are responsible for any taxes, fees, or charges imposed by your local government</li>
              </ul>
              <p className="mt-4">Failure to pay may result in suspension or termination of your account.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
              <p>
                All content and materials on the platform, including software, logos, designs, and trademarks, are the
                exclusive property of EasyShiftHQ or its licensors.
              </p>
              <p>Nothing in this EULA grants you ownership of any intellectual property rights.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Privacy & Data Protection</h2>
              <p>
                Your use of the platform is also governed by our{" "}
                <Link href="/privacy" className="text-emerald-600 hover:underline font-semibold">
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal data in compliance with the General Data
                Protection Regulation (GDPR).
              </p>
              <p>
                By using EasyShiftHQ, you consent to the collection and processing of your data as outlined in the
                Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Data Residency & Transfers</h2>
              <p>
                Your data may be stored or processed in the United States, including by third-party service providers.
                We implement appropriate safeguards for international data transfers in compliance with GDPR.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Termination</h2>
              <p>We may terminate or suspend your access immediately, without notice, if you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Breach this Agreement</li>
                <li>Violate any applicable laws</li>
                <li>Misuse the platform or cause harm to other users</li>
              </ul>
              <p className="mt-4">
                Upon termination, your right to use the service ends, and your data may be deleted according to our data
                retention policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Disclaimer of Warranties</h2>
              <p>
                The platform is provided "as is" and "as available" without warranties of any kind, express or implied.
                We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>That the service will be uninterrupted or error-free</li>
                <li>That defects will be corrected</li>
                <li>That the platform will meet your expectations or requirements</li>
              </ul>
              <p className="mt-4">Use the service at your own risk.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, EasyShiftHQ shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, revenue, or profits</li>
                <li>Any claim exceeding the amount you paid in the 12 months prior to the claim</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">13. Modifications to the Agreement</h2>
              <p>
                We may update this Agreement from time to time. Continued use of the service after changes are posted
                means you accept the new terms. You are responsible for reviewing this Agreement periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">14. Governing Law</h2>
              <p>
                This Agreement shall be governed by and interpreted in accordance with the laws of the jurisdiction
                where EasyShiftHQ is established, unless otherwise required by applicable data protection law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">15. Contact</h2>
              <p>For any questions about this Agreement, contact:</p>
              <p className="mt-2">
                📧{" "}
                <a href="mailto:contact@easyshifthq.com" className="text-emerald-600 hover:underline font-semibold">
                  contact@easyshifthq.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EasyShiftHQ. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="mailto:contact@easyshifthq.com">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
