const Hero = () => (
  <section className="bg-gradient-to-r from-purple-200 to-purple-100 py-20 text-center">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Cómo <span className="text-purple-700">kawak®</span> te ayuda a potenciar la gestión de tu compañía
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-700">
        Soluciones especializadas que facilitan la gestión documental, fortalecen la seguridad y optimizan el compromiso del talento humano.
      </p>
      <a
        href="#contacto"
        className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-purple-700 transition"
      >
        Solicitar una demo
      </a>
    </div>
  </section>
);

export default Hero;
