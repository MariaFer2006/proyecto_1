const AISection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">Soluciones con IA</h2>
            <p className="text-xl text-gray-700 mb-6">
              kawak® con su acelerada innovación viene incorporando inteligencia artificial para 
              apoyar la creación de documentos, análisis de causas, planes de acción y mucho más 
              que simplifique y potencie la gestión
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition">
              Conocer usos →
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection
