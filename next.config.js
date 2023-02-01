/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.aozaki.cc']
  },
  // Ignore Lint during Build
  eslint: {
    ignoreDuringBuilds: true
  }
}
