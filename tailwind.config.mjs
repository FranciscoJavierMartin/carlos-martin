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
      maxWidth: {
        '5.5xl': '69rem',
      },
      fontSize: {
        '1.5xl': '22px',
        '2.5xl': '27px',
        '3.5xl': '33px',
        '4.5xl': '2.5rem',
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
