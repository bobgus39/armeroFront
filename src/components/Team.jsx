import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const team = [
  {
    name: 'David Armero',
    role: 'Director & Fisioterapeuta',
    specialties: ['Fisioterapia Deportiva', 'Manual Avanzada'],
    color: 'from-teal-400 to-teal-600',
    initials: 'CA',
    colegiado: 'Col. nº 4.XXX',
  },
  {
    name: 'Laura Martínez',
    role: 'Fisioterapeuta Especialista',
    specialties: ['Neurológica', 'Suelo Pélvico'],
    color: 'from-sky-400 to-blue-600',
    initials: 'LM',
    colegiado: 'Col. nº 5.XXX',
  },
  {
    name: 'Javier Pérez',
    role: 'Fisioterapeuta & Osteópata',
    specialties: ['Osteopatía', 'Electroterapia'],
    color: 'from-violet-400 to-purple-600',
    initials: 'JP',
    colegiado: 'Col. nº 6.XXX',
  },
  {
    name: 'Ana González',
    role: 'Fisioterapeuta',
    specialties: ['Pilates Terapéutico', 'Pediatría'],
    color: 'from-rose-400 to-pink-600',
    initials: 'AG',
    colegiado: 'Col. nº 7.XXX',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
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
            Nuestro Equipo
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Profesionales a tu{' '}
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
              servicio
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Un equipo multidisciplinar de fisioterapeutas colegiados y en continua
            formación para ofrecerte la mejor atención posible.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={card}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
            >
              {/* Avatar area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />

                {/* Initials avatar */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white/25 border-4 border-white/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl font-extrabold">{member.initials}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight">{member.name}</h3>
                  <MdVerified className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-teal-600 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs mb-4">{member.colegiado}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.specialties.map((sp) => (
                    <span
                      key={sp}
                      className="bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full border border-teal-100"
                    >
                      {sp}
                    </span>
                  ))}
                </div>

                {/* Social */}
                <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                  <button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-gray-400 transition-colors duration-200">
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center text-gray-400 transition-colors duration-200">
                    <FaInstagram className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
