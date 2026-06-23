"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative"
      aria-labelledby="projects-heading"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="Projects I've Built"
            title="Things I've shipped"
            subtitle="A selection of personal and professional projects — each one a new challenge, a new lesson."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`reveal ${isVisible ? "visible" : ""} reveal-delay-${idx + 1}`}
            >
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-14 text-center reveal ${isVisible ? "visible" : ""} reveal-delay-4`}>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            These are just a few highlights — explore more on GitHub.
          </p>
          <a
            href="https://github.com/saisumanthvalluri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              boxShadow: "var(--shadow-sm)",
            }}
            aria-label="View all projects on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
