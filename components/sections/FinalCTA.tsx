"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const guarantees = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7l3.5 3.5L12 3" stroke="#00D4A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Respuesta en menos de 24 horas",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7l3.5 3.5L12 3" stroke="#00D4A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Sin jerga técnica — hablamos de tu negocio",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7l3.5 3.5L12 3" stroke="#00D4A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Si no podemos ayudarte, te lo decimos",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7l3.5 3.5L12 3" stroke="#00D4A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Precio cerrado antes de empezar a trabajar",
  },
];

export default function FinalCTA() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field: string) => ({
    background: "rgba(6,8,11,0.8)",
    borderColor: focused === field ? "rgba(0,212,160,0.4)" : "rgba(255,255,255,0.07)",
    boxShadow: focused === field ? "0 0 0 3px rgba(0,212,160,0.07)" : "none",
  });

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,212,160,0.18) 0%, rgba(0,212,160,0.06) 45%, transparent 68%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/grain-02.png)",
          backgroundSize: "cover",
          opacity: 0.1,
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,212,160,0.18), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-start">

          {/* LEFT — trust copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:pt-2"
          >
            <SectionLabel>Contacto</SectionLabel>

            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-tight text-[#F0F0F0] mt-3 mb-5">
              60 minutos para
              <br />
              entender tu negocio.
              <br />
              <span
                className="text-[#00D4A0]"
                style={{ textShadow: "0 0 50px rgba(0,212,160,0.3)" }}
              >
                Sin coste. Sin trampa.
              </span>
            </h2>

            <p className="text-[#F0F0F0]/48 text-base leading-relaxed mb-8 max-w-sm">
              No necesitas saber qué tecnología necesitas. Solo cuéntanos
              qué está fallando — nosotros te decimos si podemos resolverlo
              y cuánto costaría.
            </p>

            {/* Guarantees */}
            <div className="flex flex-col gap-3 mb-10">
              {guarantees.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0,212,160,0.1)",
                      border: "1px solid rgba(0,212,160,0.2)",
                    }}
                  >
                    {g.icon}
                  </div>
                  <span className="text-[#F0F0F0]/55 text-sm">{g.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Direct email */}
            <div
              className="pt-6 border-t border-[#F0F0F0]/6"
            >
              <p className="font-mono text-[10px] text-[#F0F0F0]/25 tracking-widest uppercase mb-2">
                O escríbenos directamente
              </p>
              <a
                href="mailto:hola@kaitor.com"
                className="font-mono text-sm text-[#00D4A0]/60 hover:text-[#00D4A0] transition-colors duration-200 flex items-center gap-2"
              >
                hola@kaitor.com
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-2xl border border-[#00D4A0]/20 bg-[#00D4A0]/4 text-center"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-[#00D4A0] flex items-center justify-center mx-auto mb-5"
                  style={{ boxShadow: "0 0 28px rgba(0,212,160,0.25)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l5 5 7-9" stroke="#00D4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#F0F0F0] mb-2">
                  Mensaje recibido
                </h3>
                <p className="text-[#F0F0F0]/45 text-sm">
                  Te respondemos en menos de 24h en días laborables.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-[#F0F0F0]/6 bg-[#0E1318]"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block font-mono text-[9px] text-[#F0F0F0]/30 tracking-widest uppercase mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-[#F0F0F0] text-sm placeholder-[#F0F0F0]/18 outline-none transition-all duration-200"
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] text-[#F0F0F0]/30 tracking-widest uppercase mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-[#F0F0F0] text-sm placeholder-[#F0F0F0]/18 outline-none transition-all duration-200"
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block font-mono text-[9px] text-[#F0F0F0]/30 tracking-widest uppercase mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-[#F0F0F0] text-sm placeholder-[#F0F0F0]/18 outline-none transition-all duration-200"
                      style={inputStyle("company")}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] text-[#F0F0F0]/30 tracking-widest uppercase mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+34 600 000 000"
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-[#F0F0F0] text-sm placeholder-[#F0F0F0]/18 outline-none transition-all duration-200"
                      style={inputStyle("phone")}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-[9px] text-[#F0F0F0]/30 tracking-widest uppercase mb-1.5">
                    ¿Qué está fallando?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos el problema tal como lo ves. Sin tecnicismos."
                    onFocus={() => setFocused("problem")}
                    onBlur={() => setFocused(null)}
                    className="w-full px-3.5 py-2.5 rounded-lg border text-[#F0F0F0] text-sm placeholder-[#F0F0F0]/18 outline-none transition-all duration-200 resize-none"
                    style={inputStyle("problem")}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full relative py-3.5 rounded-xl bg-[#00D4A0] text-[#06080B] text-sm font-bold hover:bg-[#00A87E] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden"
                  style={{ boxShadow: "0 0 28px rgba(0,212,160,0.28)" }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                  Solicitar diagnóstico gratuito
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className="font-mono text-[9px] text-[#F0F0F0]/22 tracking-wide text-center mt-3">
                  Sin compromiso · B2B y B2C · Respondemos en &lt; 24h
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
