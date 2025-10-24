import { Award } from 'lucide-react';

const Hero = () => (
  <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 py-12 overflow-hidden">
    {/* Animated gradient orbs */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-white/30 shadow-lg">
          <Award className="w-4 h-4" />
          Sistema de Gestión de Calidad – Universitaria de Colombia
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg">
         
          <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent font-black text-5xl md:text-7xl drop-shadow-2xl">
            Universitaria de Colombia
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg mb-7 text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Plataforma institucional para la gestión de calidad educativa que automatiza procesos, fortalece la trazabilidad y mejora los estándares de acreditación universitaria.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#contacto"
            className="group bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
          >
            Solicitar demostración
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#beneficios"
            className="bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 border-2 border-white/30 text-sm shadow-lg"
          >
            Conocer más
          </a>
        </div>
      </div>
    </div>
    
    {/* Curved bottom edge */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#eff6ff" fillOpacity="0.3"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#eff6ff" fillOpacity="0.5"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#eff6ff" fillOpacity="1"></path>
      </svg>
    </div>
  </section>
);

export default Hero;
