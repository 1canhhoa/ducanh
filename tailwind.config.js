/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1367px',
      '2xl': '1600px',
      '3xl': '1800px',
      xmd: {max: '767px'},
      xlg: {max: '1023px'},
      xxl: {max: '1366px'},
      x2xl: {max: '1599px'},
      x3xl: {max: '1799px'},
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        plus: ['var(--font-plus-jakarta-sans)'],
      },
      colors: {
        'primary-10': '#B8DDFF',
        'primary-30': '#4E91F6',
        'primary-40': '#3468CD',
        'primary-50': '#2B46A8',
        'primary-60': '#132B7D',
        'primary-70': '#082072',
        'secondary-40': '#ED4343',
        'greyscaletext-20': '#A9A9A9',
        'greyscaletext-40': '#6A6A6A',
        'greyscaletext-50': '#454545',
        'greyscaletext-70': '#313131',
        'greyscaletext-80': '#262626',
        'linear-l9': '#6196F6',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
