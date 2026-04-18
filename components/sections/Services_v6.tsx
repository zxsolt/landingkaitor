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

export default function ServicesV6() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(2,201,120,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <div className="px-6 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2 max-w-3xl">
            Puede que no sepas cómo se llama el problema.
            <br />
            <span className="text-[#F0F0F0]/35">Pero seguro que lo reconoces.</span>
          </h2>
        </motion.div>
      </div>

      {/* Rows */}
      <div className="space-y-px">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="group relative"
          >
            {/* Full-width background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(90deg, rgba(2,201,120,0.04) 0%, transparent 60%)"
                    : "linear-gradient(90deg, transparent 40%, rgba(2,201,120,0.04) 100%)",
              }}
            />

            <div className="relative px-6 max-w-6xl mx-auto">
              <div
                className={`flex flex-col md:flex-row items-stretch gap-0 border-b border-[#F0F0F0]/6 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                {/* LEFT — Problem side */}
                <div
                  className={`flex-1 py-10 md:py-14 md:pr-12 flex flex-col justify-center ${
                    i % 2 !== 0 ? "md:order-2 md:pl-12 md:pr-0" : ""
                  }`}
                >
                  {/* Number + label row */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-mono text-[10px] text-[#02c978]/50 tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        border: "1px solid rgba(2,201,120,0.15)",
                        background: "rgba(2,201,120,0.04)",
                      }}
                    >
                      {s.label}
                    </span>
                    <span className="font-mono text-[10px] text-[#F0F0F0]/15 tabular-nums">
                      {s.number}
                    </span>
                  </div>

                  {/* Problem quote — the visual anchor */}
                  <h3 className="text-[clamp(1.2rem,2.5vw,1.75rem)] font-black text-[#F0F0F0] leading-[1.2] tracking-tight">
                    &ldquo;{s.problem}&rdquo;
                  </h3>
                </div>

                {/* Vertical divider */}
                <div
                  className={`hidden md:flex items-stretch ${i % 2 !== 0 ? "md:order-1" : ""}`}
                >
                  <div
                    className="w-px self-stretch my-10 group-hover:opacity-100 transition-all duration-400"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(2,201,120,0.3) 30%, rgba(2,201,120,0.3) 70%, transparent 100%)",
                      opacity: 0.4,
                    }}
                  />
                </div>

                {/* RIGHT — Solution side */}
                <div
                  className={`flex-1 py-10 md:py-14 flex flex-col justify-center ${
                    i % 2 !== 0 ? "md:order-3 md:pl-12" : "md:pl-12"
                  }`}
                >
                  <p className="text-[#F0F0F0]/45 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                    {s.body}
                  </p>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2.5 text-[#02c978] text-xs font-mono font-semibold hover:gap-4 transition-all duration-300 self-start"
                  >
                    <span className="w-5 h-px bg-[#02c978] transition-all duration-300 group-hover:w-7" />
                    {s.cta}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="px-6 max-w-6xl mx-auto"
      >
        <div
          className="mt-14 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,201,120,0.07) 0%, rgba(2,201,120,0.02) 100%)",
            border: "1px solid rgba(2,201,120,0.14)",
          }}
        >
          <div>
            <p className="text-[#F0F0F0] text-lg font-bold leading-snug">
              ¿Te has reconocido pero no has hecho nada?{" "}
              <span className="text-[#F0F0F0]/40">Normal.</span>
            </p>
            <p className="text-[#F0F0F0]/40 text-sm mt-2 max-w-lg">
              Por eso el primer paso es una conversación — sin coste, sin compromiso y sin jerga
              técnica. Cuéntanos qué falla y te decimos cómo lo resolvemos.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#02c978] text-[#080b0a] text-sm font-bold hover:bg-[#01a060] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 28px rgba(2,201,120,0.28)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
