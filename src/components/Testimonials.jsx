import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdStar, MdFormatQuote } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'María García',
    role: 'Paciente de Fisioterapia Deportiva',
    text: 'Llegué con una lesión de rodilla que me impedía correr. Después de 8 sesiones con Carlos, volví a mis entrenamientos en perfecto estado. El equipo es increíble, muy profesionales y con un trato excelente.',
    rating: 5,
    initials: 'MG',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Antonio Molina',
    role: 'Paciente de Fisioterapia General',
    text: 'Llevaba meses con dolor de espalda que no se me iba. Me recomendaron Fisioterapia Armero y en pocas sesiones noté una mejoría enorme. Ahora duermo bien y puedo trabajar sin molestias.',
    rating: 5,
    initials: 'AM',
    color: 'from-sky-400 to-blue-600',
  },
  {
    name: 'Carmen López',
    role: 'Paciente de Pilates Terapéutico',
    text: 'Las clases de Pilates con Ana son fantásticas. He mejorado mi postura, tengo menos dolores de cervicales y me encuentro mucho más fuerte. Lo recomiendo a todo el mundo.',
    rating: 5,
    initials: 'CL',
    color: 'from-violet-400 to-purple-600',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Paciente de Rehabilitación Post-operatoria',
    text: 'Tras mi operación de hombro, el equipo de Armero me ayudó a recuperar toda la movilidad. Seguimiento constante, ejercicios personalizados y siempre con una sonrisa.',
    rating: 5,
    initials: 'RS',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Isabel Fernández',
    role: 'Paciente de Electroterapia',
    text: 'Tenía una contractura cervical horrible. Con el tratamiento de electroterapia y masaje descontracturante, en solo tres sesiones el dolor desapareció. Muy contenta con el resultado.',
    rating: 5,
    initials: 'IF',
    color: 'from-rose-400 to-pink-600',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section id="testimonios" className="py-24 bg-gray-50 overflow-hidden">
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
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Lo que dicen{' '}
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
              nuestros pacientes
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            La experiencia de quienes ya confían en Fisioterapia Armero
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-gray-100 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <MdFormatQuote className="absolute top-6 right-8 w-16 h-16 text-teal-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <MdStar key={i} className="w-5 h-5 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{t.initials}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-base">{t.name}</p>
                  <p className="text-teal-600 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-teal-500'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-teal-300'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-200 shadow-sm"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-teal-500 border border-teal-500 flex items-center justify-center text-white hover:bg-teal-600 transition-all duration-200 shadow-sm"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All mini cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-10 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`rounded-2xl p-3 text-center transition-all duration-200 ${
                i === current
                  ? 'bg-teal-50 border-2 border-teal-300 shadow-md'
                  : 'bg-white border border-gray-100 hover:border-teal-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mx-auto mb-1`}>
                <span className="text-white font-bold text-xs">{t.initials}</span>
              </div>
              <p className="text-gray-700 text-xs font-medium leading-tight">{t.name.split(' ')[0]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
