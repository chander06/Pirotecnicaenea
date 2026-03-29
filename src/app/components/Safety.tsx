import { motion } from 'motion/react';
import { Shield, AlertCircle, CheckCircle, FileText } from 'lucide-react';

export function Safety() {
  return (
    <section id="sicurezza" className="py-24" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#CF0300' }} />
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: '#CF0300',
            }}
          >
            Sicurezza & Normative
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Operiamo nel pieno rispetto delle normative italiane ed europee
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Legal Notice */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#CF0300' }} />
              <div>
                <h3 className="text-xl mb-3" style={{ color: '#CF0300' }}>
                  Normativa vigente
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  La vendita di articoli pirotecnici è regolata dalla normativa italiana (T.U.L.P.S.) e dalle direttive europee.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Non è consentita la vendita online. L'acquisto è possibile esclusivamente presso i punti vendita fisici autorizzati.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Safety Guidelines */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#CF0300' }} />
              <div>
                <h3 className="text-xl mb-3" style={{ color: '#CF0300' }}>
                  Limitazioni d'età
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Categoria F1: vendita consentita ai maggiori di 14 anni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Categoria F2 e F3: vendita consentita ai maggiori di 18 anni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Categoria F4: riservata esclusivamente a professionisti con licenza</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#CF0300' }} />
              <div>
                <h3 className="text-xl mb-3" style={{ color: '#CF0300' }}>
                  Raccomandazioni di sicurezza
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Leggere sempre attentamente le istruzioni d'uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Utilizzare i prodotti esclusivamente in spazi aperti e sicuri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Mantenere una distanza di sicurezza adeguata durante l'accensione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Non tentare mai di riaccendere fuochi inesplosi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CF0300] mt-1">•</span>
                    <span>Conservare in luoghi freschi e asciutti, lontano da fonti di calore</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Professional Certification */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 shadow-sm"
            style={{ borderColor: '#FDD828' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-center text-gray-700 leading-relaxed">
              <span style={{ color: '#CF0300' }}>Pirotecnica Enea Srl</span> è in possesso di tutte le autorizzazioni necessarie per la vendita e l'utilizzo professionale di articoli pirotecnici. I nostri operatori sono formati e certificati secondo le normative vigenti.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
