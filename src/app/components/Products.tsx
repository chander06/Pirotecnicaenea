import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Tag, Star, Flame, Crosshair, Rocket, Percent, Zap } from "lucide-react";

const NOTE_BRANDS =
  "I materiali possono variare in base alla disponibilità, poiché siamo rivenditori ufficiali di: Jupiter · Pirotecnica Volpe · Piropassione · Gold Dragon · Pirotecnica Europea · Teanese ed altri brand leader del settore.";

const RED = '#CF0300';
const YELLOW = '#FDD828';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  name: string;
  price: number | null;
  priceLabel?: string; // overrides price display (e.g. "€5 – €10")
  note?: string;
}

interface SubCategory {
  id: string;
  label: string;
  products: Product[];
}

interface Category {
  id: string;
  label: string;
  badge?: string;
  icon: React.ReactNode;
  subCategories: SubCategory[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: 'offerte-speciali',
    label: 'Offerte Speciali',
    icon: <Percent className="w-5 h-5" />,
    subCategories: [
      {
        id: 'offerte-batterie',
        label: 'Offerte Batterie',
        products: [
          { name: 'Offerte in corso', price: null, note: 'chiedi in negozio per le promozioni del momento' },
        ],
      },
      {
        id: 'offerte-scoppio',
        label: 'Offerte Scoppio',
        products: [
          { name: 'Offerte in corso', price: null, note: 'chiedi in negozio per le promozioni del momento' },
        ],
      },
      {
        id: 'offerte-razzi',
        label: 'Offerte Razzi',
        products: [
          { name: 'Offerte in corso', price: null, note: 'chiedi in negozio per le promozioni del momento' },
        ],
      },
      {
        id: 'offerte-candele-romane',
        label: 'Offerte Candele Romane',
        products: [
          { name: 'Offerte in corso', price: null, note: 'chiedi in negozio per le promozioni del momento' },
        ],
      },
      {
        id: 'offerte-coni',
        label: 'Offerte Coni',
        products: [
          { name: 'Cono Oro — 60 secondi', price: null, priceLabel: '€10 · 2 pz €15', note: 'Cat. F2' },
          { name: 'Cono Argento — 60 secondi', price: null, priceLabel: '€10 · 2 pz €15', note: 'Cat. F2' },
          { name: 'Cono Oro & Argento a Cambiamento — 90 secondi', price: null, priceLabel: '€15 · 2 pz €25', note: 'Cat. F2' },
        ],
      },
      {
        id: 'offerte-fontane',
        label: 'Offerte Fontane',
        products: [
          { name: 'Fontane Piccole', price: null, note: 'chiedi in negozio per le promozioni del momento' },
          { name: 'Fontane Medie', price: null, note: 'chiedi in negozio per le promozioni del momento' },
          { name: 'Fontane Grandi', price: null, note: 'chiedi in negozio per le promozioni del momento' },
        ],
      },
    ],
  },
  {
    id: 'batterie',
    label: 'Batterie',
    icon: <Star className="w-5 h-5" />,
    subCategories: [
      {
        id: 'batterie-prodotti',
        label: 'Tutte le varianti',
        products: [
          { name: '16 colpi', price: 15.0 },
          { name: '25 colpi', price: 25.0 },
          { name: '36 colpi', price: 35.0 },
          { name: '49/50 colpi', price: 40.0 },
          { name: '100 colpi Basse — Ø20mm', price: 50.0 },
          { name: '100 colpi Alte — Ø20mm', price: 60.0 },
          { name: '100 colpi — Calibro Ø18mm', price: 40.0 },
          { name: '100 colpi Big', price: 70.0 },
          { name: '200 colpi — Solo Dritte', price: 100.0 },
          { name: '200 colpi — Dritte Sequenziali e Ventaglio', price: 140.0 },
        ],
      },
      {
        id: 'batterie-mini-spettacoli',
        label: 'Mini Spettacoli',
        products: [
          {
            name: 'Da 200 colpi in su — Batteria Completa',
            price: null,
            note: 'da €200 a €500 per batteria · punto di riferimento €80 al minuto',
          },
        ],
      },
    ],
  },
  {
    id: 'scoppio',
    label: 'Scoppio',
    badge: 'Cat. VC · F2 · P1 · T1',
    icon: <Zap className="w-5 h-5" />,
    subCategories: [
      {
        id: 'scoppio-prodotti',
        label: 'Tutte le varianti',
        products: [
          { name: 'Mini Thunder — 6 pz', price: 10.0 },
          { name: 'Falco — 10 pz', price: 15.0 },
          { name: 'Lupo — 10 pz', price: 15.0 },
          { name: 'Monello — 10 pz', price: 15.0 },
          { name: 'Titano — 20 pz', price: 15.0 },
          { name: 'Toro — 10 pz', price: 10.0 },
          { name: 'Ultra — 10 pz', price: 15.0 },
          { name: 'Tiger — 4 pz', price: 8.0 },
          { name: 'Magnum F2 — scatola', price: null, priceLabel: '€10 – €15', note: 'Cat. F2 · varie marche e confezioni · €0,50 al pezzo' },
          { name: 'Track Caramella — 15 pz', price: 25.0, note: 'Cat. F2' },
          { name: 'Track Rendilo — 10 pz', price: 25.0, note: 'Cat. F2' },
        ],
      },
    ],
  },
  {
    id: 'razzi',
    label: 'Razzi',
    badge: 'Cat. VC · Cat. IV',
    icon: <Rocket className="w-5 h-5" />,
    subCategories: [
      {
        id: 'razzi-prodotti',
        label: 'Tutte le varianti',
        products: [
          { name: 'Razzi Fischi a Botto — 12 pz', price: 2.0, note: 'Cat. F2' },
          { name: 'Razzi Scopette Mix — imballo', price: null, priceLabel: '€5 – €10' },
          { name: 'Razzi Piccoli Mix — 5 pz', price: 10.0, note: 'Cat. F2' },
          { name: 'Buste Mix — vari pezzi', price: null, priceLabel: '€10 – €30' },
          { name: 'Razzi Coppia Superbomba', price: 15.0 },
          { name: 'Razzi Tipo Enterprise — vari pezzi', price: null, priceLabel: 'da €15' },
          { name: 'Blue Moon', price: 40.0, note: 'Cat. F3' },
          { name: 'Razzo Supermix — Busta Assortita (piccola / media / grande)', price: null, priceLabel: '€15 – €40' },
          { name: 'Razzo Cometa Mix — piccolo / medio / grande', price: null, priceLabel: '€15 – €20' },
          { name: 'Fischi a Botto — conf. 144 pz', price: 20.0 },
        ],
      },
    ],
  },
  {
    id: 'libera-vendita',
    label: 'Libera Vendita',
    badge: 'VD · VE · F1 · F2',
    icon: <Star className="w-5 h-5" />,
    subCategories: [
      {
        id: 'scoppio',
        label: 'Scoppio',
        products: [
          { name: 'Minicicciolo', price: 1.0 },
          { name: 'Pop Pop piccolo', price: 0.5 },
          { name: 'Pop Pop grande', price: 1.0 },
          { name: 'Miccetta', price: 2.0 },
          { name: 'Fiorellino Girandola', price: 2.0 },
          { name: 'Pallina Scoppiettante', price: 1.0 },
          { name: 'Libellule / Farfalline', price: 2.0 },
          { name: 'Codino Matto', price: 3.0 },
          { name: 'Miccetta Grande', price: 3.0 },
          { name: 'Raudo', price: 4.0 },
          { name: 'Magnum', price: 5.0 },
          { name: 'Valigetta Assortita', price: 12.0 },
          { name: 'Bottiglietta Popper — 72 pz', price: 15.0 },
          { name: 'Pistola Popper — 36 pz', price: 15.0 },
          { name: 'Tubi Spara Coriandoli', price: 1.5, note: 'vari modelli, a partire da' },
        ],
      },
    ],
  },
  {
    id: 'candele-sparapalle',
    label: 'Candele Romane & Sparapalle',
    badge: 'Cat. VC · F2 · F3',
    icon: <Flame className="w-5 h-5" />,
    subCategories: [
      {
        id: 'candele-sparapalle-prodotti',
        label: 'Tutti i prodotti',
        products: [
          { name: 'Candele Romane — 20 colpi', price: 10.0, note: 'Cat. F2' },
          { name: 'Candele Romane — 30 colpi', price: 15.0, note: 'Cat. F2' },
          { name: 'Candele Romane Gatling — 380 colpi', price: 30.0, note: 'Cat. F2' },
          { name: 'Comete — Ø20mm', price: 10.0, note: 'Cat. F3' },
          { name: 'Comete — Ø30mm', price: 15.0, note: 'Cat. F3' },
          { name: 'Comete Mix', price: 15.0, note: 'Cat. F2' },
        ],
      },
    ],
  },
];

