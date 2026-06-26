import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMenu,
  FiMessageCircle,
  FiMonitor,
  FiShoppingBag,
  FiStar,
  FiX,
  FiZap,
} from 'react-icons/fi'

const whatsappNumber = '5217713948794'

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hola, me interesa conocer los servicios de Codelynx.'
)}`

const services = [
  {
    title: 'Páginas web',
    description:
      'Sitios profesionales, adaptables a celular y diseñados para convertir visitas en clientes.',
    icon: FiGlobe,
    tag: 'Presencia digital',
    color: 'bg-pink-100 text-[#df4f91]',
  },
  {
    title: 'Tiendas en línea',
    description:
      'Catálogos, productos, pedidos, pagos y herramientas para vender en internet.',
    icon: FiShoppingBag,
    tag: 'Ventas digitales',
    color: 'bg-purple-100 text-[#68469a]',
  },
  {
    title: 'Sistemas a medida',
    description:
      'Plataformas administrativas creadas específicamente para los procesos de tu negocio.',
    icon: FiCode,
    tag: 'Desarrollo personalizado',
    color: 'bg-pink-100 text-[#df4f91]',
  },
  {
    title: 'Punto de venta',
    description:
      'Ventas, inventario, tickets, clientes, cajas, usuarios y reportes para tu operación.',
    icon: FiMonitor,
    tag: 'Control operativo',
    color: 'bg-purple-100 text-[#68469a]',
  },
  {
    title: 'Dashboards y datos',
    description:
      'Indicadores visuales para analizar ventas, resultados y oportunidades de mejora.',
    icon: FiBarChart2,
    tag: 'Análisis de datos',
    color: 'bg-pink-100 text-[#df4f91]',
  },
  {
    title: 'Automatizaciones',
    description:
      'Procesos más rápidos, menos tareas manuales y menos errores en tu empresa.',
    icon: FiZap,
    tag: 'Procesos eficientes',
    color: 'bg-purple-100 text-[#68469a]',
  },
  {
    title: 'Chatbots',
    description:
      'Asistentes conversacionales para atender clientes, resolver dudas y captar prospectos.',
    icon: FiMessageCircle,
    tag: 'Atención automática',
    color: 'bg-pink-100 text-[#df4f91]',
  },
  {
    title: 'Bases de datos',
    description:
      'Información centralizada, estructurada y segura para mejorar el control del negocio.',
    icon: FiDatabase,
    tag: 'Información organizada',
    color: 'bg-purple-100 text-[#68469a]',
  },
  {
    title: 'Animación 3D',
    description:
      'Modelos, visualizaciones y piezas gráficas con profundidad para presentar productos o ideas.',
    icon: FiLayers,
    tag: 'Visualización digital',
    color: 'bg-pink-100 text-[#df4f91]',
  },
  {
    title: 'Desarrollo de videojuegos',
    description:
      'Experiencias interactivas, prototipos y proyectos digitales orientados al entretenimiento.',
    icon: FiCode,
    tag: 'Experiencias interactivas',
    color: 'bg-purple-100 text-[#68469a]',
  },
]

const solutions = [
  {
    title: 'Farmacias y puntos de venta',
    text: 'Inventario, ventas, cajas, reportes, clientes, tickets y control operativo.',
  },
  {
    title: 'Clínicas y consultorios',
    text: 'Expedientes, citas, recetas, servicios, historial clínico y administración.',
  },
  {
    title: 'Comercios locales',
    text: 'Catálogos, pedidos, ventas, clientes, pagos y presencia digital.',
  },
  {
    title: 'Empresas',
    text: 'Sistemas administrativos, paneles internos, reportes y automatización.',
  },
]

const process = [
  {
    number: '01',
    title: 'Escuchamos tu idea',
    text: 'Entendemos qué necesitas, qué problema existe y qué objetivo quieres alcanzar.',
  },
  {
    number: '02',
    title: 'Definimos la solución',
    text: 'Proponemos funciones, alcance, tiempos aproximados y una cotización clara.',
  },
  {
    number: '03',
    title: 'Desarrollamos por etapas',
    text: 'Construimos el proyecto mostrando avances y validando cada módulo contigo.',
  },
  {
    number: '04',
    title: 'Entregamos y acompañamos',
    text: 'Publicamos, capacitamos y damos seguimiento para que aproveches la solución.',
  },
]

const faqs = [
  {
    question: '¿Trabajan con negocios pequeños?',
    answer:
      'Sí. Podemos desarrollar desde una página web profesional hasta sistemas completos para ventas, inventario, clientes o procesos internos.',
  },
  {
    question: '¿La solución se adapta a mi negocio?',
    answer:
      'Sí. Codelynx busca crear soluciones a la medida. Primero revisamos tu operación y después definimos las funciones necesarias.',
  },
  {
    question: '¿Mi página funcionará en celular?',
    answer:
      'Sí. Todos los sitios y paneles están pensados para verse correctamente en computadora, tablet y celular.',
  },
  {
    question: '¿Pueden mejorar un sistema que ya tengo?',
    answer:
      'Sí. Podemos revisar plataformas existentes, corregir problemas, modernizar interfaces o agregar módulos nuevos.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function BrandName() {
  return (
    <div className="leading-none">
      <p className="text-[1.7rem] font-black tracking-[-0.09em] text-[#2b183c]">
        Code<span className="text-[#f0569e]">lynx</span>
      </p>

      <p className="mt-1 text-[0.52rem] font-black tracking-[0.28em] text-[#de4e91]">
        SOLUCIONES DIGITALES
      </p>
    </div>
  )
}

function ServiceCollage() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[590px]">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/55 blur-3xl" />
      <div className="absolute right-0 top-10 h-44 w-44 rounded-full bg-purple-200/45 blur-3xl" />

      <motion.article
        animate={{ y: [0, -10, 0], rotate: [-5, -3, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-2 z-10 w-[145px] overflow-hidden rounded-[1.7rem] bg-[#f49ac1] p-4 shadow-xl shadow-pink-200 sm:w-[178px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#2b183c]/15 text-xl text-[#432656]">
          <FiCode />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Desarrollo de videojuegos
        </p>

        <div className="mt-4 rounded-2xl bg-[#2b183c]/85 p-2">
          <div className="h-9 rounded-lg bg-pink-300/80" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/50" />
        </div>
      </motion.article>

      <motion.article
        animate={{ y: [0, 9, 0], rotate: [5, 3, 5] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-3 z-10 w-[145px] overflow-hidden rounded-[1.7rem] bg-[#f6afcb] p-4 shadow-xl shadow-pink-200 sm:w-[178px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#2b183c]/15 text-xl text-[#432656]">
          <FiLayers />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Animación 3D
        </p>

        <div className="mt-4 flex h-16 items-center justify-center rounded-2xl bg-[#2b183c]/85">
          <div className="h-9 w-9 rotate-12 rounded-lg bg-pink-200 shadow-lg" />
        </div>
      </motion.article>

      <motion.article
        animate={{ x: [0, -5, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-[195px] z-20 w-[145px] overflow-hidden rounded-[1.7rem] bg-[#f3a1c5] p-4 shadow-xl shadow-pink-200 sm:top-[230px] sm:w-[178px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/55 text-xl text-[#df4f91]">
          <FiGlobe />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Páginas web
        </p>

        <div className="mt-4 rounded-2xl bg-white p-2">
          <div className="h-2 rounded-full bg-pink-300" />
          <div className="mt-2 h-8 rounded-xl bg-pink-100" />
        </div>
      </motion.article>

      <motion.article
        animate={{ x: [0, 5, 0], rotate: [6, 4, 6] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-[195px] z-20 w-[145px] overflow-hidden rounded-[1.7rem] bg-[#f2a0c3] p-4 shadow-xl shadow-pink-200 sm:top-[230px] sm:w-[178px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/55 text-xl text-[#df4f91]">
          <FiMessageCircle />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Chatbots
        </p>

        <div className="mt-4 rounded-2xl bg-white p-2">
          <div className="ml-auto h-5 w-4/5 rounded-xl bg-pink-200" />
          <div className="mt-2 h-5 w-3/5 rounded-xl bg-purple-100" />
        </div>
      </motion.article>

      <motion.article
        animate={{ y: [0, 8, 0], rotate: [-3, -1, -3] }}
        transition={{ duration: 5.3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-5 z-10 w-[150px] overflow-hidden rounded-[1.7rem] bg-[#ef9fc1] p-4 shadow-xl shadow-pink-200 sm:left-8 sm:w-[182px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#2b183c]/15 text-xl text-[#432656]">
          <FiShoppingBag />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Punto de venta
        </p>

        <div className="mt-4 rounded-2xl bg-[#2b183c]/85 p-2">
          <div className="h-7 rounded-lg bg-pink-200" />
          <div className="mt-2 h-6 w-10 rounded bg-white/30" />
        </div>
      </motion.article>

      <motion.article
        animate={{ y: [0, -7, 0], rotate: [3, 1, 3] }}
        transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-5 z-10 w-[150px] overflow-hidden rounded-[1.7rem] bg-[#efaecc] p-4 shadow-xl shadow-pink-200 sm:right-8 sm:w-[182px] sm:p-5"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/55 text-xl text-[#df4f91]">
          <FiBarChart2 />
        </div>

        <p className="mt-4 min-h-[2.3rem] break-words text-[0.78rem] font-black leading-[1.1] text-[#2b183c] sm:text-[0.95rem]">
          Análisis de datos
        </p>

        <div className="mt-4 flex h-14 items-end gap-2 rounded-2xl bg-white p-3">
          <div className="h-5 flex-1 rounded-t bg-pink-200" />
          <div className="h-8 flex-1 rounded-t bg-pink-400" />
          <div className="h-4 flex-1 rounded-t bg-purple-200" />
          <div className="h-10 flex-1 rounded-t bg-pink-300" />
        </div>
      </motion.article>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 z-30 flex h-[215px] w-[205px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-5 shadow-2xl shadow-pink-300/60 sm:h-[245px] sm:w-[235px] sm:p-6"
      >
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#df4f91]">
            Codelynx
          </p>

          <h2 className="mt-3 max-w-[190px] break-words text-[2rem] font-black leading-[0.87] tracking-tight text-[#3b2450] sm:max-w-[220px] sm:text-[1.5rem]">
            Crea,
            <br />
            <br />
            vende y
            <br />
            <br />
            automatiza.
          </h2>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-black text-[#d94786]"
        >
          Hablemos
          <FiArrowRight />
        </a>
      </motion.div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="bg-[#fffafd] text-[#2b183c]">
      <nav className="sticky top-0 z-50 border-b border-pink-100/80 bg-[#fffafd]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            <BrandName />
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-[#62526d] md:flex">
            <a href="#servicios" className="transition hover:text-[#e25091]">
              Servicios
            </a>

            <a href="#soluciones" className="transition hover:text-[#e25091]">
              Soluciones
            </a>

            <a href="#proceso" className="transition hover:text-[#e25091]">
              Proceso
            </a>

            <a
              href="#contacto"
              className="rounded-full bg-[#2b183c] px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#47245e]"
            >
              Contáctanos
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#f06ba7] to-[#d94786] text-xl text-white shadow-lg shadow-pink-200 transition hover:scale-105 active:scale-95 md:hidden"
            aria-label="Abrir menú"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[60] bg-[#2b183c]/40 backdrop-blur-sm md:hidden"
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex min-h-screen w-[88%] max-w-[390px] flex-col overflow-hidden bg-[#fff8fc] shadow-2xl"
            >
              <div className="relative overflow-hidden border-b border-pink-100 bg-gradient-to-br from-[#ffe0ef] via-[#fff6fb] to-[#f4dcff] px-7 py-8">
                <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-pink-300/45 blur-2xl" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <BrandName />

                    <p className="mt-5 max-w-[210px] text-sm font-bold leading-6 text-[#725d79]">
                      Tecnología y desarrollo digital para hacer crecer tu negocio.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-pink-300 bg-white text-xl text-[#d94786]"
                    aria-label="Cerrar menú"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-7 py-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#df4f91]">
                  Explora Codelynx
                </p>

                <nav className="mt-6 flex flex-col gap-3">
                  {[
                    ['Servicios', '#servicios'],
                    ['Soluciones', '#soluciones'],
                    ['Cómo trabajamos', '#proceso'],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-5 py-5 text-lg font-black text-[#2b183c] shadow-sm"
                    >
                      {label}

                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-pink-100 text-[#df4f91] transition group-hover:translate-x-1">
                        <FiArrowRight />
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pt-10">
                  <a
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#f05ca4] to-[#d94786] px-6 py-4 text-lg font-black text-white shadow-xl shadow-pink-200"
                  >
                    Solicitar cotización
                    <FiArrowRight />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-3 rounded-2xl border-2 border-pink-200 bg-white px-6 py-4 font-black text-[#d94786]"
                  >
                    <FiMessageCircle className="text-xl" />
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="inicio"
        className="relative mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <span className="hero-orb-3d hero-orb-pink" />
          <span className="hero-orb-3d hero-orb-purple" />
          <span className="hero-orb-3d hero-orb-small" />
        </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <span className="orb orb-pink" />
          <span className="orb orb-purple" />
          <span className="orb orb-small" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-black text-[#d94786]">
            <FiStar />
            Tecnología a la medida
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.94] tracking-tight text-[#2b183c] sm:text-6xl lg:text-7xl">
            Creamos soluciones digitales para hacer crecer tu negocio.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#71627a]">
            Páginas web, sistemas, puntos de venta, dashboards, automatizaciones,
            chatbots y herramientas digitales diseñadas para ti.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2b183c] px-7 py-4 font-black text-white shadow-xl shadow-purple-200"
            >
              Solicitar cotización
              <FiArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ee83b4] bg-white px-7 py-4 font-black text-[#d94786]"
            >
              <FiMessageCircle className="text-xl" />
              Escríbenos por WhatsApp
            </motion.a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-[#71627a]">
            <span className="flex items-center gap-2">
              <FiCheck className="text-[#df4f91]" />
              Soluciones personalizadas
            </span>

            <span className="flex items-center gap-2">
              <FiCheck className="text-[#df4f91]" />
              Diseño adaptable a celular
            </span>

            <span className="flex items-center gap-2">
              <FiCheck className="text-[#df4f91]" />
              Acompañamiento cercano
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <ServiceCollage />
        </motion.div>
      </section>

      <section id="servicios" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#dc4c8d]">
              Servicios
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#2b183c] sm:text-5xl">
              Todo lo que necesitas para crear, vender y automatizar.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#71627a]">
              Seleccionamos las herramientas adecuadas según el objetivo de tu
              proyecto, tu negocio y las personas que lo usarán.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-[2rem] border border-pink-100 bg-[#fffafd] p-7 shadow-sm transition hover:shadow-2xl hover:shadow-pink-100"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${service.color}`}
                    >
                      <Icon />
                    </div>

                    <span className="rounded-full bg-white px-3 py-1 text-right text-xs font-black text-[#9c6f88]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#2b183c]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#71627a]">
                    {service.description}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#d94786]"
                  >
                    Solicitar información
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </a>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="soluciones" className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(246,167,201,0.35),_transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#dc4c8d]">
              Soluciones por giro
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#2b183c] sm:text-5xl">
              Herramientas que se adaptan a la forma en que trabajas.
            </h2>

            <div className="mt-9 space-y-4">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="rounded-2xl border border-pink-100 bg-white/85 p-5 shadow-sm"
                >
                  <h3 className="font-black text-[#2b183c]">{solution.title}</h3>
                  <p className="mt-2 leading-7 text-[#71627a]">{solution.text}</p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] bg-[#2b183c] p-7 shadow-2xl shadow-purple-200 sm:p-9"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-300">
              Codelynx Studio
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Datos claros para tomar mejores decisiones.
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-pink-100">Ventas del mes</p>
                <p className="mt-3 text-3xl font-black text-white">$128,490</p>
                <p className="mt-2 text-sm font-bold text-green-200">+18.4%</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-pink-100">Clientes activos</p>
                <p className="mt-3 text-3xl font-black text-white">1,280</p>
                <p className="mt-2 text-sm font-bold text-pink-200">Actualizado</p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-white p-6">
              <div className="flex items-end gap-3">
                <div className="h-16 flex-1 rounded-t-xl bg-pink-200" />
                <div className="h-28 flex-1 rounded-t-xl bg-pink-300" />
                <div className="h-14 flex-1 rounded-t-xl bg-purple-200" />
                <div className="h-36 flex-1 rounded-t-xl bg-pink-400" />
                <div className="h-20 flex-1 rounded-t-xl bg-purple-300" />
                <div className="h-32 flex-1 rounded-t-xl bg-pink-300" />
              </div>

              <div className="mt-5 h-2 w-3/4 rounded-full bg-pink-100" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-pink-50" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="proceso" className="bg-[#2b183c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-300">
            Cómo trabajamos
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Convertimos una idea en una herramienta útil para tu negocio.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
              >
                <span className="text-4xl font-black text-pink-300">
                  {item.number}
                </span>

                <h3 className="mt-10 text-xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-purple-100">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#dc4c8d]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#2b183c] sm:text-5xl">
              Resolvemos tus dudas antes de comenzar.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-pink-100 bg-[#fffafd]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-black text-[#2b183c]"
                  >
                    {faq.question}

                    <FiChevronDown
                      className={`shrink-0 text-xl text-[#df4f91] transition ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-7 text-[#71627a]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f06ba7] via-[#dc6da7] to-[#5a3c86] px-7 py-12 text-white shadow-2xl shadow-pink-200 sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-100">
              Hablemos de tu proyecto
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Tu negocio puede trabajar de una forma más inteligente.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
              Cuéntanos qué necesitas y te proponemos una solución digital clara
              para comenzar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#d94786]"
              >
                <FiMessageCircle className="text-xl" />
                Hablar por WhatsApp
              </a>

              <a
                href="#inicio"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-7 py-4 font-black text-white transition hover:bg-white/10"
              >
                Volver al inicio
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <BrandName />

          <p className="text-sm font-semibold text-[#7d6d85]">
            © {new Date().getFullYear()} Codelynx. Tecnología a la medida.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-[#d94786]"
          >
            <FiMessageCircle />
            WhatsApp
          </a>
        </div>
      </footer>

      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#f05ca4] to-[#c9397e] text-2xl text-white shadow-2xl shadow-pink-300"
        aria-label="Abrir WhatsApp"
      >
        <FiMessageCircle />
      </motion.a>
    </main>
  )
}

export default App