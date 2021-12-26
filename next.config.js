module.exports = {
  reactStrictMode: true,
  // experimental: {
  //   // ssr and displayName are configured by default
  //   styledComponents: true,
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: true,
      },
    ];
  },
};
