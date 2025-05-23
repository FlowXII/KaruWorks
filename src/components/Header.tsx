import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'backdrop-blur-md bg-black/80 border-b border-orange-500/30 shadow-2xl' 
        : 'backdrop-blur-sm bg-black/40 border-b border-orange-900/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300"
                   style={{ 
                     background: 'linear-gradient(135deg, #f97316 0%, #dc2626 50%, #ea580c 100%)',
                     boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                <span className="text-white font-bold text-xl relative z-10 group-hover:animate-bounce">🐰</span>
                <div className="absolute inset-0 rounded-2xl border border-orange-400/40 group-hover:border-orange-300/60 transition-colors"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className={`font-black text-2xl tracking-tight transition-all duration-500 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
                    style={{ 
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 50%, #ea580c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.3))'
                    }}>
                Karu Works
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-2">
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <a key={item} 
                 href={`#${item === 'Accueil' ? 'accueil' : item === 'À propos' ? 'apropos' : item.toLowerCase()}`}
                 className="relative px-6 py-3 text-gray-300 hover:text-white font-semibold transition-all duration-300 group rounded-xl hover:bg-orange-900/20"
                 style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600/0 via-orange-500/10 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* CTA Button - Enhanced */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                    style={{ 
                      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                      boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Devis gratuit</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden relative w-10 h-10 rounded-xl bg-orange-900/30 border border-orange-600/50 text-orange-300 hover:text-white hover:bg-orange-800/40 transition-all duration-300 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex flex-col items-center justify-center">
              <span className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-orange-900/30 bg-black/90 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-1">
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <a key={item}
                 href={`#${item === 'Accueil' ? 'accueil' : item === 'À propos' ? 'apropos' : item.toLowerCase()}`}
                 className="block py-4 px-4 text-gray-300 hover:text-white font-semibold transition-all duration-300 rounded-xl hover:bg-orange-900/30 relative group"
                 style={{ animationDelay: `${index * 0.1}s` }}
                 onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center justify-between">
                  <span>{item}</span>
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-orange-900/30">
              <button className="w-full py-4 px-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                      style={{ 
                        background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
                        boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
                      }}>
                <span className="relative z-10">Devis gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 