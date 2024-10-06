/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-heder': '#D7E2FF',
        'custom-layout-dark': '#253662'
      },
      animation: {
        'slow-spin': 'spin 4s linear infinite'
      }
    }
  },
  plugins: []
}
