"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    setValue(0);
    const steps = Math.max(30, Math.round(duration / 16));
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (frame >= steps) {
        setValue(target);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

const stats = [
  {
    prefix: "",
    value: 12,
    suffix: " sem",
    label: "Tiempo de entrega",
    sub: "máximo por proyecto",
  },
  {
    prefix: "",
    value: 0,
    suffix: "€",
    label: "Diagnóstico inicial",
    sub: "siempre gratuito",
  },
  {
    prefix: "",
    value: 60,
    suffix: " min",
    label: "Para entenderte",
    sub: "una sola reunión",
  },
];

function StatItem({
  stat,
  active,
  i,
}: {
  stat: (typeof stats)[0];
  active: boolean;
  i: number;
}) {
  const count = useCountUp(stat.value === 0 ? 0 : stat.value, 900 + i * 120, active);
  const display = stat.value === 0 ? 0 : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-6 py-8 relative"
    >
      {/* Big number */}
      <div
        className="font-black leading-none tracking-tight tabular-nums"
        style={{
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          color: "#00D4A0",
          textShadow: active
            ? "0 0 80px rgba(0,212,160,0.35), 0 0 30px rgba(0,212,160,0.2)"
            : "none",
          transition: "text-shadow 0.5s ease",
        }}
      >
        {stat.prefix && count >= stat.value && (
          <span
            className="font-bold"
            style={{ fontSize: "55%", opacity: 0.6, marginRight: "2px" }}
          >
            {stat.prefix}
          </span>
        )}
        {display}
        <span className="font-bold" style={{ fontSize: "45%", opacity: 0.55 }}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="mt-3">
        <div className="text-[#F0F0F0]/80 font-semibold text-sm tracking-tight">
          {stat.label}
        </div>
        <div className="font-mono text-[10px] text-[#F0F0F0]/30 tracking-widest uppercase mt-0.5">
          {stat.sub}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Top border — gradient green line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,212,160,0.25) 30%, rgba(0,212,160,0.5) 50%, rgba(0,212,160,0.25) 70%, transparent 100%)",
        }}
      />
      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(0,212,160,0.12) 30%, rgba(0,212,160,0.25) 50%, rgba(0,212,160,0.12) 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,160,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,212,160,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="relative">
              {/* Vertical divider */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 hidden md:block"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)",
                  }}
                />
              )}
              <StatItem stat={stat} active={inView} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
