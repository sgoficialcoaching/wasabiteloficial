import React from 'react';
import { Check, Smartphone } from 'lucide-react';

interface MobilePlansProps {
  onContactClick: (service?: string) => void;
}

const MobilePlans: React.FC<MobilePlansProps> = ({ onContactClick }) => {
  const mobilePlans = [
    {
      name: 'Móvil Básico',
      price: '15,95€',
      features: [
        '20GB de datos',
        'Llamadas ilimitadas',
        'SMS ilimitados',
        'Roaming UE incluido',
        'Red 5G'
      ],
      serviceId: 'movil-basico',
      color: 'orange'
    },
    {
      name: 'Móvil Premium',
      price: '25,95€',
      features: [
        '50GB de datos',
        'Llamadas ilimitadas',
        'SMS ilimitados',
        'Roaming UE incluido',
        'Red 5G',
        'Netflix incluido'
      ],
      serviceId: 'movil-premium',
      color: 'orange'
    }
  ];

  return (
    <section id="movil" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-red-100/30 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-bold mb-4 bounce-in pulse-glow">
            <Smartphone className="w-4 h-4 mr-2" />
            Conectividad móvil
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-gradient-teal-orange">Móvil</span> - Planes de Telefonía
          </h3>
          <p className="text-gray-600 text-xl">La mejor cobertura y velocidad para tu móvil</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {mobilePlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-110 ring-1 ring-gray-200 card-premium glass-effect hover-lift bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 relative overflow-hidden gradient-shift">
                <div className="absolute inset-0 bg-black/10 particles-bg"></div>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 float-animation neon-orange">
                  <Smartphone className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-3 relative z-10">{plan.name}</h3>
                <div className="text-6xl font-bold mb-2 relative z-10">{plan.price}</div>
                <div className="text-xl opacity-90 font-medium relative z-10">/mes</div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => onContactClick(plan.serviceId)} 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl btn-premium neon-orange shimmer-effect"
                >
                  Contratar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilePlans;