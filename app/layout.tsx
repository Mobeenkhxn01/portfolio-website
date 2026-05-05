import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://mobeenkhan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mobeen Khan — Full Stack Developer",
    template: "%s | Mobeen Khan",
  },
  description:
    "Full Stack Developer specialising in Next.js, TypeScript & Node.js. Building scalable, production-grade web applications. Available for freelance & full-time roles.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Chandigarh",
    "Hire Developer India",
    "Mobeen Khan",
    "Portfolio",
  ],
  authors: [{ name: "Mobeen Khan", url: BASE_URL }],
  creator: "Mobeen Khan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Mobeen Khan",
    title: "Mobeen Khan — Full Stack Developer",
    description:
      "Full Stack Developer specialising in Next.js, TypeScript & Node.js. Available for freelance & full-time roles.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/126558598?v=4",
        width: 400,
        height: 400,
        alt: "Mobeen Khan",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mobeen Khan — Full Stack Developer",
    description: "Building scalable web apps with Next.js, TypeScript & Node.js.",
    images: ["https://avatars.githubusercontent.com/u/126558598?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mobeen Khan",
              url: BASE_URL,
              image: "https://avatars.githubusercontent.com/u/126558598?v=4",
              jobTitle: "Full Stack Developer",
              worksFor: { "@type": "Organization", name: "Freelance" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "Chandigarh University" },
              address: { "@type": "PostalAddress", addressLocality: "Chandigarh", addressCountry: "IN" },
              sameAs: [
                "https://github.com/Mobeenkhxn01",
                "https://www.linkedin.com/in/Mobeenkhan456",
              ],
              knowsAbout: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "MongoDB"],
            }),
          }}
        />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
