/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["img.aozaki.cc"],
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
