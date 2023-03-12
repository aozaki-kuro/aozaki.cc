import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Overpass } from 'next/font/google'

import '@fortawesome/fontawesome-svg-core/styles.css'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
  weight: ['400', '500', '800'],
  display: 'swap'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${overpass.variable} font-sans`}>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        data-website-id="de79230e-e411-43b6-8fd5-cc50c306c837"
        src="https://sight.aozaki.cc/app.js"
      />
    </main>
  )
}

export default MyApp
