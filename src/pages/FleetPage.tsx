import React from 'react';
import SectionAnimation from '../../public/components/shared/SectionAnimation';
import VesselCard from '../../public/components/shared/VesselCard';
import WaveDivider from '../../public/components/shared/WaveDivider';

const FleetPage: React.FC = () => {
  const managedVessels = [
    {
      name: 'GENESIS ALPHA',
      type: 'Tanker',
      images: [
        'images/Fleet/Genesis-Alpha(1).jpg',
        
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'AJR WB1',
      type: 'Work Boat',
      images: [
        '/images/Fleet/AJRWB-1.jpg',
        '/images/Fleet/AJRWB-1(1).jpg'
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'DRA 1',
      type: 'AHT / Tow-Tug',
      images: [
        '/images/Fleet/DRA-1.jpg',
        '/images/Fleet/dra-1(1).jpg'
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'FAIRMACS NICOBAR',
      type: 'AHT / Tow-Tug',
      images: [
        'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'AQUA TOW',
      type: 'AHT / Tow-Tug',
      images: [
        '/images/Fleet/Aqua-tow.jpg',
        
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'DRA 2',
      type: 'Barge',
      images: [
        '/images/Fleet/DRA-2.jpg',
        
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    },
    {
      name: 'OCEAN MANTRA',
      type: 'Barge',
      images: [
        '/images/Fleet/Ocean-mantra2.jpg',
        '/images/Fleet/Ocean-mantra(1).jpg'
      ],
      specs: [
        'Flag: ',
        'Class: ',
        'GRT: ',
        'Remark: '
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Managed Fleet</h1>
            <p className="text-xl text-secondary-light">
              Modern and diverse fleet managed with the highest standards of safety and efficiency
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* Managed Vessels */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Managed Vessels</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Our professionally managed vessels operating with exceptional safety and performance standards
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedVessels.map((vessel, index) => (
              <VesselCard
                key={vessel.name}
                name={vessel.name}
                type={vessel.type}
                images={vessel.images}
                specs={vessel.specs}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Fleet Management */}
      <section className="bg-background-alt py-16">
        <WaveDivider inverted className="transform rotate-180" />
        <div className="section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <SectionAnimation>
                <h2 className="section-subtitle">Fleet Management Excellence</h2>
                <p className="text-secondary-light mb-4">
                  Our fleet management approach combines technical expertise with operational efficiency to ensure our vessels are maintained to the highest standards.
                </p>
                <p className="text-secondary-light mb-4">
                  With a focus on preventive maintenance, regulatory compliance, and crew welfare, we deliver optimal vessel performance while minimizing operational costs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Comprehensive vessel maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>100% compliance with international regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Advanced monitoring systems for optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Expert crew training and development</span>
                  </li>
                </ul>
              </SectionAnimation>
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>
    </>
  );
};

export default FleetPage;