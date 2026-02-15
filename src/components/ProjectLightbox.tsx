import { useEffect, useState } from 'react';

interface Project {
  id: string;
  filename: string;
  caption: string;
  uploaded: string;
}

interface ProjectLightboxProps {
  projects: Project[];
  currentIndex: number;
  baseUrl: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ProjectLightbox({
  projects,
  currentIndex,
  baseUrl,
  onClose,
  onNavigate
}: ProjectLightboxProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const project = projects[currentIndex];

  useEffect(() => {
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // Reset loading state when image changes
    setImageLoading(true);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < projects.length - 1) onNavigate(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, projects.length, onClose, onNavigate]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-2xl w-8 h-8 flex items-center justify-center"
          aria-label="Close lightbox"
        >
          ×
        </button>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors text-4xl w-12 h-12 flex items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {currentIndex < projects.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors text-4xl w-12 h-12 flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {/* Image container */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Loading indicator */}
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Main image */}
          <img
            src={`${baseUrl}/images/full/${project.filename}`}
            alt={project.caption}
            className={`max-w-full max-h-[80vh] object-contain ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300`}
            onLoad={handleImageLoad}
          />

          {/* Caption */}
          <div className="p-6 bg-white">
            <p className="text-lg text-gray-800 text-center font-medium">
              {project.caption}
            </p>
            {projects.length > 1 && (
              <p className="text-sm text-gray-500 text-center mt-2">
                {currentIndex + 1} of {projects.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}