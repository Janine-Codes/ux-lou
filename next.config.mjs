/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.providedExports = false;
      config.optimization.usedExports = false;
    }
    return config;
  },
};

export default nextConfig;
