/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === "true"
const repoName = "/portfolio"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages && {
    output: "export",
    basePath: repoName,
    assetPrefix: repoName,
    env: {
      NEXT_PUBLIC_BASE_PATH: repoName,
    },
  }),
}

export default nextConfig
