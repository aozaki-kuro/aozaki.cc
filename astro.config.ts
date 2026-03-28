import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: 'dist',
  integrations: [icon()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Overpass',
      cssVariable: '--font-sans',
      options: {
        variants: [
          {
            src: ['@fontsource/overpass/files/overpass-latin-400-normal.woff2'],
            weight: 400,
            style: 'normal',
          },
          {
            src: ['@fontsource/overpass/files/overpass-latin-800-normal.woff2'],
            weight: 800,
            style: 'normal',
          },
        ],
      },
    },
  ],
})
