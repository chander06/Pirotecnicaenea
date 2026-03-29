import { motion } from 'motion/react';
import { Store } from 'lucide-react';
import coniargentoImg from 'figma:asset/1fd3fdaf3e0cc7ff164367c489208cf089aaeec1.png';
import coniargento60Img from 'figma:asset/b1f980fd77ef9ef6ecabc0533db3b7c8721031eb.png';
import hellfireImg from 'figma:asset/f4f6f0a7fa84d82374cc959084689941e178c905.png';
import blueMoonImg from 'figma:asset/b72680e3178d862efc170f7a2d32be12b889a191.png';

const products = [
  {
    id: 1,
    name: 'Coni 90 secondi a cambiamento oro argento',
    description: 'Fontane coniche con effetto oro e argento alternato, durata 90 secondi',
    image: coniargentoImg,
    prices: [
      { quantity: 1, price: 15 },
      { quantity: 2, price: 25, label: 'conf. da 2' },
    ],
  },
  {
    id: 2,
    name: 'Coni argento 60 sec.',
    description: 'Fontane coniche con effetto argentato, durata 60 secondi',
    image: coniargento60Img,
    prices: [
      { quantity: 1, price: 10 },
      { quantity: 4, price: 30, label: 'conf. da 4' },
    ],
  },
  {
    id: 3,
    name: 'Hellfire 320 lanci DSW',
    description: 'Batteria professionale da 320 lanci per spettacoli mozzafiato',
    image: hellfireImg,
    prices: [
      { quantity: 1, price: 180, originalPrice: 300, discount: 40 },
    ],
    featured: true,
  },
  {
    id: 4,
    name: 'Blue Moon',
    description: 'Offerta da prendere al volo - Fino ad esaurimento scorte',
    image: blueMoonImg,
    prices: [
      { quantity: 1, price: 24, originalPrice: 40, discount: 40 },
    ],
    featured: true,
    limitedStock: true,
  },
];

export function Products() {
  return (
    <section id="prodotti" className="py-24 bg-white">
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
            I nostri prodotti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ampia gamma di articoli pirotecnici di alta qualità per ogni occasione
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: '#CF0300',
                  }}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Pricing */}
                <div className="mb-4 space-y-2">
                  {product.prices.map((priceOption, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">
                          {priceOption.label || (priceOption.quantity === 1 ? '1 pezzo' : `${priceOption.quantity} pezzi`)}
                        </span>
                        <div className="flex items-center gap-2">
                          {priceOption.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              €{priceOption.originalPrice}
                            </span>
                          )}
                          <span
                            className="text-lg font-medium"
                            style={{ color: '#CF0300', fontFamily: "'Instrument Serif', serif" }}
                          >
                            €{priceOption.price}
                          </span>
                        </div>
                      </div>
                      {priceOption.discount && (
                        <div className="mt-1">
                          <span
                            className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
                            style={{ backgroundColor: '#CF0300' }}
                          >
                            -{priceOption.discount}% SUPER SCONTO
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: '#FDD828' }}
                >
                  <Store className="w-3 h-3" />
                  <span>Disponibile solo in negozio</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}