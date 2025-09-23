import React from 'react';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle, Clock, Euro, Shield, Phone, Mail } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Enero 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Aceptación */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Aceptación de los Términos</h2>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed mb-4">
                Al contratar cualquier servicio de WasabiTel, aceptas estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ La contratación implica la aceptación expresa de estos términos<br/>
                  ✓ Los términos son vinculantes desde el momento de la contratación<br/>
                  ✓ Cualquier modificación será notificada con antelación
                </p>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Descripción de Servicios</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">🌐 Servicios de Fibra Óptica</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Conexión a internet de alta velocidad
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Velocidades simétricas garantizadas
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Router WiFi incluido
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Instalación profesional gratuita
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Soporte técnico 24/7
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Llamadas nacionales ilimitadas
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-orange-900 mb-3">📱 Servicios Móviles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Planes de datos móviles flexibles
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cobertura nacional 4G/5G
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sin compromiso de permanencia
                    </li>
                  </ul>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      GB acumulables mes a mes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Llamadas y SMS ilimitados
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Portabilidad gratuita
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-red-900 mb-3">🛡️ Servicios de Seguridad</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sistemas de alarma conectada
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Videovigilancia HD
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control de acceso inteligente
                    </li>
                  </ul>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Central receptora de alarmas
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App móvil de control
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mantenimiento incluido
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Facturación */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Euro className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Facturación y Pagos</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-green-900 mb-3">💳 Condiciones de Pago</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Facturación mensual por adelantado
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Domiciliación bancaria obligatoria
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      IVA incluido en todos los precios
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Factura electrónica disponible
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-green-900 mb-3">⚠️ Gestión de Impagos</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Suspensión del servicio tras 15 días
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gastos de gestión de impago: 15€
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gastos de reactivación: 30€
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Posible inclusión en ficheros de morosos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Permanencia */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Permanencia y Cancelación</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-purple-900 mb-3">🌐 Servicios de Fibra</h3>
                <div className="bg-purple-100 p-4 rounded-lg mb-4">
                  <p className="text-purple-800 font-medium mb-2">
                    Permanencia mínima: 12 meses
                  </p>
                  <p className="text-purple-800 text-sm">
                    En caso de baja anticipada, se aplicará una penalización equivalente a las mensualidades 
                    restantes con un máximo de 150€.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-purple-900">Excepciones sin penalización:</p>
                    <ul className="text-purple-800 mt-1">
                      <li>• Mudanza fuera de zona de cobertura</li>
                      <li>• Incumplimiento grave por nuestra parte</li>
                      <li>• Fallecimiento del titular</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-purple-900">Proceso de baja:</p>
                    <ul className="text-purple-800 mt-1">
                      <li>• Comunicación con 30 días de antelación</li>
                      <li>• Devolución de equipos en buen estado</li>
                      <li>• Liquidación de facturas pendientes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-teal-900 mb-3">📱 Servicios Móviles</h3>
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <p className="text-teal-800 font-medium mb-2">
                    Sin permanencia - Máxima flexibilidad
                  </p>
                  <p className="text-teal-800 text-sm">
                    Puedes cancelar tu servicio en cualquier momento con un preaviso de 30 días 
                    sin penalizaciones adicionales.
                  </p>
                </div>
                <div className="text-sm text-teal-800">
                  <p className="font-medium">Condiciones de baja:</p>
                  <ul className="mt-1">
                    <li>• Comunicación previa de 30 días</li>
                    <li>• Portabilidad gratuita a otro operador</li>
                    <li>• Sin costes de cancelación</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Responsabilidades */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Responsabilidades y Limitaciones</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-red-900 mb-3">👤 Responsabilidades del Cliente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Uso responsable de los servicios
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cumplimiento de la legislación vigente
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Protección de credenciales de acceso
                    </li>
                  </ul>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mantenimiento básico de equipos
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comunicación de incidencias
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Actualización de datos personales
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">🏢 Limitación de Responsabilidad de WasabiTel</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Exclusiones:</strong> WasabiTel no se hace responsable de daños indirectos, 
                    pérdida de datos, lucro cesante o daños consecuenciales derivados del uso de nuestros servicios.
                  </p>
                  <p>
                    <strong>Limitaciones técnicas:</strong> Los servicios están sujetos a las limitaciones 
                    técnicas de las redes de telecomunicaciones y pueden verse afectados por factores externos.
                  </p>
                  <p>
                    <strong>Fuerza mayor:</strong> No nos hacemos responsables de interrupciones causadas 
                    por eventos de fuerza mayor, catástrofes naturales o actos de terceros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Uso aceptable */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Política de Uso Aceptable</h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">✅ Usos Permitidos</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Navegación web personal y profesional
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Streaming de contenido legal
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Videoconferencias y teletrabajo
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Descargas legales
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-red-900 mb-3">❌ Usos Prohibidos</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Actividades ilegales o fraudulentas
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Distribución de malware o virus
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Spam o comunicaciones masivas
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ataques a otros sistemas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Modificaciones */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Modificaciones de los Términos</h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="space-y-4">
                <p className="text-yellow-800">
                  WasabiTel se reserva el derecho de modificar estos términos y condiciones. 
                  Los cambios serán notificados con al menos 30 días de antelación.
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Proceso de notificación:</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Email a la dirección registrada</li>
                    <li>• Comunicación en el área de cliente</li>
                    <li>• Publicación en el sitio web</li>
                    <li>• SMS en caso de cambios importantes</li>
                  </ul>
                </div>
                <p className="text-yellow-800 text-sm">
                  Si no estás de acuerdo con las modificaciones, puedes cancelar el servicio 
                  sin penalización durante los 30 días posteriores a la notificación.
                </p>
              </div>
            </div>
          </section>

          {/* Legislación */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">8. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Estos términos y condiciones se rigen por la legislación española, específicamente:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ley General de Telecomunicaciones
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ley General de Defensa de Consumidores
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Código Civil Español
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Normativa europea aplicable
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Para la resolución de cualquier controversia, las partes se someten expresamente 
                  a los Juzgados y Tribunales de Madrid, renunciando a cualquier otro fuero.
                </p>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Contacto para Consultas Legales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email Legal</div>
                    <div className="text-gray-600">legal@wasabitel.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Atención al Cliente</div>
                    <div className="text-gray-600">621 50 83 00</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Estos términos y condiciones están sujetos a la legislación española. 
              Para cualquier disputa, serán competentes los juzgados de Madrid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;