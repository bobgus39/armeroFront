import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdHealthAndSafety, MdStar, MdVerified } from 'react-icons/md'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const highlights = [
  'Más de 10 años de experiencia en Ibi',
  'Fisioterapeutas colegiados y especializados',
  'Primera consulta completamente gratuita',
]

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0d3d38 50%, #0f766e 100%)' }}
    >
      {/* ── Fondo decorativo ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob izquierda */}
        <div
          className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)' }}
        />
        {/* Blob derecha */}
        <div
          className="absolute -right-40 top-10 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
        />
        {/* Grid sutil */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(20,184,166,0.15)',
                border: '1px solid rgba(45,212,191,0.35)',
                color: '#5eead4',
              }}
            >
              <MdHealthAndSafety className="w-4 h-4" />
              Clínica de Fisioterapia · Ibi, Alicante
            </motion.div>

            {/* Titular */}
            <motion.h1
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="font-extrabold leading-[1.12] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', color: '#ffffff' }}
            >
              Recupera tu{' '}
              <span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #2dd4bf 0%, #38bdf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                movilidad
              </span>
              <br />y vuelve a vivir sin dolor
            </motion.h1>

            {/* Descripción */}
            <motion.p
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Tratamientos fisioterapéuticos personalizados para cada paciente.
              Tu salud y bienestar son nuestra prioridad desde el primer día.
            </motion.p>

            {/* Checklist */}
            <motion.ul
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col gap-3 mb-10"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(45,212,191,0.2)', border: '1px solid rgba(45,212,191,0.5)' }}>
                    <FaCheckCircle className="w-3 h-3 text-teal-300" />
                  </div>
                  {h}
                </li>
              ))}
            </motion.ul>

            {/* Botones */}
            <motion.div
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('#cita')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                  boxShadow: '0 4px 24px rgba(20,184,166,0.45)',
                }}
              >
                Pedir Cita Gratis
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+34965000000"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
              >
                <FaPhone className="w-3.5 h-3.5" />
                Llamar ahora
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={5} initial="hidden" animate="visible" variants={fadeUp}
              className="flex items-center gap-4"
            >
              {/* Avatares */}
              <div className="flex -space-x-2">
                {['CA','LM','JP','AG'].map((init, i) => (
                  <div
                    key={init}
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      borderColor: '#0f172a',
                      background: ['#14b8a6','#0ea5e9','#8b5cf6','#f97316'][i],
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} className="w-3.5 h-3.5 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  +500 pacientes satisfechos en Ibi
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Columna derecha: tarjeta visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Anillo exterior animado */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{ border: '1px dashed rgba(45,212,191,0.25)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[350px] h-[350px] rounded-full"
              style={{ border: '1px solid rgba(56,189,248,0.15)' }}
            />

            {/* Círculo central */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(20,184,166,0.25) 0%, rgba(14,165,233,0.15) 100%)',
                border: '1.5px solid rgba(45,212,191,0.3)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 0 60px rgba(20,184,166,0.2), inset 0 0 40px rgba(20,184,166,0.05)',
              }}
            >
              {/* Cruz médica SVG */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-4 shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}
              >
                <svg viewBox="0 0 48 48" className="w-12 h-12">
                  <rect x="18" y="6" width="12" height="36" rx="3" fill="white" />
                  <rect x="6" y="18" width="36" height="12" rx="3" fill="white" />
                </svg>
              </div>
              <p className="text-white font-bold text-base">Fisioterapia Armero</p>
              <p className="text-teal-300 text-xs mt-1">Ibi · Alicante</p>

              {/* Puntos orbitales */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    background: ['#14b8a6','#0ea5e9','#8b5cf6','#f97316','#34d399'][i],
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 130}px - 5px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 130}px - 5px)`,
                    boxShadow: `0 0 10px ${['#14b8a6','#0ea5e9','#8b5cf6','#f97316','#34d399'][i]}80`,
                  }}
                />
              ))}
            </motion.div>

            {/* Tarjeta flotante: reseña */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-6 -left-4 bg-white rounded-2xl p-4 shadow-2xl w-56"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <MdStar key={i} className="w-3.5 h-3.5 text-amber-400" />)}
              </div>
              <p className="text-gray-700 text-xs leading-relaxed font-medium">
                "Me recuperé completamente. ¡El mejor equipo!"
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xs font-bold">M</div>
                <p className="text-teal-600 text-xs font-semibold">María G. · Ibi</p>
              </div>
            </motion.div>

            {/* Tarjeta flotante: colegiado */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            >
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
                <MdVerified className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold leading-tight">ICOFCV</p>
                <p className="text-gray-400 text-xs">Colegiados</p>
              </div>
            </motion.div>

            {/* Tarjeta flotante: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2.5"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
            >
              <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-gray-900 text-xs font-bold">Respuesta</p>
                <p className="text-green-600 text-xs font-semibold">En minutos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Ola de transición ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 90" className="w-full block" preserveAspectRatio="none" style={{ height: '90px' }}>
          <path
            d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
