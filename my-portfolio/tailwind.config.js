// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Your Custom Colors
      colors: {
        'primary-dark': '#000000',    // Changed to true black
        'component-bg': '#0a0a0a',    // A very dark grey, almost black, for component cards
        'secondary-light': '#cbd5e0', // Light text color (can also be white if preferred)
        'accent-blue': '#3b82f6',     // Your accent color
      },
      // Your Custom Font Families
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      // New Keyframes and Animation for the Typewriter Cursor
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
}
