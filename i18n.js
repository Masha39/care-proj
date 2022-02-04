module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  extensionsRgx: /\.page\.(tsx|ts|js|mjs|jsx)$/,
  pages: {
    '*': ['common'],
    '/': ['static/main_page', 'sections'],
    '/learn': ['static/learn', 'articles-list', 'static/topics_description'],
    '/[slug]': ['static/article', 'static/topics_description'],
    '/caregiver-toolkit': [
      'static/caregiver_toolkit',
      'static/topics_description',
      'articles-list'
    ],
    '/contact-us': ['static/contact_page'],
    '/resources': ['static/resources_page'],
    '/privacy-policy': ['static/privacy_policy'],
    '/terms-of-use': ['static/terms_of_use']
  }
}
