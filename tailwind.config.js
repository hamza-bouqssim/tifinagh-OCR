/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0F1F3F',
        _blue: '#2490F4',
        _gray: '#5B6B89'
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

