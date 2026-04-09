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
    accent: "rgba(0,212,160,0.12)",
    accentBorder: "rgba(0,212,160,0.2)",
    glowColor: "rgba(0,212,160,0.15)",
  },
  {
    number: "02",
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
    accent: "rgba(0,180,220,0.08)",
    accentBorder: "rgba(0,180,220,0.18)",
    glowColor: "rgba(0,180,220,0.12)",
  },
  {
    number: "03",
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
    accent: "rgba(120,80,255,0.07)",
    accentBorder: "rgba(120,80,255,0.16)",
    glowColor: "rgba(120,80,255,0.1)",
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos que se gestionan por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo — sin fricción para el cliente, sin trabajo para tu equipo.",
    cta: "Eliminamos el caos",
    accent: "rgba(0,212,160,0.08)",
    accentBorder: "rgba(0,212,160,0.16)",
    glowColor: "rgba(0,212,160,0.12)",
  },
  {
    number: "05",
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para ti.",
    cta: "Lo construimos desde cero",
    accent: "rgba(255,160,60,0.06)",
    accentBorder: "rgba(255,160,60,0.14)",
    glowColor: "rgba(255,160,60,0.1)",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} satisfies Variants;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
} satisfies Variants;

function ServiceCard({
  s,
  large = false,
  wide = false,
}: {
  s: (typeof services)[0];
  large?: boolean;
  wide?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        background: `linear-gradient(135deg, ${s.accent} 0%, rgba(14,19,24,0) 60%), #0E1318`,
        border: `1px solid ${s.accentBorder}`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        minHeight: large ? "320px" : "260px",
      }}
      whileHover={{
        y: -5,
        boxShadow: `0 20px 60px ${s.glowColor}, inset 0 1px 0 rgba(255,255,255,0.04)`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Big decorative number — the visual anchor */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 font-black leading-none select-none pointer-events-none translate-x-4 translate-y-4 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
        style={{
          fontSize: large ? "clamp(8rem,14vw,13rem)" : "clamp(6rem,10vw,9rem)",
          color: "#00D4A0",
          opacity: 0.07,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--font-geist-mono)",
          lineHeight: 1,
          filter: "blur(0px)",
          transition: "opacity 0.4s, filter 0.4s",
        }}
      >
        {s.number}
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 font-black leading-none select-none pointer-events-none translate-x-4 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
        style={{
          fontSize: large ? "clamp(8rem,14vw,13rem)" : "clamp(6rem,10vw,9rem)",
          color: "#00D4A0",
          opacity: 0,
          fontVariantNumeric: "tabular-nums",
          fontFamily: "var(--font-geist-mono)",
          lineHeight: 1,
          textShadow: "0 0 80px rgba(0,212,160,0.6)",
        }}
        style-hover={{ opacity: 0.13 }}
      />

      {/* Corner glow on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at bottom right, ${s.glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full flex-1">
        {/* Top: label + number badge */}
        <div className="flex items-center justify-between mb-auto">
          <span
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{
              color: "#00D4A0",
              background: "rgba(0,212,160,0.07)",
              border: "1px solid rgba(0,212,160,0.15)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00D4A0", boxShadow: "0 0 6px rgba(0,212,160,0.8)" }}
            />
            {s.label}
          </span>
          <span className="font-mono text-xs text-[#F0F0F0]/12 tabular-nums">{s.number}</span>
        </div>

        {/* Problem — big and bold */}
        <div className="mt-8">
          <h3
            className={`font-black text-[#F0F0F0] leading-[1.15] tracking-tight ${
              large
                ? "text-[clamp(1.3rem,2.4vw,1.75rem)]"
                : wide
                ? "text-[clamp(1.1rem,2vw,1.4rem)]"
                : "text-[clamp(1rem,1.8vw,1.2rem)]"
            }`}
          >
            &ldquo;{s.problem}&rdquo;
          </h3>
        </div>

        {/* Body — revealed on hover via opacity trick */}
        <p className="mt-4 text-[#F0F0F0]/40 text-sm leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {s.body}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2.5 text-[#00D4A0] text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span
            className="w-5 h-px transition-all duration-300 group-hover:w-7"
            style={{ background: "#00D4A0" }}
          />
          {s.cta}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesV4() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,160,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2 max-w-3xl">
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

        {/* Magazine grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
        >
          {/* Row 1: [01 wide 7col] [02 narrow 5col] */}
          <div className="lg:col-span-7">
            <ServiceCard s={services[0]} large />
          </div>
          <div className="lg:col-span-5">
            <ServiceCard s={services[1]} />
          </div>

          {/* Row 2: [03 narrow 5col] [04 wide 7col] */}
          <div className="lg:col-span-5">
            <ServiceCard s={services[2]} />
          </div>
          <div className="lg:col-span-7">
            <ServiceCard s={services[3]} large />
          </div>

          {/* Row 3: [05 full width banner] */}
          <div className="lg:col-span-8">
            <ServiceCard s={services[4]} wide />
          </div>

          {/* CTA card — col-span-4 */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 group relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 md:p-8 cursor-default"
            style={{
              minHeight: "260px",
              background: "linear-gradient(145deg, rgba(0,212,160,0.1) 0%, rgba(0,212,160,0.03) 50%, rgba(14,19,24,0.8) 100%)",
              border: "1px solid rgba(0,212,160,0.25)",
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 60px rgba(0,212,160,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Top-right burst */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(0,212,160,0.25) 0%, transparent 60%)",
              }}
            />

            {/* Decorative arrow */}
            <div
              aria-hidden="true"
              className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-400"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M8 56 L56 8 M34 8 H56 V30" stroke="#00D4A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#00D4A0]/60 tracking-widest uppercase block mb-4">
                Tu caso
              </span>
              <h3 className="text-xl font-black text-[#F0F0F0] leading-snug">
                ¿Tu problema no encaja en ninguna categoría?
              </h3>
              <p className="mt-3 text-[#F0F0F0]/40 text-sm leading-relaxed">
                Cuéntanoslo. Lo analizamos juntos — sin coste, sin compromiso.
              </p>
            </div>

            <Link
              href="#contacto"
              className="relative z-10 mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200 self-start"
              style={{ boxShadow: "0 0 24px rgba(0,212,160,0.3)" }}
            >
              Cuéntanos tu caso →
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 p-8 rounded-2xl border border-[#00D4A0]/10 bg-[#00D4A0]/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#F0F0F0]/70 text-base font-medium">
              ¿Te has reconocido pero no has hecho nada? Normal.
            </p>
            <p className="text-[#F0F0F0]/40 text-sm mt-1">
              El primer paso es una conversación — sin coste, sin compromiso y sin jerga técnica.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 24px rgba(0,212,160,0.25)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
