import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'outDir',
  output: 'standalone',
  images: {
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
