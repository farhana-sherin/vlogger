import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Video, Users, Utensils } from 'lucide-react';
import aboutProfileImage from '../../assets/about-profile.jpg';

export default function AboutMe() {
  return (
    <section id="about-me" className="py-12 lg:py-20 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[60px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* Left Column: Visual Explorer Avatar with Decorative Borders & Floating Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="lg:col-span-5 relative flex justify-center items-center group py-4"
        >

          {/* Main Image Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] flex justify-center items-center"
          >

            {/* Top-left dashes */}
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -left-4 z-0 text-[#EA580C]"
            >
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 25 L10 20 M15 5 L15 12 M25 5 L20 10" />
              </svg>
            </motion.div>

            {/* Top-right Airplane and Dash */}
            <div className="absolute -top-6 -right-4 z-20">
              <svg width="65" height="65" viewBox="0 0 80 80" fill="none" className="absolute -top-3 -left-10">
                <path d="M10 70 Q 30 90, 60 40 T 75 15" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              </svg>
              <motion.svg
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#EA580C"
                stroke="#EA580C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-45 relative z-10 translate-x-2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </motion.svg>
            </div>

            {/* Bottom-left dotted curve */}
            <div className="absolute -bottom-4 -left-6 z-0">
              <svg width="65" height="65" viewBox="0 0 100 100" fill="none">
                <path d="M90 20 Q 0 0, 30 80 T 100 80" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Main Photo Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl border-2 border-[#EA580C] overflow-hidden w-full aspect-[3/4] shadow-2xl bg-[#141414] z-10 group-hover:border-white transition-colors"
            >
              <img
                src={aboutProfileImage}
                alt="Insamamul Hakh - Foodie World Creator & Food Vlogger"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center relative z-10 filter brightness-95 group-hover:brightness-105 transition-all duration-500"
              />
            </motion.div>

            {/* Floating Location Badge on Border */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-3.5 left-3 z-20 bg-[#0A0A0A]/90 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5 shadow-xl"
            >
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              Malappuram, India
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: Story & Highlights */}
        <div className="lg:col-span-7 space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* Handwritten Accent (Caveat font) */}
            <span className="font-handwriting font-bold text-2xl lg:text-3xl text-[#EA580C] block mb-1">
              Meet YouTuber Insamamul Hakh ~
            </span>

            {/* Main Display Title */}
            <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase text-white leading-tight font-black">
              ABOUT <span className="text-[#EA580C]">INSAMAMUL HAKH</span>
            </h2>
          </motion.div>

          {/* Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-sans space-y-4 text-gray-300 text-base leading-relaxed"
          >
            <p>
              Hey there! I'm <strong className="text-white text-lg font-bold">Insamamul Hakh</strong>, the popular food vlogger, YouTuber, and creator behind <strong className="text-[#EA580C]">Foodie World (@foodieworldhakh)</strong>. My mission is simple: journey across cities, discover legendary heritage kitchens, taste authentic street food, and give you 100% honest reviews.
            </p>
            <p>
              From 70-year-old woodfire Malabar Biryani spots in Calicut to viral international food trends, I test everything so you always know <span className="font-handwriting font-bold text-xl text-[#EA580C] inline-block">what's worth your time and money!</span>
            </p>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-sans"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#121212] border border-[#222222] hover:border-[#EA580C]/50 p-4 rounded-2xl transition-all shadow-md"
            >
              <div className="flex items-center gap-2 text-[#EA580C] font-display text-2xl font-black">
                <Utensils className="w-5 h-5" />
                1,200+
              </div>
              <div className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider mt-1">Spots Tasted</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#121212] border border-[#222222] hover:border-[#EA580C]/50 p-4 rounded-2xl transition-all shadow-md"
            >
              <div className="flex items-center gap-2 text-white font-display text-2xl font-black">
                <Video className="w-5 h-5 text-[#EA580C]" />
                835+
              </div>
              <div className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider mt-1">Video Logs</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#121212] border border-[#222222] hover:border-[#EA580C]/50 p-4 rounded-2xl col-span-2 sm:col-span-1 transition-all shadow-md"
            >
              <div className="flex items-center gap-2 text-white font-display text-2xl font-black">
                <Users className="w-5 h-5 text-[#EA580C]" />
                770K+
              </div>
              <div className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider mt-1">Subscribers</div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-sans"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white text-[13px] font-semibold uppercase tracking-wider px-6 sm:px-7 py-3 rounded-full hover:bg-[#C2410C] transition-all shadow-lg hover:shadow-[#EA580C]/30 hover:scale-105 active:scale-95 group text-center"
            >
              Get In Touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
