import '../styles/globals.css'
import 'windi.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'

import { ThemeProvider } from 'next-themes'

import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Script
        defer
        data-domain="aozaki.cc"
        src="https://sight.aozaki.cc/app.js"
      />
    </ThemeProvider>
  )
}

export default MyApp
