"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Mapeamos tus procesos y encontramos exactamente dónde pierdes tiempo y dinero.",
    tag: "Siempre gratuito",
  },
  {
    number: "02",
    title: "Plan de acción",
    body: "Plano visual de lo que vamos a construir, cómo y cuánto cuesta. Precio cerrado antes de empezar.",
    tag: "Sin sorpresas",
  },
  {
    number: "03",
    title: "Construcción",
    body: "Construimos integrado con tus herramientas actuales. Sin romper lo que ya funciona. El código queda en ti.",
    tag: "Código tuyo",
  },
  {
    number: "04",
    title: "Lanzamiento",
    body: "Formamos a tu equipo y monitorizamos hasta que funciona de verdad. No desaparecemos el día del lanzamiento.",
    tag: "Soporte incluido",
  },
];

function StepNode({ step, i }: { step: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center relative"
    >
      {/* Number circle */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 shrink-0"
        style={{
          border: "1.5px solid rgba(2,201,120,0.35)",
          background: "rgba(2,201,120,0.07)",
          boxShadow: "0 0 32px rgba(2,201,120,0.15)",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.14 + 0.25 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#02c978",
            letterSpacing: "-0.03em",
          }}
        >
          {step.number}
        </motion.span>
      </div>

      {/* Tag */}
      <span
        className="font-mono text-[9px] tracking-widest uppercase mb-3 block"
        style={{ color: "rgba(2,201,120,0.6)" }}
      >
        {step.tag}
      </span>

      {/* Title */}
      <h3
        className="font-bold text-[#f0f5f2] mb-2"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}
      >
        {step.title}
      </h3>

      {/* Body */}
      <p className="text-[#f0f5f2]/45 text-sm leading-relaxed max-w-[200px]">
        {step.body}
      </p>
    </motion.div>
  );
}

export default function HowWeWork() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <section id="como-trabajamos" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <h2
            className="font-bold text-[#f0f5f2] mt-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem,3.8vw,3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Primero entendemos tu negocio.
            <br />
            <span style={{ color: "rgba(240,245,242,0.38)" }}>
              Después construimos exactamente lo que necesita.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <motion.div
              className="h-full origin-left"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(to right, rgba(2,201,120,0.4), rgba(2,201,120,0.15))",
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <StepNode key={i} step={step} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
