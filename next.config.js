/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      "puppeteer",
      "puppeteer-core",
      "@sparticuz/chromium",
    ],
    esmExternals: "loose",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) return config;

    config.module.rules.push({
      test: /node_modules[\/\\](@puppeteer\/browsers|extract-zip)/,
      use: "ignore-loader",
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: false, // Disable path resolution at build time
      fs: false,   // Disable fs resolution at build time
    };

    return config;
  },
};

module.exports = nextConfig;