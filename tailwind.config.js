/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',

      },
    },
    extend: {
      colors: {
        'primary-500': '#F1C40F',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#F7F3F0',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'destructive': '#FF5A5A',
        'myPrimary': '#F1C40F',
        'mySecondory': '#3498DB',
        'accent': '#E74C3C',
        'pale-purple': '#E6C1FF',
        'pale-red': '#fcb7b4',
        'pale-yellow': '#f0f1a3',
        'sky-blue-light': '#87CEEB',
        'sky-blue-dark': '#5F9EA0',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        'gradient-sky-blue': 'linear-gradient(180deg, #87CEEB 0%, #5F9EA0 100%)',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" }
          }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'wiggle': "wiggle 200ms ease-in-out",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

module.exports.theme = Object.assign({}, defaultTheme.theme, module.exports.theme);