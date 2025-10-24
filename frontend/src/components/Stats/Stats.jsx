import { Users, Globe, TrendingUp, Building2 } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, value: '+200K', label: 'Usuarios Activos', color: 'blue' },
    { icon: Globe, value: '+15', label: 'Países', color: 'cyan' },
    { icon: TrendingUp, value: '+15', label: 'Años de Experiencia', color: 'purple' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { 
        bg: 'from-cyan-500 to-blue-500', 
        text: 'text-cyan-600',
        shadow: 'hover:shadow-cyan-500/20'
      },
      blue: { 
        bg: 'from-blue-500 to-blue-600', 
        text: 'text-blue-600',
        shadow: 'hover:shadow-blue-500/20'
      },
      purple: { 
        bg: 'from-purple-500 to-blue-500', 
        text: 'text-purple-600',
        shadow: 'hover:shadow-purple-500/20'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const Icon = stat.icon;
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-5 shadow-md hover:shadow-xl ${colors.shadow} transition-all duration-500 hover:-translate-y-1 border border-gray-100`}
              >
                <div className={`inline-flex bg-gradient-to-br ${colors.bg} p-3 rounded-xl mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={`text-3xl font-black ${colors.text} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Stat */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-2xl p-6 shadow-xl overflow-hidden group hover:shadow-blue-500/50 transition-all duration-500">
          {/* Animated background orbs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-300 rounded-full mix-blend-overlay filter blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                +900
              </div>
              <div className="text-base text-white font-bold mb-0.5">
                Instituciones Educativas
              </div>
              <div className="text-sm text-white/90 font-light">
                confían en kawak® para su gestión de calidad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;