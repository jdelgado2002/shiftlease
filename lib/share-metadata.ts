import type { Metadata } from "next"

/**
 * A page-level `openGraph` replaces the layout's block wholesale, so a page
 * that sets its own share title must restate siteName and locale too.
 * og:image is left to the nearest opengraph-image file.
 */
export function shareMetadata(
  path: string,
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: "EasyShiftHQ",
      locale: "en_US",
      url: `https://easyshifthq.com${path}`,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  }
}
