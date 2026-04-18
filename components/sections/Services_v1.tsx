"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";

const services = [
  {
    number: "01",
    label: "Automatización",
    image: "/service-automatizacion.png",
    problem: "Tu equipo hace a mano lo que debería hacer un sistema",
    body: "Notificaciones, hojas de cálculo, datos copiados entre herramientas. Cada hora que eso consume es dinero que no vuelve.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="12" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 6h2M16 10v2M6 10v2M10 16h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: "02",
    label: "Integración / APIs",
    image: "/service-integraciones.png",
    problem: "Tus herramientas no se hablan entre sí",
    body: "CRM desconectado de contabilidad, web sin sincronizar con almacén. Cada sistema es una isla. Conectarlos no es complicado — solo hay que hacerlo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="4" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="18" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 11h3M15.5 5.2L10 9.5M15.5 16.8L10 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    label: "Software a medida",
    image: "/service-software.png",
    problem: "No tienes visibilidad real de lo que pasa en tu negocio",
    body: "Decisiones con datos de hace tres días, informes a mano. Construimos dashboards y herramientas que te dan la imagen completa, en tiempo real.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
        <path d="M6 14l3-3 2.5 2.5 3.5-4.5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    label: "Reservas y captación",
    problem: "El proceso de venta o reserva es un caos",
    body: "Llamadas para confirmar, pagos por transferencia, reservas cruzadas. Construimos el sistema que lo gestiona solo — sin fricción para el cliente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
        <path d="M3 9h16" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
        <path d="M7 3v4M15 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 13h2v2H7zM10 13h2v2h-2zM13 13h2v2h-2z" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
      </svg>
    ),
  },
  {
    number: "05",
    label: "IA aplicada",
    image: "/service-ia.png",
    problem: "Necesitas una herramienta que no existe en el mercado",
    body: "Clasificación automática, extracción de datos, asistentes internos, predicción. Lo construimos desde cero, para tu operativa concreta.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.3"/>
        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M11 4v2M11 16v2M4 11h2M16 11h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <path d="M6.5 6.5l1.4 1.4M14.1 14.1l1.4 1.4M14.1 6.5l-1.4 1.4M7.9 14.1l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
];

function ServiceCard({ s, i, wide }: { s: typeof services[0]; i: number; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      transition={{ duration: 0.8, delay: i * 0.1 }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <SpotlightCard
        className="h-full rounded-2xl border border-[#F0F0F0]/5 bg-[#0E1318] hover:border-[#02c978]/18 transition-colors duration-300 flex flex-col overflow-hidden"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        {/* Illustration */}
        {s.image && (
          <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
            <Image
              src={s.image}
              alt={s.label}
              fill
              className="object-cover object-top"
              style={{ opacity: 0.88 }}
              unoptimized
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 50%, #0E1318 100%)",
              }}
            />
          </div>
        )}
        <div className={`p-6 flex ${wide ? "flex-row gap-8 items-start" : "flex-col"} flex-1`}>
          {/* Content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="text-[#02c978] opacity-70">{s.icon}</div>
              <span className="font-mono text-[10px] text-[#F0F0F0]/15 tracking-widest">{s.number}</span>
            </div>
            <span className="font-mono text-[10px] text-[#02c978]/60 tracking-widest uppercase block mb-2">
              {s.label}
            </span>
            <h3 className="text-[#F0F0F0] font-bold text-base leading-snug mb-3">{s.problem}</h3>
            <p className="text-[#F0F0F0]/40 text-sm leading-relaxed flex-1">{s.body}</p>
          </div>
        </div>
        <div
          className="h-px mx-6 mb-6 rounded-full"
          style={{ background: "linear-gradient(to right, rgba(2,201,120,0.2), transparent)" }}
        />
      </SpotlightCard>
    </motion.div>
  );
}

export default function ServicesV1() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 px-6" style={{ overflow: "clip" }}>
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,201,120,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mb-4"
        >
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#F0F0F0] mt-2">
            Puede que no sepas cómo se llama el problema.
            <br />
            <span className="text-[#F0F0F0]/35">Pero seguro que lo reconoces.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#F0F0F0]/45 leading-relaxed max-w-2xl mb-16 text-base"
        >
          Muchas empresas saben que algo falla pero no contratan ayuda tecnológica porque no saben
          qué pedir, creen que va a ser caro o han tenido malas experiencias.
        </motion.p>

        {/* Cards grid — bento: 3 cols row 1, then wide+normal row 2 */}
        <div className="grid lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className={i === 3 ? "lg:col-span-2" : ""}>
              <ServiceCard s={s} i={i} wide={i === 3} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10"
        >
          <div>
            <p className="text-[#F0F0F0]/70 text-base font-medium">
              ¿Te has reconocido pero no has hecho nada? Normal.
            </p>
            <p className="text-[#F0F0F0]/35 text-sm mt-1">
              El primer paso es una conversación — sin coste, sin compromiso y sin jerga técnica.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#02c978] text-[#080b0a] text-sm font-bold hover:bg-[#01a060] transition-colors duration-200 flex items-center gap-2"
            style={{ boxShadow: "0 0 24px rgba(2,201,120,0.25)" }}
          >
            Cuéntanos tu caso →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
