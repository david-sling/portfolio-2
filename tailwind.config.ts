import type { Config } from "tailwindcss";

const primary = "#67D0E8";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: primary,
          100: `${primary}10`,
          200: `${primary}20`,
          300: `${primary}30`,
          400: `${primary}40`,
          500: `${primary}50`,
          600: `${primary}60`,
          700: `${primary}70`,
          800: `${primary}80`,
          900: `${primary}90`,
        },
        dark: {
          DEFAULT: "#212121",
          800: "#1a1a1a",
          900: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
