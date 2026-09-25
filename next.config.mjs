/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  // The OG card renderer reads these at build time. They live outside public/
  // and are never imported, so tracing cannot infer them on its own.
  outputFileTracingIncludes: {
    "**/opengraph-image": ["./assets/fonts/**"],
  },
  images: {
    unoptimized: true,
  },
  // Netlify also serves the production build on its own hostnames. Send those
  // home so crawlers only ever see one copy of the site. Deploy previews
  // (deploy-preview-N--...) don't match and keep working.
  async redirects() {
    return [
      "easyshifthq-landing.netlify.app",
      "main--easyshifthq-landing.netlify.app",
    ].map((host) => ({
      source: "/:path*",
      // `has` values are regexes, so escape the dots for an exact host match.
      has: [{ type: "host", value: host.replaceAll(".", "\\.") }],
      // Cloudflare adds cf-ray to every request it forwards, and a direct hit
      // on a netlify.app hostname never passes through Cloudflare. If Cloudflare
      // ever rewrote Host to one of these names, real visitors would skip this
      // rule instead of looping.
      missing: [{ type: "header", key: "cf-ray" }],
      destination: "https://easyshifthq.com/:path*",
      permanent: true,
    }))
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
