"use client";
import { useState } from "react";
import { projects } from "@/lib/data";

const CATS = ["All", "Full Stack", "Tool", "Backend", "ML / Health"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: "7rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div>
            <p className="section-label">Projects</p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800,
              letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Things I&apos;ve built
            </h2>
          </div>
          <a href="https://github.com/Mobeenkhxn01" target="_blank" rel="noopener noreferrer"
            className="link-muted" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2px" }}>
            All repos on GitHub ↗
          </a>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em",
              padding: "5px 14px", borderRadius: "2px", cursor: "pointer",
              border: active === c ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: active === c ? "var(--accent-dim)" : "transparent",
              color: active === c ? "var(--accent)" : "var(--muted2)",
              transition: "all 0.2s",
            }}>{c}</button>
          ))}
        </div>

        {/* Featured cards */}
        {featured.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.25rem" }}>
            {featured.map((p, i) => (
              <article key={p.id} className="card card-accent" style={{ padding: "2.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem",
                  alignItems: "start" }} className="proj-inner">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1rem" }}>
                      <span className="mono" style={{ color: "var(--accent)", fontSize: "0.7rem" }}>
                        0{i + 1}
                      </span>
                      <span style={{
                        fontFamily: "'DM Mono', monospace", fontSize: "0.62rem",
                        padding: "2px 8px", border: "1px solid var(--accent)",
                        color: "var(--accent)", background: "var(--accent-dim)",
                        borderRadius: "2px", letterSpacing: "0.1em",
                      }}>FEATURED</span>
                      <span style={{
                        fontFamily: "'DM Mono', monospace", fontSize: "0.62rem",
                        padding: "2px 8px", border: "1px solid var(--border)",
                        color: "var(--muted)", borderRadius: "2px", letterSpacing: "0.1em",
                      }}>{p.category.toUpperCase()}</span>
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.35rem" }}>
                      {p.title}
                    </h3>
                    <p style={{ color: "var(--muted2)", fontSize: "0.88rem", marginBottom: "1rem" }}>
                      {p.tagline}
                    </p>
                    <p style={{ color: "var(--muted2)", fontSize: "0.9rem", lineHeight: 1.7,
                      marginBottom: "1.5rem", maxWidth: "580px" }}>
                      {p.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                      {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 70 }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-muted">
                      GitHub ↗
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-muted">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Other projects grid */}
        {others.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "1rem" }}>
            {others.map(p => (
              <article key={p.id} className="card card-accent" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.3rem" }}>⬡</span>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-muted">↗</a>
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-muted">↗</a>}
                  </div>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{p.title}</h3>
                <p style={{ color: "var(--muted2)", fontSize: "0.8rem", marginBottom: "1rem" }}>{p.tagline}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ fontSize: "0.62rem" }}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <style>{`@media(max-width:640px){.proj-inner{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
