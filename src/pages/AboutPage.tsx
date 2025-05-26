import React, { useEffect, useRef } from 'react';
import { Ship, Users, BarChart3, Shield, Award, Calendar, FileDown } from 'lucide-react';
import SectionAnimation from '../components/shared/SectionAnimation';
import WaveDivider from '../components/shared/WaveDivider';
import Button from '../components/shared/Button';
import Carousel from '../components/shared/Carousel';
import MetaTags from '../components/shared/MetaTags';

const AboutPage: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      icon: <Ship size={36} className="text-primary" />,
      title: 'Ship Management',
      description: 'Comprehensive vessel management services ensuring operational excellence and regulatory compliance.'
    },
    {
      icon: <Users size={36} className="text-primary" />,
      title: 'Crew Management',
      description: 'Expert crewing solutions with qualified seafarers and robust crew welfare programs.'
    },
    {
      icon: <BarChart3 size={36} className="text-primary" />,
      title: 'Procurement Management',
      description: 'Strategic procurement and vessel maintenance services optimized for operational efficiency.'
    },
    {
      icon: <Shield size={36} className="text-primary" />,
      title: 'Maritime Consultancy',
      description: 'Tailored consultancy solutions addressing your specific operational requirements.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      const triggerOffset = window.innerHeight * 0.7;
      
      timelineItems.forEach((item) => {
        const itemTop = (item as HTMLElement).getBoundingClientRect().top;
        
        if (itemTop < triggerOffset) {
          item.classList.add('timeline-item-active');
        } else {
          item.classList.remove('timeline-item-active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MetaTags
        title="About Full Ahead Marine & Offshore | Our Journey & Values"
        description="Learn about Full Ahead Marine & Offshore PVT. LTD. - Founded in 2019 by Capt. Anupam Raizada and Late Capt. Purnendu Shorey. Discover our journey from crew management to comprehensive ship management services with 100+ years of cumulative maritime expertise."
        keywords="about full ahead marine, company history, maritime expertise, ship management company Mumbai, Capt. Anupam Raizada, maritime professionals, ISM compliance, vessel management history"
        url="https://www.fullahead.in/about"
        image="https://www.fullahead.in/images/CompanyPeople/Dad,purnendu uncle.jpg"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt px-2 sm:px-4">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Full Ahead</h1>
            <p className="text-xl text-secondary-light">
              Founded in 2019 in Mumbai, we bring over 100 years of cumulative expertise in maritime management to deliver exceptional service excellence.
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-16 px-2 sm:px-4">
        <WaveDivider inverted className="transform rotate-180" />
        <div className="section">
          <div className="container mx-auto">
            <SectionAnimation className="text-center mb-16">
              <h2 className="section-title">Our Journey</h2>
              <p className="max-w-3xl mx-auto text-secondary-light">
              Explore the evolution of Full Ahead Marine & Offshore Pvt. Ltd., from its inception to where we stand today.
              </p>
            </SectionAnimation>
            
            <div 
              ref={timelineRef}
              className="relative mx-auto timeline-container"
              style={{ maxWidth: '800px' }}
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-20 z-0"></div>
              
              {/* 2019 - Foundation */}
              <div className="timeline-item mb-24 opacity-0 transition-all duration-1000 transform translate-y-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-right">
                    <h3 className="text-2xl font-semibold text-primary mb-2">2019</h3>
                    <h4 className="text-xl font-medium mb-3">Company Establishment</h4>
                    <p className="text-secondary-light">
                    Full Ahead Marine & Offshore Pvt. Ltd. was founded by Capt. Anupam Raizada and the late Capt. Purnendu Shorey. The company began its journey with crew management services for accommodation work barges, AHTs and bulk carriers
                    </p>
                  </div>
                  <div className="timeline-marker">
                    <div className="relative">
                      <div className="absolute w-16 h-16 rounded-full bg-primary bg-opacity-20 -left-8 -top-8 timeline-circle"></div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative">
                        <Calendar size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-4 rounded-lg shadow-md timeline-content opacity-0">
                      <img
                        src="/images/CompanyPeople/Dad,purnendu uncle.jpg"
                        alt="Company founders"
                        className="w-full h-40 object-cover rounded"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2020 - First vessel */}
              <div className="timeline-item mb-24 opacity-0 transition-all duration-1000 transform translate-y-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-right order-1 md:order-2">
                    <div className="bg-white p-4 rounded-lg shadow-md timeline-content opacity-0">
                      <img
                        src="/images/backgrounds/CoolPhoto.jpg"
                        alt="First vessel"
                        className="w-full h-40 object-cover rounded mb-4"
                      />
                    </div>
                  </div>
                  <div className="timeline-marker order-2 md:order-2">
                    <div className="relative">
                      <div className="absolute w-16 h-16 rounded-full bg-primary bg-opacity-20 -left-8 -top-8 timeline-circle"></div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative">
                        <Ship size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">2022</h3>
                    <h4 className="text-xl font-medium mb-3">First Set of Managed Vessels</h4>
                    <p className="text-secondary-light">
                    We secured the management of our first set of tugs and barge, marking a significant milestone in our company's growth. Our team was involved in identifying, negotiating and purchasing the assets on behalf of the owner.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2021 - Fleet expansion */}
              <div className="timeline-item mb-24 opacity-0 transition-all duration-1000 transform translate-y-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-right">
                    <h3 className="text-2xl font-semibold text-primary mb-2">2024</h3>
                    <h4 className="text-xl font-medium mb-3"> First tanker in Our Fleet</h4>
                    <p className="text-secondary-light">
                    We secured the management of our first tanker, expanding our operational capabilities into the tanker segment.

                      
                    </p>
                  </div>
                  <div className="timeline-marker">
                    <div className="relative">
                      <div className="absolute w-16 h-16 rounded-full bg-primary bg-opacity-20 -left-8 -top-8 timeline-circle"></div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative">
                        <BarChart3 size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-4 rounded-lg shadow-md timeline-content opacity-0">
                      <img
                        src="/images/Fleet/Genesis-Alpha(1).jpg"
                        alt="Fleet expansion"
                        className="w-full h-40 object-cover rounded mb-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Today */}
              <div className="timeline-item opacity-0 transition-all duration-1000 transform translate-y-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-right order-1 md:order-2">
                    <div className="bg-white p-4 rounded-lg shadow-md timeline-content opacity-0">
                      <img
                        src="/images/Fleet/AJRWB-1(1).jpg"
                        alt="Today"
                        className="w-full h-40 object-cover rounded mb-4"
                      />
                    </div>
                  </div>
                  <div className="timeline-marker order-2 md:order-2">
                    <div className="relative">
                      <div className="absolute w-16 h-16 rounded-full bg-primary bg-opacity-20 -left-8 -top-8 timeline-circle"></div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative">
                        <Award size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">2025</h3>
                    <h4 className="text-xl font-medium mb-3"> The First Indian Flag IP Code Work Boat is managed by us</h4>
                    <p className="text-secondary-light">
                    We began managing the first IP Code work boat in India under our Indian Document of Compliance (DOC).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>
      
      {/* Services Section */}
      <section className="section px-2 sm:px-4">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Comprehensive maritime solutions delivered by experienced professionals
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <SectionAnimation key={index} delay={index * 100} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-secondary-light">{service.description}</p>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="bg-background-alt py-16 px-2 sm:px-4">
        <WaveDivider inverted className="transform rotate-180" />
        <div className="section">
          <div className="container mx-auto">
            <SectionAnimation className="text-center mb-12">
              <h2 className="section-title">Our Core Values</h2>
              <p className="max-w-3xl mx-auto text-secondary-light">
              The fundamental principles guiding our operations and relationships.
              </p>
            </SectionAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SectionAnimation className="bg-white p-8 rounded-lg shadow-md text-center" delay={0}>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Shield size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-secondary-light">
                  We prioritize the safety of our crew, vessels, and the environment in all our operations.
                </p>
              </SectionAnimation>
              
              <SectionAnimation className="bg-white p-8 rounded-lg shadow-md text-center" delay={100}>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Award size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-secondary-light">
                  We strive for excellence in all aspects of our services, from technical management to crew welfare.
                </p>
              </SectionAnimation>
              
              <SectionAnimation className="bg-white p-8 rounded-lg shadow-md text-center" delay={200}>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Users size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">People-Centered</h3>
                <p className="text-secondary-light">
                  We value our team and clients, fostering relationships built on trust, respect, and collaboration.
                </p>
              </SectionAnimation>
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>
      
      <style>
        {`
        .timeline-item-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .timeline-item-active .timeline-circle {
          animation: pulse 2s infinite;
        }
        
        .timeline-item-active .timeline-content {
          opacity: 1 !important;
          transition: opacity 1s ease 0.5s;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
        
        .timeline-marker {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        `}
      </style>
    </>
  );
};

export default AboutPage;