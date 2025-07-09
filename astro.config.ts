import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://aozaki.cc',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Overpass',
        cssVariable: '--font-overpass',
        subsets: ['latin'],
        weights: [400, 800],
      },
    ],
  },
})
