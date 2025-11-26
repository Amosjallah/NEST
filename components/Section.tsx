import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bgColor = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
