import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
          Explore some of my recent web development projects. Each project showcases different technologies and problem-solving approaches.
        </p>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 