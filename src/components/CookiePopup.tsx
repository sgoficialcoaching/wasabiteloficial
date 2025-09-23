import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check, Shield } from 'lucide-react';

const CookiePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    personalization: false,
    advertising: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('wasabitel-cookie-consent');
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      personalization: true,
      advertising: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('wasabitel-cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
    
    // Here you would typically initialize analytics, advertising scripts, etc.
    console.log('All cookies accepted:', allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      personalization: false,
      advertising: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('wasabitel-cookie-consent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
    
    console.log('Only necessary cookies accepted:', onlyNecessary);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('wasabitel-cookie-consent', JSON.stringify(savedPreferences));
    setIsVisible(false);
    
    console.log('Custom preferences saved:', savedPreferences);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const navigateToPolicy = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center p-4">
      <div className="bg-white rounded-t-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {!showSettings ? (
          // Main Cookie Notice
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">🍪 Cookies en WasabiTel</h2>
                  <p className="text-gray-600">Mejoramos tu experiencia con cookies</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio 
                y personalizar el contenido. Algunas cookies son esenciales para el funcionamiento del sitio, 
                mientras que otras nos ayudan a entender cómo interactúas con nosotros.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Tu privacidad es importante</h4>
                    <p className="text-amber-800 text-sm">
                      Puedes personalizar tus preferencias de cookies en cualquier momento. 
                      Las cookies técnicas son necesarias para el funcionamiento básico del sitio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick overview of cookie types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">🔧 Cookies Técnicas</h4>
                <p className="text-green-800 text-sm">Esenciales para el funcionamiento del sitio web.</p>
                <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                  SIEMPRE ACTIVAS
                </span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">📊 Cookies Analíticas</h4>
                <p className="text-blue-800 text-sm">Nos ayudan a mejorar el sitio web analizando su uso.</p>
                <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                  OPCIONAL
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Check className="w-5 h-5" />
                <span>Aceptar Todas</span>
              </button>
              
              <button
                onClick={handleRejectAll}
                className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <X className="w-5 h-5" />
                <span>Solo Necesarias</span>
              </button>
              
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Settings className="w-5 h-5" />
                <span>Personalizar</span>
              </button>
            </div>

            {/* Legal links */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Para más información, consulta nuestra{' '}
                <button 
                  onClick={() => navigateToPolicy('/cookies')}
                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                >
                  Política de Cookies
                </button>{' '}
                y{' '}
                <button 
                  onClick={() => navigateToPolicy('/politica-privacidad')}
                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                >
                  Política de Privacidad
                </button>
              </p>
            </div>
          </div>
        ) : (
          // Cookie Settings Panel
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Configuración de Cookies</h2>
                  <p className="text-gray-600">Personaliza tus preferencias</p>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-6 mb-8">
              {/* Necessary Cookies */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Cookies Técnicas</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-700 font-medium">Siempre activas</span>
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-green-800 text-sm">
                  Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar. 
                  Incluyen funciones como la gestión de sesiones, seguridad y navegación.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Cookie className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Cookies Analíticas</h3>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-blue-800 text-sm mb-2">
                  Nos ayudan a entender cómo los visitantes interactúan con el sitio web, 
                  recopilando información de forma anónima para mejorar nuestros servicios.
                </p>
                <p className="text-blue-700 text-xs">
                  Incluye: Google Analytics, mapas de calor, estadísticas de uso
                </p>
              </div>

              {/* Personalization Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Cookies de Personalización</h3>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('personalization')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.personalization ? 'bg-purple-500 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-purple-800 text-sm mb-2">
                  Permiten recordar tus preferencias y configuraciones para ofrecerte una experiencia 
                  más personalizada en futuras visitas.
                </p>
                <p className="text-purple-700 text-xs">
                  Incluye: preferencias de idioma, configuración de formularios, historial de servicios
                </p>
              </div>

              {/* Advertising Cookies */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Cookie className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-bold text-red-900">Cookies Publicitarias</h3>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('advertising')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.advertising ? 'bg-red-500 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-red-800 text-sm mb-2">
                  Se utilizan para mostrar publicidad relevante y medir la efectividad de las campañas publicitarias. 
                  También pueden ser utilizadas por terceros para crear perfiles de intereses.
                </p>
                <p className="text-red-700 text-xs">
                  Incluye: Google Ads, Facebook Pixel, remarketing, publicidad personalizada
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Check className="w-5 h-5" />
                <span>Guardar Preferencias</span>
              </button>
              
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <X className="w-5 h-5" />
                <span>Cancelar</span>
              </button>
            </div>

            {/* Legal links */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Puedes cambiar estas preferencias en cualquier momento. Para más información, consulta nuestra{' '}
                <button 
                  onClick={() => navigateToPolicy('/cookies')}
                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                >
                  Política de Cookies
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookiePopup;