"use client";

import React, { useState } from 'react';
import { ChevronDown, Code, Smartphone, Monitor, Database, Cloud, Zap, Shield, Globe, Users } from 'lucide-react';

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openService, setOpenService] = useState(null);

  const services = {
    softwareDevelopment: [
      "Website development",
      "Mobile App (Android & iOS)",
      "Desktop application",
      "ERP Software",
      "CRM Software",
      "Custom Software"
    ],
    softwareProducts: [
      "Class Management Software",
      "Institute Management Software",
      "School Management Software",
      "Hospital Management Software",
      "Medical Management Software",
      "Gym Management Software",
      "Restaurant Management Software",
      "Hotel Management Software"
    ],
    digitalMarketing: [
      "Search Engine optimisation (SEO)",
      "Social Media Marketing (SMM)",
      "Bulk SMS Marketing",
      "WhatsApp Marketing",
      "Google Ads & Meta Ads"
    ]
  };

  const techStack = {
    webDevelopment: [
      "Frontend: Next.js (React-based framework)",
      "Backend: Express.js with Node.js",
      "Database: MongoDB for flexible storage"
    ],
    mobileAppDevelopment: [
      "React Native: Cross-platform Android and iOS",
      "Flutter: High-performance mobile apps"
    ],
    desktopApplications: [
      "Electron.js: Cross-platform desktop apps"
    ],
    databases: [
      "MongoDB: NoSQL database for scalability",
      "PostgreSQL & MySQL: Relational databases"
    ],
    hostingDeployment: [
      "Vercel: Fast deployment of Next.js frontend",
      "Amazon Web Services (AWS): Cloud infrastructure",
      "Hostinger: Cost-effective web hosting"
    ]
  };

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer comprehensive technology solutions including software development, management products, and digital marketing services. Our team specializes in creating customized solutions that meet your specific business objectives with modern technologies and proven methodologies.",
      hasServices: true,
      icon: <Globe className="w-5 h-5 text-blue-400" />
    },
    {
      id: 2,
      question: "What is your tech stack?",
      answer: "At T-Rex Infotech, we leverage a modern and scalable technology stack to deliver secure, high-performance digital solutions across web, mobile, and desktop platforms. Our technology choices ensure reliability, performance, and future-proof solutions.",
      hasTechStack: true,
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      question: "What is your project management process?",
      answer: "Our project management process follows agile methodologies with clear milestones and regular communication. We start with discovery and planning, move through design and development phases, conduct thorough testing, and provide comprehensive deployment and support with continuous client collaboration.",
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      id: 4,
      question: "How do you ensure the security and privacy of our data?",
      answer: "We implement industry-standard security measures including SSL certificates, secure hosting, regular backups, and data encryption. We follow GDPR compliance guidelines and sign NDAs when required. Your data privacy and security are our top priorities with multi-layered protection protocols.",
      icon: <Shield className="w-5 h-5 text-blue-400" />
    },
    {
      id: 5,
      question: "Can you handle e-commerce projects?",
      answer: "Yes, we specialize in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. We handle everything from product catalogs and payment gateways to inventory management, order processing systems, and performance optimization for high-traffic stores.",
      icon: <Smartphone className="w-5 h-5 text-blue-400" />
    },
    {
      id: 6,
      question: "How scalable are the solutions you provide?",
      answer: "All our solutions are built with scalability in mind using modern architectures and cloud-based infrastructure that can grow with your business. Whether you're expecting increased traffic, expanding functionality, or scaling operations, our solutions adapt seamlessly to your evolving needs.",
      icon: <Zap className="w-5 h-5 text-blue-400" />
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
    setOpenService(null);
  };

  const toggleService = (service, event) => {
    event.stopPropagation();
    setOpenService(openService === service ? null : service);
  };

  const getTechStackIcon = (category) => {
    const icons = {
      webDevelopment: <Monitor className="w-4 h-4" />,
      mobileAppDevelopment: <Smartphone className="w-4 h-4" />,
      desktopApplications: <Monitor className="w-4 h-4" />,
      databases: <Database className="w-4 h-4" />,
      hostingDeployment: <Cloud className="w-4 h-4" />
    };
    return icons[category] || <Code className="w-4 h-4" />;
  };

  const getTechStackTitle = (category) => {
    const titles = {
      webDevelopment: "Web Development",
      mobileAppDevelopment: "Mobile App Development", 
      desktopApplications: "Desktop Applications",
      databases: "Databases",
      hostingDeployment: "Hosting & Deployment"
    };
    return titles[category];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-center py-8">
        <div className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:shadow-blue-500/25 transition-shadow">
          <span className="text-white font-semibold">FAQ</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="text-center px-8 py-16 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block p-3 bg-blue-600/10 rounded-full mb-4">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed">
          Have questions about how we work or what you can expect<br />
          from our <span className="text-blue-400 font-medium">T-Rex Infotech</span> services?
        </p>
      </section>

      {/* FAQ Grid */}
      <section className="px-8 py-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 ${
                openFAQ === faq.id ? 'md:col-span-2 shadow-2xl shadow-blue-500/10' : 'hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="text-white font-medium text-base lg:text-lg group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-blue-400 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-800/50 pt-5">
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    
                    {faq.hasServices && (
                      <div className="space-y-4">
                        <h4 className="text-blue-400 font-semibold text-lg mb-4">Our Service Categories:</h4>
                        {/* Software Development Dropdown */}
                        <div className="border border-gray-700/50 rounded-xl overflow-hidden bg-gray-800/30">
                          <button
                            onClick={(e) => toggleService('softwareDevelopment', e)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <Code className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400 font-medium">Software Development</span>
                            </div>
                            <ChevronDown 
                              className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                                openService === 'softwareDevelopment' ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openService === 'softwareDevelopment' && (
                            <div className="px-5 pb-4 bg-gray-800/20">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                                {services.softwareDevelopment.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 text-gray-300 text-sm py-2 px-3 bg-gray-700/30 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Software Products Dropdown */}
                        <div className="border border-gray-700/50 rounded-xl overflow-hidden bg-gray-800/30">
                          <button
                            onClick={(e) => toggleService('softwareProducts', e)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <Database className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400 font-medium">Software Products</span>
                            </div>
                            <ChevronDown 
                              className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                                openService === 'softwareProducts' ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openService === 'softwareProducts' && (
                            <div className="px-5 pb-4 bg-gray-800/20">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                                {services.softwareProducts.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 text-gray-300 text-sm py-2 px-3 bg-gray-700/30 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Digital Marketing Dropdown */}
                        <div className="border border-gray-700/50 rounded-xl overflow-hidden bg-gray-800/30">
                          <button
                            onClick={(e) => toggleService('digitalMarketing', e)}
                            className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <Globe className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400 font-medium">Digital Marketing</span>
                            </div>
                            <ChevronDown 
                              className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                                openService === 'digitalMarketing' ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openService === 'digitalMarketing' && (
                            <div className="px-5 pb-4 bg-gray-800/20">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                                {services.digitalMarketing.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 text-gray-300 text-sm py-2 px-3 bg-gray-700/30 rounded-lg">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {faq.hasTechStack && (
                      <div className="space-y-4">
                        <h4 className="text-blue-400 font-semibold text-lg mb-4">Our Technology Stack:</h4>
                        {Object.entries(techStack).map(([category, items]) => (
                          <div key={category} className="border border-gray-700/50 rounded-xl overflow-hidden bg-gray-800/30">
                            <button
                              onClick={(e) => toggleService(category, e)}
                              className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {getTechStackIcon(category)}
                                <span className="text-blue-400 font-medium">{getTechStackTitle(category)}</span>
                              </div>
                              <ChevronDown 
                                className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                                  openService === category ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {openService === category && (
                              <div className="px-5 pb-4 bg-gray-800/20">
                                <div className="space-y-2 pt-3">
                                  {items.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 text-gray-300 text-sm py-2 px-3 bg-gray-700/30 rounded-lg">
                                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;