const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#64FFDA',
        },
        complementary: {
          salmon: '#FF6488'
        },
        analogous: {
          green: '#64FF8D',
          blue: '#64D6FF'
        },
        triadic: {
          blue: '#6488FF',
          purple: '#DB64FF'
        },
        accent: {
          'dark-gray': '#151617'
        },
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'serif': ['Merriweather', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}