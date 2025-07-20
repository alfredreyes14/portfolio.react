'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: 'Ricardo Calingan',
      position: 'Project Lead, Cognizant Softvision',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQGUuOxPcL6tew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1618483389283?e=1757548800&v=beta&t=Q7xtQ7CofQyKAQJyGnpzRH1rOU8zIW9sC56HEfYyk3U', // placeholder
      review: 'I worked with Alfred for about half a year, but I would say that he is one of the great people that I\'ve worked with. He consistently delivers value to the project with high quality and is always up to the challenge. He shows good qualities of a senior developer and is always supporting the team to be able to deliver value.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jenna Stone',
      position: 'Program Dev Lead, Cognizant',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQFgfzlsoCQn5w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1560178120487?e=1757548800&v=beta&t=Y0K8uqbjVXqizba9KSX4Y_6KLf6nYrpEzsn6CYya3qs',
      review: 'I worked with Alfred on a React development project for 2 years and would highly recommend working with him as a senior developer. Alfred has extensive technical skills and a broad background of technologies. As a senior developer I relied on him heavily to assist in the refinements and review of pull requests to ensure the code kept our standards and was well written. Alfred is an exceptional communicator and is very friendly. I hope our paths cross again soon.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Marvin Wenceslao',
      position: 'Business Analysy/Senior Scrum Master, Yondu Inc',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQEzRLnuXO7_FQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1601958778162?e=1757548800&v=beta&t=EeI-gMm5N83a7pvz9DB0YSA3WHMrCwX2lWnmi8iUjGo',
      review: 'Alfred is a very hardworking and extremely talented software engineer. I\'ve worked with him in one of our blockchain project. He is very good with software development, in fact, he was hired as a junior developer but take full control of the development as a senior one. It was a pleasure working with him.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Leo Flores',
      position: 'Project Manager, Yondu Inc',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQGTn2OOC6GmNg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516302589360?e=1757548800&v=beta&t=n4S18H_K9dUH_40CHQsV1f-kBuhJI0znoobr1V5NMb4',
      review: 'John Alfred is one of the best Fullstack Engineer that I worked with. He has shown tremendous technical skills and has a very strong leadership quality in which he became a Scrum Master in a difficult Blockchain project. Alfred also has been in close collaboration with the COO and Directors of a major Philippine Telco company where he has been admired and respected. If I were to get or recommend a Fullstack engineer, it would be John Alfred in the top of my list.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Erniemar Caluag',
      position: 'Senior Front End Engineer, Siteminder',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEjvnFXg7w-aQ/profile-displayphoto-shrink_100_100/B56ZcV0YqjHEAU-/0/1748417745343?e=1757548800&v=beta&t=Qem2xuj4X2wXyW3z4DmiHFU3qHP_nbeJGpLU4buJL64',
      review: 'I\'ve worked with Alfred for almost my entire career. I\'ve seen him excel at both front-end and back-end aspects of web development. He demonstrated excellent technical and soft skills, earning him the position of Team Lead on our previous company. I have no hesitation in recommending Alfred, he will be an asset to any organization.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Lynda Gaughan',
      position: 'Executive Vice President, Go Destination Services',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQFT51mO8ph_pw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1600969010247?e=1755734400&v=beta&t=OKR00vQsQy_ueZU_OA3av-jYE2cixnP8IQ64b897UTs',
      review: 'Alfred, I have been very happy with your work. You have shown quick understanding of our needs and I like your designs and efficiency on the UI to make things better for our processes.',
      rating: 5,
    }
  ];
  
  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading>Testimonials</SectionHeading>
        
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