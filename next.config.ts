import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com', 'placehold.co', 'media.licdn.com'], // Added placehold.co
  },
};

export default nextConfig;
