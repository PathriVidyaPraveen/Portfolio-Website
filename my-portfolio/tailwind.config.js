// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#000000',   // Changed to true black
        'component-bg': '#0a0a0a',   // A very dark grey, almost black, for component cards
        'secondary-light': '#cbd5e0', // Light text color (can also be white if preferred)
        'accent-blue': '#3b82f6',    // Your accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}