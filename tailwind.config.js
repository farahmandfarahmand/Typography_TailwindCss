/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/js/theme.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Iranyekan"],

      },
      padding:{
        "2/3":"66.666667%",
        "1/3":"33.33333%",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};