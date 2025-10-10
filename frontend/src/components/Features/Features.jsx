import { Shield, Users, Workflow, FileText, TrendingUp, ClipboardCheck, Network } from 'lucide-react'

const Features = () => {
  const features = [
    { icon: Shield, title: 'Seguridad de la Información' },
    { icon: Users, title: 'Riesgos y Oportunidades' },
    { icon: Workflow, title: 'flow - Flujos de trabajo' },
    { icon: FileText, title: 'Gestión Documental' },
    { icon: TrendingUp, title: 'Mejoramiento Continuo' },
    { icon: ClipboardCheck, title: 'Auditorías e Inspecciones' },
    { icon: Network, title: 'Contexto de la Organización' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 hover:bg-purple-50 rounded-lg transition cursor-pointer border-2 border-transparent hover:border-primary">
              <feature.icon className="w-12 h-12 text-primary mb-3" />
              <h3 className="text-sm font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features