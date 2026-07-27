import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Provide breakpoints that match real display sizes to avoid over-sized images
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL of 1 year for images
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
