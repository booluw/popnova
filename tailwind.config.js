/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a54132",
        secondary: "#d2bb98"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Abril Fatface", "serif"],
      },
    },
  },
  plugins: [],
};

