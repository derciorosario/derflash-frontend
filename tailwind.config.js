/** @type {import('tailwindcss').Config} */
const colors = require('./src/assets/colors.json');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        app_primary:colors.app_pimary,
      }
    },
  },
  plugins: [],
}

