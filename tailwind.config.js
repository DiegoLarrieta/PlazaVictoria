/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:      '#fdf8ee',
          100:     '#f9ecce',
          200:     '#f2d898',
          300:     '#e9c060',
          400:     '#e2aa38',
          500:     '#d49426',
          DEFAULT: '#C4973E',
          600:     '#C4973E',
          700:     '#a67c2e',
          800:     '#86611f',
          900:     '#6b4d18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
