import React from 'react';
import AboutMe from '../components/home/AboutMe';

export default function About() {
  return (
    <div className="py-8 space-y-12">
      {/* Header Banner */}
      <div className="pb-8 border-b border-[#EEEEEE]">
        <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
          Our Story & Passion ~
        </span>
        <h1 className="font-display text-4xl lg:text-6xl tracking-wide uppercase text-[#1A1A1A]">
          ABOUT <span className="text-[#EA580C]">FOODIE WORLD</span>
        </h1>
        <p className="font-sans text-[#4A4A4A] text-base lg:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
          Follow YouTuber Insamamul Hakh as he explores authentic street food, traditional heritage kitchens, and culinary destinations across Kerala and beyond.
        </p>
      </div>

      {/* Dedicated About Me Section */}
      <AboutMe />
    </div>
  );
}
