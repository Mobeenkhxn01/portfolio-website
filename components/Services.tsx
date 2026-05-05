"use client";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" style={{ padding: "7rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <p className="section-label">Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
          alignItems: "start", marginBottom: "3.5rem" }} className="svc-header">
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            What I can<br /><span style={{ color: "var(--accent)" }}>build for you</span>
          </h2>
          <p style={{ color: "var(--muted2)", fontSize: "1rem", lineHeight: 1.75, paddingTop: "0.5rem" }}>
            I take projects from idea to deployment — writing clean, maintainable code and
            shipping fast without cutting corners on quality or security.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1px",
          background: "var(--border)", border: "1px solid var(--border)", borderRadius: "3px", overflow: "hidden" }}>
          {services.map((s, i) => (
            <div key={s.title} className="card" style={{
              padding: "2.5rem 2rem", borderRadius: 0, border: "none",
              background: "var(--card)",
              borderRight: i < services.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "1.2rem", color: "var(--accent)" }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--muted2)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.svc-header{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
