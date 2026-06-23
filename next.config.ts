import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "sc-academy-assest.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
