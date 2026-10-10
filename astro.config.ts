import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: 'dist',
  // Single page, so a separate stylesheet buys no cross-page caching and only
  // adds a render-blocking request in front of the avatar (the LCP element).
  build: {
    inlineStylesheets: 'always',
  },
  // Astro 7 defaults to 'jsx', which drops line-break whitespace between
  // inline elements and glues the icons to their labels.
  compressHTML: true,
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
