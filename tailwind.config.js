/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {fontFamily: {
      Grover: 'Irish Grover',
      Roboto: 'Roboto'
      
    },

  },
  },
  plugins: [],
}

