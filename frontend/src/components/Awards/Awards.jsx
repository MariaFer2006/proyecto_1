const Awards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Reconocimientos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Premio 1</h3>
            <p className="text-gray-600">Descripción del reconocimiento</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Premio 2</h3>
            <p className="text-gray-600">Descripción del reconocimiento</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Premio 3</h3>
            <p className="text-gray-600">Descripción del reconocimiento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;