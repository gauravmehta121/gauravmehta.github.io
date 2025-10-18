/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  
  // Base path for production
  basePath: process.env.NODE_ENV === 'production' ? '/gauravmehta.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gauravmehta.github.io' : '',
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes to URLs
  trailingSlash: true,
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Page extensions to look for
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig
