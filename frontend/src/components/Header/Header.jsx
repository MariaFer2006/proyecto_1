
import { useState } from 'react';
import { Menu, X, Award, LogIn, ChevronRight } from 'lucide-react';
import logo from '../../assets/images/logo-kawak.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#soluciones', label: 'Soluciones' },
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#recursos', label: 'Recursos' },
    { href: '#nosotros', label: 'Nosotros' }
  ];

  return (
    <>
      {/* Top Banner */}
      

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4 px-4">
            
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={logo} alt="Kawak Logo" className="h-10 hover:opacity-80 transition-opacity" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#demo"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors px-4 py-2"
              >
                Solicitar demo
              </a>
              <a
                href="http://localhost:5173/login"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                Iniciar Sesión
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
              <nav className="flex flex-col py-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-4 py-3 space-y-2">
                  <a
                    href="#demo"
                    className="block text-center text-blue-600 hover:text-blue-700 font-semibold py-2 px-4 border-2 border-blue-600 rounded-full transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Solicitar demo
                  </a>
                  <a
                    href="#login"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Iniciar Sesión
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;