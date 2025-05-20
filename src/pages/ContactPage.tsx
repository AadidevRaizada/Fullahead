import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionAnimation from '../components/shared/SectionAnimation';
import ContactForm from '../components/shared/ContactForm';
import TeamMemberCard from '../components/shared/TeamMemberCard';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Office Address',
      content: 'Office No 306, Town Centre II, Village Sahar Cargo, Andheri-Kurla Rd, Andheri (E), Mumbai 400059, India'
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email',
      content: 'dah@fullahead.in',
      link: 'mailto:dah@fullahead.in'
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone',
      content: '+91 98194 40445',
      link: 'tel:+919819440445'
    }
  ];
  
  const keyContacts = [
    {
      name: 'Capt. Anupam Raizada',
      position: 'Managing Director',
      email: 'management@fullahead.in',
      phone: '+91 98330 90019',
      photo: '/images/CompanyPeople/Anupam.jpg'
    },
    {
      name: 'Daanish A.H',
      position: 'Director',
      email: 'dah@fullahead.in',
      phone: '+91 98194 40445',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Capt. Vishal Sharma',
      position: 'Operations Director',
      email: 'operations@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Zehen Shorey',
      position: 'Operations Manager',
      email: 'ops@fullahead.in',
      phone: '+91 96192 65512',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Vishaka',
      position: 'Operations',
      email: 'operations@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Kailash',
      position: 'Operations',
      email: 'operations@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Laxmann',
      position: 'Operations',
      email: 'operations@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Bhavin',
      position: 'Accounts',
      email: 'accounts@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Sagar',
      position: 'IT Support',
      email: 'it@fullahead.in',
      phone: '+91 98XXX XXXXX',
      photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center bg-background-alt">
        <div className="container mx-auto px-4">
          <SectionAnimation className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-light">
              Get in touch with our team for inquiries, services, or partnership opportunities
            </p>
          </SectionAnimation>
        </div>
      </section>
      
      {/* Key Contacts */}
      <section className="section">
        <div className="container mx-auto">
          <SectionAnimation className="text-center mb-12">
            <h2 className="section-title">Key Contacts</h2>
            <p className="max-w-3xl mx-auto text-secondary-light">
              Our team is ready to assist you with any inquiries or requirements
            </p>
          </SectionAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {keyContacts.map((contact, index) => (
              <TeamMemberCard
                key={index}
                name={contact.name}
                position={contact.position}
                email={contact.email}
                phone={contact.phone}
                photo={contact.photo}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <SectionAnimation
                key={index}
                delay={index * 100}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-secondary-light hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-secondary-light">{item.content}</p>
                    )}
                  </div>
                </div>
              </SectionAnimation>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SectionAnimation>
              <h2 className="section-subtitle mb-6">Send Us a Message</h2>
              <ContactForm />
            </SectionAnimation>
            
            {/* Map */}
            <SectionAnimation delay={100}>
              <h2 className="section-subtitle mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-md h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5832786070383!2d72.8626!3d19.1006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8435d562cc1%3A0xce8123c23de5eaa0!2sAndheri%20Kurla%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623825273451!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Full Ahead Ship Management office location"
                ></iframe>
              </div>
            </SectionAnimation>
          </div>
        </div>
      </section>
      
      {/* Working Hours */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionAnimation>
              <h2 className="section-subtitle">Business Hours</h2>
              <p className="text-secondary-light mb-6">
                Our office is open during the following hours. However, for emergencies, our team is available 24/7.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary bg-opacity-10 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">24/7 Emergency Support</h3>
                <p className="text-secondary-light">
                  For urgent matters outside business hours, please contact our emergency support line at:
                </p>
                <a
                  href="tel:+919819440445"
                  className="block mt-2 text-primary font-medium hover:underline"
                >
                  +91 98194 40445
                </a>
              </div>
            </SectionAnimation>
            
            <SectionAnimation delay={100}>
              <img
                src="images\backgrounds\Dubai2.jpg"
                alt="Customer service"
                className="rounded-lg shadow-xl w-full"
              />
            </SectionAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;