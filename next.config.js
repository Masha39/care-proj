const path = require('path')

const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  swcMinify: false,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: ['@svgr/webpack']
    })
    return config
  },
  sassOptions: {
    /// Global mixins&variables
    additionalData: [
      'src/styles/config/variables',
      'src/styles/config/breakpoints',
      'src/styles/config/mixins'
    ]
      .map((path) => `@import '${path}';`)
      .join(''),
    /// import paths lookup for easy access to styles&assets
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'assets')
    ]
  }
})
