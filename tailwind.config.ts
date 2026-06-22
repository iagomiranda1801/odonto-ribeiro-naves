import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1427",
          900: "#101E38",
          800: "#192E4D",
          700: "#254563"
        },
        gold: {
          500: "#B58A62",
          400: "#C6A47C",
          100: "#F2E7DC"
        },
        porcelain: "#F7F9FB"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 21, 38, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
