import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      fallback: [
        {
          source: '/labs',
          destination: 'https://codeillustrated-studios.vercel.app/labs',
        },
        {
          source: '/labs/:path*',
          destination: 'https://codeillustrated-studios.vercel.app/labs/:path*',
        },
        {
          source: '/academy',
          destination: 'https://codeillustrated-school.vercel.app/academy',
        },
        {
          source: '/academy/:path*',
          destination: 'https://codeillustrated-school.vercel.app/academy/:path*',
        },
      ],
    }
  },
  reactCompiler: true,
};

export default nextConfig;
