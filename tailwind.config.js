/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        
      },
      colors: {
        offWhite: '#f1f1e6',
        offBlue: '#def2f0',
        deepBlue: '#417A9F',
        lightBlue: '#B0E0E6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter', 'dracula'],
  },
}
