export default function Footer() {
  return (
    <footer className="py-20 bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-2xl">🐰</span>
                <div className="absolute inset-0 rounded-full border border-orange-400/30"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              </div>
              <span className="text-3xl font-light text-white tracking-wide">
                Karu
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-extralight">
                  Works
                </span>
              </span>
            </div>
            <p className="text-gray-300 font-light leading-relaxed mb-8 max-w-md text-lg">
              L'agence digitale qui transforme vos idées en expériences web extraordinaires. 
              Avec la passion et le courage de Karu, nous créons des sites qui marquent les esprits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 flex items-center justify-center transition-all duration-300 group hover:bg-gray-700/50"> 
                <span className="text-xl text-gray-400 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300">🐙</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 flex items-center justify-center transition-all duration-300 group hover:bg-gray-700/50"> 
                <span className="text-xl text-gray-400 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300">💼</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 flex items-center justify-center transition-all duration-300 group hover:bg-gray-700/50"> 
                <span className="text-xl text-gray-400 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300">🐦</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium text-orange-400 mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300 font-light">
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Design Web</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Développement React</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">E-commerce</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Accompagnement</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">SEO & Performance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium text-orange-400 mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300 font-light">
              <li>
                <div className="flex items-center space-x-3 group">
                  <span className="text-orange-400 group-hover:scale-110 transition-transform duration-300">📧</span>
                  <span className="group-hover:text-orange-400 transition-colors duration-300">contact@karuworks.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3 group">
                  <span className="text-orange-400 group-hover:scale-110 transition-transform duration-300">💬</span>
                  <span className="group-hover:text-orange-400 transition-colors duration-300">Chat en direct</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3 group">
                  <span className="text-orange-400 group-hover:scale-110 transition-transform duration-300">🎯</span>
                  <span className="group-hover:text-orange-400 transition-colors duration-300">Devis gratuit</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-gray-400 font-light">
                © 2024 Karu Works. Tous droits réservés. 
                <span className="text-orange-400 ml-2 font-medium">Fait avec ❤️ et en mémoire de Karu.</span>
              </p>
            </div>
            
            <div className="flex space-x-8 text-gray-400 font-light">
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Mentions légales</a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Politique de confidentialité</a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 