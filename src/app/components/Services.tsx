import { motion } from 'motion/react';
import { Sparkles, Users, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    id: 1,
    title: 'Eventi Privati',
    description: 'Matrimoni, compleanni, anniversari e celebrazioni speciali. Rendiamo unico ogni momento importante della tua vita.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1473652502225-6b6af0664e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmlyZXdvcmtzJTIwc3BhcmtsZXJzfGVufDF8fHx8MTc3NDgwNTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Spettacoli Pirotecnici',
    description: 'Show professionali sincronizzati con musica per eventi pubblici e manifestazioni. Esperienza e sicurezza garantite.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1564415898471-63eb15e99038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJvdGVjaG5pY3MlMjBwcm9mZXNzaW9uYWwlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDgwNTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Consulenza Professionale',
    description: 'Supporto tecnico e normativo per la scelta e l\'utilizzo sicuro dei prodotti pirotecnici. Team esperto a tua disposizione.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1758524056096-6bedf35a33f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YXRpb24lMjBzZXJ2aWNlfGVufDF8fHx8MTc3NDgwNTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  return (
    <section id="servizi" className="py-24" style={{ backgroundColor: '#F5F5F7' }}>
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
            I nostri servizi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza pirotecnica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  <div
                    className="absolute bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FDD828' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      color: '#CF0300',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
