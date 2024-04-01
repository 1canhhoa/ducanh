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
        'primary-20': '#86BDFD',
        'primary-30': '#4E91F6',
        'primary-40': '#3468CD',
        'primary-50': '#2B46A8',
        'primary-60': '#132B7D',
        'primary-70': '#082072',
        'greyscaletext-20': '#A9A9A9',
        'greyscaletext-30': '#828282',
        'greyscaletext-40': '#6A6A6A',
        'greyscaletext-50': '#454545',
        'greyscaletext-60': '#3F3F3F',
        'greyscaletext-70': '#313131',
        'greyscaletext-80': '#262626',
        'secondary-40': '#ED4343',
        'secondary-5': '#FFF2F3',
        'secondary-50': '#BE3136',
        'background-elevation-10': '#FAFAFA',
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
