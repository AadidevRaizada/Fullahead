import React from 'react';
import { Award, Shield, TrendingUp, LifeBuoy, Users, Ship, CheckCircle } from 'lucide-react';
import SectionAnimation from '../components/shared/SectionAnimation';
import WaveDivider from '../components/shared/WaveDivider';
import MetaTags from '../components/shared/MetaTags';

const AchievementsPage: React.FC = () => {
  const keyAchievements = [
    {
      icon: <Shield size={40} className="text-primary" />,
      title: 'OSV to IP-Code Workboat Conversion',
      description: 'Successfully converted an Offshore Supply Vessel into a 59-passenger IP-code workboat, meeting all technical and compliance requirements.',
      details: 'This groundbreaking achievement made AJR WB 1 the first Indian vessel with IP-code certification, expanding our operational capabilities in the offshore sector.'
    },
    {
      icon: <LifeBuoy size={40} className="text-primary" />,
      title: 'Crisis Management During Cyclone Tauktae',
      description: 'Safeguarded vessel and crew during the severe Cyclone Tauktae through strategic crisis management.',
      details: 'Our emergency response team implemented comprehensive safety protocols, ensuring zero casualties and minimal damage to vessels during one of the region\'s most severe cyclones.'
    },
    {
      icon: <Award size={40} className="text-primary" />,
      title: '100% Regulatory Compliance',
      description: 'Maintained perfect compliance record with IMO, MARPOL, and flag state regulations across our entire fleet.',
      details: 'Our vessels have consistently passed all inspections and port state controls with zero major non-conformities, demonstrating our commitment to regulatory excellence.'
    },
    {
      icon: <TrendingUp size={40} className="text-primary" />,
      title: 'Financial Performance Optimization',
      description: 'Reduced operational expenses while increasing charter revenue through strategic management practices.',
      details: 'Implemented cost-saving initiatives that reduced OPEX by 15% while securing long-term contracts that increased fleet utilization by 25% over the previous year.'
    }
  ];
  
  const successStories = [
    {
      title: 'AJR WB 1: First Indian IP-Code Vessel',
      image: 'https://images.pexels.com/photos/1036843/pexels-photo-1036843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A comprehensive case study of how Full Ahead transformed an existing OSV into India\'s first IP-code certified workboat, expanding operational capabilities and opening new market opportunities.'
    },
    {
      title: 'Emergency Response Excellence',
      image: 'https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'How our crisis management protocols and team expertise ensured vessel and crew safety during extreme weather events, including Cyclone Tauktae in 2021.'
    },
    {
      title: 'Cost Optimization Success',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Financial strategies that enabled a 15% reduction in operational expenses while increasing fleet utilization and securing long-term contracts for stable revenue growth.'
    }
  ];

  return (
    <>
      <MetaTags
        title="Key Achievements | Full Ahead Marine & Offshore"
        description="Discover Full Ahead Marine's achievements: 100% safety compliance, zero major incidents, 15% OPEX reduction, first Indian IP Code work boat management, and comprehensive maritime certifications across multiple flag states."
        keywords="maritime achievements, safety compliance, zero incidents, OPEX reduction, IP Code work boat, maritime excellence, ship management achievements, operational performance"
        url="https://www.fullahead.in/achievements"
        image="https://www.fullahead.in/images/Fleet/AJRWB-1(1).jpg"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt px-2 sm:px-4">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Key Achievements</h1>
            <p className="text-xl text-secondary-light">
              A track record of operational excellence, innovation, and safety in maritime management
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* Achievements Grid */}
      <section className="section px-2 sm:px-4">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Our Proud Achievements</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Milestones that demonstrate our commitment to excellence in maritime management
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyAchievements.map((achievement, index) => (
              <SectionAnimation
                key={index}
                delay={index * 100}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-secondary-light font-medium mb-3">{achievement.description}</p>
                <p className="text-secondary-light">{achievement.details}</p>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="bg-background-alt py-16 px-2 sm:px-4">
        <WaveDivider inverted className="transform rotate-180" />
        <div className="section">
          <div className="container mx-auto">
            <SectionAnimation className="text-center mb-12">
              <h2 className="section-title">Success Stories</h2>
              <p className="max-w-3xl mx-auto text-secondary-light">
                Detailed case studies showcasing our expertise and problem-solving capabilities
              </p>
            </SectionAnimation>
            
            <div className="space-y-12">
              {successStories.map((story, index) => (
                <SectionAnimation key={index} delay={index * 100} className="relative">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="w-full md:w-1/2">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
                      <p className="text-secondary-light mb-6">{story.description}</p>
                      <button className="text-primary font-medium hover:underline inline-flex items-center">
                        Read Full Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {index < successStories.length - 1 && <div className="border-b border-gray-200 my-12"></div>}
                </SectionAnimation>
              ))}
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>
      
      {/* Performance Stats */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Performance Statistics</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Measurable results demonstrating our operational excellence
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionAnimation delay={0} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-medium mb-1">Safety Compliance</div>
              <p className="text-secondary-light text-sm">Perfect regulatory compliance across our fleet</p>
            </SectionAnimation>
            
            <SectionAnimation delay={100} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <div className="text-lg font-medium mb-1">Major Incidents</div>
              <p className="text-secondary-light text-sm">Perfect safety record with zero major incidents</p>
            </SectionAnimation>
            
            <SectionAnimation delay={200} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <div className="text-lg font-medium mb-1">OPEX Reduction</div>
              <p className="text-secondary-light text-sm">Cost optimization while maintaining quality</p>
            </SectionAnimation>
            
            <SectionAnimation delay={300} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-medium mb-1">Fleet Utilization</div>
              <p className="text-secondary-light text-sm">High operational efficiency and availability</p>
            </SectionAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsPage;