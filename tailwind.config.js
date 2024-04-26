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
<<<<<<< HEAD
      // md: '768px',
      // lg: '1024px',
      // xl: '1367px',
      // '2xl': '1600px',
      // '3xl': '1800px',
      // xmd: {max: '767px'},
      // xlg: {max: '1023px'},
      // xxl: {max: '1366px'},
      // x2xl: {max: '1599px'},
      // x3xl: {max: '1799px'},

=======
>>>>>>> master
      '3xl': '1800px',
      '2xl': '1600px',
      xl: '1367px',
      lg: '1024px',
      md: '768px',
<<<<<<< HEAD
=======

>>>>>>> master
      x3xl: {max: '1799px'},
      x2xl: {max: '1599px'},
      xxl: {max: '1366px'},
      xlg: {max: '1023px'},
      xmd: {max: '767px'},
      tablet: {min: '768px', max: '1023px'},
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
<<<<<<< HEAD
=======
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        1300: '1300ms',
      },
>>>>>>> master
      fontFamily: {
        plus: ['var(--font-plus-jakarta-sans)'],
      },
      colors: {
        // div- blue - 6020, rgba(19, 43, 125, 0.20) #132B7D33
        'divblue-6020': '#132B7D33',
        'primary-5': '#F0FAFF',
        'primary-10': '#B8DDFF',
        'primary-20': '#86BDFD',
        'primary-30': '#4E91F6',
        'primary-40': '#3468CD',
        'primary-50': '#2B46A8',
        'primary-60': '#132B7D',
        'primary-70': '#082072',
        'secondary-40': '#ED4343',
        'secondary-50': '#BE3136',
        'secondary-60': '#A21A20',
        'greyscaletext-5': '#ECECEC',
        'greyscaletext-10': '#C5C5C5',
        'greyscaletext-20': '#A9A9A9',
        'greyscaletext-30': '#828282',
        'greyscaletext-40': '#6A6A6A',
        'greyscaletext-50': '#454545',
        'greyscaletext-60': '#3F3F3F',
        'greyscaletext-70': '#313131',
        'greyscaletext-80': '#262626',
        'secondary-5': '#FFF2F3',
        'secondary-10': '#FFDDDE',
        'background-elevation-10': '#FAFAFA',
        'background-elevation-tag-chip': '#EBF5FA',
        'elevation-tag-chip': '#EBF5FA',
        'elevation-blue': '#FBFBFF',
<<<<<<< HEAD
        'elevation-10': '#FAFAFA',
=======
>>>>>>> master
        'elevation-20': '#F8F8F8',
        'linear-l9': '#6196F6',
        'linear-l6': 'linear-gradient(170deg, #2E6BC6 10.78%, #29A4EA 81.3%)',
      },
      backgroundImage: {
<<<<<<< HEAD
=======
        'linear-tc':
          'linear-gradient(89deg, rgba(80, 150, 255, 0.12) 0.43%,rgba(41, 164, 234, 0.06) 99.57%)',
>>>>>>> master
        'linear-l5':
          'linear-gradient(95deg, #2E6BC6 9.83%, #2E6BC6 35.38%, #29A4EA 86.69%)',
        'linear-l1':
          'linear-gradient(95deg, #FC4D54 -29.92%, #CB2128 38.6%, #CB2128 85.49%)',
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
<<<<<<< HEAD
        moveTriangle: {
          '0%': {
            right: '0.5rem',
            bottom: '-1.1rem',
            transform: 'rotate(-30deg)',
          },
          '33%': {
            right: '-2.5rem',
            bottom: '-0.1rem',
          },
          '50%': {
            right: '2.5rem',
            bottom: '3rem',
            transform: 'rotate(-10deg)',
          },
          '100%': {
            right: '0.5rem',
            bottom: '-1.1rem',
            transform: 'rotate(-30deg)',
          },
        },
        moveTriangleMobile: {
          '0%': {
            right: '0.5rem',
            bottom: '-1rem',
            transform: 'rotate(-30deg)',
          },
          '33%': {
            right: '-1.4rem',
            bottom: '-0.5rem',
          },
          '50%': {
            right: '1.6rem',
            bottom: '3rem',
            transform: 'rotate(-10deg)',
          },
          '100%': {
            right: '0.5rem',
            bottom: '-1rem',
            transform: 'rotate(-30deg)',
          },
        },
=======
>>>>>>> master
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
<<<<<<< HEAD
        'kinh-loop': 'moveTriangle 2.5s infinite',
        'kinh-loop-mobile': 'moveTriangleMobile 2.5s infinite',
=======
>>>>>>> master
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
