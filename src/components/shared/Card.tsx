import React from 'react';
import SectionAnimation from './SectionAnimation';

interface CardProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  children,
  className = '',
  delay = 0
}) => {
  return (
    <SectionAnimation
      animation="slide-up"
      delay={delay}
      className={`card ${className}`}
    >
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
        {children}
      </div>
    </SectionAnimation>
  );
};

export default Card;