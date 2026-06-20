import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F2A4A',
        cream: '#FBFAF6',
        brand: {
          navy: '#0B2E63',
          'navy-dark': '#08213F',
          blue: '#1E50B0',
          'blue-dark': '#13379B',
          sky: '#4D8EDA',
          green: '#6FA82F',
          'green-dark': '#5D9026',
          lime: '#9FD046',
        },
        body: {
          DEFAULT: '#4A5663',
          soft: '#5C6A7A',
          muted: '#6B7785',
        },
        line: {
          DEFAULT: '#EAEDE5',
          nav: '#ECEEE6',
          warm: '#EEF0E9',
          input: '#D9DEE4',
        },
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cta: '0 12px 28px rgba(111,168,47,0.30)',
        'cta-sm': '0 8px 20px rgba(111,168,47,0.26)',
        soft: '0 18px 44px rgba(11,46,99,0.12)',
        card: '0 1px 3px rgba(11,46,99,0.06)',
        hero: '0 24px 60px rgba(11,46,99,0.22)',
        float: '0 12px 30px rgba(11,46,99,0.18)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translateX(28px) scale(0.98)' },
          to: { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'ken-burns': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease both',
        'fade-in': 'fade-in 0.6s ease both',
        'fade-in-right': 'fade-in-right 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 5s ease-in-out infinite',
        'ken-burns': 'ken-burns 10s ease-in-out infinite alternate',
      },
      maxWidth: {
        container: '1280px',
        'container-wide': '1340px',
      },
    },
  },
  plugins: [],
} satisfies Config;
