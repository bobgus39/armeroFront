import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaTrophy, FaHeart, FaClock } from 'react-icons/fa'

const stats = [
  { icon: FaClock, number: 10, suffix: '+', label: 'Años de experiencia', desc: 'Cuidando tu salud' },
  { icon: FaUsers, number: 500, suffix: '+', label: 'Pacientes tratados', desc: 'Y contando' },
  { icon: FaHeart, number: 98, suffix: '%', label: 'Tasa de satisfacción', desc: 'Avalan nuestro trabajo' },
  { icon: FaTrophy, number: 6, suffix: '', label: 'Especialidades', desc: 'Tratamientos disponibles' },
]

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 60%, #0d9488 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Números que hablan por sí solos
          </h2>
          <p className="text-teal-300 text-base">
            La confianza de nuestros pacientes es nuestro mayor logro
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="rounded-3xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-teal-300" />
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-1">
                    <Counter target={s.number} suffix={s.suffix} inView={inView} />
                  </div>
                  <div className="text-teal-300 font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs">{s.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
