import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-primary font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted mb-6">
              Senior Full Stack Developer
            </h2>
            <p className="text-foreground mb-8 max-w-lg">
              I'm a passionate full stack developer with over 8 years of experience 
              building robust, scalable, and user-friendly web applications. 
              I specialize in modern JavaScript frameworks, cloud architecture, 
              and delivering exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" primary>
                Contact Me
              </Button>
              <Button href="#projects">
                View Projects
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              {/* Replace with actual profile image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 