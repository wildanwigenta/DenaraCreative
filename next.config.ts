import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Anda bisa menambahkan hostname lain yang diperlukan
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // untuk subdomain unsplash lainnya
      },
    ],
  },
};

export default nextConfig;
