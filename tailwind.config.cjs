/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#9fa8da',
      secondary: '#7986cb',

      'primary-white': '#ffffff',
    },
  },
  plugins: [],
};
