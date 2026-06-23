"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu on resize
  useEffect(() => {
    const close = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(var(--bg-rgb, 240,242,255), 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg tracking-tight transition-opacity hover:opacity-80"
          style={{ color: "var(--text)" }}
          aria-label="Sai Sumanth Valluri — back to top"
        >
          <span className="gradient-text">SSV</span>
          <span className="font-light ml-1 text-sm" style={{ color: "var(--muted)" }}>
            .dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "var(--primary)",
              color: "#fff",
              boxShadow: "var(--shadow-sm)",
            }}
            aria-label="Download resume PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-1"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 rounded-xl text-sm font-medium transition-colors"
              style={{
                color: activeSection === link.href.slice(1) ? "var(--primary)" : "var(--muted)",
                background: activeSection === link.href.slice(1) ? "var(--primary-light)" : "transparent",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-white"
            style={{ background: "var(--primary)" }}
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
