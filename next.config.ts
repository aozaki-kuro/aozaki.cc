import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    // unoptimized: process.env.CF_PAGES === 'true' ? true : false,
    unoptimized: true,
    minimumCacheTTL: 604800,
  },

  output: 'export',
}

export default nextConfig
