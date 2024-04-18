/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      base: ['18px', '30px'],
    },
    colors: {
      coral: '#FE7867',
      cyberyellow: 'hsl(51, 100%, 49%)',
      plantation: '#25564B',
      aqua: '#90D4C6',
      fadedjade: '#3E7467',
      firefly: '#052C3B',
      saphire: '#19536B',
      viridian: '#458C7E',
      baltic: '#23303E',
      cadet: '#5B636D',
      steel: '#818498',
      aluminium: '#A7ABAE',
      white: '#FFFFFF',
      denimblue: '#64BEF9',
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
