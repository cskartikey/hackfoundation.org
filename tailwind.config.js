module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["hover"]
    },
  },
  plugins: [],
  options: {
    safelist: {
      greedy: ["/safe$/"],
    },
  },
}