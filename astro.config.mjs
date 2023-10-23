import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["res.cloudinary.com", "skunch.netlify.app"],
  },
  integrations: [tailwind()],
});
