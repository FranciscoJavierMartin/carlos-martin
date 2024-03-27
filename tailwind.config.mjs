/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        golden: '#f0bc68',
        'light-blue': '#87adcf',
      },
      letterSpacing: {
        'ultra-wide': '0.35rem',
      },
    },
  },
  plugins: [],
};
