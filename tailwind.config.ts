import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3f9",
          100: "#d5e0ee",
          200: "#afc3de",
          300: "#84a2ca",
          400: "#5e82b6",
          500: "#3d6399",
          600: "#2f4e7a",
          700: "#1e3a5f",
          800: "#162c48",
          900: "#0e1d30",
          950: "#091321",
        },
        accent: {
          50: "#fef2f3",
          100: "#fde3e6",
          200: "#fbccd3",
          300: "#f8a5b1",
          400: "#f27289",
          500: "#e84463",
          600: "#C41E3A",
          700: "#a31830",
          800: "#88172e",
          900: "#75172c",
          950: "#410813",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
