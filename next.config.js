/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  // Add this if you're using next/link
  experimental: {
    appDir: true,
  },
  // Optional: Add this if you're using next/image
  trailingSlash: true,
}

module.exports = nextConfig
