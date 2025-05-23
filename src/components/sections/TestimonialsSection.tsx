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

const TestimonialsSection = () => {
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
            Témoignages
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
            Ils nous font confiance
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {/* Testimonial 1 - Fleurilege */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300" 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-800 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold">FL</span>
              </div>
              <div>
                <div className="font-semibold text-white">Fleurilege</div>
                <div className="text-orange-400 text-sm">E-commerce Floral Premium</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Karu Works a transformé notre boutique en ligne. Interface élégante, 
              performance exceptionnelle. Nos ventes ont augmenté de 250% en 4 mois."
            </p>
            <div className="flex text-orange-400 mb-3 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-orange-300 font-semibold text-sm">
              +250% de croissance
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300" 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-800 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold">TC</span>
              </div>
              <div>
                <div className="font-semibold text-white">TechCorp Solutions</div>
                <div className="text-orange-400 text-sm">SaaS B2B Leader</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Plateforme ultra-performante qui nous a propulsés dans le top 3 de notre secteur. 
              Expertise technique remarquable et accompagnement de qualité."
            </p>
            <div className="flex text-orange-400 mb-3 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-orange-300 font-semibold text-sm">
              Top 3 du secteur
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div 
            className="p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300" 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-800 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold">FH</span>
              </div>
              <div>
                <div className="font-semibold text-white">FashionHub Elite</div>
                <div className="text-orange-400 text-sm">Marketplace Mode</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Interface intuitive et conversion optimisée. Notre taux de conversion 
              a triplé grâce à leur approche centrée utilisateur."
            </p>
            <div className="flex text-orange-400 mb-3 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-orange-300 font-semibold text-sm">
              Conversion x3
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TestimonialsSection 