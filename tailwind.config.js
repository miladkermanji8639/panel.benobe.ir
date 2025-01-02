/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E86C1',
        // سایر رنگ‌های اختصاصی
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #2E86C1, #84CAF9)',
      },
    },
  },
  plugins: [],
}