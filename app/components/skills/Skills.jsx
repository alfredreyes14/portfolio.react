'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiGraphql, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiRedis, 
  SiVercel, 
  SiJira, 
  SiJest,
  SiOpenai,
  SiNuxtdotjs,
  SiLaravel,
  SiDotnet
} from 'react-icons/si';
import { VscGithubAction } from 'react-icons/vsc';

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
      { name: 'React', level: 95, icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', level: 90, icon: SiNextdotjs, color: '#000000' },
      { name: 'Nuxt.js', level: 80, icon: SiNuxtdotjs, color: '#00DC82' },
      { name: 'JavaScript', level: 95, icon: FaJs, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML/CSS', level: 90, icon: FaHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', level: 85, icon: SiRedux, color: '#764ABC' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: FaNodeJs, color: '#339933' },
      { name: 'Express', level: 85, icon: SiExpress, color: '#000000' },
      { name: 'Python', level: 80, icon: FaPython, color: '#3776AB' },
      { name: 'PHP', level: 70, icon: FaPhp, color: '#777BB4' },
      { name: 'Laravel', level: 75, icon: SiLaravel, color: '#FF2D20' },
      { name: '.NET 7', level: 85, icon: SiDotnet, color: '#512BD4' },
      { name: 'GraphQL', level: 80, icon: SiGraphql, color: '#E10098' },
    ],
    database: [
      { name: 'MongoDB', level: 85, icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', level: 80, icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', level: 85, icon: SiMysql, color: '#4479A1' },
      { name: 'T-SQL', level: 75, icon: FaDatabase, color: '#CC2927' },
      { name: 'Firebase', level: 75, icon: SiFirebase, color: '#FFCA28' },
      { name: 'Redis', level: 70, icon: SiRedis, color: '#DC382D' },
      { name: 'Database Design', level: 85, icon: FaDatabase, color: '#4A90E2' },
    ],
    devops: [
      { name: 'Docker', level: 80, icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', level: 75, icon: FaAws, color: '#FF9900' },
      { name: 'CI/CD', level: 80, icon: VscGithubAction, color: '#2088FF' },
      { name: 'GitHub Actions', level: 85, icon: VscGithubAction, color: '#2088FF' },
      { name: 'Vercel', level: 90, icon: SiVercel, color: '#000000' },
    ],
    tools: [
      { name: 'Git', level: 95, icon: FaGitAlt, color: '#F05032' },
      { name: 'Jira', level: 80, icon: SiJira, color: '#0052CC' },
      { name: 'Jest/Testing', level: 80, icon: SiJest, color: '#C21325' },
      { name: 'OpenAI', level: 85, icon: SiOpenai, color: '#412991' },
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
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-200 dark:bg-gray-800 text-foreground hover:bg-gray-300 dark:hover:bg-gray-700 hover:transform hover:scale-105'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData[activeTab].map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  const { name, icon: Icon, color } = skill;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center gap-4">
        <div 
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon 
            className="text-3xl" 
            style={{ color: color }}
          />
        </div>
        <h3 className="text-foreground font-semibold text-lg">{name}</h3>
      </div>
    </div>
  );
};

export default Skills; 