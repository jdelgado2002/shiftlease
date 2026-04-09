# Design: Update Branding to PNG Logos

**Date:** 2026-04-08
**Branch:** `untitled-chat`
**PR:** #7

## Problem

The site used `CalendarCheck` from `lucide-react` as a placeholder logo icon. This needed to be replaced with the actual EasyShiftHQ brand assets (PNG icons). Additionally, the old `favicon.svg` and `icon.svg` files needed to be replaced with a proper favicon set for cross-browser/device support.

## Approach (already implemented)

**Selected approach:** Direct replacement of CalendarCheck with `next/image` rendering `icon-192.png`.

### Changes

1. **Header/Footer** — Replace `<CalendarCheck>` icon with `<Image src="/icon-192.png">` at appropriate sizes (32px header, 28px footer)
2. **Privacy/Terms pages** — Same replacement (24px) in their standalone headers
3. **Favicon set** — Replace single `favicon.svg` with:
   - `favicon.ico` (fallback)
   - `icon-192.png` / `icon-512.png` (standard)
   - `apple-touch-icon.png` (iOS)
   - `icon-192-maskable.png` / `icon-512-maskable.png` (PWA)
4. **manifest.json** — New PWA manifest referencing the icon set
5. **Structured data** — Update organization logo URL from `favicon.svg` to `icon-512.png`
6. **Cleanup** — Remove `favicon.svg`, `icon.svg`, `icon-dark-32x32.png`, `icon-light-32x32.png`

### Trade-offs

- Using `next/image` for the logo adds slight optimization overhead vs a raw `<img>`, but gets automatic optimization and is consistent with Next.js patterns
- 192px source image for 24-32px display means the browser downscales — acceptable for a logo, and the same asset works for PWA icons
