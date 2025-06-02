"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import {Trex} from "./Trex"
import {DockDemo} from "./DockDemo"
const FooterPage = () => {
  return (
    <div className=" bg-black text-white relative overflow-hidden">
      {/* Fluid Logo Background */}
      <div className=" absolute inset-0 w-full flex  justify-center">
        <Trex/>       
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 mt-[20vh]  flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6 lg:p-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">Fluid</span>
          </div>
        </header>

        {/* Content Grid */}
        <div className="flex-1 px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Company</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Crafting the Future of Web Excellence.
                </p>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Connect with us:</p>
                  <DockDemo  />

                  <div className="flex gap-3">
                    {/* <a href="#" >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Youtube className="w-4 h-4" />
                    </a> */}
                  </div>   


                </div>
              </div>

              {/* Links Column */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Links</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Testimonials
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    FAQ
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Pricing
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Case Studies
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Services
                  </a>
                </div>
              </div>

              {/* Case Studies Column */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Case studies</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Case study 1
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Case study 2
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Case study 3
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Case study 4
                  </a>
                </div>
              </div>

              {/* Template Column */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Template</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Buy template
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    How to use
                  </a>
                  <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">
                    Follow me on X
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Fluid. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default FooterPage;