const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    domains: ['media.istockphoto.com']
  },

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
}
