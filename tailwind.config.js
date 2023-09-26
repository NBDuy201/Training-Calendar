/** @type {import('tailwindcss').Config} */
const pagePaddingY = "1.5rem";
const pagePaddingX = "1rem";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7874c5",
        secondary: "#b8c0c6",
        background: "#f6f7f9",
        hover: "#e2e8f0",
      },
      spacing: {
        pagePaddingY,
        pagePaddingX,
      },
    },
  },
  plugins: [],
};
