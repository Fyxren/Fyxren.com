import type { NextPage } from 'next'
import Head from 'next/head'

const imgSrc = 'https://avatars.githubusercontent.com/u/68126277'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 bg-background">
      <Head>
        <title>Home | Fyxren</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Home | Fyxren" />
        <meta name="description" content="The website of Fyxren - Professional idiot, coder, gamer." />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Home | Fyxren" />
        <meta property="og:description" content="The website of Fyxren - Professional idiot, coder, gamer." />
        <meta property="og:image" content="https://res.cloudinary.com/dpu5ywrox/image/upload/v1659621139/adezvs9a4au7vn9w2vzt.png" />

        {/* Twitter Tags*/}
        <meta property="twitter:title" content="Home | Fyxren" />
        <meta property="twitter:description" content="The website of Fyxren - Professional idiot, coder, gamer." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dpu5ywrox/image/upload/v1659621139/adezvs9a4au7vn9w2vzt.png" />
      </Head>

      <main className="flex items-center justify-between flex-1 w-full px-40">
        <div className="px-2 py-5 space-y-5 border-b-4 border-main">
          <h1 className="text-7xl">Greetings, I'm <span className="font-semibold">Fyxren</span> 👋</h1>
          <h2 className="text-4xl italic">Professional idiot, coder, gamer</h2>
        </div>
        <div>
          <img src={imgSrc} className="duration-300 shadow-xl rounded-xl w-72 hover:-translate-y-1 hover:scale-105" />
        </div>
      </main>


    </div>
  )
}

export default Home
