/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Custom roboto font
    fontFamily: {
      'roboto': ['"Roboto Serif"', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-background': "url(./src/assets/hero_section.png)"
      }
    },
  },
  plugins: [],
}