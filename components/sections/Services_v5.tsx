"use client";

import { useRef, useState, useEffect } from "react";
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
    topColor: "#00D4A0",
    topColorDim: "rgba(0,212,160,0.15)",
  },
  {
    number: "02",
    label: "Integración / APIs",
    problem: "Tus herramientas no se hablan entre sí",
    body: "Tu CRM está desconectado de tu contabilidad. Tu web no sincroniza con tu almacén. Cada herramienta es una isla. Conectarlas no es complicado — solo hay que hacerlo.",
    cta: "Conectamos tus sistemas",
    topColor: "#38BDF8",
    topColorDim: "rgba(56,189,248,0.15)",
  },
  {
    number: "03",
    label: "Software a medida",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Las decisiones importantes se toman con datos de hace tres días. Los informes se preparan a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    cta: "Construimos la herramienta",
    topColor: "#A78BFA",
    topColorDim: "rgba(167,139,250,0.15)",
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "Tus clientes llegan pero el proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar disponibilidad, pagos gestionados por transferencia, reservas que se cruzan. Construimos el sistema que lo gestiona solo.",
    cta: "Eliminamos el caos",
    topColor: "#FB923C",
    topColorDim: "rgba(251,146,60,0.15)",
  },
  {
    number: "05",
    label: "IA aplicada",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Tu negocio tiene una operativa específica que ningún software estándar resuelve. Clasificación automática, extracción de datos, asistentes internos. Lo construimos desde cero.",
    cta: "Lo construimos desde cero",
    topColor: "#F472B6",
    topColorDim: "rgba(244,114,182,0.15)",
  },
];

export default function ServicesV5() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section id="servicios" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,160,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-14">
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
          <p className="text-[#F0F0F0]/45 leading-relaxed max-w-2xl mt-5 text-base">
            Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no saben
            qué pedir, creen que va a ser caro o han tenido malas experiencias.
          </p>
        </motion.div>
      </div>

      {/* Scroll arrows — desktop */}
      <div className="hidden md:flex items-center justify-end gap-2 px-6 max-w-6xl mx-auto mb-5">
        <button
          onClick={() => scroll("left")}
          className="w-9 h-9 rounded-full border border-[#F0F0F0]/10 flex items-center justify-center text-[#F0F0F0]/40 hover:border-[#00D4A0]/40 hover:text-[#00D4A0] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-9 h-9 rounded-full border border-[#F0F0F0]/10 flex items-center justify-center text-[#F0F0F0]/40 hover:border-[#00D4A0]/40 hover:text-[#00D4A0] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group snap-start shrink-0 relative rounded-2xl overflow-hidden flex flex-col cursor-default"
            style={{
              width: "clamp(280px, 30vw, 340px)",
              height: "480px",
              background: "#0E1318",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            {/* Top gradient fill — the visual */}
            <div
              className="absolute inset-x-0 top-0 h-52 pointer-events-none transition-opacity duration-400"
              style={{
                background: `linear-gradient(180deg, ${s.topColorDim} 0%, rgba(14,19,24,0) 100%)`,
              }}
            />
            <div
              className="absolute inset-x-0 top-0 h-52 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                background: `linear-gradient(180deg, ${s.topColor}22 0%, rgba(14,19,24,0) 100%)`,
              }}
            />

            {/* Number — giant focal element */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 flex items-start justify-center pt-6 pointer-events-none"
            >
              <span
                className="font-black tabular-nums leading-none select-none"
                style={{
                  fontSize: "9rem",
                  color: s.topColor,
                  opacity: 0.12,
                  fontFamily: "var(--font-geist-mono)",
                  transition: "opacity 0.4s",
                }}
              >
                {s.number}
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 flex items-start justify-center pt-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            >
              <span
                className="font-black tabular-nums leading-none select-none"
                style={{
                  fontSize: "9rem",
                  color: s.topColor,
                  opacity: 0.22,
                  fontFamily: "var(--font-geist-mono)",
                  textShadow: `0 0 60px ${s.topColor}`,
                }}
              >
                {s.number}
              </span>
            </div>

            {/* Content bottom */}
            <div className="relative z-10 mt-auto p-7 flex flex-col">
              {/* Label badge */}
              <span
                className="self-start font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full mb-5"
                style={{
                  color: s.topColor,
                  background: `${s.topColor}14`,
                  border: `1px solid ${s.topColor}30`,
                }}
              >
                {s.label}
              </span>

              {/* Problem */}
              <h3 className="text-base font-black text-[#F0F0F0] leading-snug mb-3">
                &ldquo;{s.problem}&rdquo;
              </h3>

              {/* Body — fades in on hover */}
              <p className="text-[#F0F0F0]/40 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden transition-all">
                {s.body}
              </p>

              {/* CTA */}
              <div
                className="mt-5 flex items-center gap-2 text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: s.topColor }}
              >
                <span className="w-4 h-px" style={{ background: s.topColor }} />
                {s.cta}
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="snap-start shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between p-7"
          style={{
            width: "clamp(260px, 28vw, 300px)",
            height: "480px",
            background: "linear-gradient(145deg, rgba(0,212,160,0.1) 0%, rgba(0,212,160,0.02) 100%)",
            border: "1px solid rgba(0,212,160,0.22)",
          }}
        >
          <div>
            <span className="font-mono text-[9px] text-[#00D4A0]/60 tracking-widest uppercase block mb-5">
              Tu caso
            </span>
            <h3 className="text-xl font-black text-[#F0F0F0] leading-snug">
              ¿Tu problema no encaja en ninguna categoría?
            </h3>
            <p className="mt-4 text-[#F0F0F0]/40 text-sm leading-relaxed">
              No pasa nada. Cuéntanoslo y lo analizamos juntos — sin coste, sin compromiso.
            </p>
          </div>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200"
            style={{ boxShadow: "0 0 24px rgba(0,212,160,0.3)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>

        {/* Right padding */}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      {/* Progress bar */}
      <div className="px-6 max-w-6xl mx-auto mt-8">
        <div className="h-px bg-[#F0F0F0]/6 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "#00D4A0",
              width: `${Math.max(8, progress * 100)}%`,
              boxShadow: "0 0 8px rgba(0,212,160,0.6)",
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 p-8 rounded-2xl border border-[#00D4A0]/10 bg-[#00D4A0]/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#F0F0F0]/70 text-base font-medium">
              ¿Te has reconocido pero no has hecho nada? Normal.
            </p>
            <p className="text-[#F0F0F0]/40 text-sm mt-1">
              El primer paso es una conversación — sin coste, sin compromiso y sin jerga técnica.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 24px rgba(0,212,160,0.25)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
