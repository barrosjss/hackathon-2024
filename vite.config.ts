import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api/index.ts"),
      "@assets": path.resolve(__dirname, "./src/assets/index.ts"),
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@hooks": path.resolve(__dirname, "./src/hooks/index.ts"),
      "@router": path.resolve(__dirname, "./src/router/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@helpers": path.resolve(__dirname, "./src/helpers/index.ts"),
      "@lenguajes": path.resolve(__dirname, "./src/i18n.ts"),
      "@stores": path.resolve(__dirname, "./src/stores/index.ts"),
      "@theme": path.resolve(__dirname, "./src/theme/index.ts"),
    },
  },
});
