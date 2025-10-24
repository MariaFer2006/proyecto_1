import { Building2 } from 'lucide-react';

const Clients = () => {
  // Simulamos los logos con placeholders
  const clients = [
    { name: "Universidad 1" },
    { name: "Universidad 2" },
    { name: "Universidad 3" },
    { name: "Universidad 4" },
    { name: "Universidad 5" }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            Nuestros Clientes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              +900 Instituciones
            </span>{' '}
            confían en kawak®
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Universidades y colegios en toda Latinoamérica transformando su gestión de calidad
          </p>
        </div>

        {/* Clients Logos */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-blue-100 hover:border-blue-300 hover:scale-110 cursor-pointer"
              >
                {/* Placeholder para logo */}
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-blue-500 mx-auto mb-1 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Logo</span>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;