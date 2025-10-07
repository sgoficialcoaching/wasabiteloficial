import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo Section - Exactly like WasabiEnergía */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer scale-105 transition-all duration-300">
              {/* Simple glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-xl blur-lg opacity-100 transition-all duration-300 animate-pulse"></div>
              
              {/* Animated rotating glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/10 via-orange-400/10 to-teal-400/10 rounded-xl blur-xl opacity-80 animate-spin" style={{animationDuration: '8s'}}></div>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-teal-300/5 to-orange-300/5 rounded-xl blur-md opacity-60" style={{animation: 'float 4s ease-in-out infinite'}}></div>
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl px-1 py-0 sm:px-2 sm:py-0 border border-teal-400/50 transition-all duration-300 shadow-lg">
                <img 
                  src="/Diseño sin título (19) copy.png" 
                  alt="WasabiTel Logo"
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain transition-all duration-300 brightness-110 relative z-10"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation - Exactly like WasabiEnergía style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('fibra')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Fibra Óptica</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('movil')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Móvil 5G</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('seguridad')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Seguridad</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>
          
          {/* CTA Button - Exactly like WasabiEnergía */}
          <div className="hidden lg:block">
            <button 
              onClick={() => onContactClick()} 
              className="relative px-6 py-2.5 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contratar Ahora</span>
              </span>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-white hover:text-teal-400 transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => scrollToSection('fibra')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Fibra Óptica</span>
              </button>
              <button 
                onClick={() => scrollToSection('movil')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Móvil 5G</span>
              </button>
              <button 
                onClick={() => scrollToSection('seguridad')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Seguridad</span>
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Contacto</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <button 
                onClick={() => onContactClick()} 
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                Contratar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </header>
  );
};

export default Header;