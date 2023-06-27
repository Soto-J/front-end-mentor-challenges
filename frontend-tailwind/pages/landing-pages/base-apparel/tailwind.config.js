/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        //  Primary
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed: "hsl(0, 93%, 68%)",

        // Neutral

        DarkGrayishRed: "hsl(0, 6%, 24%)",

        // Gradients
        Gradients: {
          1: "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
          2: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        },
        // - Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
        // - Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)
      },
    },
  },
  plugins: [],
};
