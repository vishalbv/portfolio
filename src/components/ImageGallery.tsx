import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  company: string;
}

export const ImageGallery = ({ images, company }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  // Preload adjacent images
  useEffect(() => {
    if (images?.length > 1) {
      // Preload next image
      const nextIndex = (currentImageIndex + 1) % images.length;
      const nextImage = new window.Image();
      nextImage.src = `/assets/images/${images[nextIndex]}`;

      // Preload previous image
      const prevIndex =
        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
      const prevImage = new window.Image();
      prevImage.src = `/assets/images/${images[prevIndex]}`;
    }
  }, [currentImageIndex, images]);

  // Preload all images on component mount
  useEffect(() => {
    images?.forEach((imagePath) => {
      const img = new window.Image();
      img.src = `/assets/images/${imagePath}`;
    });
  }, [images]);

  return (
    <div
      className={`space-y-6 ${
        isMaximized
          ? "fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-8"
          : ""
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative aspect-[16/9] rounded-lg overflow-hidden bg-[#1A1530] group ${
          isMaximized ? "w-[90%] max-w-7xl" : ""
        }`}
      >
        {images?.length > 0 && (
          <>
            <Image
              src={`/assets/images/${images[currentImageIndex]}`}
              alt={`${company} project`}
              width={750}
              height={500}
              className={`object-contain w-full h-full ${
                !isMaximized
                  ? "group-hover:scale-105 transition-transform duration-500"
                  : ""
              }`}
            />

            {/* Maximize/Minimize Button */}
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label={isMaximized ? "Minimize" : "Maximize"}
            >
              {isMaximized ? (
                <Minimize2 className="w-5 h-5 text-white" />
              ) : (
                <Maximize2 className="w-5 h-5 text-white" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Navigation - Arrows and Dots */}
      {images?.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => {
              setCurrentImageIndex(
                currentImageIndex === 0
                  ? images.length - 1
                  : currentImageIndex - 1
              );
            }}
            className="w-8 h-8 rounded-full bg-[#2A2440] flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2.5 transition-all duration-300 rounded-full hover:bg-white ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => {
              setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }}
            className="w-8 h-8 rounded-full bg-[#2A2440] flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
