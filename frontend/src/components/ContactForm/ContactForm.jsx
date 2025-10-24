import { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, User, Building, Mail, Phone, Briefcase, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    telefono: '',
    rol: '',
    necesidades: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: '',
        rol: '',
        necesidades: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      alert('Error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Estamos aquí para ayudarte
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Exploremos juntos tus necesidades
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              No queremos venderte un software, queremos estar seguros que entendemos tus necesidades 
              y si estamos en la capacidad de atenderlas y agregarte el valor suficiente para que tú realmente ganes
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 text-lg">
                  Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Déjanos tus datos</h3>
                  <p className="text-gray-600">Completa el formulario y nos pondremos en contacto</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Apellido */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre*
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Apellido*
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          placeholder="Tu apellido"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de la empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Universidad o institución"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Correo corporativo*
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu.email@empresa.com"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Número de teléfono*
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+57 300 123 4567"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rol */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ¿Cuál es tu rol laboral?*
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="rol"
                        value={formData.rol}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none bg-white"
                        required
                      >
                        <option value="">Selecciona tu rol</option>
                        <option value="Rector">Rector/a</option>
                        <option value="Vicerrector">Vicerrector/a</option>
                        <option value="Decano">Decano/a</option>
                        <option value="Director">Director/a de Calidad</option>
                        <option value="Coordinador">Coordinador/a</option>
                        <option value="Analista">Analista de Calidad</option>
                        <option value="Consultor">Consultor/a</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  {/* Necesidades */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ¿Cuáles son las principales necesidades y problemas que desean resolver?*
                    </label>
                    <textarea
                      name="necesidades"
                      value={formData.necesidades}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Cuéntanos sobre los desafíos que enfrenta tu institución..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Asesoría personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;