"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import HeroIsometric from "./HeroIsometric";
import { useEffect } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const trustPoints = [
  { label: "B2B y B2C", icon: "○" },
  { label: "Trato directo", icon: "○" },
  { label: "Respuesta en 24h", icon: "○" },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 22 });
  const orb1X = useTransform(springX, (v) => v * -20);
  const orb1Y = useTransform(springY, (v) => v * -15);
  const orb2X = useTransform(springX, (v) => v * 14);
  const orb2Y = useTransform(springY, (v) => v * 10);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20 pb-12 flex items-center">

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

      {/* Dot grid — left half only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,212,160,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 25% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 25% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Orb 1 — gran blob verde izquierda (dialedweb-style) */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 1100,
          height: 900,
          top: "-20%",
          left: "-20%",
          x: orb1X,
          y: orb1Y,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,160,0.32) 0%, rgba(0,212,160,0.10) 40%, transparent 68%)",
          filter: "blur(90px)",
        }}
      />

      {/* Orb 2 — blob derecha (acento azul-verde para contraste) */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 900,
          height: 800,
          bottom: "-15%",
          right: "-10%",
          x: orb2X,
          y: orb2Y,
          background:
            "radial-gradient(circle, rgba(0,130,120,0.18) 0%, rgba(0,80,160,0.08) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Orb 3 — pequeño acento superior derecha */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: "5%",
          right: "15%",
          background:
            "radial-gradient(circle, rgba(0,212,160,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Asymmetric 50/50 layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* LEFT — text, left-aligned */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-5"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-[#00D4A0]/22 bg-[#00D4A0]/7 text-[#00D4A0] text-xs font-mono tracking-wide">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#00D4A0] shrink-0"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  style={{ boxShadow: "0 0 6px rgba(0,212,160,0.9)" }}
                />
                Automatización · Integraciones · Software a medida
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[clamp(2.4rem,4.2vw,4rem)] font-black leading-[1.05] tracking-tight text-[#F0F0F0]"
            >
              Para que tu equipo
              <br />
              haga{" "}
              <span
                className="text-[#00D4A0]"
                style={{ textShadow: "0 0 60px rgba(0,212,160,0.35)" }}
              >
                lo que importa,
              </span>
              <br />
              no lo que se repite.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-[#F0F0F0]/52 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Automatizamos procesos, conectamos herramientas y construimos
              software a medida para empresas B2B y B2C. Precio cerrado, sin permanencia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-1"
            >
              <Link
                href="#contacto"
                className="group relative px-6 py-3 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] transition-all duration-200 flex items-center gap-2 overflow-hidden"
                style={{ boxShadow: "0 0 32px rgba(0,212,160,0.3)" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                Diagnóstico gratuito
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#como-trabajamos"
                className="px-6 py-3 rounded-xl border border-[#F0F0F0]/10 text-[#F0F0F0]/60 text-sm font-medium hover:border-[#00D4A0]/30 hover:text-[#00D4A0] transition-all duration-300 text-center"
              >
                Ver cómo trabajamos
              </Link>
            </motion.div>

            {/* Trust micro-signals */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 border-t border-[#F0F0F0]/6 w-full"
            >
              {trustPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className="w-1 h-1 rounded-full bg-[#00D4A0]"
                    style={{ boxShadow: "0 0 4px rgba(0,212,160,0.8)" }}
                  />
                  <span className="font-mono text-[10px] text-[#F0F0F0]/32 tracking-wide">
                    {p.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — product demo, visible above fold */}
          <motion.div
            initial={{ opacity: 0, x: 32, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <HeroIsometric />
          </motion.div>
        </div>

      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #06080B, transparent)" }}
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
            background: "linear-gradient(to bottom, rgba(0,212,160,0.4), transparent)",
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
