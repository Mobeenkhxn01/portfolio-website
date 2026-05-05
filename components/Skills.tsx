"use client";
import { skills } from "@/lib/data";

const CATS = [
  { label: "Frontend", key: "frontend" as const, icon: "◈" },
  { label: "Backend", key: "backend" as const, icon: "◉" },
  { label: "Databases", key: "databases" as const, icon: "◎" },
  { label: "Tools", key: "tools" as const, icon: "◇" },
  { label: "DSA / Languages", key: "dsa" as const, icon: "◆" },
];

const STATS = [
  { label: "Projects Shipped", value: "6+" },
  { label: "GitHub Repos", value: "23" },
  { label: "Languages & Tools", value: "15+" },
  { label: "Target Role", value: "SDE" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <p className="section-label">Skills</p>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800,
          letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
          Tech I work with
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(195px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {CATS.map(cat => (
            <div key={cat.key} className="card card-accent" style={{ padding: "1.8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.4rem" }}>
                <span style={{ color: "var(--accent)", fontSize: "1rem" }}>{cat.icon}</span>
                <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted2)",
                  letterSpacing: "0.14em", textTransform: "uppercase" }}>{cat.label}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {skills[cat.key].map(s => (
                  <span key={s} className="tag" style={{
                    transition: "border-color 0.2s, color 0.2s", cursor: "default",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--muted2)";
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          border: "1px solid var(--border)", borderRadius: "3px", overflow: "hidden",
        }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "2rem 1.5rem", textAlign: "center",
              background: "var(--card)",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--accent)",
                letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>{s.value}</div>
              <div className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)",
                letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