// ─── Price formatter ───────────────────────────────────────────────────────────

function formatPrice(price: number): string {
  return price % 1 === 0
    ? `€ ${price.toFixed(0)},00`
    : `€ ${price.toFixed(2).replace('.', ',')}`;
}

// ─── Sub-category panel ────────────────────────────────────────────────────────

function SubCategoryPanel({
  sub,
  isOpen,
  onToggle,
  single,
}: {
  sub: SubCategory;
  isOpen: boolean;
  onToggle: () => void;
  single: boolean; // if category has only one sub, auto-open style
}) {
  return (
    <div className="border-t border-gray-100 first:border-t-0">
      {!single && (
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
            {sub.label}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">{sub.products.length} art.</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 text-gray-300" />
            </motion.div>
          </div>
        </button>
      )}

      <AnimatePresence initial={false}>
        {(isOpen || single) && (
          <motion.div
            key="sub-content"
            initial={single ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {single && (
              <div className="px-6 pt-1 pb-1">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                  {sub.label}
                </span>
              </div>
            )}
            <div>
              {sub.products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.035 }}
                  className="flex items-center justify-between px-6 py-3 border-t border-gray-100/80 hover:bg-[#FDD828]/5 transition-colors duration-100 group"
                >
                  <div className="min-w-0 flex-1 pr-4">
                    <p className="text-sm font-medium text-gray-800 leading-snug">{p.name}</p>
                    {p.note && (
                      <p className="text-[11px] italic text-gray-400 mt-0.5">{p.note}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-right">
                    {p.priceLabel ? (
                      <span className="text-sm font-bold" style={{ color: RED }}>{p.priceLabel}</span>
                    ) : p.price !== null ? (
                      <span className="text-sm font-bold tabular-nums" style={{ color: RED }}>{formatPrice(p.price)}</span>
                    ) : (
                      <span className="text-xs text-gray-400 italic">su richiesta</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main accordion item ───────────────────────────────────────────────────────

function CategoryAccordion({
  cat,
  isOpen,
  onToggle,
}: {
  cat: Category;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [openSubId, setOpenSubId] = useState<string | null>(null);
  const single = false;

  const totalProducts = cat.subCategories.reduce((n, s) => n + s.products.length, 0);

  return (
    <div
      className="border rounded-2xl overflow-hidden bg-white shadow-sm transition-shadow duration-200"
      style={{ borderColor: isOpen ? RED + '33' : '#e5e7eb' }}
    >
      {/* Category header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: isOpen ? RED : '#F5F5F7',
              color: isOpen ? '#fff' : RED,
            }}
          >
            {cat.icon}
          </span>
          <div className="min-w-0">
            <span
              className="text-base font-semibold block leading-tight transition-colors duration-200"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: isOpen ? RED : '#1d1d1f',
              }}
            >
              {cat.label}
            </span>
            {cat.badge && (
              <span className="text-[11px] font-medium tracking-wide uppercase text-gray-400">
                {cat.badge}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] text-gray-500">
            {totalProducts} {totalProducts === 1 ? 'articolo' : 'articoli'}
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </button>

      {/* Subcategories */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="cat-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-gray-100">
              {cat.subCategories.map(sub => (
                <SubCategoryPanel
                  key={sub.id}
                  sub={sub}
                  single={single}
                  isOpen={openSubId === sub.id}
                  onToggle={() =>
                    setOpenSubId(prev => (prev === sub.id ? null : sub.id))
                  }
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function Products() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="prodotti" className="py-24" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

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
            Esplora il nostro catalogo completo di articoli pirotecnici
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          className="mb-8 flex gap-3 items-start rounded-2xl px-5 py-4 border"
          style={{ backgroundColor: '#FFFBEA', borderColor: YELLOW }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tag className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#B8860B' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#7a6a00' }}>
            {NOTE_BRANDS}
          </p>
        </motion.div>

        {/* Accordion */}
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
              onToggle={() => setOpenId(prev => (prev === cat.id ? null : cat.id))}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-gray-400 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Per prezzi e disponibilità degli altri articoli contattaci o visita uno dei nostri punti vendita.
        </motion.p>
      </div>
    </section>
  );
}
