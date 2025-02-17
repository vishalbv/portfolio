/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Add canvas loader
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader",
    });
    return config;
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
