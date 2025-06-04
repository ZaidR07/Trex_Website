"use client";

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
const Hero = () => {

const router = useRouter();
const service = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-14 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
           <img className='rounded-md' src="/logo.jpeg" alt="Logo" />
          </div>
          <span className="text-xl font-semibold">T-Rex Infotech</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
        </nav>
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white  px-6 py-2 rounded-lg transition-colors" >
          
          <a href="#booking">Schedule a callback</a>
        </button>
      </header> 

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 md:py-32">
        {/* Availability Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">2/5 spots available</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center max-w-4x leading-tight mb-6">
          Software devlopment & Digital
          <br />
          Marketing Agency
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-8 leading-relaxed">
          From Web Design to Software Development and Marketing, your One-Stop Shop for bringing your startup idea to life
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={ ()=> 
            router.push('/Portfolio')
           } className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            See our work 
          </button>
          <button onClick={ () =>
            service.push('/Services')
           } className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Services
          </button>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;