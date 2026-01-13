import { withSentryConfig } from "@sentry/nextjs";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import { execSync } from "node:child_process";
import * as path from "node:path";

const withVanillaExtract = createVanillaExtractPlugin();
const VERSION = getGitCommitHash();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Temporarily ignore TypeScript errors during build
    // This should be removed in production
    ignoreBuildErrors: true,
  },
  // 정적 내보내기 대신 정적 대체 사용
  staticPageGenerationTimeout: 120, // 타임아웃을 2분으로 설정
  // Production에서 source map 생성 (Sentry를 위해 필요)
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: false,
    domains: [
      //prod
      "cocos-app-data.s3.ap-northeast-2.amazonaws.com",
      "cocos-member-data.s3.ap-northeast-2.amazonaws.com",

      //dev
      "cocos-app-data-dev.s3.ap-northeast-2.amazonaws.com",
      "cocos-member-data-dev.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  webpack: (config) => {
    // 기존 alias 설정을 유지하면서 확장
    const existingAlias = config.resolve.alias || {};

    // 절대 경로에 기반한 alias 설정
    config.resolve.alias = {
      ...existingAlias,
      "@api": path.resolve(__dirname, "src/api"),
      "@asset": path.resolve(__dirname, "src/asset"),
      "@common": path.resolve(__dirname, "src/common"),
      "@page": path.resolve(__dirname, "src/page"),
      "@app": path.resolve(__dirname, "src/app"),
      "@route": path.resolve(__dirname, "src/route"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@style": path.resolve(__dirname, "src/style"),
      "@type": path.resolve(__dirname, "src/type"),
      "@store": path.resolve(__dirname, "src/store"),
      "@auth": path.resolve(__dirname, "src/auth"),
    };
    return config;
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

//only excute in server side
export default withSentryConfig(withVanillaExtract(nextConfig), {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options
  org: "tavian",
  project: "cocos",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  release: {
    name: VERSION,
  },

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});

function getGitCommitHash() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (error) {
    console.error("Error getting git commit hash:", error);
    return "unknown";
  }
}
