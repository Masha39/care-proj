module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  extensionsRgx: /\.page\.(tsx|ts|js|mjs|jsx)$/,
  pages: {
    '*': ['common'],
    '/': ['static/main_page', 'sections'],
    '/learn': ['static/learn', 'articles-list'],
    '/contact-us': ['static/contact_page'],
    '/learn/[slug]': ['static/article', 'static/learn'],
    '/privacy-policy': ['static/privacy_policy']
  }
}
