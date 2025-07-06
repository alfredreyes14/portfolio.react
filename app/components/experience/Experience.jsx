import SectionHeading from '../ui/SectionHeading';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Unicty International',
      position: 'Sr. Full Stack Engineer',
      period: '2024 - Present',
      location: 'Taguig City, Philippines - Hybrid',
      description: 'Developed a distributor tool that to help distributors manage and grow their business and organization. \n\n Streamlined and improve processes through automation and AI.',
      responsibilities: [
        'Pioneered an AI translation automation & deployment pipeline, cutting process time from 3 days to under 5 minutes.',
        'Developed a referral-link feature that boosted customer sales by 30%.',
        'Led performance optimizations, improving page load speeds by 80%.',
        'Streamlined the deployment process for new markets reducing the total time from 3 hours to around 10 minutes.',
        'Responsible for improving our product\'s translation layers enabling us to serve multiple markets with different languages serving 98% accurate translated values.'
      ]
    },
    {
      id: 2,
      company: 'Cognization Softvision',
      position: 'Software Engineer',
      location: 'Makati City, Philippines - Hybrid',
      period: '2022 - 2024',
      description: 'Co-led and agile team that developed an auditing assurance system for one of US\'s largest auditing companies. \n\n The system is used to streamline and automate the auditing process of the company.',
      responsibilities: [
        'Co-led an Agile team to build an auditing-assurance platform for enterprise clients that streamlines auditing processes and increased their revenue by 20%.',
        'Architected and optimized production critical ETL and suggestion services written in Node.js and Transact- SQL reducing total execution time by 15%.',
        'Designed a data heavy analytics page and optimized the page performance by 15%.'
      ]
    },
    {
      id: 3,
      company: 'Locale Europe LTD (Through Cloud Employee Inc. * Lay-off)',
      position: 'Full Stack Engineer',
      location: 'Greater London, UK - Remote (From Philippines)',
      period: '2022',
      description: 'Responsible for developing an SaaS platform that helps companies manage and order translations for their products.',
      responsibilities: [
        'Led the end-to-end integration of new partner systems into our core platform, cutting manual onboarding effort by 95% and accelerating time-to-live from 2 weeks to 3 days.',
        'Designed and deployed external microservices using Node.js, AWS and Lambda, optimizing API response times by 40% and reducing infrastructure costs by 20%.',
        'Integrated 3rd party APIs—automating sync of over 2,000 records/day and reducing data-mismatch errors by 90%.',
        'Developed a new Contentful powered website that drove a 20% lift in monthly traffic and slashed full-stack deployment time by 30%.'
      ]
    },
    {
      id: 4,
      company: 'Yondu Inc',
      position: 'Software Engineer',
      location: 'Taguig City, Philippines - Remote',
      period: '2021 - 2022',
      description: 'Led an agile team that developed a digital credential application powered by blockchain technology that enables users to store and verify real-world credentials.',
      responsibilities: [
        'Spearheaded a blockchain‑based digital credential project that allowed users to seamlessly save their IDs over our application and use it as a true identifiable copy.',
        'Developed an NFT market place using React.js to promote the partnerships of our clients and increased their annual revenue by 12%.'
      ]
    },
    {
      id: 5,
      company: 'Cafe24 Philippines',
      position: 'Web Developer',
      location: 'Pasig City, Philippines',
      period: '2019 - 2021',
      description: 'Part of an internal team that develops internal applications for business growth and analytics.',
      responsibilities: [
        'Built an internal data-visualization app with advanced filters across 10+ dimensions, enabling stakeholders to generate custom reports 40% faster.',
        'Developed services using Node.js, Typescript, Python, MySQL and GraphQL for a customer targeting system that served 100k+ customers across Korea.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Work Experience</SectionHeading>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id}
                experience={experience}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 