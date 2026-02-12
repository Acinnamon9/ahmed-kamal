// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  base: "/",
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [react(), tailwindcss(), vercel()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
        },
      },
    },
  },
});
