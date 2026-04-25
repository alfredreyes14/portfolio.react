import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-foreground mb-4">
              I’m a Senior Full Stack Engineer with {new Date().getFullYear() - 2019} years of experience building scalable, high-quality web applications, cloud-based solutions, and automation tools. My work focuses on turning business goals into reliable products, from full stack development and API design to performance optimization, cloud deployment, and workflow automation.
            </p>
            <p className="text-foreground mb-4">
              I specialize in the MERN stack, modern JavaScript frameworks, and AWS, with hands-on experience across React, Next.js, Node.js, TypeScript, databases, serverless architecture, third-party integrations, and the OpenAI API. I also use AI-driven development tools in my day-to-day workflow to speed up implementation, improve code quality, explore solutions faster, and deliver better results more efficiently.
            </p>
            <p className="text-foreground mb-4">
              Beyond building software, I bring leadership experience in guiding teams, mentoring developers, improving development workflows, and collaborating closely with product, design, and engineering teams. I care about writing maintainable code, building systems that scale, and delivering solutions that are technically strong, practical, and user-focused.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutItem label="Name" value="John Alfred Reyes" />
              <AboutItem label="Email" value="john.alfredrys@gmail.com" />
              <AboutItem label="Location" value="Metro Manila, Philippines" />
              <AboutItem label="Degree" value="BS Information Technology" />
              <AboutItem label="Experience" value={new Date().getFullYear() - 2019 + " years"} />
              <AboutItem label="Freelance" value="Available" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutItem = ({ label, value }) => {
  return (
    <div className="mb-4">
      <p className="text-muted text-sm mb-1">{label}</p>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  );
};

export default About; 