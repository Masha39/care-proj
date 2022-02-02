module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  extensionsRgx: /\.page\.(tsx|ts|js|mjs|jsx)$/,
  pages: {
    '*': ['common'],
    '/': ['static/main_page', 'sections'],
    '/learn': ['static/learn', 'articles-list'],
    '/learn/[slug]': ['static/article', 'static/learn'],
    '/caregiver-toolkit': ['static/caregiver_toolkit', 'articles-list'],
    '/contact-us': ['static/contact_page']
  }
}
