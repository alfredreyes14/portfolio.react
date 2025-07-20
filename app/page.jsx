import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';

export default function Home() {
  // JSON-LD structured data for the portfolio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Alfred Reyes",
    "jobTitle": "Senior Full Stack Developer",
    "description": "Professional full stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
    "url": "https://alfreddev.com",
    "email": "alfred@alfreddev.com",
    "telephone": "+639 61 037 9728",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PH",
      "addressLocality": "Taguig City",
      "addressRegion": "Philippines"
    },
    "sameAs": [
      "https://github.com/alfredreyes14",
      "https://www.linkedin.com/in/jreyesdev"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Software Engineering",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Philippines"
      },
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": "Senior Full Stack Developer Salary",
        "currency": "PHP",
        "minValue": 170000,
        "maxValue": 210000
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bulacan State University"
    },
    "award": [
      "AWS Certified Cloud Practitioner 2023-2026",
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
}
