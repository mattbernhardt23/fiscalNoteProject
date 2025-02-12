import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Use built-in browser optimization instead of `sharp`
  },
};

export default nextConfig;
