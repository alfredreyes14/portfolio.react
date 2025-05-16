import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-foreground mb-4">
              I'm a Senior Full Stack Developer with a passion for creating elegant solutions 
              to complex problems. With over 8 years of professional experience, I've worked 
              with a wide range of technologies and frameworks to deliver high-quality software.
            </p>
            <p className="text-foreground mb-4">
              My journey in software development began when I built my first website at the age of 15. 
              Since then, my curiosity and love for technology have driven me to continuously 
              expand my knowledge and skills.
            </p>
            <p className="text-foreground">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to 
              open-source projects.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutItem label="Name" value="John Doe" />
              <AboutItem label="Email" value="john@example.com" />
              <AboutItem label="Location" value="San Francisco, CA" />
              <AboutItem label="Degree" value="BSc Computer Science" />
              <AboutItem label="Experience" value="8+ Years" />
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