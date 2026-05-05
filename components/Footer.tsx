"use client";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem" }}>
        <span className="mono" style={{ fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Mobeen Khan — Next.js 16 · React 19 · TypeScript
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { l: "GitHub", h: personalInfo.github },
            { l: "LinkedIn", h: personalInfo.linkedin },
            { l: "Email", h: `mailto:${personalInfo.email}` },
          ].map(link => (
            <a key={link.l} href={link.h}
              target={link.h.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" className="link-muted">
              {link.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
