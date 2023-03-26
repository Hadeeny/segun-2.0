/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      oxanium: ["Oxanium"],
      dancing: ["Dancing Script"],
    },
    extend: {
      colors: {
        primary: "#13111d",
        secondary: "rgb(229, 231, 235)",
        white: "#ffffff",
        leMon: "#42946e",
        rouge: "#853bce",
      },
      boxShadow: {
        "3xl": "0px -1px 80px 31px rgba(225, 225, 225, 0.3)",
      },
    },
  },
  plugins: [],
};
