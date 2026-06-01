import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MdSportsMartialArts, MdSelfImprovement, MdElectricBolt,
  MdAccessibility, MdFitnessCenter, MdLocalHospital
} from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'

const services = [
  {
    icon: MdLocalHospital,
    title: 'Fisioterapia General',
    desc: 'Tratamiento integral para dolores musculares, articulares y recuperación de lesiones mediante técnicas manuales y ejercicio terapéutico.',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    accent: 'text-teal-600',
  },
  {
    icon: MdSportsMartialArts,
    title: 'Rehabilitación Deportiva',
    desc: 'Recuperación rápida y efectiva de lesiones deportivas. Vuelve a tu actividad física con más fuerza y seguridad.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    accent: 'text-sky-600',
  },
  {
    icon: MdAccessibility,
    title: 'Fisioterapia Neurológica',
    desc: 'Tratamientos especializados para pacientes con afecciones neurológicas como ictus, esclerosis múltiple o Parkinson.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    accent: 'text-violet-600',
  },
  {
    icon: MdSelfImprovement,
    title: 'Masaje Terapéutico',
    desc: 'Masajes descontracturantes, drenaje linfático y técnicas de relajación profunda para aliviar tensiones y mejorar la circulación.',
    color: 'from-orange-400 to-orange-500',
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
  },
  {
    icon: MdElectricBolt,
    title: 'Electroterapia',
    desc: 'TENS, ultrasonidos, magnetoterapia y otras corrientes eléctricas para acelerar la recuperación y reducir el dolor.',
    color: 'from-yellow-500 to-amber-500',
    bg: 'bg-yellow-50',
    accent: 'text-yellow-600',
  },
  {
    icon: MdFitnessCenter,
    title: 'Pilates Terapéutico',
    desc: 'Ejercicios de Pilates adaptados para fortalecer el core, mejorar la postura y prevenir lesiones de columna.',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="py-24 bg-white overflow-hidden">
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
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Tratamientos para{' '}
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              cada necesidad
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de tratamientos fisioterapéuticos adaptados
            a tus necesidades específicas con la máxima calidad y profesionalidad.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <button
                  onClick={() => scrollTo('#cita')}
                  className={`flex items-center gap-1.5 text-sm font-semibold ${s.accent} group-hover:gap-3 transition-all duration-200`}
                >
                  Reservar sesión <FaArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5 text-sm">
            ¿No encuentras lo que buscas? Contáctanos y te asesoramos.
          </p>
          <button
            onClick={() => scrollTo('#cita')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
          >
            Pedir Primera Cita Gratis
            <FaArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
