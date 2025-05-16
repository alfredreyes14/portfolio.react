'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
      image: '/projects/ecommerce.jpg', // placeholder
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user roles, and file sharing.',
      image: '/projects/taskapp.jpg', // placeholder
      category: 'web',
      technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'A mobile app that provides real-time weather forecasts, alerts, and location-based weather information.',
      image: '/projects/weather.jpg', // placeholder
      category: 'mobile',
      technologies: ['React Native', 'Weather API', 'Geolocation', 'Push Notifications'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'A headless CMS with a customizable admin dashboard, content modeling, and API access.',
      image: '/projects/cms.jpg', // placeholder
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'JWT'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media accounts with data visualization and reporting features.',
      image: '/projects/dashboard.jpg', // placeholder
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Fitness Tracking API',
      description: 'A RESTful API for fitness tracking applications with user authentication and data analysis.',
      image: '/projects/fitness.jpg', // placeholder
      category: 'backend',
      technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-foreground hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 