import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#44290D",
          "80": "#B66C22",
          "60": "#E3872A",
          "40": "#DEA13D",
          "20": "#F9E7D4",
        },
        secondary: {
          "100": "#212046",
          "80": "#49479D",
          "60": "#5658A6",
          "40": "#80628C",
          "20": "#D0C3D5",
        },
        light: {
          "100": "#848484",
          "80": "#A6A6A6",
          "60": "#BFBFBF",
          "40": "#F5F4F4",
          "20": "#FEF4E8",
        },
        dark: {
          "100": "#000000",
          "80": "#262626",
          "60": "#404040",
          "40": "#4F4F4F",
          "20": "#737373",
        },
        success: {
          "100": "#20793A",
          "80": "#2AA24E",
          "60": "#62D083",
          "40": "#89DCA2",
          "20": "#EBFAF0",
        },
        info: {
          "100": "#233852",
          "80": "#013B81",
          "60": "#006BD2",
          "40": "#8FB4D9",
          "20": "#E6EEF6",
        },
        danger: {
          "100": "#990000",
          "80": "#CC0100",
          "60": "#FF666A",
          "40": "#FF9999",
          "20": "#FFE5E5",
        },
        warning: {
          "100": "#CB9701",
          "80": "#FFBD00",
          "60": "#FFD766",
          "40": "#FFE599",
          "20": "#FFF8E5",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
