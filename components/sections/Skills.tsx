"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="Technology Suite"
            title="Tools I work with"
            subtitle="A curated stack built through 4+ years of production experience."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <article
              key={cat.category}
              className={`card-hover rounded-2xl p-6 reveal ${isVisible ? "visible" : ""} reveal-delay-${idx + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
              aria-labelledby={`skill-cat-${idx}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "var(--primary-light)" }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </div>
                <h3
                  id={`skill-cat-${idx}`}
                  className="font-display font-bold text-base"
                  style={{ color: "var(--text)" }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skills */}
              <ul className="flex flex-wrap gap-2" role="list" aria-label={`${cat.category} skills`}>
                {cat.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Currently Learning banner */}
        <div
          className={`mt-10 rounded-2xl p-6 flex items-center gap-4 reveal ${isVisible ? "visible" : ""} reveal-delay-5`}
          style={{
            background: "var(--surface)",
            border: "1px dashed var(--primary)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-base"
            style={{ background: "var(--primary-light)" }}
            aria-hidden="true"
          >
            🚀
          </div>
          <div>
            <p className="font-display font-bold text-sm" style={{ color: "var(--text)" }}>
              Currently Exploring
            </p>
            <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
              Deepening expertise in Web Performance, Server Components, Testing (Jest / RTL), and AWS cloud services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
