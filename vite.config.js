import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/draft-vite/" : "/",
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" })],
});
