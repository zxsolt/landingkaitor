"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let blobX = -400, blobY = -400;
    let dotX = -400, dotY = -400;
    let targetX = -400, targetY = -400;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      // Dot follows instantly via direct DOM
      dotX = targetX;
      dotY = targetY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 2.5}px, ${dotY - 2.5}px)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      blobX = lerp(blobX, targetX, 0.07);
      blobY = lerp(blobY, targetY, 0.07);

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${blobX - 170}px, ${blobY - 170}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <>
      <style>{`
        @media (pointer: fine) { * { cursor: none !important; } }
      `}</style>

      {/* Blob shadow */}
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2,201,120,0.18) 0%, rgba(2,201,120,0.06) 45%, transparent 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s",
          willChange: "transform",
        }}
      />

      {/* Precise dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#02c978",
          boxShadow: "0 0 8px rgba(2,201,120,0.8)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
