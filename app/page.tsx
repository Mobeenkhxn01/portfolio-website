import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobeen Khan — Full Stack Developer | Next.js & TypeScript",
  description:
    "Mobeen Khan is a Full Stack Developer specialising in Next.js 15, TypeScript & Node.js. Explore projects, services, and hire for web development.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
