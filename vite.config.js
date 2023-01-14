import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["https://i.postimg.cc/HsznSBhb/segunsmall.png"],
      manifest: {
        name: "Oluwasegun's Portfolio",
        short_name: "Oluwasegun",
        description:
          "A self-taught Front End Developer specialized in building fast, responsive & exceptional digital experiences",
        icons: [
          {
            src: "https://i.postimg.cc/HsznSBhb/segunsmall.png",
            sizes: "32x32",
            type: "image/webp",
          },
          {
            src: "https://i.postimg.cc/Pqk7PQdF/segunbig.png",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
        // start_url: "https://segun-adeniyi.vercel.app/",
        display: "fullscreen",
        theme_color: "#bae67e",
        background_color: "#202838",
      },
    }),
  ],
});
