import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WebSock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="WebSock" />
        <p className="description">
          Very real page
        </p>
      </main>

      <Footer />
    </div>
  )
}
