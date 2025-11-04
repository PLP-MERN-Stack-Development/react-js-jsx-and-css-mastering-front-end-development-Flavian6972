/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", //tell Tailwind where to look for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
