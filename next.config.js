/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      "puppeteer",
      "puppeteer-core",
      "@sparticuz/chromium",
      "nodemailer", // Add nodemailer to avoid bundling its dependencies
    ],
    esmExternals: "loose",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) return config;

    config.module.rules.push({
      test: /node_modules[\/\\](cosmiconfig|env-paths|nodemailer|extract-zip|@puppeteer\/browsers)/,
      use: "ignore-loader",
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      querystring: false, // Disable querystring resolution at build time
      os: false,         // Disable os resolution at build time
      stream: false,     // Disable stream resolution at build time
      path: false,       // Already included for puppeteer
      fs: false,         // Already included for puppeteer
    };

    return config;
  },
};

module.exports = nextConfig;