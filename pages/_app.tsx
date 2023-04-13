import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Overpass } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
  weight: ['400', '500', '800'],
  display: 'swap'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain="aozaki.cc"
        src="https://sight.aozaki.cc/app.js"
      />
      <main className={`${overpass.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
