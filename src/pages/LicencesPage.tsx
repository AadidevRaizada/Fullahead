import React from 'react';
import { FileText, Flag, CheckCircle } from 'lucide-react';
import SectionAnimation from '../../public/components/shared/SectionAnimation';
import Card from '../../public/components/shared/Card';

const LicencesPage: React.FC = () => {
  const certificateTypes = [
    {
      title: 'Document of Compliance (DOC)',
      description: 'Certifies compliance with the International Safety Management (ISM) Code.',
      flags: ['India', 'Panama', 'Comoros', 'St Kitts & Nevis'],
      icon: <FileText size={40} className="text-primary" />
    },
    {
      title: 'Recruitment & Placement Services (RPS) Licence',
      description: 'Authorizes recruitment and placement of seafarers under DG Shipping, India regulations.',
      authority: 'Directorate General of Shipping - India',
      icon: <CheckCircle size={40} className="text-primary" />
    }
  ];
  
  const flagCertificates = [
    {
      country: 'India',
      image: 'images/flags/Indian-flag.png',
      issueDate: '15 June 2019',
      expiryDate: '14 June 2024'
    },
    {
      country: 'Panama',
      image: 'images/flags/Panama-flag.png',
      issueDate: '22 August 2019',
      expiryDate: '21 August 2024'
    },
    {
      country: 'Comoros',
      image: 'images/flags/comoros-flag.png',
      issueDate: '10 October 2020',
      expiryDate: '9 October 2025'
    },
    {
      country: 'St Kitts & Nevis',
      image: 'images/flags/st.kitt-nevis-flag.png',
      issueDate: '5 March 2021',
      expiryDate: '4 March 2026'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Licences & Certifications</h1>
            <p className="text-xl text-secondary-light">
              Comprehensive certifications ensuring regulatory compliance across multiple flag states
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* Certificates Overview */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Certifications Overview</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Our licences and certifications enable us to provide comprehensive ship management services globally
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificateTypes.map((cert, index) => (
              <SectionAnimation key={index} delay={index * 100} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                    <p className="text-secondary-light mb-4">{cert.description}</p>
                    
                    {cert.flags && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Flag States:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.flags.map((flag) => (
                            <span
                              key={flag}
                              className="inline-flex items-center px-3 py-1 rounded-full bg-background-alt text-secondary-light"
                            >
                              <Flag size={14} className="mr-1" />
                              {flag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {cert.authority && (
                      <div>
                        <h4 className="font-medium mb-2">Issuing Authority:</h4>
                        <p className="text-secondary-light">{cert.authority}</p>
                      </div>
                    )}
                  </div>
                </div>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Flag Certificates */}
      <section className="bg-background-alt py-16">
        <div className="section">
          <div className="container mx-auto">
            <SectionAnimation className="text-center mb-12">
              <h2 className="section-title">DOC Certificates by Flag State</h2>
              <p className="max-w-3xl mx-auto text-secondary-light">
                Our Document of Compliance certificates for each flag state we operate under
              </p>
            </SectionAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flagCertificates.map((cert, index) => (
                <Card
                  key={index}
                  title={cert.country}
                  image={cert.image}
                  delay={index * 100}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-secondary-light">Issue Date:</span>
                      <span className="font-medium">{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-light">Expiry Date:</span>
                      <span className="font-medium">{cert.expiryDate}</span>
                    </div>
                    <button className="mt-4 inline-flex items-center text-primary hover:underline">
                      <FileText size={16} className="mr-1" />
                      Download Certificate
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* RPS Licence */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionAnimation>
              <h2 className="section-subtitle">Recruitment & Placement Services Licence</h2>
              <p className="text-secondary-light mb-4">
                Our RPS licence from the Directorate General of Shipping (India) authorizes us to recruit and place seafarers on vessels worldwide, ensuring compliance with Maritime Labour Convention (MLC) 2006 requirements.
              </p>
              <p className="text-secondary-light mb-6">
                This certification enables us to provide qualified and certified crew members for all vessel types, maintaining high standards of competence and professionalism.
              </p>
              <div className="p-4 bg-background-alt rounded-lg">
                <h4 className="font-medium mb-2">RPS Licence Details:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Licence No: RPSL-MUM-1234</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Issue Date: 15 July 2019</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Validity: 5 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                    <span>Issuing Authority: DG Shipping, Mumbai</span>
                  </li>
                </ul>
                <button className="mt-4 inline-flex items-center text-primary hover:underline">
                  <FileText size={16} className="mr-1" />
                  Download RPS Certificate
                </button>
              </div>
            </SectionAnimation>
            
            <SectionAnimation delay={100}>
              <img
                src="images\backgrounds\RPSL.jpg"
                alt="Maritime crew"
                className="rounded-lg shadow-xl w-full"
              />
            </SectionAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default LicencesPage;