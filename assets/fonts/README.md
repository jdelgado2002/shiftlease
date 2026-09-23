# Vendored fonts

These two files exist only so `lib/og.tsx` can render share cards in the site's
real type system at build time. `next/font/google` already handles the fonts the
browser loads — satori (the renderer behind `next/og`) cannot read woff2 and
needs the TTF on disk, so the build cannot depend on a network fetch.

Both are licensed under the SIL Open Font License 1.1, which permits
redistribution as part of a larger work:

- **Instrument Serif** — Rodrigo Fuenzalida, Instrument.
  https://github.com/google/fonts/tree/main/ofl/instrumentserif
- **IBM Plex Mono** — IBM / Mike Abbink, Bold Monday.
  https://github.com/google/fonts/tree/main/ofl/ibmplexmono

Full licence text ships with each family at the URLs above.
