module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/fr',
        destination: '/',
        permanent: true,
      },
    ];
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
};
