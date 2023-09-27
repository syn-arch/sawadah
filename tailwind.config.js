/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      aguafina: ["Aguafina Script"],
    },
    extend: {
      colors: {
        myblack: "#2B2D42",
        lightmyblack: "#8D99AE",
        lightbg: "#EDF2F4",
        lightmyred: "#EF233C",
        darkmyred: "#D90429",
        textcolor: "#373737",
      },
    },
  },
  plugins: [],
};
