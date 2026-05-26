/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === "true"
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages && {
    output: "export",
    ...(!hasCustomDomain && {
      basePath: "/portfolio",
      assetPrefix: "/portfolio",
      env: {
        NEXT_PUBLIC_BASE_PATH: "/portfolio",
      },
    }),
  }),
}

export default nextConfig
