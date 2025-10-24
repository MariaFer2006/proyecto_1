import { Shield, Users, Workflow, FileText, TrendingUp, ClipboardCheck, Network, Sparkles, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: Shield, 
      title: 'Seguridad de la Información',
      color: 'blue'
    },
    { 
      icon: Users, 
      title: 'Riesgos y Oportunidades',
      color: 'cyan'
    },
    { 
      icon: Workflow, 
      title: 'Flujos de Trabajo',
      color: 'blue'
    },
    { 
      icon: FileText, 
      title: 'Gestión Documental',
      color: 'cyan'
    },
    { 
      icon: TrendingUp, 
      title: 'Mejoramiento Continuo',
      color: 'blue'
    },
    { 
      icon: ClipboardCheck, 
      title: 'Auditorías e Inspecciones',
      color: 'cyan'
    },
    { 
      icon: Network, 
      title: 'Contexto Organizacional',
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    if (color === 'cyan') {
      return {
        bg: 'bg-cyan-50',
        icon: 'text-cyan-600',
        hover: 'hover:bg-cyan-100',
        border: 'hover:border-cyan-400',
        ring: 'group-hover:ring-cyan-400'
      };
    }
    return {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      hover: 'hover:bg-blue-100',
      border: 'hover:border-blue-400',
      ring: 'group-hover:ring-blue-400'
    };
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Módulos Integrados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Funcionalidades{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sistema integral para gestionar todos los aspectos de calidad en tu institución
          </p>
        </div>

        {/* Features Grid - Horizontal on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className={`relative w-full aspect-square ${colors.bg} ${colors.hover} rounded-2xl p-6 transition-all duration-300 cursor-pointer border-2 border-transparent ${colors.border} hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center`}>
                  {/* Icon container with ring effect */}
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 ring-4 ring-transparent ${colors.ring}`}>
                    <Icon className={`w-10 h-10 ${colors.icon} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Title below the card */}
                <h3 className="mt-4 text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors px-2">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom section with stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                ¿Listo para transformar tu gestión?
              </h3>
              <p className="text-white/90 text-lg">
                Descubre cómo kawak® puede optimizar cada proceso
              </p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explorar funcionalidades
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;