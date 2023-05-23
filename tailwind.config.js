/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCBCBA",
        secondary: "#B23943",
        dark: "#202020",
        white: "#fff",
      },
    },
    fontFamily: {
      primary: ["Rubik", "sans-serif"],
      secondary: ["Sigmar One", "sans-serif"],
    },
  },
  plugins: [],
};
