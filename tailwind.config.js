/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EAF8F3',
          100: '#D2F0E5',
          200: '#A6E2CD',
          300: '#71CFB0',
          400: '#3BB790',
          500: '#0FA477', // Primary Green
          600: '#00875A', // Rich Green Button
          700: '#006B47',
          800: '#054731', // Hero dark text/accent
          900: '#022B1E', // Footer dark green
          dark: '#013323',
        },
        peach: {
          50: '#FFF9F5',
          100: '#FFF0E6',
          200: '#FFE1CF',
          300: '#FFC8A8',
          400: '#FFA070',
          500: '#FF7D42',
        },
        mint: {
          50: '#F0FAF6',
          100: '#E1F5EC',
          200: '#C2EAD9',
          300: '#90DABD',
        },
        accent: {
          yellow: '#FFB800',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 15px 35px rgba(0, 87, 90, 0.12)',
        'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
