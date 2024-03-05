/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern_1: "url(https://res.cloudinary.com/dbobkzvku/image/upload/v1709655265/Looper-1_bkgdsj.svg)",
        pattern_2: "url(https://res.cloudinary.com/dbobkzvku/image/upload/v1709655325/Looper-2_oydwae.svg)", 
        pattern_3: "url(https://res.cloudinary.com/dbobkzvku/image/upload/v1709655325/Looper-3_uz0lkd.svg)",
        pattern_4: "url(https://res.cloudinary.com/dbobkzvku/image/upload/v1709655286/Looper-4_s6q0c1.svg)", 
      },
      boxShadow: {
        bottom: "inset 0px -10px 0px #fde047",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif SC", ...defaultTheme.fontFamily.serif],
        space: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'spin-slow': 'spin 48s linear infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
