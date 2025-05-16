import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
          <span className="text-gray-500 dark:text-gray-400 text-lg">{project.title} Image</span>
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        /> */}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground mb-4">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <ProjectLink href={project.demoLink} label="Live Demo" />
          <ProjectLink href={project.codeLink} label="View Code" />
        </div>
      </div>
    </div>
  );
};

const ProjectLink = ({ href, label }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
};

export default ProjectCard; 