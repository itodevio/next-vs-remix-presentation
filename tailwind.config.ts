import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        geekie: '#EB3454',
        dark: '#4B4B4B',
      },
      fontFamily: {
        muli: ['muli', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

