import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className="relative scroll-reveal">
      {/* Main image display */}
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
        <img 
          src={images[activeImage]} 
          alt={`${title} - Image ${activeImage + 1}`} 
          className="w-full h-full object-cover object-center transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20 pointer-events-none"></div>
      </div>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all hover-scale ${
                activeImage === index ? 'border-lime-500 scale-110' : 'border-transparent opacity-70'
              }`}
            >
              <img 
                src={image} 
                alt={`${title} thumbnail ${index + 1}`} 
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
