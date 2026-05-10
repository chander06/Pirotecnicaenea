import { motion } from 'motion/react';
import { Tag, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const offers = [
  {
    id: 1,
    title: 'Offerta Capodanno 2027',
    description: 'Pacchetti speciali per festeggiare l\'anno nuovo con stile',
    image: 'https://images.unsplash.com/photo-1704399527621-82de0422490c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5ZWFyJTIwY2VsZWJyYXRpb24lMjBmaXJld29ya3N8ZW58MXx8fHwxNzc0ODA1MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'In arrivo',
    period: 'Dicembre 2026',
  },
  {
    id: 2,
    title: 'Matrimoni & Eventi',
    description: 'Soluzioni personalizzate per il tuo giorno speciale',
    image: 'https://images.unsplash.com/photo-1473652502225-6b6af0664e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmlyZXdvcmtzJTIwc3BhcmtsZXJzfGVufDF8fHx8MTc3NDgwNTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Disponibile',
    period: 'Tutto l\'anno',
  },
  {
    id: 3,
    title: 'Pacchetti Aziendali',
    description: 'Spettacoli professionali per eventi corporate',
    image: 'https://images.unsplash.com/photo-1762781960165-fea0ac749ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNlbGVicmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc3NDgwNTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Su misura',
    period: 'Preventivo personalizzato',
  },
];

export function Offers() {
  return (
    <section id="offerte" className="py-24" style={{ backgroundColor: '#F5F5F7' }}>
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
            Offerte speciali
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scopri le nostre promozioni e pacchetti dedicati
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={offer.image}
                  alt={`${offer.title} - ${offer.description} Pirotecnica Enea`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                  style={{ backgroundColor: '#FDD828' }}
                >
                  <Tag className="w-3 h-3" />
                  {offer.badge}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: '#CF0300',
                  }}
                >
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{offer.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
