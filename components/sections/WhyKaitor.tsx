"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const blocks = [
  {
    tag: "01 · BUILD",
    title: "Construimos",
    body: "Precio cerrado, alcance definido. El código queda en tu empresa, no en la nuestra.",
  },
  {
    tag: "02 · OPERATE",
    title: "Operamos",
    body: "Mantenemos, monitorizamos y mejoramos lo construido. Sin que tengas que contratar a nadie.",
  },
  {
    tag: "03 · EXPAND",
    title: "Crecemos",
    body: "Cuando necesitas más, construimos más. Tu tecnología crece con tu negocio.",
  },
];

const pills = ["El código es tuyo", "Sin contratos", "Trato directo", "Respuesta en 24h"];

export default function WhyKaitor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="por-que-kaitor"
      ref={ref}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "#014d2f" }}
    >
      {/* Subtle noise on green */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.04,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span
            className="font-mono text-[10px] tracking-widest uppercase block mb-4"
            style={{ color: "rgba(2,201,120,0.55)" }}
          >
            Por qué Kaitor
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem,5vw,4.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
              color: "#f0f5f2",
            }}
          >
            Construimos.
            <br />
            Operamos.
            <br />
            Crecemos contigo.
          </motion.h2>
        </div>

        {/* 3 blocks */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "#080b0a",
                border: "1px solid rgba(8,11,10,0.3)",
              }}
            >
              <span
                className="font-mono text-[9px] tracking-widest uppercase"
                style={{ color: "rgba(2,201,120,0.6)" }}
              >
                {b.tag}
              </span>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#f0f5f2", letterSpacing: "-0.025em" }}
              >
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,245,242,0.5)" }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust pills + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(2,201,120,0.12)",
                  color: "#f0f5f2",
                  border: "1px solid rgba(2,201,120,0.2)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 flex items-center gap-2"
            style={{
              background: "#02c978",
              color: "#080b0a",
            }}
          >
            Diagnóstico gratuito →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
