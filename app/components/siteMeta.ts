import { Metadata } from 'next'

const Site = 'Aozaki'
const Description = "Aozaki's Profile"
const twitterCard = `https://aozaki.cc/twitter-card.jpg`
const CanonicalUrl = 'https://aozaki.cc'

export const SiteMeta: Metadata = {
  metadataBase: new URL(CanonicalUrl),

  /* No index */
  // robots: 'noindex',

  /* Base */
  title: Site,
  description: Description,

  /* OpenGraph */
  openGraph: {
    title: Site,
    siteName: Site,
    description: Description,
    images: twitterCard,
    type: 'website',
    url: CanonicalUrl,
  },

  /* Twitter */
  twitter: {
    site: '@Aozaki__',
  },

  applicationName: Site,

  icons: {
    icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', CanonicalUrl)],
    shortcut: ['/android-chrome-192x192.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
}
