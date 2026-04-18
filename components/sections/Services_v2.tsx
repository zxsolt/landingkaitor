"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    number: "01",
    label: "Automatización",
    problem: "Tu equipo hace a mano lo que debería hacer un sistema",
    body: "Notificaciones manuales, hojas de cálculo actualizadas a mano, datos copiados de una herramienta a otra. Cada hora que eso consume es dinero que no vuelve.",
    cta: "Automatizamos el proceso",
    // SVG glyph path
    glyph: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="1" />
        <path d="M40 12 A28 28 0 0 1 68 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M68 34 L68 40 L62 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="40" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
    glyph: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="16" cy="40" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="64" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="64" cy="58" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 40 Q44 22 57 22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M23 40 Q44 58 57 58" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="16" cy="40" r="3" fill="currentColor" />
        <circle cx="64" cy="22" r="3" fill="currentColor" />
        <circle cx="64" cy="58" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
    glyph: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="16" width="64" height="44" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 28 H72" stroke="currentColor" strokeWidth="1" />
        <path d="M32 60 L28 72 M48 60 L52 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 72 H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 44 L30 36 L38 42 L50 32 L60 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="38" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos que se gestionan por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo — sin fricción para el cliente, sin trabajo para tu equipo.",
    cta: "Eliminamos el caos",
    glyph: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="12" y="20" width="56" height="48" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 34 H68" stroke="currentColor" strokeWidth="1" />
        <path d="M26 14 V26 M54 14 V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="22" y="42" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        <rect x="36" y="42" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
        <rect x="50" y="42" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para ti.",
    cta: "Lo construimos desde cero",
    glyph: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M40 10 L44 26 L60 20 L50 34 L66 38 L50 42 L60 56 L44 50 L40 66 L36 50 L20 56 L30 42 L14 38 L30 34 L20 20 L36 26 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="40" cy="38" r="8" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="38" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

// Bento layout: alternating wide/narrow
// Row 1: [0: col-2] [1: col-1]
// Row 2: [2: col-1] [3: col-2]
// Row 3: [4: col-2] [CTA: col-1]
const colSpans = [2, 1, 1, 2, 2];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function ServicesV2() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.06) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.04) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mb-4"
        >
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Puede que no sepas cómo se llama el problema.
            <br />
            <span className="text-[#F0F0F0]/35">Pero seguro que lo reconoces.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#F0F0F0]/45 leading-relaxed max-w-2xl mb-14 text-base"
        >
          Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no saben
          qué pedir, creen que va a ser caro o han tenido malas experiencias.
        </motion.p>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative rounded-2xl border border-[#F0F0F0]/6 bg-[#0E1318] overflow-hidden flex flex-col p-6 md:p-8 hover:border-[#02c978]/20 transition-colors duration-400 ${
                colSpans[i] === 2 ? "md:col-span-2" : "md:col-span-1"
              }`}
              style={{
                minHeight: colSpans[i] === 2 ? "220px" : "220px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.025)",
              }}
              whileHover={{
                boxShadow: "0 12px 48px rgba(2,201,120,0.07), inset 0 1px 0 rgba(255,255,255,0.025)",
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              {/* Background glyph */}
              <div
                className="absolute bottom-0 right-0 w-36 h-36 md:w-48 md:h-48 text-[#02c978]/6 group-hover:text-[#02c978]/10 transition-colors duration-500 pointer-events-none translate-x-6 translate-y-6"
                aria-hidden="true"
              >
                {s.glyph}
              </div>

              {/* Top row: label + number */}
              <div className="flex items-start justify-between mb-auto">
                <span className="font-mono text-[10px] text-[#02c978]/55 tracking-widest uppercase">
                  {s.label}
                </span>
                <span className="font-mono text-[10px] text-[#F0F0F0]/12 tracking-widest tabular-nums">
                  {s.number}
                </span>
              </div>

              {/* Problem + body */}
              <div className="mt-8 relative z-10">
                <h3
                  className={`font-bold text-[#F0F0F0] leading-snug mb-3 ${
                    colSpans[i] === 2 ? "text-lg md:text-xl" : "text-base"
                  }`}
                >
                  &ldquo;{s.problem}&rdquo;
                </h3>
                <p
                  className={`text-[#F0F0F0]/38 text-sm leading-relaxed ${
                    colSpans[i] === 2 ? "max-w-lg" : ""
                  }`}
                >
                  {s.body}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center gap-2 text-[#02c978] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-4 h-px bg-[#02c978]" />
                {s.cta}
              </div>
            </motion.div>
          ))}

          {/* CTA card — fills row 3 col 3 */}
          <motion.div
            variants={item}
            className="group relative rounded-2xl overflow-hidden flex flex-col justify-between p-6 md:p-8 md:col-span-1"
            style={{
              minHeight: "220px",
              background: "linear-gradient(145deg, rgba(2,201,120,0.07) 0%, rgba(2,201,120,0.02) 60%, transparent 100%)",
              border: "1px solid rgba(2,201,120,0.18)",
            }}
            whileHover={{
              boxShadow: "0 12px 48px rgba(2,201,120,0.12)",
              y: -4,
              transition: { duration: 0.3 },
            }}
          >
            {/* Corner pulse */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(2,201,120,0.2) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#02c978]/60 tracking-widest uppercase block mb-4">
                Tu caso
              </span>
              <h3 className="text-base font-bold text-[#F0F0F0] leading-snug">
                ¿Tu problema no encaja en ninguna categoría?
              </h3>
            </div>

            <div className="relative z-10 mt-6">
              <p className="text-[#F0F0F0]/40 text-sm leading-relaxed mb-5">
                Cuéntanoslo. Lo analizamos juntos — sin coste, sin compromiso.
              </p>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2.5 text-[#02c978] text-xs font-mono font-semibold group-hover:gap-4 transition-all duration-300"
              >
                <span className="w-4 h-px bg-[#02c978] group-hover:w-6 transition-all duration-300" />
                Cuéntanos tu caso
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Closing banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 p-8 rounded-2xl border border-[#02c978]/10 bg-[#02c978]/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#F0F0F0]/70 text-base leading-relaxed">
              ¿Te has reconocido pero no has hecho nada? Normal.
            </p>
            <p className="text-[#F0F0F0]/40 text-sm mt-1">
              Por eso el primer paso es una conversación — sin coste, sin compromiso y sin jerga técnica.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#02c978] text-[#080b0a] text-sm font-bold hover:bg-[#01a060] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 20px rgba(2,201,120,0.2)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
