"use client";

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Fluid's approach transformed our e-commerce platform, making it dynamic, highly accessible and truly resonates with our users.",
      additionalText: "They were incredibly collaborative and supportive, ensuring that every aspect of the project was perfectly executed.",
      moreText: "They not only met our expectations but also provided valuable insights that enhanced the overall project. Working with Fluid was a great experience from start to finish, making complex technology easy and enjoyable for everyone involved.",
      name: "Sophia Hart",
      title: "eCommerce Manager",
      company: "Fashion International",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 2,
      text: "Fluid revamped our outdated website, making it modern, responsive, and user-friendly.",
      additionalText: "They took the time to understand our brand, creating a site that reflects our company's values. The project was completed on time and within budget, resulting in increased traffic and engagement.",
      moreText: "Working with Fluid was a fantastic experience.",
      name: "Lucas Graham",
      title: "Marketing Manager",
      company: "Tech Solutions",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 3,
      text: "The creativity and technical expertise of the Fluid team were instrumental in overhauling our corporate website.",
      additionalText: "The end result exceeded our expectations and has significantly enhanced our presence in the market.",
      moreText: "Their thorough approach and ongoing support have established them as a trusted partner in our ongoing digital transformation.",
      name: "Tom Whiskers",
      title: "Chief Product Officer", 
      company: "InnovTech Enterprises",
      avatar: "/api/placeholder/48/48"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-center py-6">
        <div className="px-6 py-2 bg-blue-600 rounded-full">
          <span className="text-white font-medium">Testimonials</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="text-center px-8 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          See what our clients say about us
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Discover the impact of our work through the voices of our clients. Their experiences reflect our commitment to excellence in design and development.
        </p>
      </section>

      {/* Testimonials Carousel */}
      <section className="relative">
        <div className="overflow-hidden">
          {/* ROTATION ANIMATION CODE STARTS HERE */}
          <div 
            className="flex gap-6 animate-scroll"
            style={{
              width: 'calc(400px * 9)', // 3 testimonials × 3 repetitions × 400px width
              animation: 'scroll 30s linear infinite'
            }}
          >
            {/* ROTATION ANIMATION: This div contains all testimonials and moves continuously from right to left */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-96 bg-gray-900 border border-gray-800 rounded-2xl p-8 mx-3"
              >
                {/* Testimonial Content */}
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {testimonial.additionalText}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {testimonial.moreText}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-md"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.title}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ROTATION ANIMATION CODE ENDS HERE */}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </section>

      {/* Made in Framer badge */}
      <div className="fixed bottom-4 right-4 z-20">
        <div className="bg-white text-black px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <span>⚡</span>
          Made in Framer
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 3)); /* Move by width of 3 testimonials */
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        /* Pause animation on hover for better UX */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;