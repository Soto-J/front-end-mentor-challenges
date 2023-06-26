/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern-desktop": "url('/images/bg-pattern-desktop.svg')",
        "hero-pattern-mobile": "url('/images/bg-pattern-mobile.svg')",
        "background-pattern": "url('/images/bg-pattern.svg')",
      },
    },
  },
  plugins: [],
};
