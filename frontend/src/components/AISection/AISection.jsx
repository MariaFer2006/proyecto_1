import { Sparkles, FileText, TrendingUp, Zap, ArrowRight, Brain } from 'lucide-react';

const AISection = () => (
  <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden relative">
    {/* Animated background orbs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
    
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm font-bold border border-cyan-500/30 shadow-lg">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Inteligencia Artificial Institucional
          </div>
          
          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
              Innovación educativa impulsada por{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              El Sistema de Gestión de Calidad de la <strong>Universitaria de Colombia</strong> integra herramientas de Inteligencia Artificial para optimizar la toma de decisiones, automatizar procesos institucionales y fortalecer la mejora continua de la calidad académica.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="group flex items-start gap-3 p-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Automatización Documental</h4>
                <p className="text-sm text-slate-400">Genera y clasifica documentos institucionales con IA.</p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Análisis Predictivo</h4>
                <p className="text-sm text-slate-400">Detecta patrones en indicadores y anticipa desviaciones.</p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Recomendaciones Inteligentes</h4>
                <p className="text-sm text-slate-400">Sugerencias automáticas para planes de acción y mejora.</p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Optimización Continua</h4>
                <p className="text-sm text-slate-400">La IA aprende de los procesos y mejora su precisión.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Explorar aplicaciones de IA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
            >
              Ver demostración
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 relative">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
          
          {/* Image Container */}
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
              {/* AI Icon centerpiece */}
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 shadow-2xl flex items-center justify-center">
                  <Brain className="w-32 h-32 text-white animate-pulse" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-2xl shadow-2xl border border-green-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold text-white text-sm">IA Operativa 24/7</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl border border-cyan-500/50">
              <div className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">98%</div>
                <div className="text-xs text-slate-400 font-semibold">Precisión de análisis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AISection;
