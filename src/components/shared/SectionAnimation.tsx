import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up';
  delay?: number;
}

const SectionAnimation: React.FC<SectionAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`${className} ${animation} ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionAnimation;