/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gauravmehta.github.io',
  assetPrefix: '/gauravmehta.github.io',
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
