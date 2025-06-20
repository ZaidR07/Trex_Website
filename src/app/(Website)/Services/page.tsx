"use client";

import React from 'react';
import { Monitor, ShoppingCart, Settings, Globe, Search, Wrench, Palette, Users, TestTube, MousePointer, Target, TrendingUp, Edit, Share2, FileText } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const page = () => {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="flex justify-center py-6">
          <div className="px-6 py-2 bg-blue-600 rounded-full">
            <span className="text-white font-medium">Services</span>
          </div>
        </nav>

        {/* Website Design & Development Section */}
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Website Design &<br />Development
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our team specializes in creating customized solutions that meet your business objectives.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                  <span>Responsive Design</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-cyan-400" />
                  <span>E-Commerce</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  <span>Custom CMS</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Web Apps</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Search className="w-5 h-5 text-cyan-400" />
                  <span>SEO</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-cyan-400" />
                  <span>Maintenance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 p-8 rounded-2xl">
                <div className="bg-gray-900 rounded-xl p-6 space-y-4">
                  {/* Dashboard mockup */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="text-white text-sm mb-4">
                    The world's best product<br />team as your fingertips
                  </div>

                  {/* Chart visualization */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-end h-20 mb-2">
                      <div className="bg-cyan-400 h-12 w-3 rounded"></div>
                      <div className="bg-cyan-400 h-16 w-3 rounded"></div>
                      <div className="bg-cyan-400 h-8 w-3 rounded"></div>
                      <div className="bg-cyan-400 h-20 w-3 rounded"></div>
                      <div className="bg-cyan-400 h-6 w-3 rounded"></div>
                      <div className="bg-cyan-400 h-14 w-3 rounded"></div>
                    </div>
                    <div className="text-xs text-gray-400">Analytics Dashboard</div>
                  </div>

                  {/* Data cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-cyan-400 text-xs">Revenue</div>
                      <div className="text-white text-sm font-bold">$24,500</div>
                    </div>
                    <div className="bg-gray-800 rounded p-2">
                      <div className="text-cyan-400 text-xs">Users</div>
                      <div className="text-white text-sm font-bold">1,247</div>
                    </div>
                  </div>

                  {/* Bottom navigation dots */}
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI/UX Design & Product Development Section */}
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap-reverse gap-12 items-center">
            <div className="relative flex-1 ">
              <div className=" max-w-[85vw] bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-2xl">
                <div className="bg-gray-900 rounded-xl p-6">
                  {/* Analytics interface mockup */}
                  <div className="text-white text-sm mb-4">Vector Trend Analysis</div>

                  {/* Chart area */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-cyan-400 text-xs">Question Start Factors</div>
                      <div className="text-cyan-400 text-xs">Compare Previous Insights</div>
                    </div>

                    {/* Bar chart */}
                    <div className="flex justify-between items-end h-16 mb-4">
                      <div className="bg-cyan-400 h-8 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-12 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-6 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-14 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-10 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-16 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-4 w-2 rounded"></div>
                      <div className="bg-cyan-400 h-12 w-2 rounded"></div>
                    </div>

                    {/* Donut chart */}
                    <div className="flex items-center justify-between">
                      <div className="relative w-16 h-16">
                        <div className="w-16 h-16 rounded-full border-8 border-cyan-400 border-t-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xs">75%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-xs">Progress</div>
                        <div className="text-cyan-400 text-xs">Tracking</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-cyan-400 text-xs mb-1">Sales/Weekly Engagement</div>
                    <div className="text-white text-lg font-bold">4200</div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                      <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                      <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1"> 
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                UI/UX Design &<br />Product Development
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We focus on creating intuitive interfaces that drive successful interactions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Palette className="w-5 h-5 text-cyan-400" />
                  <span>UI Design</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  <span>UX Design</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>User Research</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                  <span>Prototyping</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <TestTube className="w-5 h-5 text-cyan-400" />
                  <span>Usability Testing</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-cyan-400" />
                  <span>Interaction Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Strategy & Custom Content Section */}
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Branding Strategy &<br />Custom Content
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We focus on creating memorable brand identities and compelling content that differentiates you from competitors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <span>Brand Identity</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span>Brand Positioning</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  <span>Content Strategy</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Edit className="w-5 h-5 text-cyan-400" />
                  <span>Copywriting</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                  <span>Social Media</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span>Brand Guidelines</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl">
                <div className="bg-gray-900 rounded-xl p-6">
                  {/* Brand identity mockup */}
                  <div className="space-y-4">
                    {/* Logo showcase */}
                    <div className="bg-gray-800 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">L</span>
                      </div>
                      <div className="text-white font-semibold">Lexic</div>
                    </div>

                    {/* Alternative logo */}
                    <div className="bg-white rounded-lg p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold">L</span>
                      </div>
                      <span className="text-gray-900 font-semibold">Lexic</span>
                    </div>

                    {/* Color palette */}
                    <div className="space-y-2">
                      <div className="text-white text-sm">Colors</div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded"></div>
                        <div className="w-8 h-8 bg-blue-400 rounded"></div>
                        <div className="w-8 h-8 bg-blue-300 rounded"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded"></div>
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="space-y-1">
                      <div className="text-white text-sm">Typography</div>
                      <div className="text-white text-xs text-gray-400">Inter - Regular 400</div>
                      <div className="text-white text-xs text-gray-400">Inter - Medium 500</div>
                      <div className="text-white text-xs text-gray-400">Inter - Bold 700</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-8 py-16 text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors mr-4">
              See our work
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Book a call
            </button>
          </div>
        </section>


      </div>
    </>
  );
};

export default page;