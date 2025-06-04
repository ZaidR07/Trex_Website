"use client";
import React from 'react';

const Hero = () => {
  const handleNavigation = (path) => {
    // Navigation logic here
  };

  return (
    <div className="min-h-screen mt-[10vh] bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">2/5 spots available</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Software Development &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Digital Marketing Agency
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From Web Design to Software Development and Marketing, your One-Stop Shop for bringing your startup idea to life
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => handleNavigation('/portfolio')}
              className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              See our work
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      
     
        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-30">
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-2xl text-lg">
            Schedule a callback
          </button>
        </div>
  
    </div>
  );
};

export default Hero;