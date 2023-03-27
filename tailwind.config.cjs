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
        "3xl": "-2px 0px 14px 5px rgba(106, 208, 200, 0.4)",
      },
    },
  },
  plugins: [],
};
