"use client";
import React from 'react';
import Navbar from '@/app/components/Navbar';

const Page = () => {
  return ( 
    <>
    <Navbar />

    <div className="bg-gray-900 text-white relative py-16 mt-14 px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our Portfolio
          </span>
        </h2>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Check out some of our awesome projects that showcase our expertise in software development and digital marketing.
        </p>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">
                A fully responsive online store with secure payment integration and user-friendly design.
              </p>
              <a
                href="#booking"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Project
              </a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Mobile App Development</h3>
              <p className="text-gray-300 mb-4">
                A cross-platform mobile app for seamless user engagement and real-time notifications.
              </p>
              <a
                href="#booking"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Project
              </a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Digital Marketing Campaign</h3>
              <p className="text-gray-300 mb-4">
                A targeted SEO and social media campaign that boosted client visibility by 200%.
              </p>
              <a
                href="#booking"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;