/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCBA28",
        secondary: "rgb(229, 231, 235)",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
