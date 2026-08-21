/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d6deea',
          200: '#aebccb',
          300: '#7f95b0',
          400: '#56708f',
          500: '#3a5575',
          600: '#2a4060',
          700: '#1f3351',
          800: '#15263f',
          900: '#0e1b31',
          950: '#08111f',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out both',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'slide-in-left': 'slide-in-left 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
