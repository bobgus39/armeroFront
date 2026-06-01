import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa'
import axios from 'axios'

const services = [
  'Fisioterapia General',
  'Rehabilitación Deportiva',
  'Fisioterapia Neurológica',
  'Masaje Terapéutico',
  'Electroterapia',
  'Pilates Terapéutico',
]

const timeslots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00',
]

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  fecha: '',
  hora: '',
  nota: '',
}

export default function Appointment() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es obligatorio'
    if (!form.email.includes('@')) e.email = 'Email no válido'
    if (form.telefono.length < 9) e.telefono = 'Teléfono no válido'
    if (!form.servicio) e.servicio = 'Selecciona un servicio'
    if (!form.fecha) e.fecha = 'Selecciona una fecha'
    if (!form.hora) e.hora = 'Selecciona una hora'
    return e
  }

  const handle = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      await axios.post('/api/citas', form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const today = new Date().toISOString().split('T')[0]

  if (status === 'success') {
    return (
      <section id="cita" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex w-24 h-24 rounded-full bg-teal-50 items-center justify-center mb-6"
          >
            <FaCheckCircle className="w-12 h-12 text-teal-500" />
          </motion.div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">¡Cita solicitada!</h3>
          <p className="text-gray-500 text-lg mb-8">
            Te contactaremos en breve para confirmar tu cita. También recibirás un email de confirmación.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Pedir otra cita
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="cita" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-teal-200">
              Cita Previa
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Reserva tu{' '}
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
                primera sesión
              </span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Reserva tu cita de forma rápida y sencilla. La primera consulta
              es completamente gratuita y sin compromiso.
            </p>

            {/* Schedule */}
            <div className="space-y-4">
              {[
                { day: 'Lunes - Viernes', hours: '09:00 – 13:00 · 16:00 – 20:00' },
                { day: 'Sábados', hours: '09:00 – 13:00' },
                { day: 'Domingos', hours: 'Cerrado' },
              ].map((h) => (
                <div key={h.day} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm">{h.day}</span>
                  <span className={`text-sm font-semibold ${h.hours === 'Cerrado' ? 'text-red-400' : 'text-teal-600'}`}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-teal-50 rounded-2xl border border-teal-100">
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-teal-800 font-semibold text-sm">¿Necesitas cita urgente?</p>
                  <p className="text-teal-600 text-sm mt-1">Llámanos directamente al <strong>965 XX XX XX</strong> y te atendemos de inmediato.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={submit}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solicitar cita online</h3>

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo *</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handle}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 ${errors.nombre ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono *</label>
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handle}
                    placeholder="6XX XXX XXX"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 ${errors.telefono ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="tu@email.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Servicio *</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handle}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white ${errors.servicio ? 'border-red-300' : 'border-gray-200'}`}
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
                {errors.servicio && <p className="text-red-500 text-xs mt-1">{errors.servicio}</p>}
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Fecha *</label>
                  <input
                    type="date"
                    name="fecha"
                    value={form.fecha}
                    onChange={handle}
                    min={today}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 ${errors.fecha ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.fecha && <p className="text-red-500 text-xs mt-1">{errors.fecha}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Hora *</label>
                  <select
                    name="hora"
                    value={form.hora}
                    onChange={handle}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 bg-white ${errors.hora ? 'border-red-300' : 'border-gray-200'}`}
                  >
                    <option value="">Selecciona hora</option>
                    {timeslots.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  {errors.hora && <p className="text-red-500 text-xs mt-1">{errors.hora}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Notas adicionales</label>
                <textarea
                  name="nota"
                  value={form.nota}
                  onChange={handle}
                  placeholder="Cuéntanos brevemente tu problema o lesión..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 resize-none transition-colors duration-200"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">
                  Ocurrió un error. Por favor llámanos al 965 XX XX XX.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><FaSpinner className="w-4 h-4 animate-spin" /> Enviando...</>
                ) : (
                  <><FaCalendarAlt className="w-4 h-4" /> Solicitar Cita Gratis</>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                Al enviar aceptas nuestra{' '}
                <button className="text-teal-500 hover:underline">política de privacidad</button>.
                No spam, prometido.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
