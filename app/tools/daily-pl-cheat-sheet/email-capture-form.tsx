"use client"

import { useEffect, useState, useTransition } from "react"
import posthog from "posthog-js"
import { CheckCircle2, Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendDailyPLCheatSheet } from "./actions"

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const

type TrackedParam = (typeof TRACKED_PARAMS)[number]
type Utms = Partial<Record<TrackedParam, string>> & { mkt_landing_page?: string }

export function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [restaurantName, setRestaurantName] = useState("")
  const [utms, setUtms] = useState<Utms>({})
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (globalThis.window === undefined) return
    const params = new URLSearchParams(globalThis.location.search)
    const next: Utms = {}
    for (const key of TRACKED_PARAMS) {
      const v = params.get(key)
      if (v) next[key] = v
    }
    next.mkt_landing_page = globalThis.location.pathname
    setUtms(next)
  }, [])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    startTransition(async () => {
      const payload = {
        email: email.trim(),
        firstName: firstName.trim(),
        restaurantName: restaurantName.trim(),
        ...utms,
      }
      const result = await sendDailyPLCheatSheet(payload)

      if (!result.ok) {
        setError(result.error)
        return
      }

      try {
        posthog.capture("lead_magnet_downloaded", {
          tool: "daily-pl-cheat-sheet",
          email: payload.email,
          first_name: payload.firstName || undefined,
          restaurant_name: payload.restaurantName || undefined,
          ...utms,
        })
      } catch {
        // PostHog not initialized — no-op so we never block the success state
      }

      setSuccess(true)
    })
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Check your inbox.</h3>
            <p className="text-sm text-muted-foreground">
              We just sent both files to <span className="font-medium text-foreground">{email}</span>.
              If it doesn&apos;t arrive in a minute, check spam or grab the files directly below.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <a
              href="/downloads/EasyShiftHQ-Daily-PnL-Cheat-Sheet.xlsx"
              download
            >
              <Download className="h-4 w-4 mr-2" aria-hidden="true" />
              Excel cheat sheet
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a
              href="/downloads/EasyShiftHQ-Restaurant-Daily-PnL-Guide.pdf"
              download
            >
              <Download className="h-4 w-4 mr-2" aria-hidden="true" />
              PDF guide
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4"
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="lm-email" className="text-sm font-medium">
          Work email <span className="text-muted-foreground">(required)</span>
        </label>
        <Input
          id="lm-email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@yourrestaurant.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "lm-error" : undefined}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="lm-first-name" className="text-sm font-medium">
            First name <span className="text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="lm-first-name"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lm-restaurant" className="text-sm font-medium">
            Restaurant name <span className="text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="lm-restaurant"
            type="text"
            autoComplete="organization"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <p id="lm-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto rounded-full bg-foreground text-background hover:bg-foreground/90"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send me the cheat sheet"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        We&apos;ll email you the files and occasional restaurant ops tips. Unsubscribe anytime.
      </p>
    </form>
  )
}
