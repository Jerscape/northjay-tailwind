import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    
  },

  base: '/northjay-tailwind/', // <-- Add this exact line!

    build: {
    assetsPrefix: '/northjay-tailwind/'
  }


});