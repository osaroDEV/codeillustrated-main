import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      fallback: [
        {
          source: '/labs',
          destination: 'https://your-labs-site.vercel.app/labs',
        },
        {
          source: '/labs/:path*',
          destination: 'https://your-labs-site.vercel.app/labs/:path*',
        },
        {
          source: '/academy',
          destination: 'https://your-academy-site.vercel.app/academy',
        },
        {
          source: '/academy/:path*',
          destination: 'https://your-academy-site.vercel.app/academy/:path*',
        },
      ],
    }
  },
  reactCompiler: true,
};

export default nextConfig;
