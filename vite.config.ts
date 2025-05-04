import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ModuleFederationPlugin from "@originjs/vite-plugin-federation";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ModuleFederationPlugin({
      name: "artistList",
      remotes: {
        ui: "http://localhost:3002/assets/remoteEntry.js",
        artistDetails: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "axios", "swr"]
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
});
