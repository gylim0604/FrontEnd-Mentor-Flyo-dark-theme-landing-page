import Head from 'next/head';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearnMore from '../components/LearnMore';
import Testimony from '../components/Testimony';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon-32x32.png' />
            </Head>
            <Header />
            <Hero />
            <Features />
            <LearnMore />
            <Testimony />
            <CTA />
            <Footer />
        </div>
    );
}
