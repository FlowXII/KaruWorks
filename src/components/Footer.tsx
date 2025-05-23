export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)' }} className="py-16 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center relative"
                   style={{ 
                     background: 'var(--gradient-fire)',
                     boxShadow: 'var(--shadow-fire)'
                   }}>
                <span className="text-white font-bold text-xl">🐰</span>
                <div className="absolute inset-0 rounded-full border border-red-500/30"></div>
              </div>
              <span className="text-2xl font-bold"
                    style={{ 
                      background: 'var(--gradient-text)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                Karu Works
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              L'agence digitale qui transforme vos idées en expériences web extraordinaires. 
              Avec la passion et le courage de Karu, nous créons des sites qui marquent les esprits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center border border-red-900/30 hover:border-red-600/50 transition-all duration-300 group" 
                 style={{ backgroundColor: 'var(--color-gray-dark)' }}>
                <span className="text-xl group-hover:scale-110 transition-transform">🐙</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center border border-red-900/30 hover:border-red-600/50 transition-all duration-300 group" 
                 style={{ backgroundColor: 'var(--color-gray-dark)' }}>
                <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center border border-red-900/30 hover:border-red-600/50 transition-all duration-300 group" 
                 style={{ backgroundColor: 'var(--color-gray-dark)' }}>
                <span className="text-xl group-hover:scale-110 transition-transform">🐦</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-red-400 mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors">Design Web</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Développement React</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Accompagnement</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">SEO & Performance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-red-400 mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>contact@karuworks.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Chat en direct</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Devis gratuit</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-red-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-500">
                © 2024 Karu Works. Tous droits réservés. 
                <span className="text-red-400 ml-2">Fait avec ❤️ et en mémoire de Karu.</span>
              </p>
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-red-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-red-400 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-red-400 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 