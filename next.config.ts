import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import * as path from "node:path";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@api": path.resolve(__dirname, "src/api"),
      "@asset": path.resolve(__dirname, "src/asset"),
      "@common": path.resolve(__dirname, "src/common"),
      "@page": path.resolve(__dirname, "src/page"),
      "@route": path.resolve(__dirname, "src/route"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@style": path.resolve(__dirname, "src/style"),
      "@type": path.resolve(__dirname, "src/type"),
      "@store": path.resolve(__dirname, "src/store"),
      "@auth": path.resolve(__dirname, "src/auth"),
    };
    return config;
  },
  // output: "export",
  distDir: "./dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default withVanillaExtract(nextConfig);
