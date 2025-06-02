"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer comprehensive web design and development services including responsive design, e-commerce solutions, custom CMS development, web applications, SEO optimization, and ongoing maintenance. Our team specializes in creating customized solutions that meet your specific business objectives."
    },
    {
      id: 2,
      question: "What is your policy on revisions and feedback?",
      answer: "We believe in collaborative development and offer unlimited revisions during the design phase. We provide regular updates and welcome your feedback throughout the project. Our goal is to ensure the final product exceeds your expectations and aligns perfectly with your vision."
    },
    {
      id: 3,
      question: "What is your project management process?",
      answer: "Our project management process follows agile methodologies with clear milestones and regular communication. We start with discovery and planning, move through design and development phases, conduct thorough testing, and provide comprehensive deployment and support."
    },
    {
      id: 4,
      question: "How do you ensure the security and privacy of our data?",
      answer: "We implement industry-standard security measures including SSL certificates, secure hosting, regular backups, and data encryption. We follow GDPR compliance guidelines and sign NDAs when required. Your data privacy and security are our top priorities."
    },
    {
      id: 5,
      question: "Can you handle e-commerce projects?",
      answer: "Yes, we specialize in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. We handle everything from product catalogs and payment gateways to inventory management and order processing systems."
    },
    {
      id: 6,
      question: "How scalable are the solutions you provide?",
      answer: "All our solutions are built with scalability in mind. We use modern architectures and cloud-based infrastructure that can grow with your business. Whether you're expecting increased traffic or expanding functionality, our solutions can adapt to your evolving needs."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-center py-6">
        <div className="px-6 py-2 bg-blue-600 rounded-full">
          <span className="text-white font-medium">FAQ</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="text-center px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Frequently asked questions
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have questions about how we work or what you can expect<br />
          from our services?
        </p>
      </section>

      {/* FAQ Grid */}
      <section className="px-8 py-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-medium text-sm lg:text-base">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Made in Framer badge */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white text-black px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <span>⚡</span>
          Made in Framer
        </div>
      </div>
    </div>
  );
};

export default Faq;