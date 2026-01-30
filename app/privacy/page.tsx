import type { Metadata } from "next"
import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for EasyShiftHQ - Learn how we collect, use, and protect your personal data in accordance with GDPR.",
  alternates: {
    canonical: "https://easyshifthq.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy for EasyShiftHQ</h1>
              <p className="text-muted-foreground">
                <strong>Effective Date:</strong> October 15, 2025
              </p>
              <p className="mt-4 text-lg">
                EasyShiftHQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, share, and protect your personal data when you use our SaaS platform at
                easyshifthq.com, in accordance with the General Data Protection Regulation (GDPR).
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Who We Are</h2>
              <div className="space-y-2">
                <p>
                  <strong>Website:</strong>{" "}
                  <Link href="https://easyshifthq.com" className="text-emerald-600 hover:underline">
                    https://easyshifthq.com
                  </Link>
                </p>
                <p>
                  <strong>Service Type:</strong> Software-as-a-Service (SaaS)
                </p>
                <p>
                  <strong>Audience:</strong> Business users, including EU residents
                </p>
                <p>
                  <strong>Contact Email:</strong>{" "}
                  <a href="mailto:contact@easyshifthq.com" className="text-emerald-600 hover:underline">
                    contact@easyshifthq.com
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. What Personal Data We Collect</h2>
              <p>We collect the following types of personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>IP address</li>
                <li>Payment information</li>
                <li>Cookies and usage data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. How We Collect Data</h2>
              <p>We collect your personal data through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Signup forms</li>
                <li>Account registration</li>
                <li>Cookies and tracking tools (via analytics)</li>
                <li>Payment processing systems</li>
                <li>Email delivery services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Why We Collect Your Data</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and manage our services</li>
                <li>To offer customer support</li>
                <li>To process payments</li>
                <li>To improve and personalize user experience</li>
                <li>To analyze how our services are used (analytics)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Legal Basis for Processing (Under GDPR)</h2>
              <p>We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Your consent</strong> (e.g. accepting cookies, subscribing to emails)
                </li>
                <li>
                  <strong>Performance of a contract</strong> (e.g. using our platform as a registered user)
                </li>
                <li>
                  <strong>Legitimate interests</strong> (e.g. improving platform functionality)
                </li>
                <li>
                  <strong>Legal obligations</strong> (e.g. financial recordkeeping)
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Consent and Your GDPR Rights</h2>
              <p>We obtain explicit user consent where required, particularly for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cookie usage</li>
                <li>Marketing communications</li>
              </ul>
              <p className="mt-4">As a user, you have the following rights under GDPR:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Right to access</strong> – Know what personal data we hold about you
                </li>
                <li>
                  <strong>Right to rectification</strong> – Correct inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to erasure</strong> – Request deletion of your data ("right to be forgotten")
                </li>
                <li>
                  <strong>Right to restrict processing</strong> – Limit how we use your data
                </li>
                <li>
                  <strong>Right to data portability</strong> – Receive your data in a transferable format
                </li>
                <li>
                  <strong>Right to object</strong> – Object to how your data is used
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> – At any time, where applicable
                </li>
              </ul>
              <p className="mt-4">
                You can exercise your rights by contacting us at{" "}
                <a href="mailto:contact@easyshifthq.com" className="text-emerald-600 hover:underline">
                  contact@easyshifthq.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Sharing of Data with Third Parties</h2>
              <p>We share user data only for functional purposes, with trusted third-party service providers:</p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold">Provider</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold">Purpose</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">
                        <strong>PostHog</strong>
                      </td>
                      <td className="border border-border px-4 py-2">Product analytics</td>
                      <td className="border border-border px-4 py-2">USA</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">
                        <strong>Vercel</strong>
                      </td>
                      <td className="border border-border px-4 py-2">Website and usage analytics</td>
                      <td className="border border-border px-4 py-2">USA</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">
                        <strong>Stripe</strong>
                      </td>
                      <td className="border border-border px-4 py-2">Payment processing</td>
                      <td className="border border-border px-4 py-2">USA</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">
                        <strong>Resend</strong>
                      </td>
                      <td className="border border-border px-4 py-2">Transactional emails</td>
                      <td className="border border-border px-4 py-2">USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                All third-party providers are vetted and required to comply with data protection laws and implement
                adequate safeguards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. International Data Transfers</h2>
              <p>
                Your personal data may be stored or processed in the <strong>United States</strong>. When data is
                transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place,
                such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Security certifications and audits</li>
                <li>Contracts ensuring GDPR compliance</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Data Security Measures</h2>
              <p>We take your data security seriously and have implemented:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end encryption</li>
                <li>Row-level security</li>
                <li>Role-based access control (RBAC)</li>
                <li>Access management protocols</li>
                <li>Security certifications and audit logs</li>
              </ul>
              <p className="mt-4">
                These measures help protect your data from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Data Retention</h2>
              <p>We only keep personal data as long as necessary. Specifically:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  User accounts are deleted <strong>after 12 months of inactivity</strong>
                </li>
                <li>Analytics and cookie data is stored in accordance with our cookie policy</li>
              </ul>
              <p className="mt-4">If you wish to delete your data sooner, contact us anytime.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Policy Updates</h2>
              <p>We may update this Privacy Policy from time to time. When we do:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We will post the new policy on this page</li>
                <li>You may receive a notification (if required or if significant changes are made)</li>
              </ul>
              <p className="mt-4">We recommend checking this page periodically.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or want to exercise your rights, contact us at:</p>
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
