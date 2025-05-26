import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Full Ahead Marine & Offshore PVT. LTD. | Offshore & Main-Fleet Experts",
  description = "Full Ahead Marine & Offshore PVT. LTD. - Experts in offshore & main-fleet vessel management, procurement management, and maritime consultancy services. Founded in 2019 in Mumbai with over 100 years of cumulative maritime expertise.",
  keywords = "ship management, crew management, maritime consultancy, vessel management, offshore vessels, fleet management, ISM compliance, maritime services, Mumbai, India, Full Ahead Marine",
  image = "https://www.fullahead.in/images/Full-AheadLogo.jpg",
  url = "https://www.fullahead.in",
  type = "website",
  author = "Full Ahead Marine & Offshore PVT. LTD."
}) => {
  const siteName = "Full Ahead Marine & Offshore PVT. LTD.";
  const companyInfo = {
    name: "Full Ahead Marine & Offshore PVT. LTD.",
    address: "Office No 306, Town Centre II, Village Sahar Cargo, Andheri-Kurla Rd, Andheri (E), Mumbai 400059, India",
    phone: "+91 98194 40445",
    email: "dah@fullahead.in",
    founded: "2019"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content={siteName} />
      
      {/* Company Specific Meta Tags */}
      <meta name="company" content={companyInfo.name} />
      <meta name="contact:phone_number" content={companyInfo.phone} />
      <meta name="contact:email" content={companyInfo.email} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": companyInfo.name,
          "url": url,
          "logo": image,
          "description": description,
          "foundingDate": companyInfo.founded,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No 306, Town Centre II, Village Sahar Cargo, Andheri-Kurla Rd",
            "addressLocality": "Andheri (E)",
            "addressRegion": "Mumbai",
            "postalCode": "400059",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": companyInfo.phone,
            "email": companyInfo.email,
            "contactType": "customer service"
          },
          "sameAs": [
            url
          ],
          "industry": "Maritime Services",
          "services": [
            "Ship Management",
            "Crew Management", 
            "Procurement Management",
            "Maritime Consultancy"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags; 