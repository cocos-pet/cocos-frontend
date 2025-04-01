import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import * as path from "node:path";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Temporarily ignore TypeScript errors during build
    // This should be removed in production
    ignoreBuildErrors: true,
  },
  // 정적 내보내기 대신 정적 대체 사용
  staticPageGenerationTimeout: 120,  // 타임아웃을 2분으로 설정
  images: {
    unoptimized: true
  },
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
  distDir: "./dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default withVanillaExtract(nextConfig);
