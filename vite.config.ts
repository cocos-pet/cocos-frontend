import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: "@api", replacement: "/src/api" },
      { find: "@asset", replacement: "/src/asset" },
      { find: "@common", replacement: "/src/common" },
      { find: "@page", replacement: "/src/page" },
      { find: "@route", replacement: "/src/route" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@style", replacement: "/src/style" },
      { find: "@type", replacement: "/src/type" },
      { find: "@store", replacement: "/src/store" },
      { find: "@auth", replacement: "/src/auth" },
    ],
  },
});
