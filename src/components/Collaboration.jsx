import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  ExternalLink,
  Mail,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { DOQUAD_CONTACT, SOCIAL_LINKS } from '../constants/data';

export const CONTACT_INFO = {
  email: DOQUAD_CONTACT?.email || "contact@foodieworld.com",
  instagram: SOCIAL_LINKS.instagram
};

const featuredVideos = [
  {
    id: "I_8io0O2rWo",
    title: "Favorite Youtuber Special",
    subtitle: "Trending Food Vlog & Spotlights",
    category: "FOOD VLOG",
    url: "https://www.youtube.com/shorts/I_8io0O2rWo",
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3MouhqSBSO0",
    title: "Viral Food Challenge",
    subtitle: "Delicious Food Review & Tasting",
    category: "FOOD REVIEW",
    url: "https://www.youtube.com/shorts/3MouhqSBSO0",
    thumbnail: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "BXQpV-3omUs",
    title: "Malabar Flavor Trail",
    subtitle: "Hot & Smoky Street Food Special",
    category: "STREET FOOD",
    url: "https://www.youtube.com/shorts/BXQpV-3omUs",
    thumbnail: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    active: true
  },
  {
    id: "p9YTPlZ_99I",
    title: "World Cup Special Feast",
    subtitle: "Foodie World Community Vlogs",
    category: "SPECIAL VLOG",
    url: "https://www.youtube.com/shorts/p9YTPlZ_99I",
    thumbnail: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Collaboration({ showContactBanners = true }) {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <section
      id="videos"
      className={`py-6 lg:py-8 bg-[#0A0A0A] font-sans relative overflow-hidden text-white ${showContactBanners ? 'min-h-[calc(100vh-80px)] flex flex-col justify-center' : ''
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] relative z-10 w-full space-y-4 lg:space-y-6">

        {/* SMALL SECTION HEADING with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-1"
        >
          <div>
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-widest">
              COLLABORATION
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-0.5">
              Let's Create Something Delicious
            </h2>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={SOCIAL_LINKS.youtube || "https://www.youtube.com/@foodieworldhakh"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all self-start sm:self-auto"
          >
            VIEW ALL VIDEOS <ChevronRight className="w-3 h-3" />
          </motion.a>
        </motion.div>

        {/* 4 VIDEO CARDS GRID with Bi-Directional Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {featuredVideos.map((video, idx) => {
            const isPlaying = playingVideoId === video.id;
            const isActiveBorder = video.active;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className={`bg-[#141414] rounded-xl overflow-hidden flex flex-col justify-between group shadow-xl transition-all duration-300 relative ${isActiveBorder ? 'border-2 border-[#EA580C]' : 'border border-white/10 hover:border-[#EA580C]/50'
                  }`}
              >
                {/* Media Container */}
                <div className="relative aspect-[9/10] w-full bg-black overflow-hidden">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />

                      {/* Category Badge Top-Left */}
                      <div className="absolute top-2.5 left-2.5 bg-[#EA580C] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                        {video.category}
                      </div>

                      {/* Center Orange Play Button */}
                      <button
                        onClick={() => setPlayingVideoId(video.id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                        aria-label={`Play ${video.title}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-lg shadow-[#EA580C]/30 group-hover/btn:scale-110 transition-transform border border-white/20">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="p-3 bg-[#141414] flex items-center justify-between border-t border-white/5">
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#EA580C] transition-colors leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-0.5 font-normal">
                      {video.subtitle}
                    </p>
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg border border-white/10 hover:border-[#EA580C] hover:bg-[#EA580C] text-gray-300 hover:text-white flex items-center justify-center transition-all shrink-0 ml-1.5"
                    aria-label={`Open ${video.title} on YouTube`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM DUAL CONTACT BANNERS with Spring Pop-up Animation */}
        {showContactBanners && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 180, damping: 17 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1"
          >

            {/* EMAIL BANNER (Vibrant Orange Gradient) */}
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent("Project Inquiry - Foodie World")}`}
              className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FF5500] text-white flex items-center justify-between shadow-xl hover:scale-[1.02] transition-transform group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                {/* Mail Icon Circle */}
                <div className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/90">
                    HAVE A PROJECT IN MIND?
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight leading-none mt-0.5">
                    SEND EMAIL
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 font-normal">
                    Let's talk about your ideas
                  </p>
                </div>
              </div>

              {/* Right Circle Arrow Button */}
              <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-white group-hover:text-[#EA580C] text-white flex items-center justify-center transition-all shrink-0">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* INSTAGRAM BANNER (Vibrant Magenta/Pink Gradient) */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#E1306C] via-[#ED2F6E] to-[#F52B65] text-white flex items-center justify-between shadow-xl hover:scale-[1.02] transition-transform group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                {/* Instagram Icon Circle */}
                <div className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/90">
                    LET'S CONNECT
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight leading-none mt-0.5">
                    INSTAGRAM DM
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 font-normal">
                    Message me on Instagram
                  </p>
                </div>
              </div>

              {/* Right Circle Arrow Button */}
              <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-white group-hover:text-[#E1306C] text-white flex items-center justify-center transition-all shrink-0">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

          </motion.div>
        )}

      </div>
    </section>
  );
}
