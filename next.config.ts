import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push("react/jsx-dev-runtime");
    return config;
  },
};

export default nextConfig;
