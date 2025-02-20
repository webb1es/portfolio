import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'out',
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/29043511",
        search: "?v=4",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
