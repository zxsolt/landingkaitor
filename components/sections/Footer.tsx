"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#F0F0F0]/5 py-14 px-6 overflow-hidden">
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(2,201,120,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo.svg"
              alt="Kaitor Software"
              width={180}
              height={46}
              className="h-10 w-auto mb-3"
              unoptimized
            />
            <p className="font-mono text-xs text-[#F0F0F0]/25 tracking-wide">
              Menos fricción. Más resultado.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-[#F0F0F0]/35 hover:text-[#02c978] tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email CTA */}
          <a
            href="mailto:hola@kaitor.com"
            className="font-mono text-xs text-[#F0F0F0]/40 hover:text-[#02c978] transition-colors duration-200 tracking-wide"
          >
            hola@kaitor.com
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-[#F0F0F0]/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[11px] text-[#F0F0F0]/18 tracking-wide">
            © 2026 Kaitor Software. Todos los derechos reservados.
          </span>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="font-mono text-[10px] text-[#F0F0F0]/20 hover:text-[#F0F0F0]/45 tracking-wide transition-colors duration-200">
              Política de privacidad
            </Link>
            <span className="text-[#F0F0F0]/10">·</span>
            <Link href="/aviso-legal" className="font-mono text-[10px] text-[#F0F0F0]/20 hover:text-[#F0F0F0]/45 tracking-wide transition-colors duration-200">
              Aviso legal
            </Link>
            <span className="text-[#F0F0F0]/10">·</span>
            <Link href="/cookies" className="font-mono text-[10px] text-[#F0F0F0]/20 hover:text-[#F0F0F0]/45 tracking-wide transition-colors duration-200">
              Cookies
            </Link>
          </div>

          <div className="flex items-center gap-1 font-mono text-[10px] text-[#F0F0F0]/15 tracking-widest">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#02c978] inline-block"
              style={{ boxShadow: "0 0 6px rgba(2,201,120,0.6)" }}
            />
            &nbsp;España · B2B y B2C · Software a medida
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
