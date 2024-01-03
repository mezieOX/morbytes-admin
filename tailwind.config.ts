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
        primary: "#FFA800",
        black: "#050505",
        dark: {
          DEFAULT: "#1E1E1E",
          light: "#101010",
          lighter: "#EEEEEE",
          semi: "#494747",
          medium: "#262626",
          bold: "#D9D9D9",
          extraBold: "#8B8B8B",
          bolder: "#EAE9E9",
          muted: "#4E3401",
        },
        gray: {
          DEFAULT: "#0F0F0F",
          light: "#EAE9E9",
        },
        red: {
          DEFAULT: "#FF0000",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
