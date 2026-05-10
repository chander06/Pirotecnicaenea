import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Quanto costa uno spettacolo pirotecnico?',
    answer: 'Il costo varia in base alla durata, tipologia e location dell\'evento. Offriamo preventivi personalizzati e gratuiti. Contattateci per un\'offerta su misura.',
  },
  {
    id: 2,
    question: 'Cosa include uno show pirotecnico per matrimoni?',
    answer: 'Il servizio comprende sopralluogo, progettazione coreografica, montaggio, spettacolo in sicurezza e rimozione materiali. Tutto gestito da pirotecnici certificati.',
  },
  {
    id: 3,
    question: 'Pirotecnica Enea è autorizzata e assicurata?',
    answer: 'Sì. Operiamo in piena conformità con le normative italiane ed europee, con tutte le autorizzazioni ministeriali e copertura assicurativa per ogni tipo di evento.',
  },
  {
    id: 4,
    question: 'Con quanto anticipo bisogna prenotare i fuochi d\'artificio?',
    answer: 'Consigliamo di contattarci almeno 30–60 giorni prima dell\'evento per garantire disponibilità e ottenere le necessarie autorizzazioni comunali.',
  },
  {
    id: 5,
    question: 'Operate anche fuori dalla vostra regione?',
    answer: 'Sì, Pirotecnica Enea opera in tutta Italia. Contattaci per uno spettacolo nella tua città: nessuna destinazione è troppo lontana.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" aria-label="Domande frequenti" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            Domande Frequenti
          </h2>
          <p className="text-lg text-gray-600">
            Risposte alle domande più comuni sui nostri servizi
          </p>
        </motion.div>

        <div itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 rounded-2xl transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: openId === faq.id ? '#F5F5F7' : '#FFFFFF',
                  border: '1px solid #E5E5E7',
                }}
                aria-expanded={openId === faq.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    itemProp="name"
                    className="text-xl pr-8"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      color: '#CF0300',
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: openId === faq.id ? '#CF0300' : '#FDD828',
                    }}
                  >
                    {openId === faq.id ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openId === faq.id ? '200px' : '0',
                    opacity: openId === faq.id ? 1 : 0,
                  }}
                >
                  <p
                    itemProp="text"
                    className="text-gray-700 mt-4 leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
