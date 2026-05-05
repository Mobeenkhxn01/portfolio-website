"use client";
import { personalInfo } from "@/lib/data";

const LINKS = [
  { icon: "✉", label: "Email", value: "mobeenkhan456@gmail.com", href: `mailto:${personalInfo.email}` },
  { icon: "⌥", label: "GitHub", value: "Mobeenkhxn01", href: personalInfo.github },
  { icon: "◈", label: "LinkedIn", value: "Mobeenkhan456", href: personalInfo.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Big headline */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "1.5rem" }}>
            Let&apos;s build<br /><span style={{ color: "var(--accent)" }}>something great.</span>
          </h2>
          <p style={{ color: "var(--muted2)", fontSize: "1.05rem", maxWidth: "480px",
            margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            I&apos;m open to full-time roles, freelance projects, and collaborations.
            If you have an idea or opportunity, reach out — I reply fast.
          </p>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary"
            style={{ fontSize: "0.9rem", padding: "1rem 2.5rem" }}>
            Say Hello →
          </a>
        </div>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}
          className="contact-grid">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card card-accent"
              style={{ display: "flex", alignItems: "center", gap: "1.2rem",
                padding: "1.6rem 1.8rem", textDecoration: "none", color: "var(--text)" }}>
              <span style={{ fontSize: "1.3rem", color: "var(--accent)", minWidth: 24 }}>{l.icon}</span>
              <div>
                <div className="mono" style={{ fontSize: "0.62rem", color: "var(--muted)",
                  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                  {l.label}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{l.value}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: "0.85rem" }}>↗</span>
            </a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
