"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const ROLES = ["Full Stack Developer", "Next.js Engineer", "TypeScript Specialist", "Open to Freelance"];

export default function Hero() {
  const [ri, setRi] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    const cur = ROLES[ri];
    let t: NodeJS.Timeout;
    if (!deleting && ci < cur.length) {
      t = setTimeout(() => { setDisplayed(cur.slice(0, ci + 1)); setCi(c => c + 1); }, 72);
    } else if (!deleting && ci === cur.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && ci > 0) {
      t = setTimeout(() => { setDisplayed(cur.slice(0, ci - 1)); setCi(c => c - 1); }, 36);
    } else {
      setDeleting(false);
      setRi(r => (r + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [ci, deleting, ri]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 2rem", position: "relative", overflow: "hidden",
    }}>
      {/* Grid bg */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
        backgroundSize: "56px 56px", opacity: 0.35,
        maskImage: "radial-gradient(ellipse 75% 70% at 60% 40%,black,transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 60% 40%,black,transparent)",
      }} />
      {/* Glow */}
      <div aria-hidden style={{
        position: "absolute", top: "15%", right: "5%",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(232,255,71,0.055) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1120px", margin: "0 auto", width: "100%", paddingTop: "6rem",
        display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}
        className="hero-inner">

        {/* Left text */}
        <div>
          {/* Status */}
          <div className="fade-up delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            border: "1px solid rgba(232,255,71,0.2)", borderRadius: "100px",
            padding: "0.35rem 1rem", marginBottom: "2.2rem",
            background: "var(--accent-dim)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "var(--accent)",
              display: "inline-block", boxShadow: "0 0 8px var(--accent)",
              animation: "spin 3s linear infinite",
            }} />
            <span className="mono" style={{ fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="fade-up delay-2" style={{
            fontSize: "clamp(3.2rem, 8vw, 6rem)", fontWeight: 800,
            lineHeight: 1, letterSpacing: "-0.035em", marginBottom: "1rem",
          }}>
            Mobeen<br />
            <span style={{ color: "var(--accent)" }}>Khan</span>
          </h1>

          {/* Typewriter */}
          <div className="fade-up delay-3" style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)", marginBottom: "1.8rem",
            fontFamily: "'DM Mono', monospace", fontWeight: 300,
            color: "var(--muted2)", minHeight: "2rem",
          }}>
            <span style={{ color: "var(--accent)", marginRight: "0.5rem" }}>&gt;</span>
            {displayed}<span className="cursor">_</span>
          </div>

          {/* Bio */}
          <p className="fade-up delay-4" style={{
            fontSize: "1.05rem", color: "var(--muted2)", maxWidth: "520px",
            lineHeight: 1.75, marginBottom: "2.5rem",
          }}>
            {personalInfo.bio}
          </p>

          {/* CTA row */}
          <div className="fade-up delay-5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Hire Me →
            </a>
            <a href="#projects" className="btn-outline">
              See My Work
            </a>
          </div>

          {/* Socials */}
          <div className="fade-up delay-5" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {[
              { label: "GitHub", href: personalInfo.github },
              { label: "LinkedIn", href: personalInfo.linkedin },
              { label: personalInfo.location, href: "#" },
            ].map((l, i) => (
              <span key={l.label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                {i > 0 && <span style={{ color: "var(--border)", fontSize: "0.8rem" }}>·</span>}
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" className="link-muted">
                  {l.label} {l.href.startsWith("http") ? "↗" : ""}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="hide-mobile fade-up delay-3" style={{ position: "relative" }}>
          <div style={{
            width: 260, height: 260, position: "relative",
            borderRadius: "4px", overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 0 60px rgba(232,255,71,0.06)",
          }}>
            <Image
              src={personalInfo.avatar}
              alt="Mobeen Khan — Full Stack Developer"
              fill
              sizes="260px"
              style={{ objectFit: "cover", filter: "grayscale(20%)" }}
              priority
            />
            {/* Accent overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.6))",
            }} />
          </div>
          {/* Decorative corner */}
          <div style={{
            position: "absolute", bottom: -12, right: -12,
            width: 60, height: 60,
            border: "1px solid var(--accent)", borderRadius: "2px",
            opacity: 0.4, zIndex: -1,
          }} />
          {/* Stats pill */}
          <div className="mono" style={{
            position: "absolute", bottom: 16, left: 16,
            background: "rgba(8,8,8,0.92)", border: "1px solid var(--border)",
            padding: "0.5rem 0.9rem", borderRadius: "2px",
            fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.08em",
          }}>
            6+ Projects Shipped
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
      }}>
        <span className="mono" style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.18em" }}>SCROLL</span>
        <div style={{
          width: 1, height: 36,
          background: "linear-gradient(to bottom, var(--accent), transparent)",
          animation: "fadeUp 2s ease infinite",
        }} />
      </div>

      <style>{`
        @media(max-width:768px){.hero-inner{grid-template-columns:1fr !important;}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}
