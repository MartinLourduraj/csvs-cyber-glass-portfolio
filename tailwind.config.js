/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#030712',
          DEFAULT: '#050B18',
          900: '#071426',
          800: '#0D213F',
          700: '#14315D',
        },
        cyber: {
          blue: '#008CFF',
          cyan: '#00D9FF',
          crimson: '#FF1744',
          ice: '#F1F5F9',
          glass: 'rgba(7, 20, 38, 0.65)',
          'glass-border': 'rgba(0, 217, 255, 0.2)',
          'glass-red-border': 'rgba(255, 23, 68, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-blue': '0 8px 32px 0 rgba(0, 140, 255, 0.18)',
        'glass-red': '0 8px 32px 0 rgba(255, 23, 68, 0.18)',
        'glass-fusion': '0 8px 32px 0 rgba(0, 140, 255, 0.12), 0 8px 32px 0 rgba(255, 23, 68, 0.12)',
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.45)',
        'neon-red': '0 0 20px rgba(255, 23, 68, 0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(to right, rgba(0, 217, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-reverse-slow': 'orbitReverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
}
