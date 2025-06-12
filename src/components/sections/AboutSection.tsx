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

const AboutSection = () => {
  return (
    <motion.section 
      id="apropos" 
      className="py-32 bg-gray-900" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div variants={fadeInLeft}>
            <motion.div 
              className="inline-block px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 font-light mb-8 border border-gray-700/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Notre approche
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-light mb-8 text-white leading-tight"
              variants={fadeInLeft}
            >
              L'excellence
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extralight">
                par le détail
              </span>
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg text-gray-300 font-light leading-relaxed mb-12"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInLeft}>
                Chez <span className="text-white font-medium">Karu Works</span>, nous croyons que chaque projet 
                mérite une attention particulière et une approche sur-mesure qui reflète parfaitement votre vision.
              </motion.p>
              <motion.p variants={fadeInLeft}>
                Notre équipe allie <span className="text-white font-medium">savoir-faire artistique</span> et 
                <span className="text-white font-medium"> expertise technique</span> pour transformer 
                vos idées en solutions digitales d'exception.
              </motion.p>
              <motion.p variants={fadeInLeft}>
                Nous nous engageons à créer des <span className="text-white font-medium">expériences digitales mémorables</span> qui 
                racontent votre histoire avec authenticité et élégance.
              </motion.p>
            </motion.div>
            
            {/* Values */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/50 transition-all duration-300" 
                variants={fadeInLeft}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-xl">✦</span>
                </div>
                <div className="text-white font-medium mb-1">Excellence</div>
                <div className="text-gray-400 text-sm font-light">Dans chaque détail</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/50 transition-all duration-300" 
                variants={fadeInLeft}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="text-white font-medium mb-1">Innovation</div>
                <div className="text-gray-400 text-sm font-light">Technologies avancées</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Visual element */}
          <motion.div 
            className="relative"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative w-full h-96 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* Subtle geometric pattern */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>

              {/* Central element */}
              <motion.div 
                className="text-center"
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <div className="text-gray-300 font-light text-lg max-w-xs">
                  "L'innovation naît de l'audace de transformer les défis en opportunités"
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection 