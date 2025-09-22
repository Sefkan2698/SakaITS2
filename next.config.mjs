/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',
  // Disable server-side features for static export
  experimental: {
    appDir: true
  }
};

export default nextConfig;