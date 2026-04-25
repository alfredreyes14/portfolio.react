'use client';

import { useEffect, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ReviewCard from './ReviewCard';
import { getNextReviewSlideshowState } from './review-slideshow.mjs';

const reviews = [
  {
    id: 1,
    name: 'Ricardo Calingan',
    position: 'Project Lead, Cognizant Softvision',
    image: '/images/ricardo.jpeg',
    review: 'I worked with Alfred for about half a year, but I would say that he is one of the great people that I\'ve worked with. He consistently delivers value to the project with high quality and is always up to the challenge. He shows good qualities of a senior developer and is always supporting the team to be able to deliver value.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jenna Stone',
    position: 'Program Dev Lead, Cognizant',
    image: '/images/jenna.jpeg',
    review: 'I worked with Alfred on a React development project for 2 years and would highly recommend working with him as a senior developer. Alfred has extensive technical skills and a broad background of technologies. As a senior developer I relied on him heavily to assist in the refinements and review of pull requests to ensure the code kept our standards and was well written. Alfred is an exceptional communicator and is very friendly. I hope our paths cross again soon.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marvin Wenceslao',
    position: 'Business Analysy/Senior Scrum Master, Yondu Inc',
    image: '/images/marvin.jpeg',
    review: 'Alfred is a very hardworking and extremely talented software engineer. I\'ve worked with him in one of our blockchain project. He is very good with software development, in fact, he was hired as a junior developer but take full control of the development as a senior one. It was a pleasure working with him.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Leo Flores',
    position: 'Project Manager, Yondu Inc',
    image: '/images/leo.jpeg',
    review: 'John Alfred is one of the best Fullstack Engineer that I worked with. He has shown tremendous technical skills and has a very strong leadership quality in which he became a Scrum Master in a difficult Blockchain project. Alfred also has been in close collaboration with the COO and Directors of a major Philippine Telco company where he has been admired and respected. If I were to get or recommend a Fullstack engineer, it would be John Alfred in the top of my list.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Erniemar Caluag',
    position: 'Senior Front End Engineer, Siteminder',
    image: '/images/ernie.jpeg',
    review: 'I\'ve worked with Alfred for almost my entire career. I\'ve seen him excel at both front-end and back-end aspects of web development. He demonstrated excellent technical and soft skills, earning him the position of Team Lead on our previous company. I have no hesitation in recommending Alfred, he will be an asset to any organization.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lynda Gaughan',
    position: 'Executive Vice President, Go Destination Services',
    image: '/images/lynda.webp',
    review: 'Alfred, I have been very happy with your work. You have shown quick understanding of our needs and I like your designs and efficiency on the UI to make things better for our processes.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Fenton Hughes',
    position: 'Product Manager',
    image: '/images/fenton.jpg',
    review: 'I enjoyed working with Alfred at Unicity. He is a thoughtful guy and easy to talk to. While we didn\'t work together closely I noticed that Alfred is willing to speak his mind in meetings while also flexible when new data is presented.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Jerome Erazo',
    position: 'Technical Lead',
    image: '/images/jerome.png',
    review: 'I had the privilege of working alongside Alfred, and I can confidently say he is one of the few people who truly understands the way I drive a team toward clarity, structure, and long-term vision. He consistently grasps every detail I want incorporated into the system, especially around scalability, simplicity, and cost-effectiveness, and translates those into practical, high-quality solutions. Alfred is the kind of engineer who doesn’t just execute tasks; he aligns himself with the strategy. He quickly internalizes product direction, anticipates architectural needs, and thoughtfully proposes improvements that strengthen the system rather than complicate it. His ability to balance technical depth with operational efficiency made our work move faster and with far fewer iterations. Beyond his technical strengths, Alfred brings a positive, collaborative energy to the team. He communicates clearly, supports teammates generously, and helps maintain a culture of openness and continuous improvement. His mindset and work ethic elevate the people around him. In short, Alfred is an exceptional partner, reliable, forward-thinking, and fully aligned with building systems that last. I highly recommend him and would gladly work with him again.',
    rating: 5,
  }
];
const reviewCount = reviews.length;

const Reviews = () => {
  const [{ activeIndex }, setSlideshowState] = useState({
    activeIndex: 0,
    skipNextAutoAdvance: false,
  });
  
  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideshowState((currentState) =>
        getNextReviewSlideshowState(currentState, {
          type: 'autoAdvance',
          reviewCount,
        })
      );
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index) => {
    setSlideshowState((currentState) =>
      getNextReviewSlideshowState(currentState, {
        type: 'selectPage',
        index,
      })
    );
  };
  
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Testimonials</SectionHeading>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Reviews Carousel */}
          <div className="overflow-hidden">
            <div
              key={reviews[activeIndex].id}
              className="transition-opacity duration-300 ease-in-out"
            >
              <ReviewCard review={reviews[activeIndex]} />
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
