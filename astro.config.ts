import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  outDir: 'dist',
  integrations: [icon()],
  experimental: {
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
              src: ['@fontsource/overpass/files/overpass-latin-500-normal.woff2'],
              weight: 500,
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
  },
})
