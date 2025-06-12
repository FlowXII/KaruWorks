import { motion } from 'framer-motion'

// Refined animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      {/* Sophisticated dark background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full opacity-60 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-400/8 to-red-400/8 rounded-full opacity-50 blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="max-w-5xl mx-auto text-center px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Refined logo */}
        <motion.div 
          className="mb-16"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
            <span className="text-3xl text-white">🐰</span>
          </div>
        </motion.div>
        
        {/* Elegant title */}
        <motion.h1 
          className="text-7xl md:text-8xl font-light mb-8 leading-tight tracking-wide text-white" 
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Karu
          <span className="font-thin bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Works
          </span>
        </motion.h1>
        
        {/* Refined tagline */}
        <motion.p 
          className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Excellence digitale pour marques d'exception
        </motion.p>
        
        {/* Elegant CTA */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button 
            className="group px-12 py-4 bg-white/10 backdrop-blur-sm text-white rounded-sm font-light text-lg tracking-wide relative overflow-hidden border border-white/20 hover:bg-white hover:text-gray-900 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Découvrir nos services</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="w-6 h-10 border border-gray-500 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-3 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 