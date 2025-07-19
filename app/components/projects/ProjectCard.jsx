import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project, featured = false }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`block group ${featured ? 'lg:col-span-1' : ''}`}
    >
      <div className={`
        bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
        border border-gray-200 dark:border-gray-700 hover:border-primary/50
        ${featured ? 'lg:min-h-[400px]' : 'h-full'}
      `}>
        <div className={`relative ${featured ? 'h-56' : 'h-48'} w-full bg-gradient-to-br from-primary/10 to-primary/5`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes={featured ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
          />
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          <div className="flex justify-between items-start mb-3">
            <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          
          <p className={`text-gray-600 dark:text-gray-300 mb-4 ${featured ? 'text-lg leading-relaxed' : 'text-base'}`}>
            {project.description}
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-primary font-medium">
            <span className="text-sm">View Case Study</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard; 