import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
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

const HeroSection = () => {
  return (
    <section id="accueil" className="pt-32 h-[80vh] flex items-center justify-center relative">
      {/* Simplified Hero Content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center px-4 relative z-40"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Minimalist Logo */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 relative" 
               style={{ 
                 background: 'var(--gradient-fire)',
                 boxShadow: 'var(--shadow-explosive)'
               }}>
            <span className="text-5xl">🐰</span>
          </div>
        </motion.div>
        
        {/* Clean Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight" 
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Karu Works
        </motion.h1>
        
        {/* Subtle Tagline */}
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Agence digitale à votre service !
        </motion.p>
        
        {/* Single CTA */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-12 py-6 rounded-full font-bold text-xl relative overflow-hidden group"
            style={{ 
              background: 'var(--gradient-fire)',
              boxShadow: 'var(--shadow-explosive)'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Discutons de votre projet</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 