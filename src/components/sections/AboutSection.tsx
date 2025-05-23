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

const AboutSection = () => {
  return (
    <motion.section 
      id="apropos" 
      className="py-20" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft}>
            <motion.div 
              className="inline-block px-4 py-2 bg-orange-900/20 rounded-full text-orange-400 font-semibold mb-4 border border-orange-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Notre philosophie
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInLeft}
              style={{ 
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Notre approche
            </motion.h2>
            <motion.div 
              className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInLeft}>
                Chez <span className="text-orange-400 font-semibold">Karu Works</span>, nous croyons que chaque projet digital 
                mérite une approche unique et personnalisée qui reflète parfaitement votre vision.
              </motion.p>
              <motion.p variants={fadeInLeft}>
                Notre équipe allie <span className="text-orange-400 font-semibold">créativité</span> et 
                <span className="text-orange-400 font-semibold"> expertise technique</span> pour transformer 
                vos idées en solutions digitales performantes et innovantes.
              </motion.p>
              <motion.p variants={fadeInLeft}>
                Nous nous engageons à créer des <span className="text-orange-400 font-semibold">expériences digitales mémorables</span> qui 
                racontent votre histoire et connectent authentiquement avec vos clients.
              </motion.p>
            </motion.div>
            
            {/* Values */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-center p-4 rounded-xl bg-black/30 border border-orange-900/20" 
                variants={fadeInLeft}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-orange-400 font-semibold">Excellence</div>
                <div className="text-gray-400 text-sm">Dans chaque détail</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-black/30 border border-orange-900/20" 
                variants={fadeInLeft}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-orange-400 font-semibold">Innovation</div>
                <div className="text-gray-400 text-sm">Technologies de pointe</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative w-full h-80 rounded-2xl flex items-center justify-center overflow-hidden border border-orange-500/30"
              style={{ 
                background: 'var(--gradient-fire)',
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-6xl opacity-50"
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                🚀
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <motion.div 
                className="absolute bottom-6 left-6 right-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-orange-100 font-semibold text-lg mb-2">
                  "L'innovation naît de l'audace de transformer les défis en opportunités."
                </p>
                <p className="text-orange-200/70 text-sm">- Notre vision</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection 