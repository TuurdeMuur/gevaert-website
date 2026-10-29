/** @type {import('tailwindcss').Config} */
// Kleuren uit de huisstijlgids Bakkerij Gevaert
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        bordeaux: { DEFAULT: '#7A232C', dark: '#5E1A21' }, // primair
        roze: { DEFAULT: '#DBA5A5', light: '#F6E6E6' },    // primair (lichtroze)
        donkerroze: '#B15F67',                             // secundair
        beige: { DEFAULT: '#E2B881', light: '#F8EEE0' },   // secundair
        ink: '#3A1517',
      },
      fontFamily: {
        serif: ['Alegreya', 'Georgia', 'serif'],           // vervang door 'adonis-web' via Adobe Fonts
        hand: ['"Shantell Sans"', 'cursive'],
      },
      maxWidth: { site: '76rem' },
    },
  },
}
