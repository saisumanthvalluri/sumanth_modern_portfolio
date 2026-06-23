"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const competencies = [
  "Performance Optimization",
  "UI/UX Enhancement",
  "Agile Development",
  "API Integration",
  "User Accessibility (WCAG)",
  "Team Collaboration",
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Modular Architecture",
  "State Management",
  "RESTful APIs",
  "Code Splitting",
];

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "~35% Faster Pages",
    desc: "Optimized load times via caching, lazy loading & code splitting",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "~80% Less Publish Time",
    desc: "Built headless CMS with Directus + Next.js & JSON-driven components, enabling real-time content management, faster publishing, and scalable page creation across the company website",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Secure RBAC Systems",
    desc: "JWT-based multi-level admin access control for enterprise platforms",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "visible" : ""}`}
        >
          <SectionTitle
            eyebrow="About Me"
            title="Crafting experiences, not just code"
            subtitle="A builder at heart with a love for clean architecture and pixel-perfect UIs."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Bio text */}
          <div
            className={`lg:col-span-3 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="prose max-w-none space-y-4">
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
                  I&apos;m{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                    Sai Sumanth Valluri
                  </strong>
                  , a Senior Frontend Developer based in Hyderabad with{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>4+ years</span> of hands-on experience
                  building scalable web applications for real users.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                  At{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>Infinity Learn</span>,
                  I architect headless CMS platforms, design multi-role permission systems, and build interactive
                  learning modules used by thousands of students across India. I believe great software is
                  both invisible (it just works) and memorable (it feels great to use).
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                  My background in Mechanical Engineering trained me to think in systems — a mindset I bring
                  to every frontend challenge, from modular component libraries to optimizing Core Web Vitals.
                </p>
                <p className="text-sm font-mono mt-6 flex items-center gap-2" style={{ color: "var(--accent)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Hyderabad, Telangana, India
                </p>
              </div>

              {/* Core competencies */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((c) => (
                    <span key={c} className="skill-badge">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Highlights */}
          <div className={`lg:col-span-2 flex flex-col gap-4 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`card-hover rounded-2xl p-6 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 2}`}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                  aria-hidden="true"
                >
                  {h.icon}
                </div>
                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
