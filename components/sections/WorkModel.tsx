"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const phases = [
  {
    number: "01",
    badge: "100% gratuito · Sin compromiso",
    badgeColor: "text-[#02c978]/60",
    title: "Diagnóstico o auditoría",
    body: "Una conversación directa para entender qué está fallando y si podemos resolverlo. Sin formularios largos, sin presentaciones. Solo cuéntanos el problema.",
    highlight: "0€",
    highlightLabel: "siempre",
    borderClass: "border-[#02c978]/20",
    bgClass: "bg-[#0E1318]",
  },
  {
    number: "02",
    badge: "Precio cerrado desde el primer día",
    badgeColor: "text-[#F0F0F0]/40",
    title: "Proyecto cerrado",
    body: "Una vez entendemos el problema, te enviamos una propuesta con alcance, precio y plazos exactos. No empezamos hasta que estás de acuerdo con todo.",
    highlight: "3.000–8.000€",
    highlightLabel: "ticket medio",
    borderClass: "border-[#F0F0F0]/8",
    bgClass: "bg-[#0E1318]",
  },
  {
    number: "03",
    badge: "A tu ritmo · Sin permanencia",
    badgeColor: "text-[#F0F0F0]/40",
    title: "Mantenimiento y evolución",
    body: "La herramienta crece con tu negocio. Añadimos funcionalidades, corregimos lo que cambia y aseguramos que todo funciona — mes a mes, sin compromisos de largo plazo.",
    highlight: "Sin contrato",
    highlightLabel: "de permanencia",
    borderClass: "border-[#F0F0F0]/8",
    bgClass: "bg-[#0E1318]",
  },
];

function PhaseCard({ phase, i }: { phase: (typeof phases)[0]; i: number }) {
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
        className={`h-full rounded-2xl border ${phase.borderClass} ${phase.bgClass} hover:border-[#02c978]/25 transition-colors duration-300 flex flex-col`}
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
      >
        <div className="p-7 flex flex-col flex-1">
          {/* Step number + highlight metric */}
          <div className="flex items-start justify-between mb-5">
            <span
              className="font-mono text-3xl font-bold leading-none"
              style={{ color: "rgba(2,201,120,0.15)", letterSpacing: "-0.02em" }}
            >
              {phase.number}
            </span>
            {/* Highlight metric — reveals with blur */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.35, ease: "easeOut" }}
              className="text-right"
            >
              <div className="text-lg font-black text-[#F0F0F0] leading-none">
                {phase.highlight}
              </div>
              <div className="font-mono text-[10px] text-[#F0F0F0]/30 mt-1 tracking-wide">
                {phase.highlightLabel}
              </div>
            </motion.div>
          </div>

          {/* Badge */}
          <span className={`font-mono text-[10px] tracking-wide uppercase block mb-4 ${phase.badgeColor}`}>
            {phase.badge}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#F0F0F0] mb-3 leading-snug">
            {phase.title}
          </h3>

          {/* Body */}
          <p className="text-[#F0F0F0]/40 text-sm leading-relaxed flex-1">
            {phase.body}
          </p>

          {/* Bottom line */}
          <div
            className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
            style={{ background: "linear-gradient(to right, rgba(2,201,120,0.3), transparent)" }}
          />
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function WorkModel() {
  return (
    <section id="modelo" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Left bottom glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(2,201,120,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <SectionLabel>Modelo de trabajo</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Claro desde el primer día.
            <br />
            <span className="text-[#F0F0F0]/40">Sin letra pequeña.</span>
          </h2>
        </motion.div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <PhaseCard key={i} phase={phase} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
