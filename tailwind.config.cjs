/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFAE57",
        secondary: "rgb(229, 231, 235)",
        white: "#ffffff",
        leMon: "#bae67e",
        rouge: "#ef6b73",
      },
    },
  },
  plugins: [],
};
