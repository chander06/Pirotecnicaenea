import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Prodotti', id: 'prodotti' },
    { name: 'Offerte', id: 'offerte' },
    { name: 'Negozi', id: 'negozi' },
    { name: 'Servizi', id: 'servizi' },
    { name: 'Galleria', id: 'galleria' },
    { name: 'Sicurezza', id: 'sicurezza' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contatti', id: 'contatti' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="w-8 h-8" style={{ color: '#CF0300' }} />
            <div className="flex flex-col">
              <span
                className="text-xl font-medium tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif", color: '#CF0300' }}
              >
                Pirotecnica Enea
              </span>
              <span className="text-xs text-gray-500">Srl</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-700 hover:text-[#CF0300] transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#CF0300' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#CF0300' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#CF0300] transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
