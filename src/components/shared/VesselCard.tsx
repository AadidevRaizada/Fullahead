import React from 'react';
import SectionAnimation from './SectionAnimation';
import { Anchor } from 'lucide-react';
import Carousel from './Carousel';

interface VesselCardProps {
  name: string;
  type: string;
  images: string[];
  specs: string[];
  delay?: number;
}

const VesselCard: React.FC<VesselCardProps> = ({
  name,
  type,
  images,
  specs,
  delay = 0
}) => {
  return (
    <SectionAnimation
      animation="slide-up"
      delay={delay}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-medium z-20">
          {type}
        </div>
        {images.length > 1 ? (
          <Carousel
            images={images.map((src) => ({ src }))}
            className="w-full h-full"
            imageClassName="object-cover w-full h-full"
          />
        ) : (
          <img
            src={images[0]}
            alt={`${name} vessel`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Anchor size={20} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <ul className="space-y-3">
          {specs.map((spec, index) => (
            <li key={index} className="text-secondary-light flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-sm leading-relaxed">{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionAnimation>
  );
};

export default VesselCard;