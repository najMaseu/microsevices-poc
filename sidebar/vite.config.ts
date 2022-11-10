import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  preview: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: "src/App.standalone.tsx",
      output: {
        dir: "dist",
        entryFileNames: "sidebarBundle.js",
        assetFileNames: `sidebarBundle.[ext]`,
      },
    },
  },
});
