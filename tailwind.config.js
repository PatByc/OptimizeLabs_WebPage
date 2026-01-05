/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7f1',
          100: '#fceee3',
          200: '#f9ddc7',
          300: '#f5cbab',
          400: '#f2ba8f',
          500: '#efa973',
          600: '#ec9857',
          700: '#d97d3a',
          800: '#b4662f',
          900: '#8f5025',
        },
        sand: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ebe7df',
          300: '#e0d9cf',
          400: '#d6cdbf',
          500: '#cbc1af',
          600: '#b8ab96',
          700: '#9a8d7a',
          800: '#7c6f5e',
          900: '#5e5142',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
