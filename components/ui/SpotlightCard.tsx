"use client";

import { useRef, ReactNode, CSSProperties, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: number;
  color?: string;
  as?: "div" | "li";
  onClick?: () => void;
}

export default function SpotlightCard({
  children,
  className = "",
  style,
  radius = 320,
  color = "rgba(0,212,160,0.09)",
  as: Tag = "div",
  onClick,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spot.style.background = `radial-gradient(${radius}px circle at ${x}px ${y}px, ${color}, transparent 70%)`;
    spot.style.opacity = "1";
  };

  const onMouseLeave = () => {
    if (spotRef.current) spotRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Spotlight overlay — sits above bg, below content */}
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
        style={{ opacity: 0, transition: "opacity 0.4s ease" }}
      />
      {/* Content must be above spotlight */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}
