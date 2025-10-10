import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";
// ❌ No existe client5.png, así que comenta o elimina esta línea
// import client5 from "../../assets/images/client5.png";
import client5 from "../../assets/images/client5.png"

const Clients = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Nuestros clientes</h3>
        <p className="text-gray-600 mb-8">+900 empresas han confiado en kawak®</p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          <img src={client1} alt="Cliente 1" className="h-16 object-contain grayscale hover:grayscale-0 transition" />
          <img src={client2} alt="Cliente 2" className="h-16 object-contain grayscale hover:grayscale-0 transition" />
          <img src={client3} alt="Cliente 3" className="h-16 object-contain grayscale hover:grayscale-0 transition" />
          <img src={client4} alt="Cliente 4" className="h-16 object-contain grayscale hover:grayscale-0 transition" />
          <img src={client5} alt="Cliente 5" className="h-16 object-contain grayscale hover:grayscale-0 transition" />
        </div>
      </div>
    </section>
  );
};

export default Clients;