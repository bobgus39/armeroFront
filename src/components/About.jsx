import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { MdHealthAndSafety, MdVerified } from 'react-icons/md'

const values = [
  { title: 'Evaluación personalizada', desc: 'Cada paciente recibe un diagnóstico y plan de tratamiento único.' },
  { title: 'Tecnología avanzada', desc: 'Equipamiento de última generación para mejores resultados.' },
  { title: 'Seguimiento continuo', desc: 'Te acompañamos en todo tu proceso de recuperación.' },
  { title: 'Resultados probados', desc: 'Más de 500 pacientes recuperados con éxito.' },
]

export default function About() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{
                background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #2dd4bf 100%)',
              }}
            >
              {/* Clinic illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mx-auto mb-4">
                    <MdHealthAndSafety className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Fisioterapia Armero</p>
                  <p className="text-teal-200 text-sm">Ibi, Alicante</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/10 border border-white/20" />
              <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-white/10 border border-white/20" />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Floating certified badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                <MdVerified className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Colegiados</p>
                <p className="text-gray-500 text-xs">ICOFCV Certificados</p>
              </div>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring' }}
              className="absolute -top-4 -left-4 bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl p-4 shadow-xl"
            >
              <p className="text-3xl font-extrabold">10+</p>
              <p className="text-teal-200 text-xs font-medium">Años de experiencia</p>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-teal-200">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Comprometidos con{' '}
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
                tu recuperación
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              La Clínica de Fisioterapia Armero nació con el objetivo de ofrecer
              atención fisioterapéutica de la más alta calidad a los vecinos de Ibi
              y toda la comarca de L'Alcoià.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Nuestro equipo de fisioterapeutas colegiados aplica las técnicas más
              actualizadas y eficaces para que recuperes tu bienestar en el menor
              tiempo posible, siempre con un trato cercano y personalizado.
            </p>

            {/* Values list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{v.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#cita')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
            >
              Conoce nuestro equipo
              <FaArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
