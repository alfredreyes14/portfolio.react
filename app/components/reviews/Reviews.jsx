'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'CTO, TechStart Inc.',
      image: '/reviews/user1.jpg', // placeholder
      review: 'John is an exceptional developer who delivered our project ahead of schedule and exceeded all expectations. His technical skills and problem-solving abilities are truly impressive. He\'s now our go-to developer for all projects.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Patel',
      position: 'Product Manager, Digital Solutions',
      image: '/reviews/user2.jpg', // placeholder
      review: 'Working with John was a fantastic experience. He took our complex requirements and transformed them into an elegant, user-friendly interface. His attention to detail and commitment to quality are outstanding.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Williams',
      position: 'Founder, EcoTech',
      image: '/reviews/user3.jpg', // placeholder
      review: 'John helped us modernize our outdated systems and implemented new features that greatly improved our user experience. He\'s not only technically proficient but also very communicative and responsive throughout the project.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Chen',
      position: 'Lead Developer, FinTech Co.',
      image: '/reviews/user4.jpg', // placeholder
      review: 'As a fellow developer, I can attest to John\'s exceptional coding skills and best practices. He wrote clean, maintainable code and provided thorough documentation. It was a pleasure collaborating with him.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      position: 'UX Director, Creative Agency',
      image: '/reviews/user5.jpg', // placeholder
      review: 'John seamlessly translated our design vision into a fully functioning website. He was receptive to feedback and made thoughtful suggestions to improve the user experience. A truly skilled full-stack developer!',
      rating: 5,
    },
  ];
  
  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Client Reviews</SectionHeading>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Reviews Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map(review => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 