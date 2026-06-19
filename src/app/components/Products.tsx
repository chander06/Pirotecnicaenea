import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Zap, Star, Flame, Sparkles, Sun, Triangle, Circle, Wind, Siren, Tag, Rocket, Cylinder, CandlestickChart, Crosshair } from 'lucide-react';

const NOTE_BRANDS = "I materiali possono variare in base alla disponibilità, poiché siamo rivenditori ufficiali di: Jupiter · Pirotecnica Dolce · Piropassione · Gold Dragon · Pirotecnica Europea · Trantor ed altri brand leader del settore.";

interface Product {
  name: string;
  category?: string;
  note?: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  products: Product[];
}

const RED = '#CF0300';
const YELLOW = '#FDD828';

const categories: Category[] = [
  {
    id: 'ce',
    label: 'Manufatti Pirotecnici CE',
    badge: 'Cat. VC · F1 · F2 · F3',
    icon: <Star className="w-5 h-5" />,
    products: [
      { name: 'Batterie', category: 'Cat. CE' },
      { name: 'Scoppi', category: 'Cat. CE' },
      { name: 'Fontane', category: 'Cat. CE' },
      { name: 'Bengala', category: 'Cat. CE' },
      { name: 'Stelline', category: 'Cat. CE' },
      { name: 'Coni', category: 'Cat. CE' },
      { name: 'Girandole', category: 'Cat. CE' },
      { name: 'Comandos', category: 'Cat. CE' },
      { name: 'Offerte Speciali', category: 'Cat. CE' },
      { name: 'Articoli di Libera Vendita', category: 'Cat. CE' },
    ],
  },
  {
    id: 'finali-tubo',
    label: 'Finali Tubo',
    icon: <Cylinder className="w-5 h-5" />,
    products: [
      { name: 'Finale Tubo Ø20 — 16 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 — 25 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 — 36 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 — 49/50 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Pressato — 100 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Basso — 100 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Alta — 100 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Big — 100 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Dritto — 200 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Ø20 Dritto Sequenziale — 200 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Dritto — da 200 a 400 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Dritto Sequenziale — da 200 a 400 lanci', category: 'Finale Tubo' },
      { name: 'Finale Tubo Vario Calibro Ø20 · Ø25 · Ø30 · Ø50', category: 'Cat. IV F3' },
    ],
  },
  {
    id: 'candele-romane',
    label: 'Candele Romane',
    icon: <Flame className="w-5 h-5" />,
    products: [
      { name: 'Candele Romane Cat. VC/F2-F3', category: 'Candela Romana', note: 'varie varianti disponibili' },
    ],
  },
  {
    id: 'sparapalle',
    label: 'Sparapalle',
    icon: <Crosshair className="w-5 h-5" />,
    products: [
      { name: 'Sparapalle — 10 colpi', category: 'Sparapalle' },
      { name: 'Sparapalle — 20 colpi', category: 'Sparapalle' },
      { name: 'Sparapalle — 30 colpi', category: 'Sparapalle' },
      { name: 'Sparapalle — 380 colpi', category: 'Sparapalle' },
    ],
  },
  {
    id: 'razzi',
    label: 'Razzi',
    icon: <Rocket className="w-5 h-5" />,
    badge: 'Cat. VC · F2 · F3',
    products: [
      { name: 'Razzi Vario', category: 'Razzi', note: 'varie varianti disponibili' },
    ],
  },
];

function ProductRow({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      className="flex items-center justify-between py-3.5 px-5 border-b border-gray-100 last:border-b-0 group hover:bg-[#FDD828]/5 transition-colors duration-150"
    >
      <div className="flex flex-col gap-0.5 flex-1 min-w-0 pr-4">
        <span className="text-sm font-medium text-gray-900 leading-snug">{product.name}</span>
        <div className="flex items-center gap-2 flex-wrap">
          {product.category && (
            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">{product.category}</span>
          )}
          {product.note && (
            <span className="text-[11px] italic text-gray-400">{product.note}</span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="text-sm font-semibold" style={{ color: RED }}>
          €&nbsp;___
        </span>
        <p className="text-[10px] text-gray-400 mt-0.5 whitespace-nowrap">Chiedi in negozio</p>
      </div>
    </motion.div>
  );
}

function CategoryAccordion({ cat, isOpen, onToggle }: { cat: Category; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: isOpen ? RED : '#F5F5F7', color: isOpen ? '#fff' : RED }}
          >
            {cat.icon}
          </span>
          <div className="min-w-0">
            <span
              className="text-base font-semibold block leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif", color: isOpen ? RED : '#1d1d1f' }}
            >
              {cat.label}
            </span>
            {cat.badge && (
              <span className="text-[11px] font-medium tracking-wide uppercase text-gray-400">{cat.badge}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          <span
            className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: '#F5F5F7', color: '#6e6e73' }}
          >
            {cat.products.length} {cat.products.length === 1 ? 'prodotto' : 'prodotti'}
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-gray-100 divide-y-0">
              {cat.products.map((p, i) => (
                <ProductRow key={p.name} product={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Products() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section id="prodotti" className="py-24" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", color: RED }}
          >
            I Nostri Prodotti
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Esplora il nostro catalogo completo di articoli pirotecnici professionali
          </p>
        </motion.div>

        {/* Info note */}
        <motion.div
          className="mb-10 flex gap-3 items-start rounded-2xl px-5 py-4 border"
          style={{ backgroundColor: '#FFFBEA', borderColor: YELLOW }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="flex-shrink-0 mt-0.5">
            <Tag className="w-4 h-4" style={{ color: '#B8860B' }} />
          </span>
          <p className="text-sm leading-relaxed" style={{ color: '#7a6a00' }}>
            {NOTE_BRANDS}
          </p>
        </motion.div>

        {/* Accordion categories */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map(cat => (
            <CategoryAccordion
              key={cat.id}
              cat={cat}
              isOpen={openId === cat.id}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </motion.div>

        {/* CTA note */}
        <motion.p
          className="text-center text-sm text-gray-400 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Per prezzi e disponibilità contattaci o visita uno dei nostri punti vendita.
        </motion.p>
      </div>
    </section>
  );
}
