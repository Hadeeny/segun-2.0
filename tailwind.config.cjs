/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   glow: {
      //     "0%, 100%": { opacity: 0.4 },
      //     "50%": { opacity: 1 },
      //   },
      // },
      // animations: {
      //   glow: "glow 2s ease-in-out infinite",
      // },
      colors: {
        primary: "#FCBA28",
        secondary: "rgb(229, 231, 235)",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
