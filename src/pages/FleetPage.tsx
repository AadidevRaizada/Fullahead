import React from 'react';
import SectionAnimation from '../components/shared/SectionAnimation';
import VesselCard from '../components/shared/VesselCard';
import WaveDivider from '../components/shared/WaveDivider';
import MetaTags from '../components/shared/MetaTags';

const FleetPage: React.FC = () => {
  const managedVessels = [
    {
      name: 'GENESIS ALPHA',
      type: 'Tanker',
      images: [
        '/images/Fleet/Genesis-Alpha(1).jpg',
        
      ],
      specs: [
        'Year of Built: 2006',
        'Flag: St. Kitts & Nevis',
        'Class: IRS',
        'GRT: 1316 T',
        'Remarks: Chemical/ Oil Product Tanker, DWT: 1722 T'

      ]
    },
    {
      name: 'AJR WB1 – 4730 BHP',
      type: 'Work Boat',
      images: [
        '/images/Fleet/AJRWB-1.jpg',
        '/images/Fleet/AJRWB-1(1).jpg'
      ],
      specs: [
        'Year of Built: 2007',
        'Flag: INDIAN',
        'Class: IRS',
        'GRT: 1320 T',
        'Remarks: First vessel to be registered under Indian Flag as IP Code Work Boat, 4 point mooring with crane, total accomodation for 59 passengers'

      ]
    },
    {
      name: 'DRA 1 – 3200 BHP',
      type: 'AHT / Tow-Tug',
      images: [
        '/images/Fleet/DRA-1.jpg',
        '/images/Fleet/dra-1(1).jpg'
      ],
      specs: [
        'Year of Built: 2006',
        'Flag: INDIAN',
        'Class: IRS',
        'GRT: 467 T',
        
        'Remarks: 40 T Bollard Pull, Anchor Handling and Towing Tug.'
      ]
    },
    {
      name: 'FAIRMACS NICOBAR - 3200 BHP',
      type: 'AHT / Tow-Tug',
      images: [
        '/images/Fleet/FairmacsNicobar.jpg',
        '/images/Fleet/FairmacsNicobar(1).jpg'
      ],
      specs: [
        'Year of Built: 2006',
        'Flag / Port of Registry: INDIAN / MUMBAI',
        'Class: NKK / IRS',
        'GRT: 467 T',
        'Remarks: 40 T Bollard Pull, Anchor Handling and Towing Tug.'
      ]
    },
    {
      name: 'AQUA TOW – 3600 BHP',
      type: 'AHT / Tow-Tug',
      images: [
        '/images/Fleet/Aqua-tow.jpg',
        
      ],
      specs: [
        'Year of Built: 2010',
        'Flag / Port of Registry: INDIAN / MUMBAI',
        'Class: NKK / IRS',
        'GRT: 476 T',
        'Remarks: 50 T Bollard Pull, Anchor Handling and Towing Tug.'

        
      ]
    },
    {
      name: 'DRA 2',
      type: 'Barge',
      images: [
        '/images/Fleet/DRA-2.jpg',
        
      ],
      specs: [
        'Year of Built: 2006',
        'Flag / Port of Registry: INDIAN / MUMBAI',
        'Class:  IRS',
        'GRT: 1959 T',
        'Remarks: Flat top barge with side walls, 12 T/m^2 deck strength, DWT: 4765 T'
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
        'Year of Built: 2022 ',
        'Flag: Indian Flag',
        'Class: IRS ',
        'GRT: 380 T',
          'Remarks: Flat top barge, 8 T/m^2 deck strength, DWT: 750 T'
      ]
    }
  ];

  return (
    <>
      <MetaTags
        title="Our Managed Fleet | Full Ahead Marine & Offshore"
        description="Explore Full Ahead Marine's diverse managed fleet including GENESIS ALPHA tanker, AJR WB1 work boat (first Indian IP Code), DRA tugs, FAIRMACS NICOBAR, AQUA TOW, and barges. Professional vessel management with highest safety standards."
        keywords="managed fleet, vessel management, tanker management, work boat, AHT tug, anchor handling tug, barge management, GENESIS ALPHA, AJR WB1, IP Code work boat, maritime fleet"
        url="https://www.fullahead.in/fleet"
        image="https://www.fullahead.in/images/Fleet/Genesis-Alpha(1).jpg"
      />
      
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