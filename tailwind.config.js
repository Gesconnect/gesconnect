/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark:  '#0a1628',
          DEFAULT: '#0f1e4a',
          mid:   '#1e3a8a',
          light: '#2d4fa0',
        },
        brand: {
          green:       '#16a34a',
          'green-mid': '#1a9c50',
          'green-light': '#22c55e',
          accent:      '#4ade80',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #0f1e4a 55%, #0d2d1a 100%)',
        'card-gradient': 'linear-gradient(135deg, #0f1e4a, #1e3a8a)',
        'green-gradient': 'linear-gradient(135deg, #16a34a, #22c55e)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float':     'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
