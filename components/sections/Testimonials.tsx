"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const testimonials = [
  {
    quote:
      "En tres semanas teníamos un sistema que conectaba nuestro ERP con el almacén en tiempo real. Algo que llevábamos dos años postergando porque 'era muy complicado'.",
    name: "Carlos M.",
    role: "Director de Operaciones",
    company: "Distribuidora Ibérica",
    initials: "CM",
    sector: "Logística · 45 empleados",
    highlight: "2 años → 3 semanas",
  },
  {
    quote:
      "Lo que más me sorprendió fue la honestidad. Diagnóstico gratuito, propuesta en dos días con precio cerrado. Sin reuniones para justificar horas. Exactamente lo que prometieron.",
    name: "Laura S.",
    role: "CEO",
    company: "Clínica Dental Sonrisa",
    initials: "LS",
    sector: "Salud · 18 empleados",
    highlight: "Precio cerrado desde el día 1",
  },
  {
    quote:
      "Nuestro equipo perdía más de 40 horas semanales introduciendo datos manualmente entre sistemas. Ahora ese proceso lo hace solo. Hemos reorientado ese tiempo a ventas.",
    name: "Marcos F.",
    role: "Gerente General",
    company: "Importaciones MF",
    initials: "MF",
    sector: "Importación · 32 empleados",
    highlight: "+40h/semana recuperadas",
  },
  {
    quote:
      "Lo que más valoro es que no desaparecieron con la factura. En los últimos cuatro meses han mejorado la herramienta tres veces adaptándola a cómo ha crecido el negocio.",
    name: "Patricia V.",
    role: "Directora Comercial",
    company: "Constructora Vidal",
    initials: "PV",
    sector: "Construcción · 60 empleados",
    highlight: "Socio a largo plazo",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#00D4A0" style={{ filter: "drop-shadow(0 0 3px rgba(0,212,160,0.6))" }}>
          <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 3 10.5l.6-3.2L1.2 5 4.5 4.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, i }: { t: (typeof testimonials)[0]; i: number }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / (rect.height / 2)) * -4);
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 4);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <SpotlightCard
        className="h-full rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#00D4A0]/15 transition-colors duration-300 flex flex-col"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.025)" }}
      >
        <div className="p-7 flex flex-col flex-1">
          {/* Stars + highlight pill */}
          <div className="flex items-center justify-between mb-5">
            <Stars />
            <span
              className="font-mono text-[9px] px-2.5 py-1 rounded-full border tracking-wide"
              style={{
                color: "rgba(0,212,160,0.7)",
                borderColor: "rgba(0,212,160,0.15)",
                background: "rgba(0,212,160,0.06)",
              }}
            >
              {t.highlight}
            </span>
          </div>

          {/* Quote mark */}
          <div
            className="text-5xl leading-none mb-2 font-serif select-none"
            style={{ color: "rgba(0,212,160,0.15)" }}
          >
            "
          </div>

          {/* Quote text */}
          <p className="text-[#F0F0F0]/60 text-sm leading-relaxed flex-1 italic">
            {t.quote}
          </p>

          {/* Divider */}
          <div
            className="my-5 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(0,212,160,0.15), transparent)",
            }}
          />

          {/* Author */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0"
              style={{
                background: "rgba(0,212,160,0.1)",
                border: "1px solid rgba(0,212,160,0.2)",
                color: "#00D4A0",
              }}
            >
              {t.initials}
            </div>
            <div>
              <div className="text-[#F0F0F0]/80 text-sm font-semibold leading-tight">
                {t.name}
              </div>
              <div className="font-mono text-[9px] text-[#F0F0F0]/30 tracking-wide mt-0.5">
                {t.role} · {t.company}
              </div>
              <div className="font-mono text-[8px] text-[#F0F0F0]/18 tracking-widest uppercase mt-0.5">
                {t.sector}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden section-alt">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,160,0.06) 0%, transparent 65%)",
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
          <SectionLabel>Lo que dicen los clientes</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Resultados reales.
            <br />
            <span className="text-[#F0F0F0]/40">Empresas como la tuya.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>

        {/* Trust footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["CM", "LS", "MF", "PV"].map((init, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#06080B] flex items-center justify-center font-mono text-[8px] font-bold"
                  style={{
                    background: `rgba(0,212,160,${0.08 + i * 0.03})`,
                    color: "#00D4A0",
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="font-mono text-xs text-[#F0F0F0]/35 tracking-wide">
              Empresas que ya trabajan con nosotros
            </span>
          </div>
          <div
            className="hidden sm:block w-px h-5"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="flex items-center gap-1.5">
            <Stars />
            <span className="font-mono text-xs text-[#F0F0F0]/35 tracking-wide">
              5.0 · Sin una sola queja
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
