import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const ContactSection = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div 
            className="inline-block px-4 py-2 bg-orange-900/20 rounded-full text-orange-400 font-semibold mb-4 border border-orange-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
            style={{ 
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Prêt à démarrer ?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discutons de votre projet et créons ensemble 
            <span className="text-orange-400 font-semibold"> quelque chose d'exceptionnel</span>
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="p-6 rounded-2xl bg-gray-900/50 border border-orange-900/20" 
            variants={fadeInLeft}
          >
            <motion.h3 
              className="text-2xl font-semibold text-orange-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Parlons de votre projet
            </motion.h3>
            <motion.form 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div variants={fadeInLeft}>
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full p-3 rounded-lg bg-black/50 border border-orange-900/30 text-white placeholder-gray-500 focus:border-orange-600 focus:outline-none transition-colors"
                />
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full p-3 rounded-lg bg-black/50 border border-orange-900/30 text-white placeholder-gray-500 focus:border-orange-600 focus:outline-none transition-colors"
                />
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <select 
                  className="w-full p-3 rounded-lg bg-black/50 border border-orange-900/30 text-white focus:border-orange-600 focus:outline-none transition-colors"
                >
                  <option>Type de projet</option>
                  <option>Site vitrine</option>
                  <option>E-commerce</option>
                  <option>Application web</option>
                  <option>Refonte complète</option>
                </select>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <textarea 
                  placeholder="Décrivez votre projet..." 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-black/50 border border-orange-900/30 text-white placeholder-gray-500 focus:border-orange-600 focus:outline-none transition-colors resize-none"
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className="w-full py-3 rounded-lg font-semibold relative overflow-hidden"
                style={{ 
                  background: 'var(--gradient-fire)',
                  boxShadow: '0 10px 20px rgba(249, 115, 22, 0.3)'
                }}
                variants={fadeInLeft}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Envoyer ma demande
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="p-4 rounded-xl bg-gray-900/50 border border-orange-900/20" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" 
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-orange-400">contact@karuworks.com</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-4 rounded-xl bg-gray-900/50 border border-orange-900/20" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" 
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Réponse rapide</div>
                  <div className="text-orange-400">Sous 24h garanties</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-4 rounded-xl bg-gray-900/50 border border-orange-900/20" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" 
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Devis gratuit</div>
                  <div className="text-orange-400">Estimation détaillée</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-3 pt-4"
              variants={staggerContainer}
            >
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/50 border border-orange-900/30 hover:border-orange-600/50 transition-all duration-300" 
                variants={fadeInRight}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">🐙</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/50 border border-orange-900/30 hover:border-orange-600/50 transition-all duration-300" 
                variants={fadeInRight}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">💼</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/50 border border-orange-900/30 hover:border-orange-600/50 transition-all duration-300" 
                variants={fadeInRight}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">🐦</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection 