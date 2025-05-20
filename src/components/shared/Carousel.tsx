import React, { useState, useEffect, ReactNode } from 'react';

interface CarouselImage {
  src: string;
  caption?: ReactNode;
}

interface CarouselProps {
  images: CarouselImage[];
  interval?: number; // ms
  className?: string;
  imageClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 5000, className = '', imageClassName = '' }) => {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (!hovered) {
      const timer = setInterval(() => {
        setPrevIdx(current);
        setCurrent((prev) => (prev + 1) % total);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [hovered, interval, total, current]);

  const goTo = (idx: number) => {
    setPrevIdx(current);
    setCurrent(idx);
  };
  const prev = () => {
    setPrevIdx(current);
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  const next = () => {
    setPrevIdx(current);
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: '1px' }}
    >
      <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={typeof img.caption === 'string' ? img.caption : `Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imageClassName} ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ borderRadius: 'inherit' }}
            draggable={false}
          />
        ))}
      </div>
      {images[current].caption && (
        <div className="text-center mt-2 text-secondary-light text-base">
          {images[current].caption}
        </div>
      )}
      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary rounded-full p-1 shadow transition-opacity opacity-0 group-hover:opacity-100"
        style={{ zIndex: 20 }}
        onClick={prev}
        aria-label="Previous"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary rounded-full p-1 shadow transition-opacity opacity-0 group-hover:opacity-100"
        style={{ zIndex: 20 }}
        onClick={next}
        aria-label="Next"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-gray-300'} transition-colors`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 