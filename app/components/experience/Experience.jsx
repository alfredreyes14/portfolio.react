import SectionHeading from '../ui/SectionHeading';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Leading a team of 5 developers in building a scalable e-commerce platform using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved system performance by 40%.',
      responsibilities: [
        'Architected and developed RESTful APIs using Node.js and Express',
        'Built responsive frontend using React and Redux',
        'Implemented authentication and authorization systems',
        'Optimized database queries and application performance',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: '2018 - 2021',
      description: 'Developed and maintained multiple web applications for clients in finance, healthcare, and retail sectors. Utilized React, TypeScript, and Python Django for rapid development.',
      responsibilities: [
        'Created custom CMS solutions for enterprise clients',
        'Integrated third-party APIs and payment gateways',
        'Implemented data visualization dashboards with D3.js',
        'Collaborated with UX designers to improve user experience',
        'Wrote unit and integration tests using Jest and Pytest'
      ]
    },
    {
      id: 3,
      company: 'WebTech Solutions',
      position: 'Frontend Developer',
      period: '2016 - 2018',
      description: 'Worked on developing interactive and responsive web applications using HTML5, CSS3, and JavaScript frameworks like React and Angular.',
      responsibilities: [
        'Built responsive UI components using modern CSS frameworks',
        'Implemented complex state management with Redux',
        'Created animations and interactive elements using GSAP',
        'Optimized web performance and accessibility',
        'Participated in daily scrums and sprint planning'
      ]
    },
    {
      id: 4,
      company: 'Global Systems',
      position: 'Junior Web Developer',
      period: '2015 - 2016',
      description: 'Started as a junior developer working on company website and internal tools. Gained experience in front-end development and basic backend operations.',
      responsibilities: [
        'Developed and maintained company website using WordPress',
        'Created custom PHP scripts for data processing',
        'Assisted senior developers with debugging and testing',
        'Implemented responsive designs based on Figma mockups',
        'Learned version control with Git and team collaboration'
      ]
    },
    {
      id: 5,
      company: 'Freelance',
      position: 'Web Developer',
      period: '2014 - 2015',
      description: 'Worked on various freelance projects for small businesses and startups, building websites and simple web applications.',
      responsibilities: [
        'Built custom websites for small businesses',
        'Implemented e-commerce functionality using WooCommerce',
        'Created custom themes and plugins',
        'Performed SEO optimizations',
        'Provided technical support and maintenance'
      ]
    },
    {
      id: 6,
      company: 'Tech University',
      position: 'Internship',
      period: '2013 - 2014',
      description: 'Completed a 6-month internship at the university IT department while completing my computer science degree.',
      responsibilities: [
        'Assisted in maintaining university web portal',
        'Developed small utility scripts for department use',
        'Learned database management with MySQL',
        'Participated in user testing sessions',
        'Documented technical processes and solutions'
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