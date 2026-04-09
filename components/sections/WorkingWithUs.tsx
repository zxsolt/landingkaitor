"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const moments = [
  {
    when: "Antes de empezar",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sabemos exactamente qué vamos a construir",
    body: "Antes de escribir una sola línea de código, tienes un documento que describe exactamente qué se va a entregar, cuándo y por cuánto.",
  },
  {
    when: "Durante",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ves el progreso en tiempo real",
    body: "No desaparecemos durante semanas. Tienes acceso al avance en todo momento y sabes exactamente en qué punto estamos.",
  },
  {
    when: "Cuando entregamos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9l4 4 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Funciona desde el primer día",
    body: "No entregamos prototipos. Entregamos herramientas que tu equipo puede usar el mismo día que las recibe — con formación incluida.",
  },
  {
    when: "Después de entregar",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v3M9 13v3M2 9h3M13 9h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Seguimos ahí",
    body: "El proyecto no termina con la entrega. Evolucionamos la herramienta a medida que tu negocio cambia — sin contratos de permanencia.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function WorkingWithUs() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden section-alt">
      {/* Background divider line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(0,212,160,0.1), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <SectionLabel>Trabajar con nosotros</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Sin reuniones infinitas.
            <br />
            Sin entregas que no funcionan.
            <br />
            <span className="text-[#F0F0F0]/40">Sin desaparecer después.</span>
          </h2>
        </motion.div>

        {/* Moments */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {moments.map((m, i) => (
            <motion.div key={i} variants={item}>
              <SpotlightCard
                className="group relative rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#00D4A0]/15 transition-colors duration-300"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
              >
                <div className="p-7">
                  {/* When label + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-[#00D4A0]/70 shrink-0">{m.icon}</div>
                    <span className="font-mono text-[10px] text-[#00D4A0]/50 tracking-widest uppercase">
                      {m.when}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F0F0F0] mb-3 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[#F0F0F0]/40 text-sm leading-relaxed">{m.body}</p>

                  {/* Decorative corner */}
                  <div
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at bottom right, rgba(0,212,160,0.06) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
