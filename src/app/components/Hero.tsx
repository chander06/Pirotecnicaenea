import { motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles
            className="w-16 h-16 mx-auto mb-8"
            style={{ color: '#CF0300' }}
          />
          
          <h1
            className="text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: '#CF0300',
              lineHeight: '1.1',
            }}
          >
            Pirotecnica<br />Enea Srl
          </h1>

          <p
            className="text-2xl md:text-3xl mb-12 text-gray-600"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
          >
            Con noi dai luce alla tua idea
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => scrollToSection('prodotti')}
              className="px-8 py-4 rounded-full text-white transition-all duration-300"
              style={{ backgroundColor: '#CF0300' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Scopri i prodotti
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('negozi')}
              className="px-8 py-4 rounded-full border-2 transition-all duration-300"
              style={{ borderColor: '#CF0300', color: '#CF0300' }}
              whileHover={{ scale: 1.03, backgroundColor: '#FDD828', borderColor: '#FDD828', color: '#000' }}
              whileTap={{ scale: 0.98 }}
            >
              Visita i negozi
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
