"use client";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "7rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <p className="section-label">Background</p>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800,
          letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
          Experience & Education
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="exp-grid">
          {/* Experience */}
          <div>
            <h3 className="mono" style={{ fontSize: "0.65rem", color: "var(--accent)",
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2rem" }}>
              Work Experience
            </h3>
            {experience.map(exp => (
              <div key={exp.role} style={{ borderLeft: "1px solid var(--border)",
                paddingLeft: "1.5rem", position: "relative" }}>
                <div style={{
                  position: "absolute", left: -4, top: 5, width: 7, height: 7,
                  borderRadius: "50%", background: "var(--accent)",
                }} />
                <div style={{ marginBottom: "1.2rem" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                    {exp.role}
                  </h4>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>{exp.company}</span>
                    <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)",
                      letterSpacing: "0.06em", border: "1px solid var(--border)",
                      padding: "1px 7px", borderRadius: "2px" }}>{exp.period}</span>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {exp.points.map((pt, i) => (
                    <li key={i} style={{ color: "var(--muted2)", fontSize: "0.88rem",
                      lineHeight: 1.65, marginBottom: "0.55rem",
                      paddingLeft: "1rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education + Currently */}
          <div>
            <h3 className="mono" style={{ fontSize: "0.65rem", color: "var(--accent)",
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2rem" }}>
              Education
            </h3>
            {education.map(edu => (
              <div key={edu.degree} style={{ borderLeft: "1px solid var(--border)",
                paddingLeft: "1.5rem", position: "relative", marginBottom: "2rem" }}>
                <div style={{
                  position: "absolute", left: -4, top: 5, width: 7, height: 7,
                  borderRadius: "50%", background: "var(--accent)",
                }} />
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  {edu.degree}
                </h4>
                <p style={{ color: "var(--muted2)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                  {edu.institution}
                </p>
                <span className="mono" style={{ fontSize: "0.65rem", color: "var(--muted)",
                  letterSpacing: "0.06em", border: "1px solid var(--border)",
                  padding: "1px 7px", borderRadius: "2px", display: "inline-block", marginBottom: "0.75rem" }}>
                  {edu.period}
                </span>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.6 }}>
                  {edu.note}
                </p>
              </div>
            ))}

            {/* Currently box */}
            <div style={{ background: "var(--accent-dim)", border: "1px solid rgba(232,255,71,0.15)",
              borderRadius: "3px", padding: "1.5rem" }}>
              <p className="mono" style={{ fontSize: "0.63rem", color: "var(--accent)",
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Currently focused on
              </p>
              {[
                "System Design & scalable architectures",
                "200+ DSA problems — interview prep",
                "Product-based company interviews (10–20 LPA)",
                "Building real-world SaaS side projects",
              ].map(item => (
                <div key={item} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                  <span style={{ color: "var(--text)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
