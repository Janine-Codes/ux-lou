/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.providedExports = false;
      config.optimization.usedExports = false;
    }
    return config;
  },
};

export default nextConfig;
