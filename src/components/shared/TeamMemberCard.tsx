import React from 'react';
import { Phone, Mail } from 'lucide-react';
import SectionAnimation from './SectionAnimation';

interface TeamMemberCardProps {
  name: string;
  position?: string;
  email: string;
  phone: string;
  photo?: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  email,
  phone,
  photo = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  delay = 0
}) => {
  return (
    <SectionAnimation
      animation="slide-up"
      delay={delay}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        {position && (
          <p className="text-primary font-medium mt-1">{position}</p>
        )}
        <div className="mt-4 space-y-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center text-secondary-light hover:text-primary transition-colors"
          >
            <Mail size={18} className="mr-2" />
            {email}
          </a>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex items-center text-secondary-light hover:text-primary transition-colors"
          >
            <Phone size={18} className="mr-2" />
            {phone}
          </a>
        </div>
      </div>
    </SectionAnimation>
  );
};

export default TeamMemberCard;