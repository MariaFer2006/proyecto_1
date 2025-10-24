import { Settings, ShoppingCart, Users, Headphones, FileCheck, BarChart, Layers, FileText, Activity, Shield } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    { 
      icon: Settings, 
      title: 'Gestión de Procesos',
      description: 'Creación, configuración y control de procesos institucionales.',
      color: 'blue'
    },
    { 
      icon: Users, 
      title: 'Roles y Permisos',
      description: 'Control de acceso y asignación de responsabilidades por rol.',
      color: 'cyan'
    },
    { 
      icon: FileCheck, 
      title: 'Flujo de Aprobación',
      description: 'Ciclo de validaciones con control de tiempos y trazabilidad.',
      color: 'blue'
    },
    { 
      icon: Headphones, 
      title: 'Centro de Ayuda',
      description: 'Soporte interno y gestión de solicitudes o reaperturas.',
      color: 'cyan'
    },
    { 
      icon: FileText, 
      title: 'Gestión Documental',
      description: 'Control de versiones y asociación directa a los procesos.',
      color: 'blue'
    },
    { 
      icon: BarChart, 
      title: 'Indicadores',
      description: 'Métricas de desempeño e informes analíticos en tiempo real.',
      color: 'cyan'
    },
    { 
      icon: Activity, 
      title: 'Seguimiento y Trazabilidad',
      description: 'Registro histórico de acciones, aprobaciones y auditorías.',
      color: 'blue'
    },
    { 
      icon: Shield, 
      title: 'Seguridad y Acceso',
      description: 'Protección de la información y control de visibilidad por área.',
      color: 'cyan'
    },
    { 
      icon: ShoppingCart, 
      title: 'Gestión de Compras',
      description: 'Administración de proveedores y solicitudes de recursos.',
      color: 'blue'
    },
    { 
      icon: FileCheck, 
      title: 'Auditorías Internas',
      description: 'Verificación de cumplimiento y mejora continua de procesos.',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    if (color === 'cyan') {
      return {
        bg: 'bg-cyan-50',
        hover: 'hover:bg-cyan-100',
        text: 'text-cyan-700',
        border: 'border-cyan-200',
        icon: 'text-cyan-600'
      };
    }
    return {
      bg: 'bg-blue-50',
      hover: 'hover:bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: 'text-blue-600'
    };
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Módulos del Sistema de Gestión de Calidad
          </div>
        
         
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            const Icon = solution.icon;
            
            return (
              <div
                key={index}
                className={`group ${colors.bg} ${colors.hover} rounded-2xl p-5 transition-all duration-300 cursor-pointer border-2 ${colors.border} border-opacity-0 hover:border-opacity-100 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="bg-white/80 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-sm ${colors.text} mb-1`}>
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
