import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@myapp/utils"],
};

export default nextConfig;