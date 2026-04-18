"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    number: "01",
    label: "Automatización",
    problem: "Tu equipo hace a mano lo que debería hacer un sistema",
    body: "Notificaciones manuales, hojas de cálculo actualizadas a mano, datos copiados de una herramienta a otra. Cada hora que eso consume es dinero que no vuelve.",
    cta: "Automatizamos el proceso",
  },
  {
    number: "02",
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
  },
  {
    number: "03",
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo — sin fricción para el cliente, sin trabajo para tu equipo.",
    cta: "Eliminamos el caos",
  },
  {
    number: "05",
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para ti.",
    cta: "Lo construimos desde cero",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" } },
} satisfies Variants;

export default function ServicesV7() {
  return (
    <section
      id="servicios"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ background: "#050C09" }}
    >
      {/* ── Atmospheric glow orbs ── */}
      {/* Primary large orb — centre-right, dominant */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: "-10%",
          top: "10%",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(2,201,120,0.32) 0%, rgba(0,180,120,0.12) 40%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />
      {/* Secondary orb — left, softer */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "-5%",
          bottom: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(2,201,120,0.14) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* Top centre haze */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "400px",
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(2,201,120,0.08) 0%, transparent 80%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header — centrado como la referencia ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.08] tracking-tight text-white mt-3">
            Puede que no sepas cómo se llama
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #02c978 0%, #04f5a8 50%, #02c978 100%)",
              }}
            >
              el problema.
            </span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed max-w-xl mx-auto mt-5">
            Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no
            saben qué pedir, creen que va a ser caro o han tenido malas experiencias.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
              style={{
                background:
                  "linear-gradient(145deg, rgba(0,40,28,0.7) 0%, rgba(6,16,12,0.85) 100%)",
                border: "1px solid rgba(2,201,120,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "inset 0 1px 0 rgba(2,201,120,0.06), 0 4px 24px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                y: -5,
                boxShadow:
                  "inset 0 1px 0 rgba(2,201,120,0.1), 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(2,201,120,0.2)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(2,201,120,0.1) 0%, transparent 60%)",
                }}
              />

              {/* Top: label + number */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color: "#02c978",
                    background: "rgba(2,201,120,0.08)",
                    border: "1px solid rgba(2,201,120,0.18)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#02c978",
                      boxShadow: "0 0 5px rgba(2,201,120,0.9)",
                    }}
                  />
                  {s.label}
                </span>
                <span className="font-mono text-[11px] text-white/15 tabular-nums">
                  {s.number}
                </span>
              </div>

              {/* Problem */}
              <h3 className="text-[15px] font-bold text-white leading-snug mb-3 flex-1">
                &ldquo;{s.problem}&rdquo;
              </h3>

              {/* Body */}
              <p className="text-white/40 text-sm leading-relaxed mt-2">
                {s.body}
              </p>

              {/* CTA — visible on hover */}
              <div className="mt-5 flex items-center gap-2.5 text-[#02c978] text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <span className="w-4 h-px bg-[#02c978] group-hover:w-6 transition-all duration-300" />
                {s.cta}
              </div>
            </motion.div>
          ))}

          {/* CTA card — 6th slot */}
          <motion.div
            variants={item}
            className="group relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden cursor-default"
            style={{
              background:
                "linear-gradient(145deg, rgba(0,80,50,0.5) 0%, rgba(0,40,28,0.7) 100%)",
              border: "1px solid rgba(2,201,120,0.28)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "inset 0 1px 0 rgba(2,201,120,0.12), 0 4px 24px rgba(0,0,0,0.3)",
            }}
            whileHover={{
              y: -5,
              boxShadow:
                "inset 0 1px 0 rgba(2,201,120,0.18), 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(2,201,120,0.3)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Corner burst */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-tr-2xl"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(2,201,120,0.28) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#02c978]/70 tracking-widest uppercase block mb-4">
                Tu caso
              </span>
              <h3 className="text-base font-bold text-white leading-snug">
                ¿Tu problema no encaja en ninguna de estas categorías?
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mt-3">
                No pasa nada. Cuéntanoslo y lo analizamos juntos.
              </p>
            </div>

            <Link
              href="#contacto"
              className="relative z-10 mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#050C09] text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #02c978 0%, #04f5a8 100%)",
                boxShadow: "0 0 20px rgba(2,201,120,0.4)",
              }}
            >
              Cuéntanos tu caso →
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 relative rounded-2xl p-10 md:p-14 overflow-hidden text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,70,45,0.6) 0%, rgba(0,30,20,0.8) 100%)",
            border: "1px solid rgba(2,201,120,0.18)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Big glow inside banner */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 120% at 50% 100%, rgba(2,201,120,0.18) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-white text-xl md:text-2xl font-black mb-2">
              ¿Te has reconocido pero no has hecho nada?
            </p>
            <p className="text-white/45 text-sm md:text-base mb-8 max-w-lg mx-auto">
              Por eso el primer paso es una conversación — sin coste, sin compromiso y sin jerga
              técnica.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#050C09] text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #02c978 0%, #04f5a8 100%)",
                boxShadow: "0 0 32px rgba(2,201,120,0.45)",
              }}
            >
              Cuéntanos tu caso →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
