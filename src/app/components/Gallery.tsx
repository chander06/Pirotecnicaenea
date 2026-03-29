import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1771299217601-93f892f9942f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBkaXNwbGF5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0ODA1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Spettacolo pirotecnico',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1543718290-a207a786243a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZpcmV3b3JrcyUyMHNob3d8ZW58MXx8fHwxNzc0ODA1MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fuochi d\'artificio colorati',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1636529174395-0fe6d7484f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBiYXR0ZXJ5JTIwbmlnaHQlMjBza3l8ZW58MXx8fHwxNzc0ODA1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Batterie pirotecniche',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1704399527621-82de0422490c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5ZWFyJTIwY2VsZWJyYXRpb24lMjBmaXJld29ya3N8ZW58MXx8fHwxNzc0ODA1MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Celebrazione Capodanno',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1564415898471-63eb15e99038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJvdGVjaG5pY3MlMjBwcm9mZXNzaW9uYWwlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDgwNTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Display professionale',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1761066644935-14551e47af49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xlciUyMGZvdW50YWluJTIwZmlyZXdvcmtzfGVufDF8fHx8MTc3NDgwNTE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fontane luminose',
    span: 'col-span-2 row-span-1',
  },
];

export function Gallery() {
  return (
    <section id="galleria" className="py-24 bg-white">
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
            Galleria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I momenti più emozionanti dei nostri spettacoli e prodotti
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${image.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
