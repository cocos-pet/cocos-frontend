import type { StorybookConfig } from "@storybook/nextjs-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import * as path from "node:path";

const config: StorybookConfig = {
  stories: [
    "../src/design-system/**/*.mdx",
    "../src/design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    // Vanilla Extract 플러그인 추가
    config.plugins?.push(vanillaExtractPlugin());

    // Path aliases 설정
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@api": path.resolve(__dirname, "../src/api"),
      "@asset": path.resolve(__dirname, "../src/asset"),
      "@common": path.resolve(__dirname, "../src/common"),
      "@page": path.resolve(__dirname, "../src/page"),
      "@app": path.resolve(__dirname, "../src/app"),
      "@route": path.resolve(__dirname, "../src/route"),
      "@shared": path.resolve(__dirname, "../src/shared"),
      "@style": path.resolve(__dirname, "../src/style"),
      "@type": path.resolve(__dirname, "../src/type"),
      "@store": path.resolve(__dirname, "../src/store"),
      "@auth": path.resolve(__dirname, "../src/auth"),
      "@providers": path.resolve(__dirname, "../src/providers"),
    };

    return config;
  },
};
export default config;
