const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "li_fat_id",
] as const

export function forwardUtmParams(baseUrl: string): string {
  if (globalThis.window === undefined) return baseUrl

  try {
    const url = new URL(baseUrl)
    const incoming = new URLSearchParams(globalThis.location.search)

    for (const param of TRACKED_PARAMS) {
      const value = incoming.get(param)
      if (value) url.searchParams.set(param, value)
    }

    url.searchParams.set("mkt_landing_page", globalThis.location.pathname)

    return url.toString()
  } catch {
    return baseUrl
  }
}
