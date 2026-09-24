"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import posthog from "posthog-js"
import { joinWaitlist } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await joinWaitlist(formData)
      if (result.success) {
        try {
          // No PII — the email and company name stay in Resend.
          posthog.capture("waitlist_joined", {
            location_count: Number(formData.get("locationCount")) || null,
          })
        } catch {
          // PostHog not initialized — never block the success state
        }
        setSubmitted(result.message)
      } else {
        setError(result.message)
      }
    } catch {
      setError("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // The confirmation replaces the form outright. A message rendered beneath a
  // still-populated form reads as "not sent yet" and invites a second submit.
  if (submitted) {
    return (
      <div className="flex items-start gap-3" role="status">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-under" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-medium">You&apos;re on the list.</p>
          <p className="text-sm text-muted-foreground">{submitted}</p>
        </div>
      </div>
    )
  }

  return (
    <form id="waitlist-form" action={handleSubmit} className="flex flex-col space-y-4">
      <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" name="email" required />
      <Input className="max-w-lg flex-1" placeholder="Company name" type="text" name="companyName" required />
      <Input
        className="max-w-lg flex-1"
        placeholder="Number of restaurant locations"
        type="number"
        name="locationCount"
        min="1"
        required
      />
      {error ? (
        <p className="text-sm text-over" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get In Touch"}
      </Button>
    </form>
  )
}
