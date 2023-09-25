/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7874c5",
        secondary: "#b8c0c6",
        background: "#f6f7f9",
      },
    },
  },
  plugins: [],
};
