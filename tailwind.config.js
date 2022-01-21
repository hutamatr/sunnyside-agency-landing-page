module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@themesberg/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      // Primary
      softBlue: 'rgb(65,190,250)',
      softRed: 'hsl(7, 99%, 70%)',
      yellowNew: 'hsl(51, 100%, 49%)',
      darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
      darkBlue: 'hsl(198, 62%, 26%)',
      darkModerateCyan: 'hsl(168, 34%, 41%)',
      // Neutral
      veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
      veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
      darkGrayishBlue: 'hsl(232, 10%, 55%)',
      grayishBlue: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      barlow: 'Barlow, sans-serif',
      fraunces: 'Fraunces, serif',
    },
    extend: {},
  },
  plugins: [require('@themesberg/flowbite/plugin')],
};
