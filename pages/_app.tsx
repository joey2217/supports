import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>开发者推广</title>
        <meta name="description" content="开发者推广,developer promotion!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto text-center py-4">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
