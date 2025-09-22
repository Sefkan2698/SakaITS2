/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Repository Name verwenden
  basePath: '/SakaITS2',
  assetPrefix: '/SakaITS2',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;