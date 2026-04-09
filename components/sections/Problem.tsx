"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const pains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 5.5H11M15.5 9V11M5.5 9V11M9 14.5H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "Procesos manuales",
    body: "Tu equipo dedica horas a tareas repetitivas que un sistema debería hacer solo. Ese tiempo tiene un coste real.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="4" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="16" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 10h3M13.5 4.8L10 8.5M13.5 15.2L10 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    ),
    title: "Herramientas desconectadas",
    body: "Tu CRM no habla con tu facturación. Tu web no sincroniza con tu almacén. Los datos viven dispersos y nadie tiene la imagen completa.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
      </svg>
    ),
    title: "Sin visibilidad real",
    body: "Sabes que el negocio avanza, pero no tienes datos actualizados para tomar decisiones rápidas. Dependes de informes que llegan tarde.",
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

export default function Problem() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Subtle left glow */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,160,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-[1fr_1fr] gap-16 items-start"
        >
          {/* Left — text */}
          <div>
            <motion.div variants={item}>
              <SectionLabel>El problema</SectionLabel>
            </motion.div>
            <motion.h2
              variants={item}
              className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2"
            >
              Tu negocio funciona.
              <br />
              <span className="text-[#F0F0F0]/40">El problema es cómo funciona.</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-6 text-[#F0F0F0]/50 leading-relaxed text-base max-w-md"
            >
              La mayoría de empresas crece con herramientas que no se hablan entre
              sí y procesos que dependen de personas concretas. No porque no haya
              solución — sino porque nadie se ha sentado a entender exactamente qué
              necesitas.
            </motion.p>
          </div>

          {/* Right — pain cards */}
          <div className="flex flex-col gap-3">
            {pains.map((pain, i) => (
              <motion.div key={i} variants={item}>
                <SpotlightCard
                  className="group relative rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#00D4A0]/15 transition-colors duration-300"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
                >
                  <motion.div
                    className="p-5"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 text-[#00D4A0] shrink-0 opacity-80">
                        {pain.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#F0F0F0] text-sm mb-1.5">
                          {pain.title}
                        </h3>
                        <p className="text-[#F0F0F0]/45 text-sm leading-relaxed">
                          {pain.body}
                        </p>
                      </div>
                    </div>
                    {/* Number */}
                    <span className="absolute top-4 right-5 font-mono text-[10px] text-[#F0F0F0]/15 tracking-widest">
                      0{i + 1}
                    </span>
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-[#00D4A0] font-semibold text-base text-right max-w-6xl"
        >
          Eso es exactamente lo que resolvemos.
        </motion.p>
      </div>
    </section>
  );
}
