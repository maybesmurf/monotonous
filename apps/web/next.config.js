// next.config.js
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

let conf = {
  experimental: {
    modern: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

conf = withPreact(conf);
conf = withBundleAnalyzer(conf);

module.exports = conf;
