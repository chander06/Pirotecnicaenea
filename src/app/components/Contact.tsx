import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
            Contatti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siamo qui per aiutarti. Contattaci per qualsiasi informazione.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* General Phone */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FDD828' }}
            >
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg mb-2" style={{ color: '#CF0300' }}>
              Telefono Generale
            </h3>
            <a
              href="tel:3206708992"
              className="text-xl hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#CF0300' }}
            >
              320 670 8992
            </a>
          </motion.div>

          {/* Main Store */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FDD828' }}
            >
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-lg mb-2" style={{ color: '#CF0300' }}>
              Sede Principale
            </h3>
            <p className="text-sm text-gray-600 mb-2">Campoleone di Lanuvio</p>
            <a
              href="tel:0693734301"
              className="text-xl hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#CF0300' }}
            >
              06 937 4301
            </a>
          </motion.div>

          {/* Secondary Store */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FDD828' }}
            >
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-lg mb-2" style={{ color: '#CF0300' }}>
              Sede Secondaria
            </h3>
            <p className="text-sm text-gray-600 mb-2">Aprilia</p>
            <a
              href="tel:3924818136"
              className="text-xl hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#CF0300' }}
            >
              392 481 8136
            </a>
          </motion.div>
        </div>

        {/* Opening Hours */}
        <motion.div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#F5F5F7' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Clock className="w-10 h-10 mx-auto mb-4" style={{ color: '#CF0300' }} />
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Instrument Serif', serif", color: '#CF0300' }}>
            Orari di apertura
          </h3>
          <p className="text-gray-700">
            Lunedì - Sabato: 9:00 - 13:00 / 15:30 - 19:30
          </p>
          <p className="text-gray-700">
            Domenica: Chiuso (aperto su appuntamento in periodi festivi)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
