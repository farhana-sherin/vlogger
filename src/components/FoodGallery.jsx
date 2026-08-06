import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight, Play } from 'lucide-react';

const foodItems = [
  {
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    title: "Viral Chocolate Dream Cake",
    location: "Calicut, Kerala",
    url: "https://www.youtube.com/shorts/4iotX5eCfes"
  },
  {
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    title: "Valanchery Must Try 5 Food Spots",
    location: "Valanchery, Malappuram",
    url: "https://www.youtube.com/shorts/paZrymJv5q4"
  },
  {
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    title: "Kottakkal Viral Food Spots",
    location: "Kottakkal, Malappuram",
    url: "https://www.youtube.com/shorts/ZNY-kxqe5y8"
  },
  {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    title: "Robot Biryani & Future Kitchen",
    location: "Kochi, Kerala",
    url: "https://www.youtube.com/shorts/p77Lg6fN_P4"
  }
];

export default function FoodGallery() {
  return (
    <section
      id="gallery"
      className="pt-8 lg:pt-10 pb-16 relative overflow-hidden font-sans bg-[#0A0A0A]"
    >
      <div className="w-full max-w-[1600px] mx-auto relative px-6 md:px-16 lg:px-[60px]">

        {/* Header Container with animated label and main title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Small Decorative Label */}
            <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#EA580C] block">
              FEATURED FOOD SPOTS
            </span>
            {/* Main Section Title */}
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-white mt-1.5 tracking-tight">
              Top Places You Must Try
            </h2>
          </motion.div>

          {/* View All Spots Pill Button */}
          <motion.a
            href="https://www.youtube.com/watch?v=AORWnjqUkMg&list=PLHqOEuA-84e9Lyq6QFpbR4PRfeOaDiF7z"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-[#EA580C]/40 hover:border-[#EA580C] hover:bg-[#EA580C] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all group bg-transparent shadow-md"
          >
            View All Spots
            <ArrowRight className="w-3.5 h-3.5 text-[#EA580C] group-hover:text-white transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Relative wrapper for Grid and Nav Arrow */}
        <div className="relative">
          {/* Grid Container for 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {foodItems.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 45, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative aspect-[16/11] rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#EA580C] transition-all shadow-lg block"
              >
                {/* Full Card Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Play Icon Badge on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Gradient Overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent opacity-90" />

                {/* Card Footer Content overlaid */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <h3 className="text-[17px] font-bold text-white mb-1 group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Navigation Slider Arrow */}
          <motion.a
            href="https://www.youtube.com/watch?v=AORWnjqUkMg&list=PLHqOEuA-84e9Lyq6QFpbR4PRfeOaDiF7z"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111111] items-center justify-center cursor-pointer border border-white/10 hover:border-[#EA580C] hover:bg-[#EA580C] text-gray-400 hover:text-white transition-all z-20 shadow-lg"
            aria-label="View YouTube Playlist"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
