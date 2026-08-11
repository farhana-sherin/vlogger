import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  Tag,
  FileText,
  Users,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileCheck,
  UserCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { VASTGOED_REALESTATE, SOCIAL_LINKS } from '../constants/data';
import heroVastImg from '../assets/hero-vast.png';
import vastgoedLogoImg from '../assets/vastagoed-logo.jpg';
import instaCard2 from '../assets/04_instagram_card_02_property.png';
import instaCard3 from '../assets/05_instagram_card_03_portrait.png';
import instaCard5 from '../assets/07_instagram_card_05_tower.png';
import instaCard6 from '../assets/08_instagram_card_06_house.png';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function VastgoedAgency() {
  const instagramPosts = [
    {
      id: 1,
      type: 'poster',
      title: 'FIND YOUR PERFECT PROPERTY.',
      sublines: ['Buy. Sell. Lease.', 'Commercial & Residential Spaces.']
    },
    {
      id: 2,
      type: 'image',
      image: instaCard2,
      alt: 'Vastgoed HiLITE Business Park Building'
    },
    {
      id: 3,
      type: 'image',
      image: instaCard3,
      alt: 'Vastgoed Property Representative Portrait'
    },
    {
      id: 4,
      type: 'poster',
      title: 'WE HELP YOU FIND THE RIGHT SPACE.',
      highlight: 'FOR YOUR FUTURE.'
    },
    {
      id: 5,
      type: 'image',
      image: instaCard5,
      alt: 'Vastgoed High Rise Modern Tower'
    },
    {
      id: 6,
      type: 'image',
      image: instaCard6,
      alt: 'Vastgoed Contemporary Luxury Villa House'
    }
  ];

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-8 lg:py-14 font-sans relative overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#EA580C]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 relative z-10">

        {/* ========================================================================= */}
        {/* SECTION 1: OUR BRAND HEADER & PROFILE */}
        {/* ========================================================================= */}
        <section className="space-y-6">

          {/* Centered Section Divider: — OUR BRAND — */}
          <div className="flex items-center justify-center gap-4">
            
          </div>

          {/* MAIN BRAND CONTAINER CARD */}
          <div className="bg-[#101116]/95 border border-[#EA580C]/35 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* LEFT SIDE: BRAND PROFILE & DETAILS (col-span-6) */}
              <div className="lg:col-span-6 space-y-6 pt-2 sm:pt-3">

                {/* Header Row: Circle Logo & Brand Name */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

                  {/* Large Circle Logo Avatar */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0A0B0E] border-2 border-[#EA580C] p-1 overflow-hidden shrink-0 shadow-xl shadow-[#EA580C]/15 relative group">
                    <img
                      src={vastgoedLogoImg}
                      alt="Vastgoed Properties Logo"
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Brand Title & Stats */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                        VASTGOED <span className="text-[#EA580C]">PROPERTIES</span>
                      </h1>
                      <p className="text-sm sm:text-base text-gray-300 font-medium mt-1">
                        Property Consultants • Commercial & Residential Real Estate
                      </p>
                      {/* Short Orange Line */}
                      <div className="w-14 h-[2.5px] bg-[#EA580C] my-3 mx-auto sm:mx-0" />
                    </div>

                    {/* Stats Row with Vertical Dividers */}
                    <div className="flex items-center justify-center sm:justify-start gap-6 text-sm font-sans pt-1">
                      <div className="flex items-center gap-2.5">
                        <FileCheck className="w-5 h-5 text-[#EA580C]" />
                        <div className="text-left">
                          <strong className="text-white font-bold block text-base sm:text-lg leading-none">30</strong>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Posts</span>
                        </div>
                      </div>

                      <div className="h-7 w-[1px] bg-white/15" />

                      <div className="flex items-center gap-2.5">
                        <Users className="w-5 h-5 text-[#EA580C]" />
                        <div className="text-left">
                          <strong className="text-white font-bold block text-base sm:text-lg leading-none">1,529</strong>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Followers</span>
                        </div>
                      </div>

                      <div className="h-7 w-[1px] bg-white/15" />

                      <div className="flex items-center gap-2.5">
                        <UserCheck className="w-5 h-5 text-[#EA580C]" />
                        <div className="text-left">
                          <strong className="text-white font-bold block text-base sm:text-lg leading-none">2</strong>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Following</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Info List */}
                <div className="space-y-3 text-sm sm:text-base font-sans text-gray-200 pt-2">
                  <div className="flex items-center gap-2.5 font-bold text-white">
                    <MapPin className="w-5 h-5 text-[#EA580C] shrink-0" />
                    <span>HILITE Business Park</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-gray-300 font-medium">
                    <Building2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                    <span>Property company</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed font-normal text-sm sm:text-base">
                    Real estate agents. Buy, Sell & Lease of all range of commercial, business and residential properties.
                  </p>

                  <div className="flex items-center gap-2.5 font-bold text-white pt-1">
                    <Phone className="w-5 h-5 text-[#EA580C] shrink-0" />
                    <a href="tel:9656374000" className="hover:text-[#EA580C] transition-colors font-mono text-base sm:text-lg">9656374000</a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={VASTGOED_REALESTATE.instagramUrl || "https://www.instagram.com/vastgoed_properties?igsh=NWY1azkzMHllNHcx"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#EA580C]/25"
                  >
                    <InstagramIcon className="w-5 h-5" /> VIEW INSTAGRAM
                  </a>

                  <a
                    href="tel:9656374000"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#12141C] hover:bg-[#1A1D29] border border-white/20 hover:border-[#EA580C] text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl transition-all"
                  >
                    <Phone className="w-5 h-5 text-[#EA580C]" /> CONTACT US
                  </a>
                </div>

              </div>

              {/* RIGHT SIDE: HILITE BUSINESS PARK BUILDING SHOWCASE (col-span-6) */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-2xl">
                  <img
                    src={heroVastImg}
                    alt="HiLITE Business Park"
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: OUR SERVICES */}
        {/* ========================================================================= */}
        <section className="space-y-6">

          {/* Centered Section Divider: — OUR SERVICES — */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#EA580C]" />
            <span className="text-sm sm:text-base lg:text-lg font-mono font-bold uppercase tracking-widest text-[#EA580C]">
              OUR SERVICES
            </span>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#EA580C]" />
          </div>

          {/* 4 SERVICES CARDS GRID MATCHING REFERENCE SCREENSHOT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {/* Card 01: BUY */}
            <div className="bg-[#101116] border border-white/10 hover:border-[#EA580C]/40 rounded-2xl p-6 sm:p-7 flex gap-5 items-start transition-all shadow-xl">
              {/* Left Side: Number + Icon */}
              <div className="flex flex-col items-start shrink-0 space-y-2.5">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#EA580C] leading-none">
                  01
                </span>
                <div>
                  <svg className="w-11 h-11 text-[#EA580C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="10" width="18" height="32" rx="2" />
                    <rect x="26" y="18" width="16" height="24" rx="2" />
                    <path d="M13 16h2M19 16h2M13 22h2M19 22h2M13 28h2M19 28h2M13 34h2M19 34h2" />
                    <path d="M30 24h2M36 24h2M30 30h2M36 30h2M30 36h2M36 36h2" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Title + Description + Short Accent Line */}
              <div className="flex-1 space-y-2.5 text-left">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  BUY
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                  Find the right property for your business, investment or personal needs.
                </p>
                {/* Short Accent Line */}
                <div className="w-8 h-[2px] bg-[#EA580C] pt-1" />
              </div>
            </div>

            {/* Card 02: SELL */}
            <div className="bg-[#101116] border border-white/10 hover:border-[#EA580C]/40 rounded-2xl p-6 sm:p-7 flex gap-5 items-start transition-all shadow-xl">
              {/* Left Side: Number + Icon */}
              <div className="flex flex-col items-start shrink-0 space-y-2.5">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#EA580C] leading-none">
                  02
                </span>
                <div>
                  <svg className="w-11 h-11 text-[#EA580C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 26L26 10h14v14L24 38L10 26z" />
                    <circle cx="33" cy="17" r="2" fill="currentColor" />
                    <path d="M22 21.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 3.2-5 2.2-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5M24.5 17.5v11.5" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Title + Description + Short Accent Line */}
              <div className="flex-1 space-y-2.5 text-left">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  SELL
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                  Professional property representation and assistance throughout the selling process.
                </p>
                {/* Short Accent Line */}
                <div className="w-8 h-[2px] bg-[#EA580C] pt-1" />
              </div>
            </div>

            {/* Card 03: LEASE */}
            <div className="bg-[#101116] border border-white/10 hover:border-[#EA580C]/40 rounded-2xl p-6 sm:p-7 flex gap-5 items-start transition-all shadow-xl">
              {/* Left Side: Number + Icon */}
              <div className="flex flex-col items-start shrink-0 space-y-2.5">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#EA580C] leading-none">
                  03
                </span>
                <div>
                  <svg className="w-11 h-11 text-[#EA580C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8h20l8 8v24a2 2 0 01-2 2H12a2 2 0 01-2-2V10a2 2 0 012-2z" />
                    <path d="M32 8v8h8M17 20h16M17 26h16M17 32h10" />
                    <rect x="29" y="30" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Title + Description + Short Accent Line */}
              <div className="flex-1 space-y-2.5 text-left">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  LEASE
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                  Commercial and residential leasing solutions tailored to your requirements.
                </p>
                {/* Short Accent Line */}
                <div className="w-8 h-[2px] bg-[#EA580C] pt-1" />
              </div>
            </div>

            {/* Card 04: PROPERTY CONSULTATION */}
            <div className="bg-[#101116] border border-white/10 hover:border-[#EA580C]/40 rounded-2xl p-6 sm:p-7 flex gap-5 items-start transition-all shadow-xl">
              {/* Left Side: Number + Icon */}
              <div className="flex flex-col items-start shrink-0 space-y-2.5">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#EA580C] leading-none">
                  04
                </span>
                <div>
                  <svg className="w-11 h-11 text-[#EA580C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="25" cy="12" r="4.5" />
                    <path d="M17 23c0-3 3.5-4.5 8-4.5s8 1.5 8 4.5" />
                    <circle cx="13" cy="30" r="3.5" />
                    <path d="M7 39c0-2.5 2.5-3.5 6-3.5s6 1 6 3.5" />
                    <circle cx="37" cy="30" r="3.5" />
                    <path d="M31 39c0-2.5 2.5-3.5 6-3.5s6 1 6 3.5" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Title + Description + Short Accent Line */}
              <div className="flex-1 space-y-2.5 text-left">
                <h3 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider leading-tight">
                  PROPERTY CONSULTATION
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal">
                  Professional guidance to help you make confident property decisions.
                </p>
                {/* Short Accent Line */}
                <div className="w-8 h-[2px] bg-[#EA580C] pt-1" />
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: FROM INSTAGRAM */}
        {/* ========================================================================= */}
        <section className="space-y-6">

          {/* Section Header: Centered — FROM INSTAGRAM — with Far Right Link */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Centered Heading */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#EA580C]" />
              <span className="text-sm sm:text-base lg:text-lg font-mono font-bold uppercase tracking-widest text-[#EA580C]">
                FROM INSTAGRAM
              </span>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#EA580C]" />
            </div>

            {/* Far Right Follow Link */}
            <a
              href={VASTGOED_REALESTATE.instagramUrl || "https://www.instagram.com/vastgoed_properties?igsh=NWY1azkzMHllNHcx"}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:absolute sm:right-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-[#EA580C] flex items-center gap-2 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#EA580C]" /> FOLLOW US <span className="text-[#EA580C]">@vastgoed_properties</span>
            </a>
          </div>

          {/* 6-COLUMN GRID CONTAINER (LIVE REACT TEXT POSTERS + PHOTOS) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#101116] border border-white/10 hover:border-[#EA580C]/50 rounded-2xl overflow-hidden aspect-[4/5] relative group transition-all shadow-xl hover:-translate-y-1 duration-300"
              >
                {post.type === 'poster' ? (
                  <div className="w-full h-full p-4 sm:p-5 bg-[#0A0B0E] flex flex-col justify-between text-left relative overflow-hidden">
                    {/* Header: VASTGOED PROPERTIES */}
                    <div>
                      <span className="font-display font-extrabold text-[10px] sm:text-[11px] tracking-widest text-white uppercase block">
                        VASTGOED <span className="text-[#EA580C]">PROPERTIES</span>
                      </span>
                      <div className="w-6 h-[1.5px] bg-[#EA580C] mt-1.5" />
                    </div>

                    {/* Main Headline */}
                    <div className="space-y-2 my-auto py-2">
                      <h4 className="font-display font-black text-sm sm:text-base lg:text-lg text-white uppercase leading-snug tracking-tight">
                        {post.title}
                        {post.highlight && (
                          <span className="text-[#EA580C] block mt-1">{post.highlight}</span>
                        )}
                      </h4>

                      {post.sublines && (
                        <div className="text-[11px] sm:text-xs text-[#EA580C] font-semibold leading-relaxed pt-1">
                          {post.sublines.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Handle */}
                    <div className="text-[9px] font-mono text-gray-500 tracking-wider">
                      @vastgoed_properties
                    </div>
                  </div>
                ) : (
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}
