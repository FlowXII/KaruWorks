import { motion } from 'framer-motion'

// Refined animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
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

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Fleurilège",
      category: "E-commerce Fleuriste",
      technology: "Shopify · React",
      result: "Boutique modernisée",
      description: "Site e-commerce complet pour fleuriste avec catalogue produits et système de commande",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Eko's Coaching",
      category: "Site Vitrine Premium",
      technology: "React · Calendly API",
      result: "Réservations optimisées",
      description: "Site vitrine professionnel avec intégration calendrier pour coach sportif",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Shobu",
      category: "Plateforme SaaS Esport",
      technology: "Next.js · MongoDB",
      result: "Communauté active",
      description: "Plateforme SaaS complète dédiée à l'organisation de tournois esport",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=center"
    }
  ]

  return (
    <motion.section 
      className="py-32 bg-gray-800" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-24" variants={fadeIn}>
          <motion.div 
            className="inline-block px-6 py-2 bg-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 font-light mb-8 border border-gray-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Nos réalisations
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-light mb-6 text-white leading-tight"
            variants={fadeIn}
          >
            Portfolio
            <span className="block font-extralight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              d'Excellence
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            variants={fadeIn}
          >
            Découvrez quelques créations qui ont marqué nos clients et généré des résultats exceptionnels
          </motion.p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group bg-gray-900/80 backdrop-blur-sm shadow-lg border border-gray-700/50 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/30 transition-all duration-500"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <motion.div 
                className="aspect-[4/3] relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Technology badge */}
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-gray-300 px-3 py-1 text-xs font-light border border-gray-700/50">
                  {project.technology}
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 font-light text-sm">{project.category}</p>
                </div>
                
                <p className="text-gray-300 font-light mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-medium text-sm">
                    {project.result}
                  </span>
                  <motion.button 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-sm">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          variants={fadeIn}
        >
          <motion.button 
            className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 font-light tracking-wide transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir tous nos projets
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PortfolioSection 