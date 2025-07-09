import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-overpass)'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'night-blue': '#111729',
      },
    },
  },
  plugins: [],
}

export default config
