import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Offers } from './components/Offers';
import { Stores } from './components/Stores';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Safety } from './components/Safety';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Offers />
        <Stores />
        <Services />
        <Gallery />
        <Safety />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
