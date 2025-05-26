import React from 'react';
import { Ship, Users, BarChart3, Shield, Award, Calendar, MapPin, Phone, Mail, Flag } from 'lucide-react';

const CompanyProfileBrochure: React.FC = () => {
  const services = [
    {
      icon: <Ship size={24} className="text-primary" />,
      title: 'Ship Management',
      description: 'Comprehensive vessel management services ensuring operational excellence and regulatory compliance.'
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: 'Crew Management',
      description: 'Expert crewing solutions with qualified seafarers and comprehensive crew welfare programs.'
    },
    {
      icon: <BarChart3 size={24} className="text-primary" />,
      title: 'Procurement Management',
      description: 'Strategic vessel maintenance and procurement services optimized for operational efficiency.'
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: 'Maritime Consultancy',
      description: 'Tailored maritime consultancy solutions addressing your specific operational requirements.'
    }
  ];

  const managedVessels = [
    {
      name: 'GENESIS ALPHA',
      type: 'Tanker',
      specs: 'Year: 2006 | Flag: St. Kitts & Nevis | GRT: 1316 T | DWT: 1722 T'
    },
    {
      name: 'AJR WB1',
      type: 'Work Boat',
      specs: 'Year: 2007 | Flag: Indian | GRT: 1320 T | First IP Code Work Boat in India'
    },
    {
      name: 'DRA 1',
      type: 'AHT / Tow-Tug',
      specs: 'Year: 2006 | Flag: Indian | GRT: 467 T | 40 T Bollard Pull'
    },
    {
      name: 'FAIRMACS NICOBAR',
      type: 'AHT / Tow-Tug',
      specs: 'Year: 2006 | Flag: Indian | GRT: 467 T | 40 T Bollard Pull'
    },
    {
      name: 'AQUA TOW',
      type: 'AHT / Tow-Tug',
      specs: 'Year: 2010 | Flag: Indian | GRT: 476 T | 50 T Bollard Pull'
    },
    {
      name: 'DRA 2',
      type: 'Barge',
      specs: 'Year: 2006 | Flag: Indian | GRT: 1959 T | DWT: 4765 T'
    },
    {
      name: 'OCEAN MANTRA',
      type: 'Barge',
      specs: 'Year: 2022 | Flag: Indian | GRT: 380 T | DWT: 750 T'
    }
  ];

  const keyContacts = [
    {
      name: 'Capt. Anupam Raizada',
      position: 'Managing Director',
      email: 'management@fullahead.in'
    },
    {
      name: 'Daanish A.H',
      position: 'Director',
      email: 'dah@fullahead.in',
      phone: '+91 98194 40445'
    },
    {
      name: 'Capt. Vishal Sharma',
      position: 'DPA'
    },
    {
      name: 'Zehen Shorey',
      position: 'Operations Manager',
      email: 'ops@fullahead.in'
    }
  ];

  const certifications = [
    {
      title: 'Document of Compliance (DOC)',
      flags: ['India', 'Comoros', 'St Kitts & Nevis'],
      description: 'ISM Code compliance certification'
    },
    {
      title: 'Recruitment & Placement Services (RPS)',
      authority: 'DG Shipping, India',
      licence: 'RPSL-MUM-162031',
      description: 'Seafarer recruitment and placement authorization'
    }
  ];

  return (
    <div className="company-profile-brochure bg-white text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Cover Page */}
      <div className="page-break min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/images/Full-AheadLogo.jpg" 
              alt="Full Ahead Logo" 
              className="h-20 mx-auto mb-4" 
            />
            <h1 className="text-5xl font-bold mb-2">
              <span className="text-white">Full</span> Ahead
            </h1>
            <h2 className="text-2xl font-light">Ship Management</h2>
          </div>
          
          <div className="border-t border-white/30 pt-8 mt-8">
            <h3 className="text-3xl font-semibold mb-4">Company Profile</h3>
            <p className="text-xl mb-8">Excellence in Maritime Management Since 2019</p>
            <div className="text-lg">
              <p>Ship & Crew Management | Procurement Management | Maritime Consultancy</p>
            </div>
          </div>
          
          <div className="mt-12 text-sm">
            <p>Office No 306, Town Centre II, Village Sahar Cargo</p>
            <p>Andheri-Kurla Rd, Andheri (E), Mumbai 400059, India</p>
            <p className="mt-2">Email: dah@fullahead.in | Phone: +91 98194 40445</p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="page-break min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">About Full Ahead</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2019 in Mumbai, Full Ahead Marine & Offshore PVT. LTD. brings over 100 years of cumulative maritime expertise to provide exceptional ship management services. We are committed to excellence in safety, ISM compliance, and operational performance across our diverse fleet of vessels.
              </p>
              <p className="text-gray-700 mb-4">
                Our team consists of experienced maritime professionals focused on delivering safe, economical, and efficient ship management solutions for vessel owners worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To deliver excellence in maritime management through innovative solutions, unwavering commitment to safety, and exceptional service quality that exceeds our clients' expectations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the preferred maritime management partner, recognized for our operational excellence, safety standards, and contribution to sustainable shipping practices.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Shield size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Safety First</h4>
                <p className="text-sm text-gray-600">Prioritizing crew, vessel, and environmental safety in all operations</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Award size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Striving for excellence in technical management and crew welfare</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Users size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">People-Centered</h4>
                <p className="text-sm text-gray-600">Building relationships based on trust, respect, and collaboration</p>
              </div>
            </div>
          </div>

          {/* Company Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company Journey</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2019</div>
                <div>
                  <h4 className="font-semibold">Company Establishment</h4>
                  <p className="text-gray-600">Founded by Capt. Anupam Raizada and Late Capt. Purnendu Shorey</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2022</div>
                <div>
                  <h4 className="font-semibold">First Managed Vessels</h4>
                  <p className="text-gray-600">Secured management of first set of tug and barge</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2024</div>
                <div>
                  <h4 className="font-semibold">First Tanker</h4>
                  <p className="text-gray-600">Added first tanker to our managed fleet</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2025</div>
                <div>
                  <h4 className="font-semibold">IP Code Achievement</h4>
                  <p className="text-gray-600">First Indian Flag IP Code Work Boat under our management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="page-break min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Ship Management Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span>Comprehensive vessel maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span>100% compliance with international regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span>Advanced monitoring systems for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span>Expert crew training and development</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Performance Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Safety Compliance</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Major Incidents</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15%</div>
                  <div className="text-sm text-gray-600">OPEX Reduction</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25%</div>
                  <div className="text-sm text-gray-600">Fleet Utilization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet */}
      <div className="page-break min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">Our Managed Fleet</h2>
          
          <p className="text-gray-700 mb-6">
            Our diverse fleet of professionally managed vessels operates with exceptional safety and performance standards across various maritime sectors.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {managedVessels.map((vessel, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-blue-600">{vessel.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{vessel.type}</span>
                </div>
                <p className="text-gray-600 text-sm">{vessel.specs}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Fleet Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Vessel Types:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Chemical/Oil Product Tankers</li>
                  <li>• IP Code Work Boats</li>
                  <li>• Anchor Handling Tugs</li>
                  <li>• Flat Top Barges</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operational Areas:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Indian Coastal Waters</li>
                  <li>• International Waters</li>
                  <li>• Offshore Support Operations</li>
                  <li>• Port and Harbor Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="page-break min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">Certifications & Licenses</h2>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                <p className="text-gray-700 mb-4">{cert.description}</p>
                
                {cert.flags && (
                  <div>
                    <h4 className="font-semibold mb-2">Flag States:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.flags.map((flag, flagIndex) => (
                        <span key={flagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                          <Flag size={14} className="mr-1" />
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {cert.authority && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600">
                      <strong>Issuing Authority:</strong> {cert.authority}
                    </p>
                    {cert.licence && (
                      <p className="text-sm text-gray-600">
                        <strong>License Number:</strong> {cert.licence}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Compliance Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Safety Records:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Zero major incidents record</li>
                  <li>• 100% PSC inspection success rate</li>
                  <li>• Full ISM Code compliance</li>
                  <li>• Regular safety training programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operational Excellence:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Proactive maintenance systems</li>
                  <li>• Advanced monitoring technology</li>
                  <li>• Qualified and certified crew</li>
                  <li>• Environmental compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="page-break min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">Contact Information</h2>
          
          {/* Company Contact */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <MapPin size={20} className="text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-700 text-sm">
                    Office No 306, Town Centre II<br />
                    Village Sahar Cargo, Andheri-Kurla Rd<br />
                    Andheri (E), Mumbai 400059, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-700 text-sm">dah@fullahead.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-700 text-sm">+91 98194 40445</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Contacts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyContacts.map((contact, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600">{contact.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{contact.position}</p>
                  {contact.email && (
                    <p className="text-gray-700 text-sm">
                      <Mail size={14} className="inline mr-1" />
                      {contact.email}
                    </p>
                  )}
                  {contact.phone && (
                    <p className="text-gray-700 text-sm">
                      <Phone size={14} className="inline mr-1" />
                      {contact.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Partner with Us?</h3>
            <p className="mb-4">
              Discover how our ship management expertise can optimize your maritime operations and deliver excellence at sea.
            </p>
            <div className="text-lg font-semibold">
              Contact us today to discuss your requirements
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .company-profile-brochure {
          line-height: 1.6;
        }
        
        .page-break {
          page-break-after: always;
        }
        
        @media print {
          .page-break {
            page-break-after: always;
          }
          
          .company-profile-brochure {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyProfileBrochure; 