/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
     colors: {
      primary: "#FFFE58"
     },
      boxShadow: {
        bottom: "inset 0px -10px 0px #FFFE58",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif SC", ...defaultTheme.fontFamily.serif],
        space: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'spin-slow': 'spin 48s linear infinite',
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ],
};
