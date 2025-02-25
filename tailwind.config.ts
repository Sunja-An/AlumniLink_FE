import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "1074px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      fontFamily: {
        studioSans: ["studioSans"],
        pretendard: ["pretendard"],
      },
      backgroundColor: {
        softblack: "#1C1C1C",
        softwhite: "#F0F0F0",
        secondary: "#FAFAFA",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(50%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideOut: "slideOut 0.3s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
