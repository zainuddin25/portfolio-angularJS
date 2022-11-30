/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#251B37',
        white: '#E8F9FD'
      },
      fontFamily: {
        playfair : 'Playfair Display'
      }
    },
  },
  plugins: [],
}
