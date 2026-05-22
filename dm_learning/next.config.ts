import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['learning-strapi.dmlabs.in'],
    minimumCacheTTL: 31536000, // 1 year in seconds
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
