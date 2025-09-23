import React from 'react';
import { Satellite, Globe, Shield } from 'lucide-react';

interface PremiumServicesProps {
  onContactClick: (service?: string) => void;
}

const PremiumServices: React.FC<PremiumServicesProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/30 to-green-100/30 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-sm font-bold mb-4 bounce-in pulse-glow">
            <Satellite className="w-4 h-4 mr-2" />
            Servicios Premium
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-gradient-teal-orange">Internet por Satélite</span> - Conectividad Rural
          </h3>
          <p className="text-gray-600 text-xl">Conectividad de alta velocidad donde otros no llegan</p>
        </div>

        <div className="bg-gradient-to-r from-teal-600 via-green-500 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl gradient-shift hover-lift card-premium">
          <div className="absolute inset-0 bg-black/10 particles-bg"></div>
          <div className="relative z-10">
            <h3 className="text-5xl font-bold mb-6 bounce-in">Internet por Satélite Rural</h3>
            <p className="text-2xl mb-8 opacity-90">Conectividad de alta velocidad donde otros no llegan</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm float-animation neon-teal">
                  <Satellite className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">COBERTURA COMPLETA</span>
                <span className="text-sm opacity-80">Llega donde la fibra no puede</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm float-animation neon-orange" style={{animationDelay: '1s'}}>
                  <Globe className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">200 MBPS</span>
                <span className="text-sm opacity-80">Velocidad garantizada</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm float-animation neon-teal" style={{animationDelay: '2s'}}>
                  <Shield className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">INSTALACIÓN INCLUIDA</span>
                <span className="text-sm opacity-80">Sin costes adicionales</span>
              </div>
            </div>
            
            <button 
              onClick={() => onContactClick('internet-satelite')}
              className="bg-white text-teal-600 hover:text-orange-500 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl btn-premium neon-orange shimmer-effect"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;