"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function Trex() {
  return (
    
    <div className="h-[15rem] w-full bg-black flex flex-col items-center justify-center pt-[14vh] border-t-2 border-silver-800 rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        T-rex Infotech
      </h1>
      <div className="w-full h-40 relative">
        {/* Gradients */}
       {/* Full-width smooth horizontal gradient from left to right */}
        <div className="absolute inset-x-60 top-0 h-[3px] bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 blur-sm w-[66%]" />


        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
