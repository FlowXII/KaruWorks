import { motion } from 'framer-motion'

// Refined animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ContactSection = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-32 bg-gray-800" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-24" variants={fadeIn}>
          <motion.div 
            className="inline-block px-6 py-2 bg-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 font-light mb-8 border border-gray-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-light mb-6 text-white leading-tight"
            variants={fadeIn}
          >
            Prêt à
            <span className="block font-extralight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              commencer ?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
            variants={fadeIn}
          >
            Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-900/80 backdrop-blur-sm p-10 shadow-lg border border-gray-700/50" 
            variants={fadeInLeft}
          >
            <motion.h3 
              className="text-2xl font-light text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Parlons de votre projet
            </motion.h3>
            
            <motion.form 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div variants={fadeInLeft}>
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors font-light"
                />
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors font-light"
                />
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <select 
                  className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white focus:border-orange-500 focus:outline-none transition-colors font-light"
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
                  rows={5}
                  className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none font-light"
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-light tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer ma demande
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-xl">✉</span>
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-orange-400 font-light">contact@karuworks.com</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-medium text-white">Réponse rapide</div>
                  <div className="text-gray-300 font-light">Sous 24h garanties</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300" 
              variants={fadeInRight}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <div className="font-medium text-white">Devis gratuit</div>
                  <div className="text-gray-300 font-light">Estimation détaillée</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection 