"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <nav style={{
        maxWidth: "1120px", margin: "0 auto", padding: "1.1rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" className="mono" style={{
          color: "var(--accent)", fontSize: "0.85rem",
          letterSpacing: "0.06em", textDecoration: "none", fontWeight: 500,
        }}>
          mk<span style={{ color: "var(--muted)" }}>/dev</span>
        </a>

        <ul className="hide-mobile" style={{
          display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center",
        }}>
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-muted" style={{ fontSize: "0.8rem" }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${personalInfo.email}`} className="btn-primary hide-mobile"
          style={{ padding: "0.45rem 1.2rem", fontSize: "0.75rem" }}>
          Hire Me →
        </a>

        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{
            background: "none", border: "1px solid var(--border)", borderRadius: "2px",
            color: "var(--text)", padding: "0.4rem 0.7rem", cursor: "pointer",
            fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", display: "none",
          }}>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div style={{
          background: "var(--surface)", borderTop: "1px solid var(--border)",
          padding: "1rem 2rem 1.5rem",
        }}>
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "0.8rem 0",
                borderBottom: "1px solid var(--border)",
                fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
                color: "var(--muted2)", textDecoration: "none",
              }}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`}
            style={{
              display: "block", marginTop: "1rem",
              fontFamily: "'DM Mono', monospace", fontSize: "0.82rem",
              color: "var(--accent)", textDecoration: "none",
            }}>
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
