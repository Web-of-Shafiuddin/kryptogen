import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Technology from '@/components/Technology';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        <Technology />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
