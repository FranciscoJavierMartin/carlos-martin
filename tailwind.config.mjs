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
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
