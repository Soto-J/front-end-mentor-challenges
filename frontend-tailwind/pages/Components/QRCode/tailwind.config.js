/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
        mainBg: "rgb(214, 226, 240)",
        Grayishblue: "rgb(123, 135, 157)",
        Darkblue: "rgb(31, 50, 81)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
