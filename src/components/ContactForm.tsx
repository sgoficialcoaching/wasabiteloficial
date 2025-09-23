import React, { useState } from 'react';
import { X, Phone, Mail, User, MapPin, Wifi, Smartphone, Shield, Check } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, selectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: selectedService,
    message: '',
    acceptPrivacy: false,
    acceptMarketing: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'fibra-600', label: 'Fibra 600M - 24,95€/mes', icon: <Wifi className="w-4 h-4" /> },
    { value: 'fibra-1000', label: 'Fibra 1000M - 32,95€/mes', icon: <Wifi className="w-4 h-4" /> },
    { value: 'movil-30gb', label: 'Móvil 30GB - 6,95€/mes', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'movil-120gb', label: 'Móvil 120GB - 10,95€/mes', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'movil-200gb', label: 'Móvil 200GB - 14,95€/mes', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'movil-300gb', label: 'Móvil 300GB - 19,95€/mes', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'movil-400gb', label: 'Móvil 400GB - 24,95€/mes', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'seguridad', label: 'Servicios de Seguridad', icon: <Shield className="w-4 h-4" /> },
    { value: 'internet-satelite', label: 'Internet Satélite - 35€/mes', icon: <Wifi className="w-4 h-4" /> },
    { value: 'tv-basica', label: 'MásMedia TV Básica - 30€/mes', icon: <Check className="w-4 h-4" /> },
    { value: 'tv-inicial', label: 'MásMedia TV Inicial - 50€/mes', icon: <Check className="w-4 h-4" /> },
    { value: 'tv-premium-60', label: 'MásMedia TV Premium - 60€/mes', icon: <Check className="w-4 h-4" /> },
    { value: 'tv-premium-90', label: 'MásMedia TV Premium Plus - 90€/mes', icon: <Check className="w-4 h-4" /> },
    { value: 'tv-total', label: 'MásMedia TV Total - 90€/mes', icon: <Check className="w-4 h-4" /> },
    { value: 'combo', label: 'Paquete Completo', icon: <Check className="w-4 h-4" /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    const selectedServiceLabel = services.find(s => s.value === formData.service)?.label || formData.service;
    
    let message = `🌐 *Nueva solicitud desde WasabiTel.com*\n\n`;
    message += `👤 *Datos del Cliente:*\n`;
    message += `• Nombre: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Teléfono: ${formData.phone}\n`;
    message += `• Dirección: ${formData.address}\n\n`;
    
    message += `📦 *Servicio de Interés:*\n`;
    message += `• ${selectedServiceLabel}\n\n`;
    
    if (formData.message.trim()) {
      message += `💬 *Mensaje Adicional:*\n`;
      message += `${formData.message}\n\n`;
    }
    
    message += `📊 *Información Técnica:*\n`;
    message += `• Fecha: ${date}\n`;
    message += `• Hora: ${time}\n`;
    message += `• IP: ${ip}\n`;
    message += `• Origen: wasabitel.com\n\n`;
    
    message += `✅ *Consentimientos:*\n`;
    message += `• Política de Privacidad: Aceptada\n`;
    message += `• Marketing: ${formData.acceptMarketing ? 'Aceptado' : 'No aceptado'}\n\n`;
    
    message += `🚀 *¡Contactar lo antes posible!*`;
    
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
      // Obtener IP del usuario
      const userIP = await getUserIP();
      
      // Formatear mensaje para WhatsApp
      const whatsappMessage = formatWhatsAppMessage(userIP);
      
      // Número de WhatsApp de WasabiTel
      const whatsappNumber = '34621508300'; // Formato: código país + número sin +
      
      // Crear URL de WhatsApp
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abrir WhatsApp en nueva ventana
      window.open(whatsappURL, '_blank');
      
      // Cerrar formulario
      onClose();
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
        acceptPrivacy: false,
        acceptMarketing: false
      });
      
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
    
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-orange-500 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
           type="button"
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-3xl font-bold mb-2">¡Contrata Ahora!</h2>
          <p className="text-lg opacity-90">Completa el formulario y te contactaremos por WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Datos Personales */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-teal-600" />
                Datos Personales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="600 123 456"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección de instalación *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder="Calle, número, ciudad, código postal"
                />
              </div>
            </div>

            {/* Servicio */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Wifi className="w-5 h-5 mr-2 text-orange-500" />
                Servicio de Interés
              </h3>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje adicional (opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                placeholder="Cuéntanos cualquier detalle adicional o pregunta que tengas..."
              />
            </div>

            {/* Políticas */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label className="text-sm text-gray-700">
                  He leído y acepto la{' '}
                  <a href="/politica-privacidad" target="_blank" className="text-teal-600 hover:text-teal-700 underline font-medium">
                    Política de Privacidad
                  </a>{' '}
                  y los{' '}
                  <a href="/terminos-condiciones" target="_blank" className="text-teal-600 hover:text-teal-700 underline font-medium">
                    Términos y Condiciones
                  </a>{' '}
                  de WasabiTel *
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="acceptMarketing"
                  checked={formData.acceptMarketing}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label className="text-sm text-gray-700">
                  Acepto recibir comunicaciones comerciales y ofertas especiales de WasabiTel
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptPrivacy}
              className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Abriendo WhatsApp...</span>
                </div>
              ) : (
                'Contactar por WhatsApp'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Al hacer clic, se abrirá WhatsApp con tus datos prellenados para contactar directamente 
              con nuestro equipo comercial de WasabiTel.
            </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;