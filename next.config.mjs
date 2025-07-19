/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com'],
  },
  // Tell Next.js that all pages/assets are under /your-repo
  basePath: '/portfolio.react',
  // Ensure asset URLs point to the right prefix
  assetPrefix: 'https://alfredreyes14.github.io/portfolio.react/',
  // For static export, disable Next’s built-in image optimization
  images: {
    unoptimized: false,
    loader: 'akamai',
    path: '/portfolio.react',
  },
};

export default nextConfig;
