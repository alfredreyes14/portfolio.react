'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' },
  ];

  const skillsData = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'GraphQL (Client)', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'GraphQL (Server)', level: 80 },
      { name: 'REST API Design', level: 90 },
      { name: 'WebSockets', level: 75 },
    ],
    database: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Database Design', level: 85 },
    ],
    devops: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 65 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Vercel', level: 90 },
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Jira', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Postman', level: 90 },
      { name: 'Jest/Testing', level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Skills</SectionHeading>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-foreground hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData[activeTab].map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-foreground">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className="h-2.5 bg-primary rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills; 