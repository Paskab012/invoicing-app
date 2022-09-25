/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brightRed: '#FF6363',
        brightWhiteBackground: '#F6F6F6',
        darkBlue: '#0B132A',
        darkGrayishBlue: '#4F5665',
        borderColors: '#DDDDDD',
        titleColor: '#0B132A',
        textColor: '#4F5665',
      },
    },
  },
  plugins: [],
};
