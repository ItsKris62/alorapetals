/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],},
    },
  },
  plugins: [],
}

