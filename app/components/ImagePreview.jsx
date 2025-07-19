'use client';

import { useEffect, useState } from 'react';

const ImagePreview = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex = 0, 
  onIndexChange 
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    setActiveIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    onIndexChange?.(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  if (!isOpen) return null;

  // Helper function to get image URL consistently
  const getImageUrl = (imageItem) => {
    return typeof imageItem === 'string' ? imageItem : imageItem.image;
  };

  // Helper function to get image alt text
  const getImageAlt = (imageItem, index) => {
    if (typeof imageItem === 'string') {
      return `Image ${index + 1}`;
    }
    return imageItem.title || `Image ${index + 1}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main image container */}
      <div className="relative w-full max-w-7xl max-h-full mx-2 sm:mx-4 flex flex-col">
        {/* Image display */}
        <div className="relative flex-1 flex items-center justify-center mb-2 sm:mb-6">
          <div 
            className="relative w-full max-w-full max-h-[75vh] sm:max-h-[85vh] lg:max-h-[90vh] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main image */}
            <img
              src={getImageUrl(images[activeIndex])}
              alt={getImageAlt(images[activeIndex], activeIndex)}
              className="w-full h-full object-contain touch-pan-x"
              style={{ maxHeight: '80vh' }}
              loading="lazy"
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center space-x-1 sm:space-x-2 overflow-x-auto pb-2 px-2 sm:px-0 py-4 cursor-pointer">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === activeIndex 
                  ? 'ring-2 ring-primary scale-110' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={getImageUrl(image)}
                alt={getImageAlt(image, index)}
                className="w-full h-full object-cover cursor-pointer"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Background overlay */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImagePreview; 