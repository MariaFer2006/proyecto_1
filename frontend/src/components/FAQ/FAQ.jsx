import { useState } from 'react';
import { ChevronDown, HelpCircle, Check, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: '¿El Sistema de Gestión de Calidad es fácil de usar? ¿Requiere capacitación?',
    answer:
      'Sí, la plataforma cuenta con una interfaz intuitiva y moderna, diseñada para que cualquier usuario institucional pueda adaptarse rápidamente. Además, se ofrecen capacitaciones virtuales, guías interactivas y soporte técnico continuo para garantizar el uso correcto del sistema.'
  },
  {
    question: '¿El sistema se integra con otras plataformas institucionales?',
    answer:
      'Sí. El Sistema de Gestión de Calidad de la Universitaria de Colombia permite integraciones con sistemas académicos, financieros, de recursos humanos y correo institucional. Su API facilita la interoperabilidad con otras herramientas utilizadas por la institución.'
  },
  {
    question: '¿Dónde está alojado el sistema y cómo se accede?',
    answer:
      'El sistema opera completamente en la nube, permitiendo acceso remoto desde cualquier dispositivo conectado a internet. Su arquitectura garantiza disponibilidad constante, actualizaciones automáticas y respaldo de datos institucionales.'
  },
  {
    question: '¿Qué medidas de seguridad se implementan?',
    answer:
      'La seguridad es una prioridad. Se emplean cifrado de datos, autenticación multifactor, roles y permisos por área, copias de seguridad automáticas y cumplimiento con las políticas de protección de datos de la institución. Solo los usuarios autorizados pueden acceder a la información correspondiente a su rol.'
  },
  {
    question: '¿Cuánto tiempo toma la implementación del sistema?',
    answer:
      'El proceso de implementación varía según las necesidades de cada dependencia. En promedio, la puesta en marcha puede realizarse entre 3 y 6 semanas, incluyendo capacitación, migración de datos y configuración de procesos específicos.'
  },
  {
    question: '¿Qué tipo de soporte ofrece la institución?',
    answer:
      'El sistema cuenta con un Centro de Ayuda integrado para registrar solicitudes, reportar incidencias y recibir orientación. Además, el equipo de soporte institucional ofrece atención por correo, chat y sesiones personalizadas para los líderes de proceso.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm text-blue-700 px-5 py-2.5 rounded-full text-sm font-bold mb-5 border border-blue-200 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Centro de Ayuda Institucional
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Preguntas{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas rápidas sobre el uso, integración y soporte del Sistema de Gestión de Calidad de la Universitaria de Colombia.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden ${
                openIndex === idx
                  ? 'border-blue-400 ring-4 ring-blue-100'
                  : 'border-gray-100 hover:border-blue-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      openIndex === idx
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 scale-110'
                        : 'bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:scale-105'
                    }`}
                  >
                    {openIndex === idx ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-base md:text-lg pr-4 transition-colors ${
                        openIndex === idx ? 'text-blue-700' : 'text-gray-900'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx
                      ? 'bg-blue-100 rotate-180'
                      : 'bg-gray-100 group-hover:bg-blue-50'
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-[88px]">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
