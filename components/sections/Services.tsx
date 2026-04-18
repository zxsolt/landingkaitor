"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    label: "Automatización",
    problem: "Tu equipo hace a mano lo que debería hacer un sistema",
    body: "Notificaciones manuales, hojas de cálculo actualizadas a mano, datos copiados de una herramienta a otra. Cada hora que eso consume es dinero que no vuelve.",
    cta: "Automatizamos el proceso",
  },
  {
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
  },
  {
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
  },
  {
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos que se gestionan por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo — sin fricción para el cliente, sin trabajo para tu equipo.",
    cta: "Eliminamos el caos",
  },
  {
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para ti.",
    cta: "Lo construimos desde cero",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Right glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.07) 0%, transparent 70%)",
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
            <span className="text-[#F0F0F0]/40">Pero seguro que lo reconoces.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[#F0F0F0]/45 leading-relaxed max-w-2xl mb-14 text-base"
        >
          Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no saben
          qué pedir, creen que va a ser caro o han tenido malas experiencias. El problema sigue ahí,
          costando dinero cada semana.
        </motion.p>

        {/* Problem cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative p-6 rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#02c978]/20 transition-all duration-400 flex flex-col"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
              whileHover={{
                boxShadow: "0 8px 40px rgba(2,201,120,0.08), inset 0 1px 0 rgba(255,255,255,0.02)",
                y: -3,
                transition: { duration: 0.3 },
              }}
            >
              {/* Label */}
              <span className="font-mono text-[10px] text-[#02c978]/50 tracking-widest uppercase mb-4 block">
                {p.label}
              </span>

              {/* Problem statement */}
              <h3 className="text-base font-bold text-[#F0F0F0] leading-snug mb-3">
                &ldquo;{p.problem}&rdquo;
              </h3>

              {/* Body */}
              <p className="text-[#F0F0F0]/40 text-sm leading-relaxed flex-1">
                {p.body}
              </p>

              {/* CTA line */}
              <div className="mt-5 flex items-center gap-2 text-[#02c978] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="w-4 h-px"
                  style={{ background: "#02c978" }}
                />
                {p.cta}
              </div>

              {/* Number */}
              <span className="absolute top-4 right-5 font-mono text-[10px] text-[#F0F0F0]/12 tracking-widest">
                0{i + 1}
              </span>
            </motion.div>
          ))}

          {/* 6th slot — custom CTA card */}
          <motion.div
            variants={item}
            className="group relative p-6 rounded-2xl flex flex-col justify-between overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(2,201,120,0.06) 0%, rgba(2,201,120,0.02) 100%)",
              border: "1px solid rgba(2,201,120,0.15)",
              boxShadow: "inset 0 1px 0 rgba(2,201,120,0.06)",
            }}
            whileHover={{
              boxShadow: "0 8px 40px rgba(2,201,120,0.12), inset 0 1px 0 rgba(2,201,120,0.1)",
              y: -3,
              transition: { duration: 0.3 },
            }}
          >
            {/* Decorative corner glow */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(2,201,120,0.18) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div>
              <span className="font-mono text-[10px] text-[#02c978]/70 tracking-widest uppercase mb-4 block">
                Tu caso
              </span>
              <h3 className="text-base font-bold text-[#F0F0F0] leading-snug mb-3">
                ¿Tu problema no encaja en ninguna de estas categorías?
              </h3>
              <p className="text-[#F0F0F0]/45 text-sm leading-relaxed">
                No pasa nada. Cuéntanoslo y lo analizamos juntos — sin coste, sin compromiso.
              </p>
            </div>

            <Link
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 text-[#02c978] text-xs font-mono font-semibold group-hover:gap-3 transition-all duration-300"
            >
              <span
                className="w-4 h-px transition-all duration-300 group-hover:w-6"
                style={{ background: "#02c978" }}
              />
              Cuéntanos tu caso
            </Link>
          </motion.div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-14 p-8 rounded-2xl border border-[#02c978]/10 bg-[#02c978]/4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#F0F0F0]/70 text-base leading-relaxed">
              ¿Te has reconocido pero no has hecho nada? Normal.
            </p>
            <p className="text-[#F0F0F0]/45 text-sm mt-1">
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
