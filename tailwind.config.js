/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'blue': '0 0 12px white', // Custom drop shadow
      },
      screens: {
        'max-420': {'max': '420px'}, // Apply styles for screens less than 420px
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}