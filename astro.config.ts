import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://aozaki.cc',
  output: 'static',

  integrations: [icon()],

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
