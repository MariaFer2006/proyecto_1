const Learning = () => {
  const articles = [
    {
      title: 'ISO 9001',
      subtitle: 'Potencia la gestión del conocimiento con ISO 9001: 2026 en tu empresa',
      date: '29 Ago, 2025'
    },
    {
      title: 'ISO',
      subtitle: 'ISO 9001:2026 y pensamiento basado en riesgos para tu empresa',
      date: '25 Ago, 2025'
    },
    {
      title: 'Claves del liderazgo estratégico en la ISO 9001:2026',
      date: '25 Ago, 2025'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Aprende</h2>
        <p className="text-center text-gray-600 mb-12">
          kawak® está a la vanguardia de la innovación en sistemas de gestión rentables
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500"></div>
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">{article.title}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">{article.subtitle || article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
                <button className="mt-4 text-primary hover:text-secondary transition">
                  Leer artículo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning
