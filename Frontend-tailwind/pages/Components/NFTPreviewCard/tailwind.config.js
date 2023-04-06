/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
        Softblue: "rgb(139, 172, 218)",
        Cyan: "rgb(0, 255, 247)",

        /* Main BG */
        mainBG: "rgb(13, 25, 43)",

        /* card BG */
        cardBG: "rgb(20, 37, 61)",
        /* line */
        breakColor: "rgb(47, 65, 91)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
