import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aozaki</title>
        <meta name="description" content="Aozaki" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:url" content="https://profile.aozaki.cc/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aozaki" />
        <meta property="og:description" content="Aozaki's Profile" />
        <meta property="og:title" content="Aozaki's Profile" />
        <meta property="og:image" content="https://profile.aozaki.cc/twitter-card.jpg" />
        <meta name="twitter:card" content="https://profile.aozaki.cc/twitter-card.jpg" />
        <meta name="twitter:site" content="https://profile.aozaki.cc/" />
        <meta name="theme-color" content="#111729" />
        <meta name="twitter:image" content="https://profile.aozaki.cc/twitter-card.jpg" />
      </Head>

      <div className="flex flex-col min-h-screen dotback2 dark">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Home
