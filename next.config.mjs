/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Fix für GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/SakaITS2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SakaITS2/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;