import React, { useState } from 'react';
import { X, Phone, User, Clock, MessageCircle } from 'lucide-react';

interface CallRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallRequestForm: React.FC<CallRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    reason: '',
    acceptPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    { value: 'manana', label: 'Mañana (9:00 - 14:00)' },
    { value: 'tarde', label: 'Tarde (14:00 - 18:00)' },
    { value: 'noche', label: 'Noche (18:00 - 21:00)' },
    { value: 'ahora', label: 'Lo antes posible' },
    { value: 'flexible', label: 'Horario flexible' }
  ];

  const callReasons = [
    { value: 'fibra', label: 'Información sobre Fibra Óptica' },
    { value: 'movil', label: 'Planes Móviles' },
    { value: 'seguridad', label: 'Sistemas de Seguridad' },
    { value: 'combo', label: 'Paquetes Combinados' },
    { value: 'soporte', label: 'Soporte Técnico' },
    { value: 'facturacion', label: 'Consulta de Facturación' },
    { value: 'otro', label: 'Otro motivo' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const getUserIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'No disponible';
    }
  };

  const formatWhatsAppMessage = (ip: string): string => {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES');
    const time = now.toLocaleTimeString('es-ES');
    
    let message = `📞 *SOLICITUD DE LLAMADA URGENTE*\n\n`;
    message += `👤 *Datos del Cliente:*\n`;
    message += `• Nombre: ${formData.name}\n`;
    message += `• Teléfono: ${formData.phone}\n\n`;
    
    message += `⏰ *Detalles de la Llamada:*\n`;
    message += `• Horario preferido: ${timeSlots.find(t => t.value === formData.preferredTime)?.label || formData.preferredTime}\n`;
    message += `• Motivo: ${callReasons.find(r => r.value === formData.reason)?.label || formData.reason}\n\n`;
    
    message += `📊 *Información Técnica:*\n`;
    message += `• Fecha solicitud: ${date}\n`;
    message += `• Hora solicitud: ${time}\n`;
    message += `• IP: ${ip}\n`;
    message += `• Origen: wasabitel.com\n\n`;
    
    message += `🚨 *SOLICITUD PRIORITARIA*\n`;
    message += `⚡ El cliente solicita ser contactado LO ANTES POSIBLE\n`;
    message += `📱 Llamar al número indicado según disponibilidad\n`;
    message += `🎯 Lead caliente - Respuesta inmediata requerida`;
    
    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptPrivacy) {
      alert('Debes aceptar la política de privacidad para continuar');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const userIP = await getUserIP();
      const whatsappMessage = formatWhatsAppMessage(userIP);
      const whatsappNumber = '34621508300';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappURL, '_blank');
      onClose();
      
      setFormData({
        name: '',
        phone: '',
        preferredTime: '',
        reason: '',
        acceptPrivacy: false
      });
      
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
    
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto my-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Solicitar Llamada</h2>
              <p className="text-lg opacity-90">Te llamamos gratis en minutos</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Datos básicos */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <User className="w-5 h-5 mr-2 text-green-600" />
              Datos de Contacto
            </h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="600 123 456"
                />
              </div>
            </div>
          </div>

          {/* Detalles de la llamada */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Detalles de la Llamada
            </h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuándo prefieres que te llamemos? *
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona horario</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Sobre qué quieres información? *
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona el motivo</option>
                  {callReasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Políticas */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={formData.acceptPrivacy}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label className="text-sm text-gray-700">
                Acepto la{' '}
                <a href="/politica-privacidad" target="_blank" className="text-green-600 hover:text-green-700 underline font-medium">
                  Política de Privacidad
                </a>{' '}
                y autorizo a WasabiTel a contactarme telefónicamente. *
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.acceptPrivacy}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Enviando solicitud...</span>
              </div>
            ) : (
              'Solicitar Llamada Ahora'
            )}
          </button>

          <div className="text-center space-y-1">
            <p className="text-sm text-gray-600 font-medium">
              ⚡ Respuesta en menos de 15 minutos
            </p>
            <p className="text-xs text-gray-500">
              Te contactaremos por WhatsApp y después te llamaremos al número indicado
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallRequestForm;