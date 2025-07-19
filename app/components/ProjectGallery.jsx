'use client';

import { useState } from 'react';
import ImagePreview from './ImagePreview';
import Image from 'next/image';

const ProjectGallery = ({ project }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPreview = (index) => {
    setCurrentImageIndex(index);
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
  };

  const handleIndexChange = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8">
              <div 
                className="relative aspect-[16/9] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openPreview(0)}
              >
                {project.gallery[0] && (
                  <img
                    src={project.gallery[0]}
                    alt={`${project.slug} - ${0 + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Click to expand</span>
                  </div>
                </div>
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  1 / {project.gallery.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div 
                    className="relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-105"
                    onClick={() => openPreview(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.slug} - ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Hover overlay for thumbnails */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium">View</span>
                      </div>
                    </div>
                    
                    {/* Thumbnail number */}
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {index + 1}
                    </div>
                    
                    {/* Active state indicator */}
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            

          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <ImagePreview
        isOpen={previewOpen}
        onClose={closePreview}
        images={project.gallery}
        currentIndex={currentImageIndex}
        onIndexChange={handleIndexChange}
      />
    </>
  );
};

export default ProjectGallery; 