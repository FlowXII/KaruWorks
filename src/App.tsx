import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import PortfolioSection from './components/sections/PortfolioSection'
import AboutSection from './components/sections/AboutSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Sophisticated Gradient Background */}
      <div className="fixed inset-0 z-0">
        {/* Main Modern Gradient */}
        <div 
          className="w-full h-full"
          style={{ 
            background: `
              linear-gradient(135deg, 
                #0a0a0a 0%, 
                #1a1a1a 25%, 
                #2d1810 50%, 
                #1a1a1a 75%, 
                #0a0a0a 100%
              ),
              radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(234, 88, 12, 0.08) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Falling Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vertical Light Rays */}
          <motion.div 
            className="absolute -top-20 left-10 w-0.5 h-32 opacity-30"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #f97316 50%, transparent 100%)',
            }}
            animate={{ 
              y: [-50, window.innerHeight + 50],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0 }}
          />
          <motion.div 
            className="absolute -top-20 left-1/4 w-1 h-24 opacity-40"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #dc2626 50%, transparent 100%)',
            }}
            animate={{ 
              y: [-40, window.innerHeight + 40],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.div 
            className="absolute -top-20 left-1/2 w-0.5 h-28 opacity-35"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #ea580c 50%, transparent 100%)',
            }}
            animate={{ 
              y: [-60, window.innerHeight + 60],
              opacity: [0, 0.7, 0]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.div 
            className="absolute -top-20 left-3/4 w-1 h-36 opacity-25"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #f97316 50%, transparent 100%)',
            }}
            animate={{ 
              y: [-30, window.innerHeight + 30],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.div 
            className="absolute -top-20 right-20 w-0.5 h-40 opacity-30"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #dc2626 50%, transparent 100%)',
            }}
            animate={{ 
              y: [-45, window.innerHeight + 45],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear", delay: 3 }}
          />
          
          {/* Falling Light Orbs */}
          <motion.div 
            className="absolute -top-10 left-16 w-3 h-3 rounded-full opacity-60"
            style={{
              background: 'radial-gradient(circle, #f97316 0%, transparent 70%)',
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)'
            }}
            animate={{ 
              y: [-20, window.innerHeight + 20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div 
            className="absolute -top-10 left-1/3 w-2 h-2 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
              boxShadow: '0 0 12px rgba(220, 38, 38, 0.4)'
            }}
            animate={{ 
              y: [-15, window.innerHeight + 15],
              opacity: [0, 0.7, 0],
              scale: [0.3, 1, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          <motion.div 
            className="absolute -top-10 right-1/4 w-4 h-4 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)',
              boxShadow: '0 0 20px rgba(234, 88, 12, 0.3)'
            }}
            animate={{ 
              y: [-25, window.innerHeight + 25],
              opacity: [0, 0.6, 0],
              scale: [0.2, 1, 0.2]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
          <motion.div 
            className="absolute -top-10 right-12 w-2.5 h-2.5 rounded-full opacity-35"
            style={{
              background: 'radial-gradient(circle, #f97316 0%, transparent 70%)',
              boxShadow: '0 0 18px rgba(249, 115, 22, 0.4)'
            }}
            animate={{ 
              y: [-30, window.innerHeight + 30],
              opacity: [0, 0.5, 0],
              scale: [0.4, 1, 0.4]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </div>
        
        {/* Static Constellation Particles */}
        <div className="absolute inset-0">
          {/* Background constellation stars */}
          <motion.div 
            className="absolute top-20 left-1/4 w-2 h-2 bg-orange-400/60 rounded-full" 
            style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' }}
            animate={{ 
              opacity: [0.3, 1, 0.6, 0.3],
              scale: [1, 1.2, 1.3, 1],
              filter: ['brightness(1)', 'brightness(2)', 'brightness(1.8)', 'brightness(1)']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-red-400/40 rounded-full" 
            style={{ boxShadow: '0 0 15px rgba(220, 38, 38, 0.3)' }}
            animate={{ 
              opacity: [0.4, 0.8, 1, 0.6, 0.4],
              scale: [1, 1.2, 1.1, 1.3, 1],
              filter: ['brightness(1)', 'brightness(1.5)', 'brightness(2)', 'brightness(1.8)', 'brightness(1)']
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-300/50 rounded-full" 
            style={{ boxShadow: '0 0 10px rgba(251, 146, 60, 0.4)' }}
            animate={{ 
              opacity: [0.5, 1, 0.3, 0.5],
              scale: [1, 1.1, 1, 1],
              filter: ['brightness(1)', 'brightness(2)', 'brightness(1)', 'brightness(1)']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-orange-500/30 rounded-full" 
            style={{ boxShadow: '0 0 25px rgba(249, 115, 22, 0.2)' }}
            animate={{ 
              opacity: [0.3, 0.6, 1, 0.3],
              scale: [1, 1.3, 1.1, 1],
              filter: ['brightness(1)', 'brightness(1.8)', 'brightness(2)', 'brightness(1)']
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Additional static constellation points */}
          <motion.div 
            className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-red-300/35 rounded-full" 
            style={{ boxShadow: '0 0 12px rgba(252, 165, 165, 0.3)' }}
            animate={{ 
              opacity: [0.35, 0.7, 0.35],
              scale: [1, 1.2, 1],
              filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/6 w-1 h-1 bg-orange-400/45 rounded-full" 
            style={{ boxShadow: '0 0 8px rgba(251, 146, 60, 0.4)' }}
            animate={{ 
              opacity: [0.45, 0.9, 0.45],
              scale: [1, 1.1, 1],
              filter: ['brightness(1)', 'brightness(1.8)', 'brightness(1)']
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div 
            className="absolute top-1/6 left-1/2 w-2 h-2 bg-yellow-400/25 rounded-full" 
            style={{ boxShadow: '0 0 18px rgba(250, 204, 21, 0.2)' }}
            animate={{ 
              opacity: [0.25, 0.8, 0.25],
              scale: [1, 1.3, 1],
              filter: ['brightness(1)', 'brightness(2)', 'brightness(1)']
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          <motion.div 
            className="absolute bottom-1/6 left-3/4 w-1.5 h-1.5 bg-orange-600/40 rounded-full" 
            style={{ boxShadow: '0 0 14px rgba(234, 88, 12, 0.3)' }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              filter: ['brightness(1)', 'brightness(1.6)', 'brightness(1)']
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
        </div>
        
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        {/* Elegant Border Effect */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            animate={{ 
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
            animate={{ 
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7.5 }}
          />
        </div>
      </div>

      {/* Content with relative z-index */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
