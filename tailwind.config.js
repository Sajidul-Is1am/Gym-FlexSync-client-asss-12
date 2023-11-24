/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        secondary: '#52F0B8',
        secondaryDeep: '#53F0B8',
      }
    },
  },
  plugins: [require("daisyui")],
}