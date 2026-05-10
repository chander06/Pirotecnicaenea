import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Offers } from './components/Offers';
import { Stores } from './components/Stores';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Safety } from './components/Safety';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Offers />
        <Stores />
        <Services />
        <Gallery />
        <Safety />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
