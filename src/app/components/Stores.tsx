import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stores = [
  {
    id: 1,
    name: 'Sede Principale',
    address: 'Via Enrico Fermi 3b',
    city: 'Campoleone di Lanuvio (RM)',
    phone: '06 937 4301',
    image: 'https://images.unsplash.com/photo-1769257911527-bdfd73b545cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3NDgwNTE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Enrico+Fermi+3b+Campoleone+di+Lanuvio+RM',
  },
  {
    id: 2,
    name: 'Sede Secondaria',
    address: 'Via Marco Aurelio 26',
    city: 'Aprilia (LT)',
    phone: '392 481 8136',
    image: 'https://images.unsplash.com/photo-1730106224204-1dddc7bdaba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwc2hvcCUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzc0ODA1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Marco+Aurelio+26+Aprilia+LT',
  },
];

export function Stores() {
  return (
    <section id="negozi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: '#CF0300',
            }}
          >
            I nostri negozi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vieni a trovarci nei nostri punti vendita autorizzati
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={store.image}
                  alt={`Negozio Pirotecnica Enea ${store.name} - ${store.city}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3
                  className="text-3xl mb-4"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: '#CF0300',
                  }}
                >
                  {store.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#CF0300' }} />
                    <div>
                      <p className="text-gray-700">{store.address}</p>
                      <p className="text-gray-600 text-sm">{store.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#CF0300' }} />
                    <a
                      href={`tel:${store.phone.replace(/\s/g, '')}`}
                      className="text-gray-700 hover:text-[#CF0300] transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>

                <motion.a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all duration-300"
                  style={{ backgroundColor: '#CF0300' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Apri su Google Maps</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Contact */}
        <motion.div
          className="mt-12 text-center p-8 rounded-2xl"
          style={{ backgroundColor: '#F5F5F7' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-2">
            Per informazioni generali, contattaci al
          </p>
          <a
            href="tel:3206708992"
            className="text-2xl hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: '#CF0300',
            }}
          >
            320 670 8992
          </a>
        </motion.div>
      </div>
    </section>
  );
}
