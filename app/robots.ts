import { MetadataRoute } from "next"

/**
 * Only the production deploy may be crawled. Netlify sets CONTEXT
 * ("production" | "deploy-preview" | "branch-deploy"); Vercel sets VERCEL_ENV.
 * Local builds set neither and are treated as production so `pnpm build`
 * output matches what ships.
 *
 * Production stays open to every crawler, AI crawlers included, so search
 * engines and answer engines can read the site and quote it accurately.
 */
export default function robots(): MetadataRoute.Robots {
  const context = process.env.CONTEXT
  const vercelEnv = process.env.VERCEL_ENV
  const isProduction =
    context === "production" ||
    vercelEnv === "production" ||
    (!context && !vercelEnv)

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
  }
}
