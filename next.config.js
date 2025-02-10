// next.config.js
module.exports = {
  reactStrictMode: true,  // React Strict Mode ko enable karna
  swcMinify: true,        // SWC minifier ko enable karna
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
