/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '62r': '62rem',
      },
      height: {
        '39r': '39rem',
      },
      colors: {
        'lightPink': '#EBBEFF',
        'darkpurple': '#4B0B67',
        'grayishPurple': '#341635',
      },
    },
  },
  plugins: [],
}

