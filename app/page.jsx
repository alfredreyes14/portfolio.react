import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';
import { siteConfig } from './data/site';

export const metadata = {
  title: 'Portfolio',
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portrait`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  // JSON-LD structured data for the portfolio
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          addressCountry: siteConfig.location.countryCode,
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
        },
        sameAs: siteConfig.sameAs,
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'Python',
          'Full Stack Development',
          'Web Development',
          'Software Engineering',
          'Frontend Development',
          'Backend Development',
          'AWS',
          'Cursor',
          'Claude Code',
          'Leading Technical Teams'
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Bulacan State University',
        },
        award: ['AWS Certified Cloud Practitioner 2023-2026'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
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
