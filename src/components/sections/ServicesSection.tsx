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

const ServicesSection = () => {
  return (
    <motion.section 
      id="services" 
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
            Nos expertises
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
            Services Premium
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Des solutions digitales sur mesure qui transforment votre vision en <span className="text-orange-400 font-semibold">réalité performante</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {/* Service 1 - Design */}
          <motion.div 
            className="group p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <motion.div 
              className="relative mb-6 h-48 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop&crop=center" 
                   alt="Design UI/UX" 
                   className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-orange-300 bg-black/50 px-2 py-1 rounded">
                Design Premium
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-lg">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-400">Design Web</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Interfaces modernes et intuitives qui reflètent parfaitement votre identité de marque.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> UX optimisée</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Design system</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Prototypage</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 - Development */}
          <motion.div 
            className="group p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative mb-6 h-48 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center" 
                   alt="Développement Code" 
                   className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-orange-300 bg-black/50 px-2 py-1 rounded">
                Développement
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-400">Développement</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Sites web performants et évolutifs, développés avec les dernières technologies.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> React / Next.js</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Performance</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> SEO optimisé</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 3 - Support */}
          <motion.div 
            className="group p-6 rounded-2xl bg-black/50 border border-orange-900/20 hover:border-orange-600/40 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative mb-6 h-48 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center" 
                   alt="Accompagnement" 
                   className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-orange-300 bg-black/50 px-2 py-1 rounded">
                Accompagnement
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--gradient-fire)' }}
                >
                  <span className="text-lg">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-400">Accompagnement</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Support continu et conseils stratégiques pour maximiser votre impact digital.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Support 24/7</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Conseils stratégiques</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Formation</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServicesSection 