"use client";

const items = [
  "Precio cerrado desde el día 1",
  "0€ diagnóstico inicial",
  "Sin contratos de permanencia",
  "Respuesta en menos de 24h",
  "B2B y B2C · España",
];

function Track() {
  const doubled = [...items, ...items];
  return (
    <div className="flex gap-10 w-max">
      {doubled.map((item, i) => (
        <div key={i} className="flex items-center gap-3 shrink-0">
          <span
            className="w-1 h-1 rounded-full bg-[#00D4A0] shrink-0"
            style={{ boxShadow: "0 0 6px rgba(0,212,160,0.8)" }}
          />
          <span className="font-mono text-xs text-[#F0F0F0]/35 tracking-wide whitespace-nowrap">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <div className="relative py-5 border-y border-[#F0F0F0]/5 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
        }
      `}</style>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #06080B, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #06080B, transparent)" }} />

      <div className="marquee-track">
        <Track />
      </div>
    </div>
  );
}
