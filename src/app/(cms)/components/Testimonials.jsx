"use client";

import React from 'react';
import Image from 'next/image';
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "T-REX Infotech transformed our adventure travel vision into a digital reality that truly reflects the spirit of Yadunandana Adventures.",
      additionalText: "From the destinations to the gallery, every section was built with clarity, emotion, and ease-of-use. Their design beautifully captures our promise of safe, sustainable, and unforgettable expeditions.",
      moreText: "They went above and beyond in crafting a platform that allows us to showcase our treks, gather reviews, and connect directly with nature lovers. The result is a website that not only looks stunning but also works seamlessly — it has elevated our online presence and made it easier to grow our community.",
      name: "Mohan Tiwari",
      title: "Founder & Tour Planner",
      company: "Yadunandana Adventures",
      avatar: "/mohan2.png",
      website: "https://www.yadunandanaadventures.com/"
    },

    {
      id: 2,
      text: "T-REX Infotech played a crucial role in modernizing our hospital’s digital presence, capturing the essence of our 40+ years of service in a seamless and professional website.",
      additionalText: "Their team understood our unique values and medical legacy, creating a platform that reflects our commitment to Dharma, Seva, and patient care. The interface is clean, informative, and truly patient-friendly.",
      moreText: "From showcasing our expert team and OPD schedules to highlighting our facilities and services, every section of the website was crafted with clarity and care. T-REX Infotech has helped us connect with patients more efficiently and present our multispeciality care with the dignity it deserves.",
      name: "Dr. Dilip F. Yadav",
      title: "Doctor & Owner",
      company: "Ankur Maternity & Nursing Home",
      avatar: "/ankur_logo.png",
      website: "https://www.ankurmaternityhospital.in/"
    },

    {
      id: 3,
      text: "Working with T-REX Infotech was a turning point in establishing FinvestCorp’s digital presence with clarity, professionalism, and purpose.",
      additionalText: "They took the time to deeply understand our mission of providing smart financial solutions and translated it into a sleek, modern website that builds trust and drives engagement.",
      moreText: "From showcasing our services in loans, insurance, and investments to integrating our brand values of transparency and expertise — everything was handled with precision. The T-REX team delivered more than just a website; they delivered a platform that fuels our business and reflects our vision for financial empowerment.",
      name: "Rajeev Singh",
      title: "Owner & Founder",
      company: "FinvestCorp",
      avatar: "/api/placeholder/48/48"
    },

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

     <section className="relative">
  <div className="overflow-hidden group"> {/* ✅ Added group class here */}
    {/* ROTATION ANIMATION CODE STARTS HERE */}
    <div 
      className="flex gap-6 animate-scroll group-hover:paused" // ✅ Add group-hover override
      style={{
        width: 'calc(400px * 9)',
        animation: 'scroll 30s linear infinite',
      }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <div
          key={`${testimonial.id}-${index}`}
          className="flex-shrink-0 w-96 bg-gray-900 border border-gray-800 rounded-2xl p-8 mx-3"
        >
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
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-600 rounded-md">
                <Image
                  src={testimonial.avatar}
                  width={40}
                  height={40}
                  alt="Client Avatar"
                  className="rounded-md object-cover"
                  />
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {testimonial.name}
              </div>
              <div className="text-gray-400 text-xs">
                {testimonial.title}
              </div>
              <div className="text-gray-500 text-xs">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* ROTATION ANIMATION CODE ENDS HERE */}
  </div>

  {/* Gradient Overlays */}
  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
</section>

<style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-400px * 3));
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .paused {
    animation-play-state: paused !important;
  }
`}</style>

    </div>
  );
};

export default Testimonials;