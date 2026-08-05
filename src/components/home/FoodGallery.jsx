import React, { useState } from 'react';
import { Camera, Play, Star, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../../constants/data';
import VideoModal from './VideoModal';

export default function FoodGallery() {
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filterTabs = ['All', 'Video Portfolio', 'Featured Reviews', 'Food Photography', 'Street Food', 'Biryani'];

  const filteredGallery = activeGalleryTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeGalleryTab || item.tag === activeGalleryTab);

  return (
    <section id="gallery" className="py-16 border-b border-[#EEEEEE]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
        <div>
          {/* Handwritten Accent (Caveat font) */}
          <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
            Handcrafted Flavor Logs ~
          </span>
          {/* Section Heading (Lilita One font) */}
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase text-[#1A1A1A]">
            FOOD GALLERY & <span className="text-[#EA580C]">VIDEO GRID</span>
          </h2>
        </div>
        {/* Paragraph (Poppins font) */}
        <p className="font-sans font-normal text-[#4A4A4A] text-sm md:text-base max-w-md mt-2 md:mt-0">
          Curated exploration archives featuring street food discoveries, restaurant critiques, and high-resolution culinary photography.
        </p>
      </div>

      {/* Filter Category Tabs (Poppins font) */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-[#EEEEEE] font-sans">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveGalleryTab(tab)}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${activeGalleryTab === tab
                ? 'bg-[#EA580C] text-white shadow-sm'
                : 'bg-white border border-[#EEEEEE] text-[#4A4A4A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3-Column Flat Grid (Poppins font) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#EEEEEE] rounded-2xl overflow-hidden flex flex-col group transition-all hover:border-[#EA580C] hover:shadow-lg"
          >
            {/* Media Container Placeholder */}
            <div className="relative bg-[#EAEAEA] aspect-[16/10] w-full overflow-hidden flex items-center justify-center">
              <div className="absolute top-3 left-3 z-10 bg-[#EA580C] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {item.tag}
              </div>

              <div className="absolute bottom-3 right-3 z-10 bg-black/80 text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full backdrop-blur">
                {item.category === 'Food Photography' ? 'PHOTO ALBUM' : item.duration}
              </div>

              <button
                onClick={() => setSelectedVideo(item)}
                className="w-14 h-14 rounded-full bg-white/90 text-[#EA580C] flex items-center justify-center shadow-md transition-transform group-hover:scale-110 cursor-pointer"
                aria-label={`Open ${item.title}`}
              >
                {item.category === 'Food Photography' ? (
                  <Camera className="w-6 h-6 text-[#EA580C]" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5 text-[#EA580C]" />
                )}
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#666666] mb-2 font-medium">
                  <span>{item.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#1A1A1A] font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#EA580C] text-[#EA580C]" /> {item.rating}
                  </span>
                </div>

                {/* Card Title (Poppins semi-bold) */}
                <h3
                  onClick={() => setSelectedVideo(item)}
                  className="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug cursor-pointer group-hover:text-[#EA580C] transition-colors line-clamp-2"
                >
                  {item.title}
                </h3>

                <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEEEEE] flex items-center justify-between text-xs text-[#666666]">
                <span className="font-semibold text-[#1A1A1A]">{item.views}</span>
                <button
                  onClick={() => setSelectedVideo(item)}
                  className="font-semibold text-xs uppercase tracking-wider text-[#EA580C] flex items-center gap-1 hover:gap-1.5 transition-all cursor-pointer"
                >
                  Explore <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
