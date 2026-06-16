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
          950: "#071526",
          900: "#0B1F35",
          800: "#123251",
          700: "#174263"
        },
        gold: {
          500: "#B8924A",
          400: "#C9A45D",
          100: "#F5EBD7"
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
