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
        brand: {
          50: "#F0F7FC", 100: "#E0EFFA", 200: "#BDDDF3", 300: "#85BCE3",
          400: "#4A96CE", 500: "#247AB9", 600: "#17639D", 700: "#164F7D",
          800: "#183F61", 900: "#17344E", 950: "#0C2235"
        },
        navy: {
          950: "#0C2235",
          900: "#17344E",
          800: "#183F61",
          700: "#164F7D"
        },
        gold: {
          500: "#B58A62",
          400: "#C6A47C",
          100: "#F2E7DC"
        },
        porcelain: "#F5F8FB"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 48px rgba(23, 63, 97, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
