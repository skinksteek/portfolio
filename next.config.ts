import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/matkasse",
        destination: "https://matkasse-theta.vercel.app/",
      },
      {
        source: "/matkasse/:path*",
        destination: "https://matkasse-theta.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
