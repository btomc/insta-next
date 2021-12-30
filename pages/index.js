import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Insta next</title>
        <link rel='icon' href='/insta-icon.ico' />
      </Head>
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}
