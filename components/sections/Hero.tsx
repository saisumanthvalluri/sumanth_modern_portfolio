"use client";
import { useTypewriter } from "@/hooks/useScrollReveal";
import Button from "@/components/ui/Button";
import { personalInfo, achievements, socialLinks } from "@/data/portfolio";
import Image from "next/image";

const roles = [
  "Senior Frontend Developer",
  "React & Next.js Specialist",
  "UI/UX Enthusiast",
  "Full-Stack Engineer",
  "MERN Stack Developer",
];

const SocialIcon = ({ icon }: { icon: string }) => {
  const map: Record<string, React.ReactNode> = {
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  };
  return map[icon] ?? null;
};

export default function Hero() {
  const typedRole = useTypewriter(roles, 70, 2500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg noise-overlay"
      aria-labelledby="hero-heading"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float-delayed"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full blur-3xl opacity-10 animate-float-slow"
          style={{ background: "var(--primary)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-[80px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── LEFT SIDE ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status badge */}
            <div className="flex items-center gap-2.5 w-fit">
              <span
                className="relative flex h-2.5 w-2.5"
                aria-hidden="true"
              >
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              <span
                className="text-xs font-mono font-semibold tracking-wide uppercase"
                style={{ color: "var(--accent)" }}
              >
                Open to Opportunities
              </span>
            </div>

            {/* Name */}
            <div>
              <p
                className="font-mono text-sm font-medium mb-2"
                style={{ color: "var(--muted)" }}
              >
                Hi there 👋 I&apos;m
              </p>
              <h1
                id="hero-heading"
                className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
                style={{ color: "var(--text)" }}
              >
                Sai{" "}
                <span className="gradient-text">Sumanth</span>
                <br />
                <span style={{ color: "var(--text)" }}>Valluri</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <p
              className="font-display text-xl sm:text-2xl font-semibold typing-cursor h-8"
              style={{ color: "var(--primary)" }}
              aria-label={`Role: ${roles[0]}`}
            >
              {typedRole}
            </p>

            {/* Bio */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-2)" }}
            >
              {personalInfo.about}
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors hover:text-[--primary]"
                style={{ color: "var(--muted)" }}
                aria-label="Send email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {personalInfo.email}
              </a>
              <span
                className="text-sm font-mono flex items-center gap-1.5"
                style={{ color: "var(--muted)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {personalInfo.location}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                href="#contact"
                size="lg"
                aria-label="Go to contact section"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get in Touch
              </Button>
              <Button
                href={personalInfo.resumeUrl}
                variant="outline"
                size="lg"
                download
                aria-label="Download resume PDF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </Button>
            </div>

            {/* Social links */}
            <nav aria-label="Social media links" className="flex items-center gap-3 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon !== "email" && link.icon !== "phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-[--primary] hover:border-[--primary]"
                  style={{
                    color: "var(--muted)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </nav>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="flex flex-col items-center gap-8 order-1 lg:order-2">
            {/* Hexagonal Avatar Placeholder */}
            <div className="relative" aria-hidden="true">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-slow"
                style={{
                  background: "conic-gradient(from 0deg, var(--primary), var(--accent), var(--primary))",
                  padding: "3px",
                  borderRadius: "50%",
                  transform: "scale(1.08)",
                  filter: "blur(2px)",
                  opacity: 0.7,
                }}
              />
              {/* Rotating ring */}
              <div
                className="absolute inset-0 animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, var(--primary) 0%, transparent 40%, var(--accent) 60%, transparent 80%, var(--primary) 100%)",
                  borderRadius: "50%",
                  padding: "2px",
                  transform: "scale(1.06)",
                }}
              />
              {/* Avatar circle */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "var(--surface)",
                  border: "4px solid var(--surface)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Placeholder - Replace with <Image> from next/image when you have a real photo */}
                {/* <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, var(--primary-light) 0%, var(--accent-light) 100%)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)", opacity: 0.6 }} aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <p
                    className="text-xs font-mono font-medium px-4 text-center"
                    style={{ color: "var(--muted)" }}
                  >
                    Add your photo here
                  </p>
                </div> */}
                <Image src="/assets/my-image.jpeg" alt="Sai Sumanth Valluri" fill className="object-cover" />
              </div>
            </div>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
              role="list"
              aria-label="Career highlights"
            >
              {achievements.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-2xl text-center transition-all duration-200 hover:scale-105"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  role="listitem"
                >
                  <span
                    className="font-display text-2xl font-bold gradient-text"
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-medium mt-0.5 leading-tight text-center"
                    style={{ color: "var(--muted)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50"
        aria-hidden="true"
      >
        <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
          scroll
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)" }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
