interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block font-mono text-xs text-signal/70 tracking-widest uppercase mb-4">
      {children}
    </span>
  );
}
