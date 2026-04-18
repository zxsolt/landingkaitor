"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const trustPoints = [
  { label: "Precio cerrado" },
  { label: "Sin permanencia" },
  { label: "El código es tuyo" },
  { label: "Respuesta en 24h" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20 pb-12 flex items-center justify-center">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-network-premium-v3.png"
        style={{ filter: "brightness(0.74) saturate(1.02)" }}
      >
        <source src="/hero-network-veo3.mp4" type="video/mp4" />
      </video>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 35% at 50% 46%, rgba(2,201,120,0.14) 0%, rgba(2,201,120,0.04) 40%, transparent 72%)",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.16, 0.32, 0.16] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Dark veil for copy readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 45%, rgba(8,11,10,0.45) 0%, rgba(8,11,10,0.82) 70%, rgba(8,11,10,0.94) 100%)",
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/grain-01.png)",
          backgroundSize: "cover",
          opacity: 0.18,
          mixBlendMode: "screen",
        }}
      />

      {/* Dot grid centered */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(2,201,120,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 62% 75% at 50% 46%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 75% at 50% 46%, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-5 rounded-3xl border border-[#f0f5f2]/8 bg-black/30 backdrop-blur-[2px] px-5 py-8 md:px-8"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-[#02c978]/22 bg-[#02c978]/7 text-[#02c978] text-xs font-mono tracking-wide">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#02c978] shrink-0"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 6px rgba(2,201,120,0.9)" }}
              />
              Automatización · Integraciones · Software a medida
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(2.6rem,5.3vw,5.4rem)",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
            }}
            className="font-bold text-[#f0f5f2]"
          >
            Tu equipo pierde horas
            <br />
            en tareas que debería
            <br />
            hacer{" "}
            <span
              style={{ color: "#02c978", textShadow: "0 0 80px rgba(2,201,120,0.45)" }}
            >
              el sistema.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[#f0f5f2]/64 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Automatizamos, conectamos herramientas y construimos software interno
            a medida para pymes españolas. Precio cerrado, código tuyo.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-1"
          >
            <Link
              href="#contacto"
              className="group relative px-6 py-3 rounded-xl bg-[#02c978] text-[#080b0a] text-sm font-bold hover:bg-[#01a060] transition-all duration-200 flex items-center gap-2 overflow-hidden"
              style={{ boxShadow: "0 0 32px rgba(2,201,120,0.35)" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
              Diagnóstico gratuito
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#como-trabajamos"
              className="px-6 py-3 rounded-xl border border-[#F0F0F0]/10 text-[#F0F0F0]/70 text-sm font-medium hover:border-[#02c978]/30 hover:text-[#02c978] transition-all duration-300 text-center"
            >
              Ver cómo trabajamos
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-3 border-t border-[#F0F0F0]/8 w-full max-w-3xl"
          >
            {trustPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="w-1 h-1 rounded-full bg-[#02c978]"
                  style={{ boxShadow: "0 0 4px rgba(2,201,120,0.8)" }}
                />
                <span className="font-mono text-[10px] text-[#F0F0F0]/42 tracking-wide">
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080b0a, transparent)" }}
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="font-mono text-[9px] text-[#F0F0F0]/18 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          className="w-px h-7 rounded-full"
          style={{
            background: "linear-gradient(to bottom, rgba(2,201,120,0.4), transparent)",
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
