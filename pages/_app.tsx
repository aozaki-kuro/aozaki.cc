import '../styles/globals.css'
import 'windi.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from 'next-themes'

import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script strategy="lazyOnload" src="https://beacon.aozaki.cc/app.js" data-domain="aozaki.cc" />

      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
