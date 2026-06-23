interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      <span
        className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.15em] uppercase mb-3"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="w-6 h-px"
          style={{ background: "var(--accent)" }}
          aria-hidden="true"
        />
        {eyebrow}
        <span
          className="w-6 h-px"
          style={{ background: "var(--accent)", display: align === "center" ? "inline-block" : "none" }}
          aria-hidden="true"
        />
      </span>
      <h2
        className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
