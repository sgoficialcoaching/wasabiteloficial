import React from 'react';
import { ArrowRight, Wifi, Smartphone } from 'lucide-react';

interface HeroProps {
  onContactClick: (service?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-teal-50/30 to-orange-50/30 pt-48 pb-20 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-orange-100/20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="slide-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Conecta tu <span className="text-gradient-teal-orange font-extrabold">futuro</span><br />
              con <span className="text-gradient-teal-orange font-extrabold">WasabiTel</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed hover:text-gray-700 transition-colors duration-300">
              Descubre la nueva generación de telecomunicaciones con fibra 
              óptica de última generación, planes móviles flexibles y servicios de 
              seguridad integrales. Tu conexión perfecta te espera.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => onContactClick()} className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl btn-premium neon-teal shimmer-effect">
                <span>Explorar Tarifas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 glass-effect hover-lift">
                <span>▶</span>
                <span>Ver Demo</span>
              </button>
            </div>
          </div>
          
          <div className="relative float-animation">
            {/* Browser mockup */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto relative hover-lift card-premium glass-effect">
              {/* Browser dots */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="ml-auto text-xs text-gray-400 font-mono">wasabitel.com</div>
              </div>
              
              {/* Fibra plan */}
              <div className="bg-gradient-to-r from-teal-100 to-teal-50 rounded-xl p-4 mb-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shimmer-effect">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-teal-600 animate-pulse" />
                    <div>
                      <div className="font-semibold text-gray-900">Fibra 1000M</div>
                      <div className="text-sm text-gray-600">Velocidad simétrica</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient-teal-orange">32,95€</div>
                    <div className="text-sm text-gray-500">/mes</div>
                  </div>
                </div>
              </div>
              
              {/* Móvil plan */}
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shimmer-effect">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-orange-600 animate-pulse" />
                    <div>
                      <div className="font-semibold text-gray-900">Móvil 120GB</div>
                      <div className="text-sm text-gray-600">Sin compromiso</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient-teal-orange">10,95€</div>
                    <div className="text-sm text-gray-500">/mes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;