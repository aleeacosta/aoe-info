/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1700px',
      },
      keyframes: {
        s1: {            
          'to': { transform: 'rotate(1turn)'}
        }
      },      
    },
  },
  plugins: [],
}