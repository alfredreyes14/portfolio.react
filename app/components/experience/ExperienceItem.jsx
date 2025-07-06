const ExperienceItem = ({ experience, isEven }) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center`}>
      {/* Timeline dot - only visible on medium screens and above */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
      
      {/* Content */}
      <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col">
            <span className="text-primary font-semibold">{experience.period}</span>
            <h3 className="text-xl font-bold mt-1">{experience.position}</h3>
            <h4 className="text-lg text-muted mb-3">{experience.company}</h4>
            <h4 className="text-md text-muted mb-3">{experience.location}</h4>
            <p className="text-foreground mb-4">{experience.description}</p>
            
            <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
            <ul className="list-disc list-inside text-foreground space-y-1">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="ml-2">{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile view - timeline dot and line */}
      <div className="md:hidden flex items-center mb-4">
        <div className="w-4 h-4 rounded-full bg-primary mr-3"></div>
        <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default ExperienceItem; 