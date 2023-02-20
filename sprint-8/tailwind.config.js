/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'black': '#0a0b0b',
      'gray': {
        400: '#9b9b9b',
        700: '#151515',
      },
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
