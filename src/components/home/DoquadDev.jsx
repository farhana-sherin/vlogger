import React from 'react';
import { Globe, CheckCircle2, Phone, Send } from 'lucide-react';
import { DOQUAD_CONTACT } from '../../constants/data';

export default function DoquadDev() {
  return (
    <section id="doquad" className="py-16 border-b border-[#EEEEEE]">
      <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-sm font-sans">
        
        {/* Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EA580C] text-white text-xs font-semibold rounded-full tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5" /> Web Development Collaboration
          </div>
          <span className="text-xs font-mono font-semibold text-[#666666] tracking-wider uppercase">
            DESIGN & ENGINEERING BY DOQUAD
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand & Service Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
                Custom Web Engineering ~
              </span>
              {/* Display Title (Lilita One font) */}
              <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase text-[#1A1A1A] leading-tight">
                DOQUAD <span className="text-[#EA580C]">WEBSITE</span> DEVELOPMENT
              </h2>
            </div>
            
            <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">
              This Foodie World digital platform is engineered by <strong>Doquad</strong> — crafting custom, ultra-responsive, and minimalist web applications for creators, culinary brands, and modern businesses.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EEEEEE]">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#1A1A1A]">Minimalist Design</h4>
                  <p className="text-[11px] text-[#666666] font-normal">Bespoke UI/UX aligned strictly with brand identity</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EEEEEE]">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#1A1A1A]">Speed & SEO</h4>
                  <p className="text-[11px] text-[#666666] font-normal">Optimized code structure and instant page loads</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EEEEEE]">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#1A1A1A]">100% Responsive</h4>
                  <p className="text-[11px] text-[#666666] font-normal">Flawless layout rendering across all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EEEEEE]">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#1A1A1A]">Full Stack Integration</h4>
                  <p className="text-[11px] text-[#666666] font-normal">API connectivity, CMS, and dynamic features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details Card with Phone Number 9539836019 */}
          <div className="lg:col-span-5 font-sans">
            <div className="bg-[#FAF8F5] border border-[#EEEEEE] rounded-2xl p-6 lg:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
                  Get Your Website Built ~
                </span>
                <h3 className="font-display text-2xl lg:text-3xl tracking-wide uppercase text-[#1A1A1A]">
                  CLIENT HOTLINE
                </h3>
                <p className="text-xs text-[#4A4A4A] mt-1 font-normal">
                  Connect directly with Doquad engineers to discuss your next web development project.
                </p>
              </div>

              {/* Highlighted Single Contact Number: 9539836019 */}
              <div className="bg-white border-2 border-[#EA580C] rounded-2xl p-5 text-center shadow-sm">
                <div className="text-[11px] text-[#EA580C] font-semibold tracking-wider uppercase mb-1">CALL / WHATSAPP DIRECT</div>
                <a 
                  href={`tel:${DOQUAD_CONTACT.phone}`}
                  className="font-display text-3xl text-[#1A1A1A] tracking-wider hover:text-[#EA580C] transition-colors block"
                >
                  {DOQUAD_CONTACT.phone}
                </a>
                <span className="text-[11px] text-[#666666] block mt-1 font-normal">{DOQUAD_CONTACT.phoneFormatted} • Doquad Team</span>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${DOQUAD_CONTACT.phone}`}
                  className="flex-1 bg-[#EA580C] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-full text-center flex items-center justify-center gap-2 hover:bg-[#C2410C] transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a 
                  href={DOQUAD_CONTACT.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border border-[#1A1A1A] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-full text-center flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
