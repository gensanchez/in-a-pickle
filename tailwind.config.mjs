/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores personalizada "In A Pickle"
        primary: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#b9e1c9',
          300: '#8acba7',
          400: '#57ad81',
          500: '#348f63',
          600: '#26734f',
          700: '#1f5c41',
          800: '#1a4a35',
          900: '#163d2c',
          950: '#0a2318',
          DEFAULT: '#1a472a', // Verde oscuro principal
        },
        secondary: {
          50: '#f4f6f3',
          100: '#e6ebe3',
          200: '#cfd7c9',
          300: '#adbca5',
          400: '#879a7c',
          500: '#6a7f5f',
          600: '#52654a',
          700: '#42503c',
          800: '#374233',
          900: '#2d5016', // Verde cancha
          950: '#1a2d0d',
          DEFAULT: '#2d5016',
        },
        accent: {
          50: '#fdfbf3',
          100: '#faf6e1',
          200: '#f4eac2',
          300: '#ecd898',
          400: '#e4c56c',
          500: '#d4af37', // Dorado premium
          600: '#c49a2a',
          700: '#a37d23',
          800: '#856422',
          900: '#6f5320',
          950: '#412c0f',
          DEFAULT: '#d4af37',
        },
        cream: {
          50: '#fdfdfb',
          100: '#faf8f3', // Crema/Blanco principal
          200: '#f5f1e8',
          300: '#ede7d7',
          400: '#e0d5bc',
          500: '#d0c0a0',
          600: '#b9a583',
          700: '#9a876a',
          800: '#7f6f59',
          900: '#695c4b',
          950: '#372f26',
          DEFAULT: '#faf8f3',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c4c6cb',
          300: '#9fa2a9',
          400: '#7a7e87',
          500: '#60646d',
          600: '#4c4f57',
          700: '#3f4147',
          800: '#36373c',
          900: '#2f3034',
          950: '#0f1419', // Negro texto
          DEFAULT: '#0f1419',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'court': '0 10px 40px -10px rgba(26, 71, 42, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}