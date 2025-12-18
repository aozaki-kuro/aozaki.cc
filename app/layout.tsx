import Script from 'next/script'
import { SiteMeta } from './components/siteMeta'

import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'

import { Overpass } from 'next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '800'],
  display: 'block',
})

export const metadata = SiteMeta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${overpass.variable} font-sans`}>
      <body className="dotback2 box-border flex min-h-dvh flex-col bg-[#111729] tracking-tight antialiased selection:bg-sky-600/20 md:tracking-normal">
        {children}
      </body>
      <Script
        src="https://sight.aozaki.cc/api/script.js"
        data-site-id="1211d1a9e1b3"
        strategy="afterInteractive"
      />
    </html>
  )
}
