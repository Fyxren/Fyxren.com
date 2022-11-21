import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import logoImg from '../public/images/logo.png';

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-th-background text-th-primary">
      <Head>
        <title>Home - Fyxren</title>
        <meta name="description" content="The website of Fyxren - Professional idiot, coder, gamer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col-reverse items-center justify-center h-full p-5 text-center lg:text-left lg:justify-between md:px-20 xl:px-32 lg:flex-row">
        <div className="justify-center py-5 space-y-5 border-b-4 tap-10 border-th-accent lg:justify-start">
          <h1 className="text-3xl font-poly md:text-6xl lg:text-7xl">Greetings, I'm <span className="font-semibold">Fyxren</span> 👋</h1>
          <h2 className="text-xl italic font-montserrat md:text-2xl lg:text-4xl">Professional idiot, coder, gamer</h2>
        </div>
        <div>
          <Image src={logoImg} alt="avatar fyxren" className="w-40 duration-300 shadow-xl md:w-40 rounded-xl lg:w-72 hover:-translate-y-1 hover:scale-125" />
        </div>
      </main>

    </div>
  );
}
