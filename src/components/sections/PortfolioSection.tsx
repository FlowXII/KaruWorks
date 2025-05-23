import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
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

const PortfolioSection = () => {
  return (
    <motion.section 
      className="py-20" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div 
            className="inline-block px-4 py-2 bg-orange-900/20 rounded-full text-orange-400 font-semibold mb-4 border border-orange-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Nos réalisations
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
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez quelques-unes de nos créations qui ont marqué nos clients et <span className="text-orange-400 font-semibold">généré des résultats concrets</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {/* Project 1 */}
          <motion.div 
            className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="aspect-video relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center" 
                   alt="Dashboard Business" 
                   className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                React + Firebase
              </div>
              
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-lg font-semibold text-white mb-1">TechCorp Solutions</h3>
                <p className="text-orange-300 text-sm font-medium mb-1">+300% de croissance</p>
                <p className="text-gray-300 text-sm">Plateforme SaaS avec dashboard en temps réel</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="aspect-video relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center" 
                   alt="E-commerce Mode" 
                   className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Next.js + Stripe
              </div>
              
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-lg font-semibold text-white mb-1">FashionLux</h3>
                <p className="text-orange-300 text-sm font-medium mb-1">CA multiplié par 5</p>
                <p className="text-gray-300 text-sm">E-commerce premium avec personnalisation IA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="aspect-video relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop&crop=center" 
                   alt="App Mobile" 
                   className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                React Native
              </div>
              
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-lg font-semibold text-white mb-1">FinTech Pro</h3>
                <p className="text-orange-300 text-sm font-medium mb-1">10K utilisateurs</p>
                <p className="text-gray-300 text-sm">Application fintech avec intégration crypto</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <motion.button 
            className="px-8 py-3 border border-orange-600/50 text-orange-400 hover:bg-orange-900/20 hover:text-orange-300 rounded-xl font-semibold transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir tous nos projets →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PortfolioSection 