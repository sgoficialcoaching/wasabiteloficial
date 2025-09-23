import React, { useState } from 'react';
import { X, Shield, Phone, Mail, User, MapPin, Clock, AlertCircle } from 'lucide-react';

interface AlarmFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlarmForm: React.FC<AlarmFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    alarmType: '',
    currentSecurity: '',
    preferredTime: '',
    message: '',
    acceptPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const propertyTypes = [
    { value: 'casa', label: 'Casa unifamiliar' },
    { value: 'piso', label: 'Piso/Apartamento' },
    { value: 'local', label: 'Local comercial' },
    { value: 'oficina', label: 'Oficina' },
    { value: 'nave', label: 'Nave industrial' },
    { value: 'otro', label: 'Otro' }
  ];

  const alarmTypes = [
    { value: 'basica', label: 'Alarma Básica - 39€/mes' },
    { value: 'premium', label: 'Alarma Premium + Cámaras - 59€/mes' },
    { value: 'completa', label: 'Sistema Completo + Control Acceso - 79€/mes' },
    { value: 'personalizada', label: 'Solución Personalizada' }
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
    
    let message = `🚨 *SOLICITUD DE SISTEMA DE ALARMA*\n\n`;
    message += `👤 *Datos del Cliente:*\n`;
    message += `• Nombre: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Teléfono: ${formData.phone}\n`;
    message += `• Dirección: ${formData.address}\n\n`;
    
    message += `🏠 *Detalles de la Propiedad:*\n`;
    message += `• Tipo: ${propertyTypes.find(p => p.value === formData.propertyType)?.label || formData.propertyType}\n`;
    message += `• Sistema deseado: ${alarmTypes.find(a => a.value === formData.alarmType)?.label || formData.alarmType}\n`;
    
    if (formData.currentSecurity) {
      message += `• Seguridad actual: ${formData.currentSecurity}\n`;
    }
    
    if (formData.preferredTime) {
      message += `• Horario preferido: ${formData.preferredTime}\n`;
    }
    
    message += `\n`;
    
    if (formData.message.trim()) {
      message += `💬 *Información Adicional:*\n`;
      message += `${formData.message}\n\n`;
    }
    
    message += `📊 *Información Técnica:*\n`;
    message += `• Fecha: ${date}\n`;
    message += `• Hora: ${time}\n`;
    message += `• IP: ${ip}\n`;
    message += `• Origen: wasabitel.com/alarmas\n\n`;
    
    message += `🔒 *SOLICITUD PRIORITARIA DE ALARMA*\n`;
    message += `⚡ Contactar para presupuesto personalizado\n`;
    message += `🎯 Cliente interesado en sistema de seguridad`;
    
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
        email: '',
        phone: '',
        address: '',
        propertyType: '',
        alarmType: '',
        currentSecurity: '',
        preferredTime: '',
        message: '',
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
           type="button"
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Sistema de Alarma</h2>
              <p className="text-lg opacity-90">Protege tu hogar o negocio con la mejor tecnología</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Datos Personales */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-red-600" />
              Datos de Contacto
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Calle, número, ciudad, código postal"
              />
            </div>
          </div>

          {/* Detalles del Sistema */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-red-600" />
              Detalles del Sistema de Seguridad
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de propiedad *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona el tipo</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sistema de alarma deseado *
                </label>
                <select
                  name="alarmType"
                  value={formData.alarmType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona el sistema</option>
                  {alarmTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Tienes algún sistema de seguridad actualmente?
              </label>
              <input
                type="text"
                name="currentSecurity"
                value={formData.currentSecurity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Ej: Alarma básica, cámaras, ninguno..."
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horario preferido para la visita técnica
              </label>
              <input
                type="text"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Ej: Mañanas, tardes, fines de semana..."
              />
            </div>
          </div>

          {/* Información Adicional */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Información adicional o requisitos especiales
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
              placeholder="Cuéntanos cualquier detalle específico sobre tu propiedad o necesidades de seguridad..."
            />
          </div>

          {/* Políticas */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={formData.acceptPrivacy}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label className="text-sm text-gray-700">
                He leído y acepto la{' '}
                <a href="/politica-privacidad" target="_blank" className="text-red-600 hover:text-red-700 underline font-medium">
                  Política de Privacidad
                </a>{' '}
                y los{' '}
                <a href="/terminos-condiciones" target="_blank" className="text-red-600 hover:text-red-700 underline font-medium">
                  Términos y Condiciones
                </a>{' '}
                de WasabiTel. Autorizo el tratamiento de mis datos para la gestión de esta solicitud de presupuesto. *
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.acceptPrivacy}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Enviando solicitud...</span>
              </div>
            ) : (
              'Solicitar Presupuesto por WhatsApp'
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar, se abrirá WhatsApp con tu solicitud de presupuesto prellenada. 
            Nuestro equipo técnico te contactará en menos de 24 horas.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AlarmForm;