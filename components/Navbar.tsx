"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Cómo trabajamos", href: "#como-trabajamos", id: "como-trabajamos" },
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Por qué Kaitor", href: "#por-que-kaitor", id: "por-que-kaitor" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  // Scrolled state
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Active section detection via scroll position
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) current = link.id;
      }
      setActiveSection(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-50 pointer-events-none"
        style={{
          scaleX,
          background: "linear-gradient(to right, #00D4A0, #00ffbe)",
          boxShadow: "0 0 8px rgba(0,212,160,0.6)",
        }}
      />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#06080B]/85 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Kaitor Software"
              width={360}
              height={90}
              className="h-20 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-mono text-xs tracking-wide transition-colors duration-200"
                  style={{ color: isActive ? "#00D4A0" : "rgba(240,240,240,0.5)" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: "#00D4A0", boxShadow: "0 0 6px rgba(0,212,160,0.8)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="#contacto"
            className="hidden md:flex items-center gap-1.5 bg-[#00D4A0] text-[#06080B] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#00A87E] transition-all duration-200 tracking-wide hover:scale-105"
            style={{ boxShadow: "0 0 16px rgba(0,212,160,0.25)" }}
          >
            Diagnóstico gratuito
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-5 h-px bg-[#F0F0F0]/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#F0F0F0]/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#F0F0F0]/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden overflow-hidden border-t border-white/5"
        >
          <div className="px-6 py-6 flex flex-col gap-4 bg-[#06080B]/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm transition-colors"
                style={{ color: activeSection === link.id ? "#00D4A0" : "rgba(240,240,240,0.6)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#00D4A0] text-[#06080B] text-sm font-bold px-4 py-3 rounded-lg"
            >
              Diagnóstico gratuito →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
