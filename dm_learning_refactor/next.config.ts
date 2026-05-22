import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learning-strapi.dmlabs.in',
      },
    ],
  },
};

export default nextConfig;
