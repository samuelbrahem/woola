import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#F6F6F5",
          100: "#ECECEA",
          200: "#D5D5D2",
          300: "#A8A8A4",
          400: "#6F6F6B",
          500: "#3A3A38",
          600: "#1F1F1D",
          700: "#141413",
          800: "#0A0A09",
          900: "#040404",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FAFAF7",
          200: "#F2F2EE",
        },
        brand: {
          50: "#EAF3F2",
          100: "#CFE2E0",
          200: "#9CC4C0",
          300: "#5FA39C",
          400: "#2D8079",
          500: "#0F6E66",
          600: "#0B5B54",
          700: "#08433E",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        script: ["'Sacramento'", "'Brush Script MT'", "cursive"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        ring: "0 0 0 1px rgba(15,15,15,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
