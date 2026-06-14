import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
    viewTransition: true
  },
};

export default nextConfig;
