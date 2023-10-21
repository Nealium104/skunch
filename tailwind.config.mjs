/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      bangers: ["Bangers", "sans-serif"],
      "roboto-slab": ["Roboto Slab Variable", "sans"],
    },
    extend: {
      colors: {
        "off-white": "#CCCCCC",
        red: "#C90202",
      },
    },
  },
  plugins: [],
};
