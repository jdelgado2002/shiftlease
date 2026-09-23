import { MetadataRoute } from "next"

/**
 * Preview deployments served an allow-all robots.txt, which put every
 * easyshifthq-*.vercel.app build in front of crawlers. Hard-coded canonicals
 * kept that from becoming a duplicate-content problem, but the right answer is
 * for non-production builds to say so themselves.
 *
 * Production stays open to everyone, AI crawlers included. We want to be
 * quoted by answer engines, and the only way into ChatGPT, Gemini, Perplexity
 * and Claude is to let their crawlers read the site.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV

  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://easyshifthq.com/sitemap.xml",
    host: "https://easyshifthq.com",
  }
}
