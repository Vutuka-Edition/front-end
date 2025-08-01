/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Condensed': 'Avenir Next, sans-serif',
      'Standard': 'Avenir Next standard, sans-serif'
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: _ => ({
        'main': '#0F3211',
        'main-hover': '#3C613E',
        'gray-extended':'#E4E4E4',
        'white-extended':'#F8F8F8',
        'white-new':'#F8F8FF',
        'green-new':'#008000',
      }),
      rotate: {
        '60': '60deg',
        '120': '120deg',
        '180': '180deg',
        '240': '240deg',
        '300': '300deg',
        '360': '360deg',
      }
    },
  },
  plugins: [],
}

