import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// ⚠️ Replit-Plugins MÜSSEN synchron importiert werden
import { cartographer } from "@replit/vite-plugin-cartographer";
import { devBanner } from "@replit/vite-plugin-dev-banner";


export default defineConfig(({ mode }) => {
  const isReplitDev =
    mode !== "production" && process.env.REPL_ID !== undefined;

  return {
    // ✅ relative Pfade für GitHub Pages
    base: "./",

    // ✅ Root deiner App
    root: path.resolve(import.meta.dirname, "client"),

    plugins: [
      react(),
      runtimeErrorOverlay(),
      tailwindcss(),
      metaImagesPlugin(),

      // ✅ NUR synchron, NUR bedingt
      ...(isReplitDev ? [cartographer(), devBanner()] : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    css: {
      postcss: {
        plugins: [],
      },
    },

    build: {
      // ✅ Root für GitHub Pages
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,

      // ✅ /assets direkt unter Root
      assetsDir: "assets",

      rollupOptions: {
        input: path.resolve(import.meta.dirname, "client", "index.html"),
      },
    },

    server: {
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
