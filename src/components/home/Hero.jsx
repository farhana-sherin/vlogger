import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/heroimage.png';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-[550px] lg:min-h-[650px] flex items-center pt-20 lg:pt-28 pb-10 overflow-hidden rounded-b-[40px] md:rounded-b-none bg-[#0A0A0A]"
    >
      {/* Animated Hero Background Image Layer with Float & Scale Entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08, x: 60 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        animate={{
          y: [0, -12, 0]
        }}
        viewport={{ once: false }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'right -80px center',
          backgroundSize: 'contain'
        }}
      />

      {/* Precision Left-to-Right Fade Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #0A0A0A 0%, #0A0A0A 40%, rgba(10, 10, 10, 0.6) 70%, transparent 100%)'
        }}
      ></div>

      {/* Content Container */}
      <div className="w-full max-w-[1600px] mx-auto relative z-20 px-6 md:px-16 lg:px-[60px]">
        <div className="max-w-xl md:max-w-[600px] flex flex-col space-y-3 lg:space-y-4 text-left pt-6">

          {/* Creator Name & Decorative Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-1"
          >
            
            <span className="font-handwriting font-bold text-3xl lg:text-4xl text-[#EA580C]">
              Hi, I'm Insamamul Hakh!
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-display text-6xl sm:text-7xl lg:text-[90px] tracking-tight leading-[0.9] text-white uppercase font-black"
          >
            FOODIE <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[#EA580C] inline-block"
            >
              EXPLORER
            </motion.span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="font-sans font-normal text-[15px] lg:text-[16px] text-gray-200 leading-relaxed max-w-sm mt-3"
          >
            I eat. I explore. I tell you <span className="font-bold text-[#EA580C]">what's worth it!</span><br />Authentic culinary journeys & honest reviews.
          </motion.p>

          {/* Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-4 font-sans flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center gap-2.5 bg-[#EA580C] border-2 border-[#EA580C] text-white font-semibold text-[13px] px-6 py-2.5 rounded-full hover:bg-[#C2410C] hover:border-[#C2410C] transition-all group shadow-lg hover:shadow-[#EA580C]/30 hover:scale-105 active:scale-95"
            >
              Explore Food Spots
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('videos')}
              className="inline-flex items-center gap-2 bg-transparent border border-white/50 text-white font-semibold text-[13px] px-6 py-2.5 rounded-full hover:bg-white/10 hover:border-white transition-all group hover:scale-105 active:scale-95"
            >
              Watch Videos
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center ml-1 group-hover:bg-[#EA580C] transition-colors">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-white" />
              </span>
            </button>
          </motion.div>

          {/* Bottom elements: subscriber stats and location tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-12 pt-6"
          >
            {/* Subscriber Count */}
            <div className="flex flex-col font-sans">
              <div className="flex items-center gap-1 text-[22px] font-black text-white leading-none">
                770K<span className="text-[#EA580C]">+</span>
              </div>
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">
                Subscribers
              </span>
            </div>

            {/* Location Tag */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black/60 backdrop-blur-md text-white font-sans font-semibold text-[11px] px-4 py-2 rounded-full flex items-center gap-2 w-fit border border-white/10 shadow-md"
            >
              <span className="text-red-500">📍</span> Kozhikode, India
            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
