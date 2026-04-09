"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { useState, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const steps = [
  {
    number: "01",
    badge: "100% gratuito · Sin compromiso",
    badgeColor: "text-[#00D4A0]/60",
    title: "Diagnóstico",
    body: "Una conversación directa para entender qué está fallando en tu negocio. No necesitas saber qué tecnología necesitas. Solo cuéntanos el problema.",
    highlight: "0€",
    highlightLabel: "siempre gratuito",
    expanded: "Analizamos procesos, herramientas actuales y cuellos de botella. En 60 minutos tenemos una imagen clara de qué resolver primero y cómo. Sin coste, sin compromiso, sin formularios.",
  },
  {
    number: "02",
    badge: "Precio cerrado · Sin sorpresas",
    badgeColor: "text-[#F0F0F0]/40",
    title: "Propuesta",
    body: "Te presentamos exactamente qué vamos a construir, cómo, y cuánto cuesta. Todo por escrito antes de empezar. Sin letra pequeña.",
    highlight: "Precio cerrado",
    highlightLabel: "antes de empezar",
    expanded: "Recibes un documento con: alcance exacto, tecnología propuesta en lenguaje humano, precio fijo, plazos de entrega y qué mejorará en tu empresa cuando esté listo. Sin ambigüedad.",
  },
  {
    number: "03",
    badge: "Sin permanencia · A tu ritmo",
    badgeColor: "text-[#F0F0F0]/40",
    title: "Entrega y mantenimiento",
    body: "Entregamos lo que prometimos. Para seguir evolucionando la herramienta, ofrecemos mantenimiento mensual sin permanencia — solo cuando lo necesites.",
    highlight: "Sin contrato",
    highlightLabel: "de permanencia",
    expanded: "El día de la entrega tu equipo puede usar la herramienta. Incluye formación, documentación y soporte inicial. Después, evolucionamos mes a mes según tus necesidades — sin contratos de permanencia.",
  },
];

function StepCard({ step, i }: { step: typeof steps[0]; i: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen) return;
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
        className={`h-full rounded-2xl border transition-all duration-300 flex flex-col cursor-pointer select-none ${
          isOpen
            ? "border-[#00D4A0]/30 bg-[#0E1318]"
            : "border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#00D4A0]/18"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 0 40px rgba(0,212,160,0.08), inset 0 1px 0 rgba(255,255,255,0.02)"
            : "inset 0 1px 0 rgba(255,255,255,0.02)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-7 flex flex-col flex-1">
          {/* Top: number + highlight metric */}
          <div className="flex items-start justify-between mb-5">
            <motion.span
              className="font-mono text-3xl font-bold leading-none"
              animate={{ color: isOpen ? "rgba(0,212,160,0.4)" : "rgba(0,212,160,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{ letterSpacing: "-0.02em" }}
            >
              {step.number}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.35 }}
              className="text-right"
            >
              <div
                className="text-base font-black leading-none"
                style={{ color: isOpen ? "#00D4A0" : "#F0F0F0" }}
              >
                {step.highlight}
              </div>
              <div className="font-mono text-[10px] text-[#F0F0F0]/30 mt-1 tracking-wide">
                {step.highlightLabel}
              </div>
            </motion.div>
          </div>

          {/* Badge */}
          <span className={`font-mono text-[10px] tracking-widest uppercase block mb-4 ${step.badgeColor}`}>
            {step.badge}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#F0F0F0] mb-3 leading-snug">{step.title}</h3>

          {/* Body */}
          <p className="text-[#F0F0F0]/45 text-sm leading-relaxed flex-1">{step.body}</p>

          {/* Expanded detail */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-[#00D4A0]/15">
                  <p className="text-[#F0F0F0]/60 text-xs leading-relaxed">{step.expanded}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle indicator */}
          <div className="mt-5 flex items-center justify-between">
            <div
              className="h-px flex-1 rounded-full transition-all duration-500"
              style={{
                background: isOpen
                  ? "linear-gradient(to right, rgba(0,212,160,0.5), transparent)"
                  : "transparent",
              }}
            />
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="ml-3 w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
              style={{
                borderColor: isOpen ? "rgba(0,212,160,0.5)" : "rgba(240,240,240,0.1)",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M4 1v6M1 4h6"
                  stroke={isOpen ? "#00D4A0" : "rgba(240,240,240,0.4)"}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="relative py-28 md:py-36 px-6 overflow-hidden section-alt">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,160,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Primero entendemos tu negocio.
            <br />
            <span className="text-[#F0F0F0]/40">Después construimos exactamente lo que necesita.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
