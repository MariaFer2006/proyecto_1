import { ShieldCheck, CheckCircle, FileCheck, BarChart } from 'lucide-react';

const Compliance = () => {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Cumplimiento ISO 9001:2026",
      description: "Certificación vigente en gestión de calidad institucional.",
      color: "blue"
    },
    {
      icon: FileCheck,
      title: "Gestión Documental Estandarizada",
      description: "Control y trazabilidad total de documentos internos.",
      color: "cyan"
    },
    {
      icon: CheckCircle,
      title: "Auditorías Internas Automatizadas",
      description: "Verificación continua de procesos y mejora constante.",
      color: "blue"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Disponibilidad del Sistema" },
    { value: "100%", label: "Cumplimiento Normativo" },
    { value: "24/7", label: "Monitoreo y Soporte Activo" }
  ];

  const getColorClasses = (color) => {
    if (color === 'cyan') {
      return {
        bg: 'bg-cyan-100',
        text: 'text-cyan-600',
        gradient: 'from-cyan-500 to-blue-500'
      };
    }
    return {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500'
    };
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileCheck className="w-4 h-4" />
            Cumplimiento y Certificación
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Estándares de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Calidad y Seguridad
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Nuestro sistema garantiza el cumplimiento de normativas internacionales,
            promoviendo la mejora continua, la trazabilidad y la transparencia institucional.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Compliance Cards */}
          <div className="space-y-4">
            {standards.map((item, index) => {
              const colors = getColorClasses(item.color);
              const Icon = item.icon;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 flex items-center gap-4 p-4"
                >
                  {/* Icon */}
                  <div className={`${colors.bg} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>

                  {/* Gradient bar on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* Stats Panel */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Indicadores de Desempeño del Sistema
            </h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-medium">{stat.label}</span>
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/30">
                <BarChart className="w-4 h-4" />
                <span>Auditorías y Validaciones ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
