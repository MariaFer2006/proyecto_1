import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Learning = () => (
  <section className="py-20 bg-gradient-to-b from-white to-blue-50">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" />
          Centro de Conocimiento Institucional
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Formación y Buenas Prácticas en Gestión de Calidad
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explora recursos, guías y artículos especializados sobre normativas ISO, mejora continua y fortalecimiento institucional en la Universitaria de Colombia.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                ISO 9001
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
              Implementación de la ISO 9001:2026 en la gestión académica universitaria
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>10 Oct, 2025</span>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
            >
              Leer artículo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </article>

        {/* Card 2 */}
        <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                Mejora Continua
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
              Estrategias de mejora continua en procesos académicos y administrativos
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>3 Oct, 2025</span>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
            >
              Leer artículo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </article>

        {/* Card 3 */}
        <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
          <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Liderazgo
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
              Liderazgo transformador en la gestión de calidad universitaria
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>1 Oct, 2025</span>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
            >
              Leer artículo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Ver todos los recursos
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

export default Learning;
