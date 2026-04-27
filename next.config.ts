import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "cdn.sanity.io",
      "via.placeholder.com",
    ],
  },
};

export default nextConfig;
