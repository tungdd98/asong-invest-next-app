import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50",
        blue: {
          100: "#003366",
        },
        pink: {
          100: "#f3525a",
        },
      },
      container: {
        screens: {
          "2xl": "1312px",
        },
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
export default config;
