/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'green': '#4ade80',
        'amber': '#f59e0b',
      },
    },
  },
  plugins: [],
}