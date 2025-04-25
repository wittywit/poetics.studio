/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/poetics.studio',
  assetPrefix: '/poetics.studio/',
  trailingSlash: true,
}

export default nextConfig
