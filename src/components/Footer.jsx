import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Cita Previa', href: '#cita' },
  { label: 'Contacto', href: '#contacto' },
]

const services = [
  'Fisioterapia General',
  'Rehabilitación Deportiva',
  'Fisioterapia Neurológica',
  'Masaje Terapéutico',
  'Electroterapia',
  'Pilates Terapéutico',
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 80%, #0d9488 100%)',
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
                <MdHealthAndSafety className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-base leading-tight">Fisioterapia Armero</p>
                <p className="text-teal-400 text-xs">Ibi, Alicante</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Clínica de fisioterapia en el corazón de Ibi. Tu bienestar es nuestra prioridad.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: FaInstagram, label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400' },
                { icon: FaWhatsapp, label: 'WhatsApp', color: 'hover:bg-green-500' },
              ].map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/50 hover:text-teal-400 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#servicios')}
                    className="text-white/50 hover:text-teal-400 text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: 'C/ Ejemplo, 1 · 03440 Ibi, Alicante' },
                { icon: FaPhone, text: '965 XX XX XX' },
                { icon: FaWhatsapp, text: '6XX XXX XXX' },
                { icon: FaEnvelope, text: 'info@fisioterapiaarmero.es' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#cita')}
              className="mt-6 w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-teal-900/30"
            >
              Pedir Cita Online
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Fisioterapia Armero · Ibi, Alicante. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Política de Privacidad
            </button>
            <button className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Aviso Legal
            </button>
          </div>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Hecho con <FaHeart className="w-3 h-3 text-rose-500" /> en Ibi, Alicante
          </p>
        </div>
      </div>
    </footer>
  )
}
