"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    number: "01",
    label: "Automatización",
    problem: "Tu equipo hace a mano lo que debería hacer un sistema",
    body: "Notificaciones manuales, hojas de cálculo actualizadas a mano, datos copiados de una herramienta a otra. Cada hora que eso consume es dinero que no vuelve.",
    cta: "Automatizamos el proceso",
    tag: "Ahorra tiempo",
  },
  {
    number: "02",
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
    tag: "Elimina silos",
  },
  {
    number: "03",
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
    tag: "Visibilidad total",
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos que se gestionan por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo — sin fricción para el cliente, sin trabajo para tu equipo.",
    cta: "Eliminamos el caos",
    tag: "Sin fricción",
  },
  {
    number: "05",
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para ti.",
    cta: "Lo construimos desde cero",
    tag: "A medida",
  },
];

export default function ServicesV3() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="servicios" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="absolute right-1/4 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,160,0.07) 0%, transparent 65%)",
          filter: "blur(100px)",
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
          className="text-[#F0F0F0]/45 leading-relaxed max-w-2xl mb-16 text-base"
        >
          Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no saben
          qué pedir, creen que va a ser caro o han tenido malas experiencias.
        </motion.p>

        {/* Split panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-4 lg:gap-6"
        >
          {/* Left: service list */}
          <div className="lg:w-[340px] shrink-0 flex flex-col gap-1.5">
            {services.map((sv, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-250 cursor-pointer"
                  style={{
                    background: isActive ? "rgba(0,212,160,0.06)" : "transparent",
                    border: isActive ? "1px solid rgba(0,212,160,0.18)" : "1px solid transparent",
                  }}
                >
                  {/* Active left bar */}
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
                    animate={{
                      background: isActive ? "#00D4A0" : "transparent",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Number */}
                  <span
                    className="font-mono text-xs tabular-nums shrink-0 transition-colors duration-200"
                    style={{ color: isActive ? "#00D4A0" : "rgba(240,240,240,0.2)" }}
                  >
                    {sv.number}
                  </span>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-mono text-[10px] tracking-widest uppercase block transition-colors duration-200"
                      style={{ color: isActive ? "rgba(0,212,160,0.6)" : "rgba(240,240,240,0.25)" }}
                    >
                      {sv.label}
                    </span>
                  </div>

                  {/* Tag pill */}
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[9px] font-mono text-[#00D4A0]/70 px-2 py-0.5 rounded-full"
                    style={{ border: "1px solid rgba(0,212,160,0.2)", background: "rgba(0,212,160,0.04)" }}
                  >
                    {sv.tag}
                  </motion.span>
                </button>
              );
            })}

            {/* Custom case link */}
            <div
              className="mt-2 px-5 py-4 rounded-xl"
              style={{ border: "1px dashed rgba(0,212,160,0.15)" }}
            >
              <span className="font-mono text-[10px] text-[#00D4A0]/40 tracking-widest uppercase block mb-1">
                Tu caso
              </span>
              <Link
                href="#contacto"
                className="text-xs text-[#F0F0F0]/40 hover:text-[#00D4A0] transition-colors duration-200 leading-relaxed"
              >
                ¿No ves tu problema aquí? Cuéntanoslo →
              </Link>
            </div>
          </div>

          {/* Right: content panel */}
          <div
            className="flex-1 relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(240,240,240,0.06)",
              background: "#0E1318",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.025)",
              minHeight: "420px",
            }}
          >
            {/* Glow behind content */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(0,212,160,0.08) 0%, transparent 60%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative z-10 p-8 md:p-12 flex flex-col h-full"
              >
                {/* Top meta */}
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="font-mono text-[10px] text-[#00D4A0]/60 tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ border: "1px solid rgba(0,212,160,0.2)", background: "rgba(0,212,160,0.05)" }}
                  >
                    {s.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#F0F0F0]/18 tracking-widest">
                    {s.number} / 05
                  </span>
                </div>

                {/* Problem */}
                <h3 className="text-[clamp(1.4rem,3vw,2.2rem)] font-black text-[#F0F0F0] leading-[1.15] tracking-tight mb-6">
                  &ldquo;{s.problem}&rdquo;
                </h3>

                {/* Divider */}
                <div
                  className="w-12 h-px mb-6"
                  style={{ background: "rgba(0,212,160,0.4)" }}
                />

                {/* Body */}
                <p className="text-[#F0F0F0]/50 text-base leading-relaxed max-w-xl mb-auto">
                  {s.body}
                </p>

                {/* CTA */}
                <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200"
                    style={{ boxShadow: "0 0 20px rgba(0,212,160,0.2)" }}
                  >
                    {s.cta} →
                  </Link>

                  {/* Step indicator */}
                  <div className="flex items-center gap-1.5">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="transition-all duration-200 rounded-full"
                        style={{
                          width: active === i ? "20px" : "6px",
                          height: "6px",
                          background: active === i ? "#00D4A0" : "rgba(240,240,240,0.15)",
                        }}
                        aria-label={`Ver servicio ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 p-8 rounded-2xl border border-[#00D4A0]/10 bg-[#00D4A0]/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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
            className="shrink-0 px-6 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 20px rgba(0,212,160,0.2)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
