// vite.config.ts
import react from "file:///C:/Users/abhis/OneDrive/Documents/Client-of-vivek/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
import { defineConfig } from "file:///C:/Users/abhis/OneDrive/Documents/Client-of-vivek/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///C:/Users/abhis/OneDrive/Documents/Client-of-vivek/node_modules/@tailwindcss/vite/dist/index.mjs";
import vercel from "file:///C:/Users/abhis/OneDrive/Documents/Client-of-vivek/node_modules/vite-plugin-vercel/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\abhis\\OneDrive\\Documents\\Client-of-vivek";
var vite_config_default = defineConfig({
  base: "/",
  server: {
    port: process.env.PORT
  },
  plugins: [react(), tailwindcss(), vercel()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/widget.tsx"),
      name: "ReactWidget",
      fileName: "react-widget-uv",
      formats: ["iife"]
    },
    copyPublicDir: true,
    rollupOptions: {
      // Remove external dependencies to bundle them
      // external: ['react', 'react-dom'],
      output: {
        // Remove globals mapping since React and ReactDOM will be bundled
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmhpc1xcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcQ2xpZW50LW9mLXZpdmVrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmhpc1xcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcQ2xpZW50LW9mLXZpdmVrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hYmhpcy9PbmVEcml2ZS9Eb2N1bWVudHMvQ2xpZW50LW9mLXZpdmVrL3ZpdGUuY29uZmlnLnRzXCI7Ly8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuLy8gaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG4vLyBpbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcblxyXG4vLyAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4vLyAgIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpXSxcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcclxuaW1wb3J0IHZlcmNlbCBmcm9tIFwidml0ZS1wbHVnaW4tdmVyY2VsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCBhcyB1bmtub3duIGFzIG51bWJlcixcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpLCB2ZXJjZWwoKV0sXHJcbiAgcHVibGljRGlyOiBcInB1YmxpY1wiLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3dpZGdldC50c3hcIiksXHJcbiAgICAgIG5hbWU6IFwiUmVhY3RXaWRnZXRcIixcclxuICAgICAgZmlsZU5hbWU6IFwicmVhY3Qtd2lkZ2V0LXV2XCIsXHJcbiAgICAgIGZvcm1hdHM6IFtcImlpZmVcIl0sXHJcbiAgICB9LFxyXG4gICAgY29weVB1YmxpY0RpcjogdHJ1ZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gUmVtb3ZlIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0byBidW5kbGUgdGhlbVxyXG4gICAgICAvLyBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGdsb2JhbHMgbWFwcGluZyBzaW5jZSBSZWFjdCBhbmQgUmVhY3RET00gd2lsbCBiZSBidW5kbGVkXHJcbiAgICAgICAgLy8gZ2xvYmFsczoge1xyXG4gICAgICAgIC8vICAgcmVhY3Q6ICdSZWFjdCcsXHJcbiAgICAgICAgLy8gICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVNBLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxZQUFZO0FBYm5CLElBQU0sbUNBQW1DO0FBZXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQzFDLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQy9DLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNO0FBQUEsSUFDbEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxJQUNmLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
