import { personalInfo, socialLinks } from "@/data/portfolio";

const SocialIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  };
  return icons[icon] ?? null;
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-9 mt-0"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-base" style={{ color: "var(--text)" }}>
            <span className="gradient-text">Sai Sumanth Valluri</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Senior Frontend Developer · React · Next.js
          </p>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links" className="flex items-center gap-4">
          {socialLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-[--primary]"
              style={{
                color: "var(--muted)",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-center" style={{ color: "var(--muted-2)" }}>
          © {year} Sai Sumanth Valluri. Crafted with{" "}
          <span aria-label="love" role="img">❤️</span> & Next.js
        </p>
      </div>
    </footer>
  );
}
