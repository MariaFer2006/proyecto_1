import { Handshake, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

const Partner = () => {
  const benefits = [
    { icon: TrendingUp, title: 'Mejora Continua', description: 'Fortalecimiento constante de procesos institucionales.' },
    { icon: Award, title: 'Capacitación Académica', description: 'Programas de formación en gestión y aseguramiento de la calidad.' },
    { icon: Users, title: 'Soporte Institucional', description: 'Acompañamiento técnico y asesoría especializada para los equipos de trabajo.' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Handshake className="w-4 h-4" />
                Programa de Colaboración Institucional
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Sé parte de la red de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  la Universitaria de Colombia
                </span>
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Únete a nuestro programa de aliados académicos y tecnológicos que impulsa la excelencia, la innovación educativa y el fortalecimiento de los procesos de gestión de calidad institucional.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Más información
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/50 hover:bg-white/30 transition-all duration-300"
                >
                  Conocer beneficios
                </a>
              </div>
            </div>

            {/* Benefits Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 flex flex-col items-center text-center min-w-[120px]"
                  >
                    <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-sm font-semibold mb-1">{benefit.title}</span>
                    <p className="text-xs text-white/70">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
