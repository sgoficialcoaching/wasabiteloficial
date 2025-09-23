import React from 'react';
import { Shield, Zap, HeadphonesIcon, Award } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Máxima Seguridad',
      description: 'Protección avanzada para todos tus datos y comunicaciones',
      color: 'text-blue-600',
      bgGradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Zap,
      title: 'Velocidad Garantizada',
      description: 'Conexiones ultrarrápidas que nunca te dejarán esperando',
      color: 'text-yellow-600',
      bgGradient: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte 24/7',
      description: 'Atención técnica especializada disponible las 24 horas',
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-green-700'
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Servicios de la más alta calidad con tecnología de vanguardia',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/20 to-orange-50/20 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-orange-100/20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="text-gradient-teal-orange">WasabiTel</span>?
          </h3>
          <p className="text-gray-600 text-xl">Descubre las ventajas que nos hacen únicos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 group card-premium glass-effect hover-lift bounce-in" style={{animationDelay: `${index * 0.15}s`}}>
              <div className={`w-20 h-20 bg-gradient-to-br ${reason.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-teal float-animation`}>
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gradient-teal-orange transition-all duration-300">{reason.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl gradient-shift hover-lift">
            <div className="absolute inset-0 bg-black/10 particles-bg"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 bounce-in">¿Listo para la mejor conexión?</h3>
              <p className="text-xl mb-8 opacity-90">Únete a los miles de clientes satisfechos que ya disfrutan de nuestros servicios</p>
              <button className="bg-white text-teal-600 hover:text-orange-500 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl btn-premium neon-orange shimmer-effect">
                Ver Todas las Ofertas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;