// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

let conf = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
};

conf = withBundleAnalyzer(conf);

module.exports = conf;
