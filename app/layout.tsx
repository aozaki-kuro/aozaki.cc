import Script from 'next/script'
import { SiteMeta } from './components/siteMeta'

import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Overpass } from 'next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
  weight: ['400', '500', '800'],
  display: 'swap',
})

export const metadata = SiteMeta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${overpass.variable} font-sans`}>
      <body className="dotback2 box-border flex min-h-[100dvh] flex-col bg-night-blue tracking-tight antialiased selection:bg-sky-600/20 md:tracking-normal">
        {children}
      </body>
      <Script
        strategy="afterInteractive"
        data-domain="aozaki.cc"
        src="https://sight.aozaki.cc/app.js"
      />
    </html>
  )
}
