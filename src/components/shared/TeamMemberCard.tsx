import React from 'react';
import { Phone, Mail, User } from 'lucide-react';
import SectionAnimation from './SectionAnimation';

interface TeamMemberCardProps {
  name: string;
  position?: string;
  email?: string;
  phone: string;
  photo?: string;
  delay?: number;
  imagePosition?: string;
}

const AnimatedAvatar: React.FC<{ variant: 1 | 2 }> = ({ variant }) => {
  const colors = variant === 1 
    ? { bg: 'from-blue-400 to-blue-600', accent: 'from-blue-300 to-blue-500' }
    : { bg: 'from-teal-400 to-teal-600', accent: 'from-teal-300 to-teal-500' };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
      {/* Animated background circles */}
      <div className={`absolute w-32 h-32 bg-gradient-to-br ${colors.accent} rounded-full opacity-20 animate-pulse`}></div>
      <div className={`absolute w-24 h-24 bg-gradient-to-br ${colors.accent} rounded-full opacity-30 animate-bounce delay-300`}></div>
      
      {/* Main avatar icon */}
      <div className="relative z-10 bg-white bg-opacity-20 rounded-full p-8 backdrop-blur-sm animate-float">
        <User size={64} className="text-white animate-pulse" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full opacity-40 animate-ping delay-500"></div>
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-ping delay-1000"></div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  email,
  phone,
  photo,
  delay = 0,
  imagePosition = 'object-top'
}) => {
  // Determine which animated avatar to show based on name
  const getAvatarVariant = (name: string): 1 | 2 => {
    return name.includes('Vishal') ? 1 : 2;
  };

  return (
    <SectionAnimation
      animation="slide-up"
      delay={delay}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        {photo ? (
        <img
          src={photo}
          alt={name}
          className={`w-full h-full object-cover ${imagePosition} transition-transform duration-500 hover:scale-105`}
        />
        ) : (
          <AnimatedAvatar variant={getAvatarVariant(name)} />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold">{name}</h3>
        {position && (
          <p className="text-primary font-medium mt-1">{position}</p>
        )}
        <div className="mt-4 space-y-2 min-h-[4rem] flex flex-col justify-start">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center text-secondary-light hover:text-primary transition-colors"
            >
              <Mail size={18} className="mr-2" />
              {email}
            </a>
          )}
          {phone && (
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex items-center text-secondary-light hover:text-primary transition-colors"
          >
            <Phone size={18} className="mr-2" />
            {phone}
          </a>
          )}
        </div>
      </div>
    </SectionAnimation>
  );
};

export default TeamMemberCard;