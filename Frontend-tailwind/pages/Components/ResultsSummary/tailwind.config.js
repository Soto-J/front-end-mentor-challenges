/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
        /*  Primary */
        Lightred: "rgb(255, 87, 87)",
        Orangeyyellow: "rgb(255, 176, 31)",
        Greenteal: "rgb(0, 189, 145)",
        Cobaltblue: "rgb(17, 37, 212)",

        /* Gradients - background */
        Lightslateblue: "rgb(120, 87, 255)",
        Lightroyalblue: "rgb(46, 43, 233)",

        /* Circle */
        Violetblue: "rgb(78, 33, 202)",
        Persianblue: "rgba(36, 33, 202)",

        /* Neutral */
        Paleblue: "rgb(235, 241, 255)",
        Lightlavender: "rgb(200, 199, 255)",
        Darkgrayblue: "rgb(48, 59, 90)",
      },
      fontFamily: {
        HankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
