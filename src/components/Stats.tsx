import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Clientes Satisfechos',
      color: 'text-blue-600',
      bgColor: 'from-blue-500 to-blue-700'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Años de Experiencia',
      color: 'text-green-600',
      bgColor: 'from-green-500 to-green-700'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Soporte Técnico',
      color: 'text-orange-600',
      bgColor: 'from-orange-500 to-orange-700'
    },
    {
      icon: MapPin,
      number: '100%',
      label: 'Cobertura Nacional',
      color: 'text-purple-600',
      bgColor: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-teal-50/30 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/10 to-orange-100/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Números que nos <span className="text-gradient-teal-orange">Respaldan</span>
          </h3>
          <p className="text-gray-600 text-xl">La confianza de miles de clientes nos avala</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 card-premium glass-effect hover-lift">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-teal float-animation`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-gradient-teal-orange mb-3">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;