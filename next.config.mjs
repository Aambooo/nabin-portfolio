/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
}

export default nextConfig