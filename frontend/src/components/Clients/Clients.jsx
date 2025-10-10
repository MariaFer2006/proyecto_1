//import client1 from '../../assets/images/client1.png';
//import client2 from '../../assets/images/client2.png';
//import client3 from '../../assets/images/client3.png';
//import client4 from '../../assets/images/client4.png';
//import client5 from '../../assets/images/client5.png';

const Clients = () => (
  <section className="py-10 bg-gray-50 text-center">
    <h3 className="text-2xl font-bold mb-6">Nuestros clientes</h3>
    <div className="flex flex-wrap justify-center gap-10 items-center">
      {/* <img src={client1} alt="Cliente 1" className="h-12" /> */}
      {/* <img src={client2} alt="Cliente 2" className="h-12" /> */}
      {/* <img src={client3} alt="Cliente 3" className="h-12" /> */}
      {/* <img src={client4} alt="Cliente 4" className="h-12" /> */}
      <img src={client5} alt="Cliente 5" className="h-12" />
    </div>
  </section>
);

export default Clients;