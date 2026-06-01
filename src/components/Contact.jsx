import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaSpinner, FaCheckCircle } from 'react-icons/fa'
import axios from 'axios'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Dirección',
    value: 'C/ Ejemplo, 1 · 03440 Ibi, Alicante',
    href: 'https://maps.google.com/?q=Ibi,Alicante',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: FaPhone,
    title: 'Teléfono',
    value: '965 XX XX XX',
    href: 'tel:+34965000000',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: '6XX XXX XXX',
    href: 'https://wa.me/34600000000',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'info@fisioterapiaarmero.es',
    href: 'mailto:info@fisioterapiaarmero.es',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setStatus('loading')
    try {
      await axios.post('/api/contacto', form)
      setStatus('success')
      setForm({ nombre: '', email: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-teal-200">
            Contacto
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Estamos aquí{' '}
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              para ayudarte
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Visítanos en nuestra clínica en Ibi o escríbenos. Estaremos encantados de atenderte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-72">
              <iframe
                title="Ubicación Fisioterapia Armero - Ibi, Alicante"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12516.123456789!2d-0.5618!3d38.6233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623a0b6d9b7a7b%3A0x123456789!2sIbi%2C%20Alicante!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 group"
                  >
                    <div className={`w-9 h-9 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">{c.title}</p>
                      <p className="text-gray-900 text-sm font-semibold leading-tight mt-0.5">{c.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10"
                >
                  <FaCheckCircle className="w-14 h-14 text-teal-500 mx-auto mb-4" />
                  <h4 className="text-gray-900 font-bold text-lg mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-500 text-sm">Te responderemos en menos de 24 horas.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-teal-600 text-sm font-medium hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handle}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handle}
                      required
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 resize-none transition-colors duration-200"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">
                      Error al enviar. Llámanos al 965 XX XX XX.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <><FaSpinner className="w-4 h-4 animate-spin" /> Enviando...</>
                    ) : (
                      'Enviar mensaje'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
