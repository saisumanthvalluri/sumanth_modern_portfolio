"use client";
import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/data/portfolio";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: "Location",
    value: personalInfo.location,
    href: "https://maps.google.com/?q=Hyderabad,India",
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState<FormFields>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Compose mailto link as a reliable, no-backend approach
    const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoHref;

    // Show a success message after a short delay
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm font-body transition-all duration-200 outline-none focus:ring-2 focus:ring-[--primary]";

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="Get in Touch"
            title="Let's work together"
            subtitle="Have a project in mind, a role to fill, or just want to say hello? I'd love to hear from you."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact info */}
          <div className={`lg:col-span-2 flex flex-col gap-6 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <div
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <h3 className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>
                Contact Details
              </h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-medium group-hover:text-[--primary] transition-colors" style={{ color: "var(--text-2)" }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p className="text-xs font-mono font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
                Find me on
              </p>
              <nav aria-label="Social media links" className="flex gap-3">
                {socialLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.icon !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex-1 py-3 rounded-xl flex flex-col items-center gap-1.5 transition-all duration-200 hover:scale-105"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    <span className="text-base" aria-hidden="true">
                      {link.icon === "linkedin" ? "in" : link.icon === "github" ? "gh" : "✉"}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                      {link.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`lg:col-span-3 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-7 sm:p-8 flex flex-col gap-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
              aria-label="Contact form"
            >
              <h3 className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Name <span aria-hidden="true" style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputBase}
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Email <span aria-hidden="true" style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputBase}
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputBase}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Message <span aria-hidden="true" style={{ color: "var(--primary)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  className={`${inputBase} resize-none`}
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  aria-required="true"
                />
              </div>

              {status === "success" && (
                <div
                  role="alert"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                  style={{ background: "var(--accent-light)", color: "var(--accent)", border: "1px solid var(--accent)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  Your email client has opened. Message ready to send!
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full sm:w-auto self-start"
                aria-label="Send message"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
