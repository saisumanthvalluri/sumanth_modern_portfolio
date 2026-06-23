"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences, education } from "@/data/portfolio";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative"
      aria-labelledby="experience-heading"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="Where I've Worked"
            title="Experience & Education"
            subtitle="Building production-grade applications and shipping features that matter."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3
              className="font-mono text-xs font-semibold uppercase tracking-widest mb-8 flex items-center gap-2"
              style={{ color: "var(--accent)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <article
                  key={exp.id}
                  className={`reveal ${isVisible ? "visible" : ""} reveal-delay-${idx + 1}`}
                >
                  <div
                    className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                      aria-hidden="true"
                    />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                      <div>
                        <h4
                          className="font-display text-xl font-bold"
                          style={{ color: "var(--text)" }}
                        >
                          {exp.role}
                        </h4>
                        <p
                          className="font-semibold mt-0.5"
                          style={{ color: "var(--primary)" }}
                        >
                          {exp.company}
                        </p>
                        <p className="text-sm mt-1 flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {exp.location}
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center font-mono text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap self-start"
                        style={{
                          background: "var(--primary-light)",
                          color: "var(--primary)",
                          border: "1px solid rgba(91,79,232,0.2)",
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {exp.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 mb-6" role="list">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-2)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                            style={{ background: "var(--accent)" }}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="font-mono text-xs font-semibold uppercase tracking-widest mb-8 flex items-center gap-2"
              style={{ color: "var(--accent)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={edu.institution}
                  className={`card-hover rounded-2xl p-5 reveal ${isVisible ? "visible" : ""} reveal-delay-${idx + 2}`}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <p
                    className="font-display font-bold text-sm leading-snug mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {edu.institution}
                  </p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--muted)" }}>
                    {edu.degree}
                  </p>
                  <span
                    className="font-mono text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {edu.period}
                  </span>
                </div>
              ))}

              {/* Availability card */}
              <div
                className="rounded-2xl p-5 mt-6"
                style={{
                  background: "linear-gradient(135deg, var(--primary-light) 0%, var(--accent-light) 100%)",
                  border: "1px solid rgba(91,79,232,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-2" aria-hidden="true">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                    Available
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                  Open to full-time roles, contract work, and exciting collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
