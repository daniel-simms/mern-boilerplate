module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'content': 'calc(-4rem + 100vh)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
