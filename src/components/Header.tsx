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
        ? 'backdrop-blur-md bg-gray-900/90 border-b border-orange-500/20 shadow-2xl shadow-black/20' 
        : 'backdrop-blur-sm bg-gray-900/80 border-b border-gray-700/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Refined */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-xl relative z-10">🐰</span>
                <div className="absolute inset-0 rounded-full border border-orange-400/30 group-hover:border-orange-300/50 transition-colors"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className={`font-light tracking-wide transition-all duration-500 text-white ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                Karu
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extralight">
                  Works
                </span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation - Refined */}
          <div className="hidden md:flex items-center space-x-1">
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <a key={item} 
                 href={`#${item === 'Accueil' ? 'accueil' : item === 'À propos' ? 'apropos' : item.toLowerCase()}`}
                 className="relative px-6 py-3 text-gray-300 hover:text-white font-light transition-all duration-300 group"
                 style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* CTA Button - Refined */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Devis gratuit</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button - Refined */}
          <button
            className="md:hidden relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center group"
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

      {/* Mobile Menu - Refined */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-gray-700/30 bg-gray-900/95 backdrop-blur-lg">
          <div className="px-6 py-6 space-y-1">
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item, index) => (
              <a key={item}
                 href={`#${item === 'Accueil' ? 'accueil' : item === 'À propos' ? 'apropos' : item.toLowerCase()}`}
                 className="block py-4 px-4 text-gray-300 hover:text-white font-light transition-all duration-300 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/50 relative group mb-2"
                 style={{ animationDelay: `${index * 0.1}s` }}
                 onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center justify-between">
                  <span>{item}</span>
                  <span className="text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
                <div className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-700/30">
              <button className="w-full py-4 px-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Devis gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 