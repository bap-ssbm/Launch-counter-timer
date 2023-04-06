/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['Red Hat Text', 'sans-serif'],
      'serif': ['Red Hat Text', 'sans-serif'],
      'mono': ['Red Hat Text', 'sans-serif'],
    },
    extend: {
      colors:{
        red:{
          1000:'hsl(345, 95%, 68%)'
        },
        blue:{
          1000:'hsl(237, 18%, 59%)',
          1100:'hsl(236, 21%, 26%)',
          1200:'hsl(235, 16%, 14%)',
          1300:'hsl(234, 17%, 12%)'
        },
      },
    },
  },
  plugins: [],
}

