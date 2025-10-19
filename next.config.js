/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig