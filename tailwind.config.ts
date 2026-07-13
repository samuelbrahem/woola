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
          100: "#FFF7F4",
          200: "#F7EDE9",
        },
        brand: {
          50: "rgb(var(--brand-50-rgb) / <alpha-value>)",
          100: "#C2E1E7",
          200: "#85C3CE",
          300: "#3FA0B0",
          400: "rgb(var(--brand-400-rgb) / <alpha-value>)",
          500: "rgb(var(--brand-500-rgb) / <alpha-value>)",
          600: "rgb(var(--brand-600-rgb) / <alpha-value>)",
          700: "#004A58",
        },
        accent: {
          400: "#9DBA13",
          500: "#89A306",
          600: "#6F8405",
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
