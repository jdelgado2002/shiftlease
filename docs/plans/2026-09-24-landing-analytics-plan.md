# Landing-page analytics cleanup — plan

## Problem
PostHog (project shared with the app) receives landing-site data, but:
- Preview deploys, localhost and the old Netlify mirror send events into the same project.
- Most `easyshifthq.com` pageviews come from existing app users.
- No events exist for the two conversions that matter: trial CTA clicks and waitlist signups.

## Code changes
1. `lib/analytics.ts` — pure helpers: `isProductionHost`, `ctaPlacement`, `pageDepthPct` (unit-tested, `pnpm test`).
2. `components/posthog-provider.tsx` — init PostHog only on `easyshifthq.com` / `www.easyshifthq.com`.
3. `components/trial-cta.tsx` — capture `trial_cta_clicked` with `cta_text`, `cta_placement` (header/footer/body), `page_depth_pct`. Covers all ~25 CTAs with no call-site changes. Caller `onClick` still runs.
4. `components/waitlist-form.tsx` — capture `waitlist_joined` with `location_count` (no PII).

## PostHog configuration (outside the repo)
- Internal/test account filters: exclude people who have used `app.easyshifthq.com`, and non-production hosts.
- Suppress the Outlook SafeLinks "Object Not Found Matching Id" exceptions.
- Funnel: landing `$pageview` → `trial_cta_clicked` → app signup → first key app action.
- "Marketing site" dashboard: visitors/week, sources, landing pages, CTA clicks by placement, funnel.

## Manual follow-ups
- Take down or redirect `easyshifthq.netlify.app`.
