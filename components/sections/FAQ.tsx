"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "El precio siempre es cerrado y lo tienes por escrito antes de empezar — sin sorpresas ni costes adicionales. El diagnóstico previo es siempre gratuito.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Depende del alcance, pero en menos de 3 días tenemos una propuesta. Para proyectos de automatización o integraciones sencillas, podemos entregar en 2–4 semanas. Para herramientas más complejas, entre 6 y 12 semanas.",
  },
  {
    q: "¿Qué pasa si no sé exactamente qué necesito?",
    a: "Es lo más normal. Por eso el primer paso es siempre una conversación — sin coste, sin compromiso. Tú nos cuentas qué está fallando en tu negocio y nosotros te decimos si podemos resolverlo y cómo.",
  },
  {
    q: "¿Tenéis contratos de permanencia?",
    a: "No. El mantenimiento y la evolución posterior al proyecto funcionan mes a mes, sin permanencia. Puedes cancelar cuando quieras. Seguimos ahí porque aportamos valor, no porque tengas un contrato.",
  },
  {
    q: "¿Trabajáis con empresas de cualquier sector?",
    a: "Trabajamos con empresas B2B y con empresas B2C medianas y grandes que tienen procesos manuales, herramientas desconectadas o necesitan una solución específica que no existe en el mercado. El sector no importa — importa el problema.",
  },
  {
    q: "¿Qué tecnologías usáis?",
    a: "Las que mejor resuelven el problema — no las que están de moda. Backend, APIs, automatización, inteligencia artificial aplicada. No te vamos a aburrir con tecnicismos: solo te explicamos qué va a mejorar en tu negocio.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-[#F0F0F0]/6 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors duration-200 ${open ? "text-[#00D4A0]" : "text-[#F0F0F0]/80 group-hover:text-[#F0F0F0]"}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 rounded-full border border-[#F0F0F0]/10 flex items-center justify-center group-hover:border-[#00D4A0]/30 transition-colors duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke={open ? "#00D4A0" : "rgba(240,240,240,0.5)"} strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#F0F0F0]/45 leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 500,
          background: "radial-gradient(circle, rgba(0,212,160,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
              Dudas que todos tienen
              <br />
              <span className="text-[#F0F0F0]/35">antes de escribirnos.</span>
            </h2>
            <p className="mt-5 text-[#F0F0F0]/40 text-sm leading-relaxed max-w-xs">
              Si tienes una pregunta que no está aquí, escríbenos. Respondemos en menos de 24h.
            </p>
            <a
              href="mailto:hola@kaitor.com"
              className="inline-flex items-center gap-2 mt-6 text-sm font-mono text-[#00D4A0]/70 hover:text-[#00D4A0] transition-colors duration-200"
            >
              hola@kaitor.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right — accordion */}
          <div className="divide-y divide-[#F0F0F0]/0">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
