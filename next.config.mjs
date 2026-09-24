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
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
