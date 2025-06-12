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

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "Fleurilege",
      industry: "E-commerce Floral Premium",
      testimonial: "Karu Works a transformé notre boutique en ligne. Interface élégante, performance exceptionnelle. Nos ventes ont augmenté de 250% en 4 mois.",
      result: "+250% de croissance",
      initials: "FL",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      company: "TechCorp Solutions", 
      industry: "SaaS B2B Leader",
      testimonial: "Plateforme ultra-performante qui nous a propulsés dans le top 3 de notre secteur. Expertise technique remarquable et accompagnement de qualité.",
      result: "Top 3 du secteur",
      initials: "TC",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 3,
      company: "FashionHub Elite",
      industry: "Marketplace Mode",
      testimonial: "Interface intuitive et conversion optimisée. Notre taux de conversion a triplé grâce à leur approche centrée utilisateur.",
      result: "Conversion × 3",
      initials: "FH",
      color: "from-orange-600 to-red-500"
    }
  ]

  return (
    <motion.section 
      className="py-32 bg-gray-900" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-24" variants={fadeIn}>
          <motion.div 
            className="inline-block px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 font-light mb-8 border border-gray-700/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Témoignages
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-light mb-6 text-white leading-tight"
            variants={fadeIn}
          >
            Ils nous font
            <span className="block font-extralight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              confiance
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-gray-800/50 backdrop-blur-sm p-10 border border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500" 
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Quote */}
              <div className="mb-8">
                <svg 
                  className="w-8 h-8 text-gray-600 mb-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                
                <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Company info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-4 shadow-lg shadow-orange-500/20`}>
                    <span className="text-white font-medium text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.company}</div>
                    <div className="text-gray-400 text-sm font-light">{testimonial.industry}</div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="text-orange-400 font-medium text-sm">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="text-center mt-20"
          variants={fadeIn}
        >
          <motion.p 
            className="text-gray-300 font-light text-lg mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Rejoignez nos clients satisfaits
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-light tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Démarrer votre projet
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TestimonialsSection 