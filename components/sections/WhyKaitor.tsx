"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const reasons = [
  {
    tag: "Pricing",
    title: "Precio cerrado desde el primer día",
    body: "Sabes exactamente cuánto vas a pagar antes de empezar. Sin sorpresas, sin reuniones para justificar horas, sin letra pequeña.",
    metric: "Precio cerrado",
    metricLabel: "antes de empezar",
  },
  {
    tag: "Comunicación",
    title: "Trato directo, sin intermediarios",
    body: "Hablas con quien resuelve el problema, no con un account manager. Sin tecnicismos, sin traducciones — directo al grano.",
    metric: "Trato directo",
    metricLabel: "con quien te resuelve",
  },
  {
    tag: "Compromiso",
    title: "Sin contratos de permanencia",
    body: "No te atamos. Si en algún momento no tiene sentido seguir, no hay penalización. Nos quedamos porque aportamos valor, no porque firmes un contrato.",
    metric: "Sin permanencia",
    metricLabel: "cancela cuando quieras",
  },
];

function ReasonCard({ r, i }: { r: (typeof reasons)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / (rect.height / 2)) * -5);
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.12 }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <SpotlightCard
        className="h-full rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#00D4A0]/20 transition-colors duration-300 flex flex-col overflow-hidden"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
      >
        <div className="p-7 flex flex-col flex-1">
          {/* tag */}
          <span className="font-mono text-[10px] text-[#F0F0F0]/20 tracking-widest uppercase mb-6 block">
            {r.tag}
          </span>

          {/* Metric — reveals with blur when in view */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.3, ease: "easeOut" }}
              className="text-2xl font-black text-[#00D4A0] leading-none"
              style={{ textShadow: "0 0 40px rgba(0,212,160,0.4)" }}
            >
              {r.metric}
            </motion.div>
            <div className="font-mono text-[10px] text-[#F0F0F0]/30 tracking-wide mt-1">
              {r.metricLabel}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[#F0F0F0] mb-3 leading-snug">
            {r.title}
          </h3>

          {/* Body */}
          <p className="text-[#F0F0F0]/40 text-sm leading-relaxed flex-1">
            {r.body}
          </p>

          {/* Background glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(0,212,160,0.08) 0%, transparent 70%)",
            }}
          />
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function WhyKaitor() {
  return (
    <section id="por-que-kaitor" className="relative py-28 md:py-36 px-6 section-alt" style={{ overflow: "clip" }}>
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,160,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Ghost "KAITOR" behind cards */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          style={{
            fontSize: "clamp(100px, 22vw, 260px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,212,160,0.045)",
            lineHeight: 1,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          KAITOR
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mb-16"
        >
          <SectionLabel>Por qué Kaitor</SectionLabel>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Precio cerrado desde el primer día.
            <br />
            Trato directo, sin intermediarios.
            <br />
            <span className="text-[#00D4A0]">Sin contratos de permanencia.</span>
          </h2>
        </motion.div>

        {/* Reason cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <ReasonCard key={i} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
