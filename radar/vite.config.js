import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: "src/App.standalone.tsx",
      },
      output: {
        dir: "dist",
        format: "iife",
        entryFileNames: "radarBundle.js",
        assetFileNames: `radarBundle.[ext]`,
      },
    },
  },
});
