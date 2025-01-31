/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: 'url(/cursor.png), auto', 
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0px)'},
          '50%': { transform: 'translatey(-20px)'},
          '100%': { transform: 'translatey(0px)'},
        },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

