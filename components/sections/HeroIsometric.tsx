"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const workflowSteps = [
  { label: "Pedido recibido por email", done: true },
  { label: "Datos extraídos y validados", done: true },
  { label: "Equipo notificado en Slack", done: true },
  { label: "CRM y ERP sincronizados", active: true },
];

const liveEvents = [
  { text: "Pedido #4821 procesado sin intervención", time: "ahora" },
  { text: "Informe mensual generado y enviado", time: "3m" },
  { text: "Factura creada · cliente Grupo Norma", time: "9m" },
  { text: "Lead cualificado → CRM automático", time: "17m" },
];

const integrations = ["Excel", "Slack", "SAP", "Notion", "Gmail", "HubSpot", "Shopify", "Airtable"];

const CheckIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1 4l2 2 4-4" stroke="#02c978" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroIsometric() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 28, damping: 22 });
  const sy = useSpring(mouseY, { stiffness: 28, damping: 22 });
  const px = useTransform(sx, [-1, 1], [-10, 10]);
  const py = useTransform(sy, [-1, 1], [-6, 6]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-full select-none"
      style={{ height: 520, x: px, y: py }}
    >
      {/* Ambient glow behind panels */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480,
          top: "50%", left: "45%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(2,201,120,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── PANEL PRINCIPAL: flujo de automatización ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="absolute"
        style={{ top: 48, left: 0, width: 330 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          className="rounded-2xl p-5 border"
          style={{
            background: "rgba(8, 12, 18, 0.88)",
            borderColor: "rgba(2,201,120,0.20)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.55)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1.5 h-1.5 rounded-full bg-[#02c978]"
              style={{ boxShadow: "0 0 5px rgba(2,201,120,0.9)" }}
            />
            <span className="font-mono text-[10px] text-[#02c978]/75 tracking-widest uppercase">
              Flujo en ejecución
            </span>
            <span className="ml-auto font-mono text-[9px] text-[#F0F0F0]/22">
              0.4s · sin errores
            </span>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {workflowSteps.map((step, i) => (
              <div key={i} className="flex items-stretch gap-3">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: step.active
                        ? "rgba(2,201,120,0.18)"
                        : "rgba(2,201,120,0.08)",
                      border: `1px solid rgba(2,201,120,${step.active ? 0.55 : 0.22})`,
                      boxShadow: step.active ? "0 0 10px rgba(2,201,120,0.25)" : "none",
                    }}
                  >
                    {step.active ? (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#02c978]"
                      />
                    ) : (
                      <CheckIcon />
                    )}
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{ background: "rgba(2,201,120,0.12)", minHeight: 10 }}
                    />
                  )}
                </div>

                {/* Label */}
                <div className="py-1.5">
                  <span
                    className="text-[11px] leading-snug"
                    style={{ color: step.active ? "rgba(240,240,240,0.90)" : "rgba(240,240,240,0.45)" }}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-3 pt-3 border-t border-[#F0F0F0]/5 flex items-center justify-between">
            <span className="font-mono text-[9px] text-[#F0F0F0]/22">
              Sin intervención manual
            </span>
            <span className="font-mono text-[9px] text-[#02c978]/55">
              847 ejecuciones hoy ↑
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── METRIC CARD: horas ahorradas ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.42, ease: "easeOut" }}
        className="absolute"
        style={{ top: 24, right: 0, width: 158 }}
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="rounded-xl p-4 border"
          style={{
            background: "rgba(8, 12, 18, 0.90)",
            borderColor: "rgba(2,201,120,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 16px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="font-mono text-[9px] text-[#F0F0F0]/28 tracking-widest uppercase mb-2">
            Horas liberadas
          </div>
          <div
            className="text-[2.6rem] font-black leading-none text-[#02c978]"
            style={{ textShadow: "0 0 24px rgba(2,201,120,0.45)" }}
          >
            28h
          </div>
          <div className="font-mono text-[9px] text-[#F0F0F0]/25 mt-1">
            esta semana
          </div>
          {/* Mini sparkline */}
          <div className="flex items-end gap-0.5 mt-3 h-7">
            {[0.35, 0.5, 0.45, 0.65, 0.7, 0.85, 1].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.3, ease: "easeOut" }}
                style={{
                  height: `${h * 100}%`,
                  background: i === 6
                    ? "rgba(2,201,120,0.75)"
                    : `rgba(2,201,120,${0.12 + h * 0.12})`,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── LIVE FEED ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.62, ease: "easeOut" }}
        className="absolute"
        style={{ bottom: 30, right: 0, width: 238 }}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 2 }}
          className="rounded-xl p-4 border"
          style={{
            background: "rgba(8, 12, 18, 0.85)",
            borderColor: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 16px 40px rgba(0,0,0,0.45)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.3 }}
              className="w-1.5 h-1.5 rounded-full bg-[#02c978]"
            />
            <span className="font-mono text-[9px] text-[#F0F0F0]/32 tracking-widest uppercase">
              Actividad en vivo
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            {liveEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-2"
              >
                <div
                  className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                  style={{ background: "rgba(2,201,120,0.45)" }}
                />
                <span
                  className="text-[10px] leading-tight flex-1"
                  style={{ color: "rgba(240,240,240,0.42)" }}
                >
                  {event.text}
                </span>
                <span className="font-mono text-[8px] text-[#F0F0F0]/18 shrink-0 mt-0.5">
                  {event.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── INTEGRACIONES ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.78, ease: "easeOut" }}
        className="absolute"
        style={{ bottom: 28, left: 0, width: 300 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.8 }}
          className="rounded-xl px-4 py-3.5 border"
          style={{
            background: "rgba(8, 12, 18, 0.82)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 12px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="font-mono text-[9px] text-[#F0F0F0]/25 tracking-widest uppercase mb-2.5">
            Conecta con las herramientas que ya usas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {integrations.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.055, duration: 0.25 }}
                className="px-2 py-0.5 rounded-md font-mono text-[9px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(240,240,240,0.45)",
                }}
              >
                {tool}
              </motion.span>
            ))}
            <span
              className="px-2 py-0.5 rounded-md font-mono text-[9px]"
              style={{
                background: "rgba(2,201,120,0.07)",
                border: "1px solid rgba(2,201,120,0.15)",
                color: "rgba(2,201,120,0.55)",
              }}
            >
              + más
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
