import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { STATS_DATA, SOCIAL_LINKS as DEFAULT_SOCIAL_LINKS } from '../constants/data';

// Editable Social Links configuration
export const SOCIAL_LINKS = DEFAULT_SOCIAL_LINKS;

export default function FollowJourney() {
  const subCount = STATS_DATA[0]?.count || "770K+";

  return (
    <section id="socials" className="py-10 sm:py-16 lg:py-24 relative overflow-hidden font-sans">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FFD400]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#6C2BD9]/10 blur-3xl pointer-events-none" />
      
      {/* Subtle Dotted Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#171717 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }} 
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          
          {/* 1. Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#6C2BD9]" />
            <span className="font-semibold text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#6C2BD9]">
              STAY CONNECTED
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
          </motion.div>

          {/* 2. Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-wide uppercase text-[#171717] mb-3 sm:mb-4 relative inline-block"
          >
            Follow My{" "}
            <span className="text-[#6C2BD9] relative inline-block">
              Journey
              {/* Yellow Swoosh Underline */}
              <svg 
                className="absolute -bottom-2.5 left-0 w-full h-3 text-[#FFD400]" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
              >
                <path d="M2 14 C 30 4, 70 4, 98 14" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          {/* 3. Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-base text-[#4A4A4A] leading-relaxed font-normal max-w-xl mx-auto mt-1 sm:mt-2"
          >
            From hidden food spots to unforgettable flavours — follow along and never miss the next food adventure.
          </motion.p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch font-sans">
          
          {/* PRIMARY / FEATURED YOUTUBE CARD */}
          <motion.a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-12 bg-gradient-to-br from-[#FFD400] via-[#FFD819] to-[#FACC15] text-[#171717] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-8 relative overflow-hidden cursor-pointer"
          >
            {/* Subtle YouTube Play Icon Watermark (Hidden on small mobile to prevent text collision) */}
            <div className="hidden sm:block absolute -right-8 -bottom-10 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110">
              <svg className="w-72 h-72 fill-current text-[#171717]" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>

            <div className="space-y-3 sm:space-y-4 max-w-xl relative z-10 w-full">
              {/* Micro Interaction Pulsing Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#171717] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-sm max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-ping shrink-0" />
                <span className="w-2 h-2 rounded-full bg-[#FF0000] absolute shrink-0" />
                <span className="ml-1 truncate">NEW FOOD ADVENTURES EVERY WEEK</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FF0000] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide text-[#171717] leading-tight">
                    FOODIE WORLD YOUTUBE
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-[#171717]/80 font-mono">
                    {subCount} Subscribers
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-[#171717]/90 leading-relaxed font-medium">
                Food reviews, hidden gems & delicious adventures. Subscribe for weekly full-length vlog episodes across Kerala and beyond!
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 shrink-0 w-full md:w-auto pt-1 md:pt-0">
              <span className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full group-hover:bg-[#6C2BD9] transition-colors shadow-md whitespace-nowrap">
                Subscribe on YouTube 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>

          {/* SECONDARY CARD: INSTAGRAM */}
          <motion.a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-6 bg-white border border-[#EEEEEE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden cursor-pointer"
          >
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F77737] to-[#E1306C] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#E1306C] bg-[#FDF2F8] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#FBCFE8]">
                  420K Followers
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#171717] group-hover:text-[#6C2BD9] transition-colors">
                  Follow on Instagram
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-1.5 sm:mt-2 font-normal">
                  Daily food finds, trending reels & behind-the-scenes moments from local street food to fine dining.
                </p>
              </div>
            </div>

            <div className="pt-1 relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#6C2BD9] transition-colors">
                Follow Me <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </div>
          </motion.a>

          {/* SECONDARY CARD: FACEBOOK */}
          <motion.a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 bg-white border border-[#EEEEEE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden cursor-pointer"
          >
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#1877F2] bg-[#EFF6FF] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#BFDBFE]">
                  Community Hub
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#171717] group-hover:text-[#6C2BD9] transition-colors">
                  Join me on Facebook
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-1.5 sm:mt-2 font-normal">
                  Detailed restaurant reviews, video updates, and food community discussions from Foodie World.
                </p>
              </div>
            </div>

            <div className="pt-1 relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#6C2BD9] transition-colors">
                Follow Page <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </div>
          </motion.a>



        </div>

      </div>
    </section>
  );
}
