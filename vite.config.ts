import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
    ],
  }
  
})
