const faqs = [
  {
    question: '¿Qué tan fácil de usar es la interfaz kawak®? ¿Requiere muchos entrenamientos?',
    answer: 'La interfaz es intuitiva y amigable, diseñada para que cualquier usuario pueda adaptarse rápidamente sin necesidad de entrenamientos extensos.'
  },
  {
    question: '¿Cómo se integra este software con las herramientas que ya usamos?',
    answer: 'kawak® permite integraciones con CRM, finanzas, contabilidad, inventario, nómina y más, facilitando la interoperabilidad.'
  },
  {
    question: '¿Trabaja en la nube o es on-premise?',
    answer: 'kawak® es una solución en la nube, accesible desde cualquier lugar y dispositivo.'
  }
];

const FAQ = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">Preguntas frecuentes</h3>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-purple-700">{faq.question}</div>
            <div className="text-gray-700 mt-2">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;