import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import logoImg from '../public/images/logo.png';
import { Gift, Heart, MapPin } from 'lucide-react';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-th-background text-th-primary">
            <Head>
                <title>About - Fyxren</title>
                <meta name="description" content="About Fyxren - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-5 md:px-10">
                <h1 className="pb-5 text-4xl font-medium">About</h1>

                <div className="grid grid-cols-4 gap-10">
                    {/* Left */}
                    <div className="sticky w-full max-w-sm col-span-1 overflow-hidden shadow-lg h-max rounded-xl bg-th-background-light">                    <Image src={logoImg} alt="avatar fyxren" className="object-cover object-center w-full h-56" />
                        <div className="flex items-center px-6 py-3 bg-gray-900">
                            <Heart className="w-6 h-6 text-white" />
                            <span className="mx-3 text-lg font-semibold text-white">Love ya</span>
                        </div>

                        <div className="px-6 py-4">
                            <h1 className="text-xl font-semibold text-th-primary">Ben // Fyxren</h1>
                            <p className="py-2 text-th-secondary">Professional idiot, hobbyist coder, bad gamer. Also plays the piano & listens to music.</p>

                            <div className="flex items-center mt-4 text-th-secondary">
                                <MapPin className="w-6 h-6" />
                                <h1 className="px-2 text-sm">The Netherlands</h1>
                            </div>

                            <div className="flex items-center mt-4 text-th-secondary">
                                <Gift className="w-6 h-6" />
                                <h1 className="px-2 text-sm">March 25, 2004</h1>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-span-3 py-96">
                        test
                    </div>
                </div>


            </main>
        </div>
    );
}
