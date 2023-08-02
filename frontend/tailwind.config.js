/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'redHat': ['Red Hat Display', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}