import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-foreground mb-4">
              I’m a dedicated Full Stack Developer with over six years of hands-on experience
              designing and delivering robust, scalable web applications. Specializing
              in modern JavaScript frameworks such as React and Node.js,
              I build intuitive interfaces and solid back-end services that meet both user needs and business goals.
              My expertise in cloud architectures—across AWS allows me to architect solutions that are resilient, secure, and cost-effective.
            </p>
            <p className="text-foreground mb-4">
              Passionate about turning complex challenges into elegant solutions, I thrive in collaborative environments where I can partner with cross-functional teams to drive innovation from concept to production. I’m committed to continuous learning, always exploring new tools and best practices to enhance performance, maintainability, and user experience.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutItem label="Name" value="John Alfred Reyes" />
              <AboutItem label="Email" value="alfred@alfreddev.com / john.alfredrys@gmail.com" />
              <AboutItem label="Location" value="Metro Manila, Philippines" />
              <AboutItem label="Degree" value="BS Information Technology" />
              <AboutItem label="Experience" value="6+ Years" />
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