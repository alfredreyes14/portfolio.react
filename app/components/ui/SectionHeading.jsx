const SectionHeading = ({ children, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
      <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
    </div>
  );
};

export default SectionHeading; 