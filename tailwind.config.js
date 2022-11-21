/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#111111',
          secondary: '#333333',
          accent: {
            main: '#7654FF',
            light: '#8E72FF',
            dark: '#6640FF'
          },
          background: {
            main: '#F9F9F9',
            light: '#FFFFFF'
          },
          logo: {
            start: '#0386FF',
            end: '#FF00CC'
          }
        },
        dark: {
          primary: '#F9F9F9',
          secondary: '#C7C7C7',
          accent: {
            main: '#7654FF',
            light: '#8E72FF',
            dark: '#6640FF'
          },
          background: {
            main: '#111111',
            light: '#1A1A1A'
          },
          logo: {
            start: '#0386FF',
            end: '#FF00CC'
          }
        },
        amoled: {
          primary: '#F9F9F9',
          secondary: '#C7C7C7',
          accent: {
            main: '#7654FF',
            light: '#8E72FF',
            dark: '#6640FF'
          },
          background: {
            main: '#000000',
            light: '#0C0C0C'
          },
          logo: {
            start: '#0386FF',
            end: '#FF00CC'
          }
        },
        corn: {
          primary: '#F9F9F9',
          secondary: '#C7C7C7',
          accent: {
            main: '#FFA31A',
            light: '#FFB74D',
            dark: '#E38800'
          },
          background: {
            main: '#000000',
            light: '#1B1B1B'
          },
          logo: {
            start: '#FFC570',
            end: '#D17F06'
          }
        },
        'th-background': 'var(--background)',
        'th-background-light': 'var(--background-light)',
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
        'th-accent': 'var(--accent)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-light': 'var(--accent-light)',
        'th-logo-start': 'var(--logo-start)',
        'th-logo-end': 'var(--logo-end)'
      },
      fontFamily: {
        poly: ["Poly", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};