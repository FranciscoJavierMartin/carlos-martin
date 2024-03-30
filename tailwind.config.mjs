/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        golden: '#f0bc68',
        blue: {
          steel: '#61829f',
          light: '#87adcf',
        },
        salmon: {
          light: '#e8aea3',
          active: '#ff5733',
        },
        beige: '#F2EDE8',
      },
      letterSpacing: {
        'ultra-wide': '0.35rem',
      },
    },
  },
  plugins: [],
};
