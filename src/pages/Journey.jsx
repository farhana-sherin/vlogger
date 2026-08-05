import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, Star, Video, Eye, MapPin, Sparkles, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import aboutProfileImage from '../assets/about-profile.jpg';

export default function Journey() {
  const milestones = [
    {
      year: "2021",
      title: "The Smartphone Beginning",
      desc: "Started Foodie World with just a smartphone camera, filming hidden street food joints at Kozhikode Beach.",
      icon: Video,
      stat: "10K Subs"
    },
    {
      year: "2022",
      title: "YouTube Silver Creator Award",
      desc: "Crossed 100,000 subscribers after our legendary 70-year-old Malabar Woodfire Biryani episode went viral.",
      icon: Trophy,
      stat: "100K Subs"
    },
    {
      year: "2023",
      title: "Signature Animation & Intro Launch",
      desc: "Introduced creative animated intros and visual storytelling to bring humor and personality to video episodes.",
      icon: Sparkles,
      stat: "400K Subs"
    },
    {
      year: "2024",
      title: "Best Regional Food Vlog Award",
      desc: "Honored at the Kerala Digital Creator Summit for unbiased culinary reviews and heritage food preservation.",
      icon: Award,
      stat: "600K Subs"
    },
    {
      year: "2025 - Present",
      title: "100 Million+ Views & Web Platform",
      desc: "Partnered with Doquad Professional Website Development to build our official digital web platform for 770K+ viewers.",
      icon: Star,
      stat: "770K+ Subs"
    }
  ];

  const awards = [
    {
      title: "YouTube Silver Creator Award",
      issuer: "YouTube Creators",
      year: "2022",
      desc: "Awarded for passing 100,000 active channel subscribers.",
      badge: "Official Plaque"
    },
    {
      title: "Best Food Creator 2024",
      issuer: "Kerala Digital Summit",
      year: "2024",
      desc: "Recognized for authentic culinary journalism & food tourism promotion.",
      badge: "First Place"
    },
    {
      title: "100M+ Lifetime Views",
      issuer: "Media Analytics",
      year: "2025",
      desc: "Accumulated over 100 million total video watch views.",
      badge: "Milestone"
    },
    {
      title: "3D Mascot Innovation",
      issuer: "Design Awards",
      year: "2024",
      desc: "Best integration of a 3D animated mascot character in food media.",
      badge: "Excellence"
    }
  ];

  return (
    <div className="py-8 space-y-16">
      
      {/* Page Header Banner */}
      <div className="pb-8 border-b border-[#EEEEEE]">
        <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
          Milestones & Memory Logs ~
        </span>
        <h1 className="font-display text-4xl lg:text-6xl tracking-wide uppercase text-[#1A1A1A]">
          MY JOURNEY & <span className="text-[#EA580C]">ACHIEVEMENTS</span>
        </h1>
        <p className="font-sans text-[#4A4A4A] text-base lg:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
          From a local foodie with a smartphone camera to 770K+ subscribers exploring culinary gems across Kerala and global flavor hubs.
        </p>
      </div>

      {/* Metrics Banner */}
      <section className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
          <div className="space-y-1">
            <div className="font-display text-4xl lg:text-5xl text-[#EA580C]">770K+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Subscribers</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-4xl lg:text-5xl text-[#1A1A1A]">835+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Videos Published</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-4xl lg:text-5xl text-[#EA580C]">100M+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Total Views</div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-4xl lg:text-5xl text-[#1A1A1A]">1,200+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Spots Explored</div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Journey */}
      <section className="space-y-10">
        <div>
          <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
            Year-by-Year Story ~
          </span>
          <h2 className="font-display text-3xl lg:text-5xl tracking-wide uppercase text-[#1A1A1A]">
            THE CREATOR <span className="text-[#EA580C]">TIMELINE</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-[#EA580C] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {milestones.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center border-4 border-[#F8F9FA] shadow-md group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="bg-white border border-[#EEEEEE] rounded-3xl p-6 lg:p-8 space-y-3 transition-all group-hover:border-[#EA580C] group-hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-2xl text-[#EA580C]">
                      {item.year}
                    </span>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-[#FAF8F5] text-[#1A1A1A] rounded-full border border-[#EEEEEE]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#1A1A1A] uppercase">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Awards & Recognition Grid */}
      <section className="space-y-8">
        <div>
          <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
            Honors & Trophies ~
          </span>
          <h2 className="font-display text-3xl lg:text-5xl tracking-wide uppercase text-[#1A1A1A]">
            AWARDS & <span className="text-[#EA580C]">RECOGNITION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#EA580C] transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EEEEEE] text-[#EA580C] flex items-center justify-center font-display text-sm">
                    #{idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-[#EA580C] text-white rounded-full">
                    {award.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl text-[#1A1A1A] uppercase leading-tight">
                  {award.title}
                </h3>

                <p className="text-xs text-[#666666] leading-relaxed font-normal">
                  {award.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EEEEEE] flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
                <span>{award.issuer}</span>
                <span className="text-[#EA580C]">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6 font-sans">
        <div className="space-y-2 text-center lg:text-left">
          <span className="font-handwriting font-bold text-2xl text-[#EA580C] block">
            Be Part of Our Journey ~
          </span>
          <h3 className="font-display text-3xl lg:text-4xl text-[#1A1A1A] uppercase">
            SUBSCRIBE TO FOODIE WORLD
          </h3>
          <p className="text-sm text-[#4A4A4A]">
            Join 769,000+ food lovers receiving weekly food reviews & street food guides.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/videos"
            className="bg-[#EA580C] text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#C2410C] transition-colors shadow-md flex items-center gap-2"
          >
            Watch Latest Videos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
