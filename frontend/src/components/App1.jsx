import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Solutions from './components/Solutions/Solutions';
import Awards from './components/Awards/Awards';
import Clients from './components/Clients/Clients';
import AISection from './components/AISection/AISection';
import FAQ from './components/FAQ/FAQ';
import Partner from './components/Partner/Partner';
import Learning from './components/Learning/Learning';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Stats />
      <Solutions />
      <Awards />
      <Clients />
      <AISection />
      <FAQ />
      <Partner />
      <Learning />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;