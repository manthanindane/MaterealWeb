import React from 'react';
import Image from 'next/image';
import newlogo from '../../../public/assets/newlogo.png';

const Footer = ({ scrollToSection, aboutRef, featuresRef, howItWorksRef, pricingRef, contactRef }) => {
  const footerSections = [
    {
      title: "Company",
      items: [
        { name: "About Us", ref: aboutRef },
        { name: "Features", ref: featuresRef },
        { name: "How It Works", ref: howItWorksRef }
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Pricing", ref: pricingRef },
        { name: "Contact Us", ref: contactRef },
        { name: "FAQs", ref: null }
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", url: "https://www.termsfeed.com/live/d78d06a1-2a49-403c-a597-f43e01047ad9" },
        { name: "Terms of Service", ref: null }
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image
              src={newlogo}
              alt="Matereal Logo"
              width={200}
              height={200}
            />
          </div>
          {footerSections.map((section, i) => (
            <div key={i} className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.ref) {
                            scrollToSection(item.ref);
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Matereal, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
