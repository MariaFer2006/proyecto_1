import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Solutions from './components/Solutions/Solutions';

import Clients from './components/Clients/Clients';
import AISection from './components/AISection/AISection';
import FAQ from './components/FAQ/FAQ';
import Partner from './components/Partner/Partner';
import Learning from './components/Learning/Learning';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Awards from './components/Awards/Awards';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Solutions />
      
      
      <AISection />
      <FAQ />
      <Partner />
      <Learning />
      <Awards />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;