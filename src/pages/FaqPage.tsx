import React from 'react';
import Accordion from '../components/shared/Accordion';
import SectionAnimation from '../components/shared/SectionAnimation';
import Button from '../components/shared/Button';

const FaqPage: React.FC = () => {
  const faqs = [
    {
      title: 'What services do you provide?',
      content: (
        <p>
          Full Ahead Ship Management provides comprehensive maritime services including ship management, crew management, procurement management, and maritime consultancy solutions. Our integrated approach ensures all aspects of vessel operations are handled with the highest standards of safety and efficiency.
        </p>
      )
    },
    {
      title: 'Which flags are you certified under?',
      content: (
        <p>
          We hold Document of Compliance (DOC) certificates for vessels flying the flags of India, Panama, Comoros, and St Kitts & Nevis. This allows us to manage vessels registered under these flag states in full compliance with their respective maritime regulations.
        </p>
      )
    },
    {
      title: 'What is your approach to vessel maintenance?',
      content: (
        <p>
          We follow a proactive maintenance strategy that emphasizes preventive maintenance to minimize downtime and ensure vessel reliability. Our technical team develops comprehensive Planned Maintenance Systems (PMS) for each vessel, scheduling regular inspections, servicing, and parts replacement based on manufacturer recommendations and operational experience.
        </p>
      )
    },
    {
      title: 'How do you ensure regulatory compliance?',
      content: (
        <p>
          We maintain a rigorous compliance program that tracks all applicable regulations from flag states, classification societies, and international bodies like IMO and ILO. Our dedicated compliance team conducts regular internal audits, provides crew training on regulatory requirements, and works closely with classification societies to ensure all vessels meet or exceed compliance standards.
        </p>
      )
    },
    {
      title: 'What is your crew training policy?',
      content: (
        <p>
          We invest heavily in crew training and development, with programs covering technical skills, safety procedures, and environmental protection. All crew members undergo regular training on vessel-specific equipment, emergency response procedures, and the latest regulatory requirements. We also provide career development opportunities to help seafarers advance professionally.
        </p>
      )
    },
    {
      title: 'How do you handle emergency situations?',
      content: (
        <p>
          We have robust emergency response procedures in place, with clear chains of command and communication protocols. Our shore team provides 24/7 support to vessels, and all crew members receive regular training in emergency response. We conduct frequent drills covering various scenarios, from fire and collision to medical emergencies and extreme weather conditions.
        </p>
      )
    },
    {
      title: 'How do you optimize vessel operational costs?',
      content: (
        <p>
          We employ various strategies to optimize operational costs while maintaining safety and quality standards. These include efficient voyage planning, fuel optimization, strategic maintenance scheduling, bulk purchasing of spare parts and supplies, and negotiating favorable terms with service providers. Our technical and operational teams regularly analyze performance data to identify and implement cost-saving opportunities.
        </p>
      )
    },
    {
      title: 'Do you assist in chartering/sale and purchase?',
      content: (
        <p>
          Yes, we do assist in sale and purchase and chartering of vessels.
        </p>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-secondary-light">
              Find answers to common questions about our services and operations
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation>
            <Accordion items={faqs} />
          </SectionAnimation>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Didn't Find Your Answer?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to assist you with any specific questions or requirements you may have.
            </p>
            <Button
              to="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Our Team
            </Button>
          </SectionAnimation>
        </div>
      </section>
    </>
  );
};

export default FaqPage;