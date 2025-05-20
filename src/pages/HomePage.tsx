import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown } from 'lucide-react';
import Button from '../../public/components/shared/Button';
import WaveDivider from '../../public/components/shared/WaveDivider';
import SectionAnimation from '../../public/components/shared/SectionAnimation';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/backgrounds/Home-Pagebg.jpg"
            alt="Offshore vessel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <SectionAnimation className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Delivering Excellence at Sea
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Ship & Crew Management | Procurement Management | Maritime Consultancy
            </p>
          </SectionAnimation>
        </div>
        {/* Move buttons lower and restyle for contrast */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-4">
          <Button to="/fleet" variant="primary" size="lg" className="bg-primary text-white border-none shadow-lg hover:bg-primary-dark">
            Our Managed Fleet
          </Button>
          <Button to="/licences" variant="primary" size="lg" className="bg-primary text-white border-none shadow-lg hover:bg-primary-dark">
            Licences
          </Button>
          <Button href="/company-profile.pdf" variant="primary" size="lg" className="bg-primary text-white border-none shadow-lg hover:bg-primary-dark">
            <FileDown size={18} className="mr-2" />
            Download Company Profile
          </Button>
          <Button to="/contact" variant="primary" size="lg" className="bg-primary text-white border-none shadow-lg hover:bg-primary-dark">
            Contact
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider />
        </div>
      </section>
      
      {/* About Section */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">About Full Ahead</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Founded in 2019 in Mumbai, we bring over 100 years of cumulative maritime expertise to provide exceptional ship management services.
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SectionAnimation className="order-2 md:order-1">
              <h3 className="section-subtitle">Maritime Excellence</h3>
              <p className="text-secondary-light mb-4">
                Our team consists of experienced maritime professionals focused on delivering safe, economical, and efficient ship management solutions.
              </p>
              <p className="text-secondary-light mb-6">
                We are committed to excellence in safety, ISM compliance, and operational performance across our diverse fleet of vessels.
              </p>
              <Link to="/about" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn more about us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </SectionAnimation>
            
            <SectionAnimation className="order-1 md:order-2">
              <img
                src="/src/components/Full-AheadLogo.jpg"
                alt="Ship management team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SectionAnimation>
          </div>
        </div>
      </section>
      
      {/* Fleet Preview */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Our Managed Fleet</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Modern and diverse fleet managed with the highest standards of safety and efficiency
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 gap-6">
            <SectionAnimation className="relative rounded-lg overflow-hidden shadow-lg" delay={100}>
              <img
                src="/images/backgrounds/Our-fleet.jpg"
                alt="Fleet"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button to="/fleet" variant="primary" size="lg">
                  View Our Managed Fleet
                </Button>
              </div>
            </SectionAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <WaveDivider inverted className="text-primary" />
        <div className="container mx-auto px-4 text-center">
          <SectionAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discover how our ship management expertise can optimize your maritime operations and deliver excellence at sea.
            </p>
            <Button
              to="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us Today
            </Button>
          </SectionAnimation>
        </div>
      </section>
    </>
  );
};

export default HomePage;