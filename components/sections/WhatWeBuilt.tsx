"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    sector: "Negocio de servicios · España",
    problem: "Gestionaban reservas por WhatsApp y cobros por transferencia bancaria. Cada reserva requería al menos tres mensajes y una llamada de confirmación.",
    built: "Sistema de reservas online con pago integrado desde su web. El cliente reserva, elige fecha, paga y recibe confirmación automática.",
    result: "El equipo dejó de gestionar reservas manualmente. Cero llamadas de confirmación. Las reservas se procesan solas.",
    tag: "Reservas · Pagos · Landing page",
  },
  {
    sector: "Negocio local · España",
    problem: "Su web era un escaparate estático. No captaba clientes, no procesaba pedidos y todo el flujo de venta pasaba por teléfono o email.",
    built: "Landing page con sistema de captación, formulario de contacto cualificado y seguimiento automático de leads.",
    result: "Los clientes potenciales llegan con información previa. Menos tiempo en llamadas de primer contacto, más tiempo en ventas reales.",
    tag: "Landing page · Captación · Automatización",
  },
];

export default function WhatWeBuilt() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="lo-que-hemos-construido" ref={ref} className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Right glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header — asymmetric */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Lo que hemos construido</SectionLabel>
            <h2
              className="mt-3 text-[#f0f5f2]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,4vw,3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Dos proyectos.
              <br />
              Dos problemas reales.
              <br />
              <span style={{ color: "#02c978" }}>Resueltos.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#f0f5f2]/45 text-sm leading-relaxed pb-1"
          >
            Somos una empresa en fase inicial. Estos son nuestros dos proyectos reales.
            Los presentamos con honestidad, sin inflar resultados ni inventar métricas.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "#0E1318",
                border: "1px solid rgba(240,245,242,0.05)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              {/* Sector */}
              <span
                className="font-mono text-[9px] tracking-widest uppercase block mb-5"
                style={{ color: "rgba(2,201,120,0.55)" }}
              >
                {p.sector}
              </span>

              {/* Three blocks */}
              <div className="space-y-5">
                <div>
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase block mb-1.5"
                    style={{ color: "rgba(240,245,242,0.25)" }}
                  >
                    El problema
                  </span>
                  <p className="text-[#f0f5f2]/60 text-sm leading-relaxed">{p.problem}</p>
                </div>

                <div
                  className="h-px"
                  style={{ background: "rgba(240,245,242,0.05)" }}
                />

                <div>
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase block mb-1.5"
                    style={{ color: "rgba(240,245,242,0.25)" }}
                  >
                    Lo que construimos
                  </span>
                  <p className="text-[#f0f5f2]/60 text-sm leading-relaxed">{p.built}</p>
                </div>

                <div
                  className="h-px"
                  style={{ background: "rgba(240,245,242,0.05)" }}
                />

                <div>
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase block mb-1.5"
                    style={{ color: "rgba(2,201,120,0.5)" }}
                  >
                    El resultado
                  </span>
                  <p className="text-[#f0f5f2]/70 text-sm leading-relaxed font-medium">{p.result}</p>
                </div>
              </div>

              {/* Tag footer */}
              <div
                className="mt-6 pt-4 font-mono text-[9px] tracking-wide"
                style={{
                  color: "rgba(240,245,242,0.2)",
                  borderTop: "1px solid rgba(240,245,242,0.05)",
                }}
              >
                {p.tag}
              </div>

              {/* Corner glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(2,201,120,0.07) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
