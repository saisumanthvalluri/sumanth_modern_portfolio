import type { Project } from "@/types";
import Image from "next/image";

const projectIcons: Record<string, React.ReactNode> = {
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  music: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/>
      <polyline points="7.5 17.5 7.5 3 19.5 3 19.5 15.5"/><line x1="7.5" y1="9" x2="19.5" y2="7"/>
    </svg>
  ),
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="card-hover group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Card top gradient banner */}
      <div
        className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
        aria-hidden="true"
      >
        {/* Decorative circles */}
        {/* <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 -left-8 w-40 h-40 rounded-full bg-white/5" /> */}
        {/* Index badge */}
        <span
          className="absolute top-4 left-4 font-mono text-xs font-bold text-white/60"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Icon */}
        {/* <div className="relative z-10 text-white/90 drop-shadow-lg">
          {projectIcons[project.image]}
        </div> */}
        <Image src={project.image} alt={project.title} fill />
        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 right-4 text-[10px] font-semibold font-mono uppercase tracking-wider bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3
            className="font-display text-lg font-bold mb-1 group-hover:text-[--primary] transition-colors"
            style={{ color: "var(--text)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.longDescription}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex justify-between gap-3 pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--primary)" }}
              aria-label={`View live demo of ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--muted)" }}
              aria-label={`View source code of ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
