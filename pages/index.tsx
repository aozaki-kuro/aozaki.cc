import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aozaki Kuro</title>
        <meta name="description" content="Aozaki Kuro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#111729" />
      </Head>

      <div className="flex flex-col min-h-screen dotback2 dark">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Home
