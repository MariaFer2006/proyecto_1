import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-kawak.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-primary text-white text-center py-2 text-sm">
        En lista de los mejores QMS según Gartner Digital Markets
      </div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <img src={logo} alt="Kawak Logo" className="h-10" />
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#soluciones" className="hover:text-purple-700">Soluciones</a>
            <a href="#industrias" className="hover:text-purple-700">Industrias</a>
            <a href="#testimonios" className="hover:text-purple-700">Testimonios</a>
            <a href="#precios" className="hover:text-purple-700">Precios</a>
            <a href="#blog" className="hover:text-purple-700">Blog</a>
            <a href="#nosotros" className="hover:text-purple-700">Nosotros</a>
          </nav>
          <a
            href="#contacto"
            className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition"
          >
            Solicitar demo
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
