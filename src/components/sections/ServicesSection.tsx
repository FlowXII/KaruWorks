import { motion } from 'framer-motion'
import { useState } from 'react'

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

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const packages = [
    {
      id: 1,
      name: "Vitrine",
      subtitle: "Présence digitale élégante",
      price: "250€",
      description: "Solution parfaite pour établir votre présence en ligne avec sophistication",
      features: [
        "Design responsive premium",
        "Optimisation SEO avancée",
        "Formulaire de contact",
        "Hébergement première année",
        "Formation complète",
        "Support 3 mois"
      ],
      popular: false,
      accent: "orange"
    },
    {
      id: 2,
      name: "E-commerce",
      subtitle: "Commerce digital premium",
      price: "750€",
      description: "Boutique Shopify haut de gamme pour développer vos ventes en ligne",
      features: [
        "Store Shopify personnalisé",
        "Paiements sécurisés",
        "Gestion inventaire",
        "Intégrations marketing",
        "Formation e-commerce",
        "Support prioritaire 6 mois"
      ],
      popular: true,
      accent: "red"
    },
    {
      id: 3,
      name: "Sur-mesure",
      subtitle: "Excellence personnalisée",
      price: "Sur devis",
      description: "Solution entièrement personnalisée selon vos exigences spécifiques",
      features: [
        "Analyse approfondie",
        "Architecture sur-mesure",
        "Intégrations complexes",
        "Fonctionnalités métier",
        "Accompagnement stratégique",
        "Maintenance évolutive"
      ],
      popular: false,
      accent: "gray",
      isCustom: true
    }
  ]

  return (
    <motion.section 
      id="services" 
      className="py-32 bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Elegant header */}
        <motion.div className="text-center mb-24" variants={fadeIn}>
          <motion.div 
            className="inline-block px-6 py-2 bg-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 font-light mb-8 border border-gray-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Nos solutions
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-light mb-6 text-white leading-tight"
            variants={fadeIn}
          >
            Forfaits
            <span className="block font-extralight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              d'Excellence
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            variants={fadeIn}
          >
            Trois solutions d'exception conçues pour transformer votre présence digitale
          </motion.p>
        </motion.div>

        {/* Refined pricing cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="relative group"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(pkg.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-light px-4 py-2 rounded-full text-sm shadow-lg">
                    Recommandé
                  </div>
                </motion.div>
              )}

              {/* Main card */}
              <motion.div 
                className={`
                  relative h-full p-10 bg-gray-900/80 backdrop-blur-sm shadow-lg border transition-all duration-500
                  ${hoveredCard === pkg.id ? 'shadow-2xl shadow-orange-500/10 border-orange-500/30' : 'shadow-md border-gray-700/50'}
                  ${pkg.popular ? 'ring-1 ring-orange-500/20' : ''}
                `}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Subtle accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  pkg.accent === 'orange' ? 'from-orange-500 to-orange-600' :
                  pkg.accent === 'red' ? 'from-red-500 to-red-600' :
                  'from-gray-400 to-gray-500'
                }`} />

                {/* Header */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-light text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 font-light mb-6">{pkg.subtitle}</p>
                  
                  <div className="mb-6">
                    {pkg.isCustom ? (
                      <div className="text-center">
                        <div className="text-3xl font-light text-white mb-2">{pkg.price}</div>
                        <div className="text-sm text-gray-400">Consultation offerte</div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-5xl font-light text-white mb-2">{pkg.price}</div>
                        <div className="text-sm text-gray-400">Clé en main</div>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 font-light leading-relaxed">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                        pkg.accent === 'orange' ? 'from-orange-500 to-orange-600' :
                        pkg.accent === 'red' ? 'from-red-500 to-red-600' :
                        'from-gray-400 to-gray-500'
                      }`} />
                      <span className="text-gray-300 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`
                    w-full py-4 px-6 font-light tracking-wide transition-all duration-300 border backdrop-blur-sm
                    ${pkg.isCustom 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500' 
                      : 'border-white/20 text-white hover:bg-white hover:text-gray-900'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.isCustom ? 'Prendre rendez-vous' : 'Choisir ce forfait'}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="text-center mt-20"
          variants={fadeIn}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 bg-gray-900/50 backdrop-blur-sm rounded-lg px-8 py-6 border border-gray-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-gray-300">
              <div className="font-medium">Besoin de conseils ?</div>
              <div className="text-sm text-gray-400">Échangeons sur votre projet</div>
            </div>
            <motion.button 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-light px-6 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nous contacter
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServicesSection 