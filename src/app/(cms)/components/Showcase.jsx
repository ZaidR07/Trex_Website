"use client";

import React from "react";

const Showcase = () => {
  // Project cards data
  const projects = [
    {
      title: "AI Dashboard",
      id: 1,
      bgColor: "from-purple-600 to-purple-800",
      image: "/api/placeholder/300/200",
      type: "AI Dashboard",
    },
    {
      id: 2,
      bgColor: "from-blue-400 to-blue-600",
      image: "/api/placeholder/300/200",
      type: "Marketing Platform",
    },
    {
      id: 3,
      bgColor: "from-blue-600 to-purple-600",
      type: "Finance App",
    },
    {
      id: 4,
      bgColor: "from-teal-500 to-cyan-600",
      image: "/api/placeholder/300/200",
      type: "Analytics Platform",
    },
    {
      id: 5,
      bgColor: "from-pink-500 to-rose-600",
      image: "/api/placeholder/300/200",
      type: "E-commerce Platform",
    },
    {
      id: 6,
      bgColor: "from-green-500 to-emerald-600",
      image: "/api/placeholder/300/200",
      title: "Healthcare App",
    },
  ];

  // Company logos data
  const companies = [
    "LogoIpsum",
    "TrexInfoTech",
    "Ankur Maternity Hospital",
    "LogoIpsum",
    "LogoIpsum",
    "LogoIpsum",
    "LogoIpsum",
    "Brights Minds",
    "LogoIpsum",
    "Aitc",
  ];

  // Duplicate projects for seamless marquee
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="bg-gray-900 py-16">
      {/* Projects Carousel - Smooth infinite scroll */}
      <div className="mb-20">
        <div className="container px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Featured Projects
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 w-max animate-scroll-marquee will-change-transform">
              {marqueeProjects.map((project, index) => (
                <div key={`${project.id}-${index}`} className="  w-[90vw] md:w-[45vw] lg:w-[33.3333vw] flex-shrink-0 max-w-[400px]">
                  <div
                    className={`bg-gradient-to-br ${project.bgColor} rounded-2xl p-6 h-[500px] relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-white flex-1">
                        <div className="text-xs font-medium text-white/80 mb-2">
                          {project.type}
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="mt-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-4">
                          <div className="bg-gray-800 rounded min-h-64 h- flex items-center justify-center text-white/60 text-xs"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Marquee - Diagonal Movement with 2 Rows */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-0 pointer-events-none"></div>

        <div className="relative h-[120px] w-full">
          {/* Top band - Right to Left */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-[12deg] z-10 overflow-hidden">
            <div className="flex w-[200%] animate-marquee-right bg-white py-2 shadow-md">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center space-x-2 flex-shrink-0 px-6">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <div className="w-5 h-5 bg-black/80 rounded-full"></div>
                  </div>
                  <span className="text-black text-lg font-medium whitespace-nowrap">{company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom band - Left to Right */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 rotate-[12deg] z-20 overflow-hidden">
            <div className="flex w-[200%] animate-marquee-left bg-white py-2 shadow-md">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center space-x-2 flex-shrink-0 px-6">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <div className="w-5 h-5 bg-black/80 rounded-full"></div>
                  </div>
                  <span className="text-black text-lg font-medium whitespace-nowrap">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-marquee {
          animation: scroll-marquee 40s linear infinite;
        }
        .animate-scroll-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Showcase;
