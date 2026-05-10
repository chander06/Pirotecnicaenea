import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p
              className="text-gray-600 italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Con noi dai luce alla tua idea
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#CF0300' }}>
              I nostri negozi
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#CF0300' }} />
                <div>
                  <p>Via Enrico Fermi 3b</p>
                  <p>Campoleone di Lanuvio (RM)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#CF0300' }} />
                <div>
                  <p>Via Marco Aurelio 26</p>
                  <p>Aprilia (LT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg mb-4" style={{ color: '#CF0300' }}>
              Contatti
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#CF0300' }} />
                <a href="tel:+393206708992" className="hover:text-[#CF0300] transition-colors">
                  320 670 8992
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#CF0300' }} />
                <a href="tel:+390693734301" className="hover:text-[#CF0300] transition-colors">
                  06 937 4301
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#CF0300' }} />
                <a href="tel:+393924818136" className="hover:text-[#CF0300] transition-colors">
                  392 481 8136
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#CF0300' }} />
                <a href="mailto:pirotecnica.enea@virgilio.it" className="hover:text-[#CF0300] transition-colors">
                  pirotecnica.enea@virgilio.it
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <p>
                © {currentYear} Pirotecnica Enea Srl. Tutti i diritti riservati.
              </p>
              <a href="/sitemap.xml" className="hover:text-[#CF0300] transition-colors">
                Sitemap
              </a>
            </div>
            <p className="text-center md:text-right">
              P.IVA 11139091000 • Vendita autorizzata ai sensi del T.U.L.P.S.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
