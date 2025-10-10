import { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    telefono: '',
    rol: '',
    necesidades: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData)
      alert('¡Formulario enviado exitosamente!')
      setFormData({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: '',
        rol: '',
        necesidades: ''
      })
    } catch (error) {
      alert('Error al enviar el formulario')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Exploremos juntos tus necesidades
          </h2>
          <p className="text-white text-center mb-8 opacity-90">
            No queremos venderte un software, queremos estar seguros que entendemos tus necesidades 
            y si estamos en la capacidad de atenderlas y agregarte el valor suficiente para que tú realmente ganes
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Dejanos tus datos</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre*</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Apellido*</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Nombre de la empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Correo corporativo*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo corporativo"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Número de teléfono*</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+57"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">¿Cuál es tu rol laboral?*</label>
                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Gerente">Gerente</option>
                  <option value="Director">Director</option>
                  <option value="Coordinador">Coordinador</option>
                  <option value="Analista">Analista</option>
                  <option value="Consultor">Consultor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ¿Cuáles son las principales necesidades y problemas que desean resolver?*
                </label>
                <textarea
                  name="necesidades"
                  value={formData.necesidades}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-secondary transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm