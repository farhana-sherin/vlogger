import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  TrendingUp, 
  Target, 
  Layers, 
  Zap, 
  Award, 
  BarChart3, 
  Globe, 
  Check, 
  X, 
  ExternalLink,
  Compass,
  DollarSign,
  Filter,
  Eye
} from 'lucide-react';
import { 
  SOCIAL_LINKS, 
  DOQUAD_CONTACT, 
  VASTGOED_AGENCY, 
  VASTGOED_REALESTATE, 
  REAL_ESTATE_PROPERTIES 
} from '../constants/data';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function VastgoedAgency() {
  // Main Business Switcher: 'realestate' or 'marketing'
  const [activeBusiness, setActiveBusiness] = useState('realestate');
  
  // Real Estate Gallery Category Filter
  const [propertyCategory, setPropertyCategory] = useState('All');
  
  // Property Modal State
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Marketing Agency Active Tab
  const [activeTab, setActiveTab] = useState('strategy');

  // Real Estate Form State
  const [reFormSubmitted, setReFormSubmitted] = useState(false);
  const [reFormData, setReFormData] = useState({
    name: '',
    phone: '',
    interest: 'Buying Villa / Home',
    budget: '₹1 Cr - ₹3 Cr',
    message: ''
  });

  // Marketing Form State
  const [mktFormSubmitted, setMktFormSubmitted] = useState(false);
  const [mktFormData, setMktFormData] = useState({
    name: '',
    brand: '',
    contact: '',
    service: 'Strategy & Branding',
    message: ''
  });

  const agencyInstagramUrl = VASTGOED_AGENCY.instagramUrl;

  const handleReFormSubmit = (e) => {
    e.preventDefault();
    if (reFormData.name && reFormData.phone) {
      setReFormSubmitted(true);
      setTimeout(() => {
        setReFormSubmitted(false);
        setReFormData({ name: '', phone: '', interest: 'Buying Villa / Home', budget: '₹1 Cr - ₹3 Cr', message: '' });
      }, 5000);
    }
  };

  const handleMktFormSubmit = (e) => {
    e.preventDefault();
    if (mktFormData.name && mktFormData.contact) {
      setMktFormSubmitted(true);
      setTimeout(() => {
        setMktFormSubmitted(false);
        setMktFormData({ name: '', brand: '', contact: '', service: 'Strategy & Branding', message: '' });
      }, 5000);
    }
  };

  const filteredProperties = propertyCategory === 'All' 
    ? REAL_ESTATE_PROPERTIES 
    : REAL_ESTATE_PROPERTIES.filter(p => p.category === propertyCategory);

  const reServices = [
    {
      id: 'residential',
      title: 'Luxury Villa & Home Sales',
      icon: Home,
      tagline: 'Premium modern villas, waterfront estates & duplex penthouses',
      desc: 'We curate exclusive high-end residential listings with architectural precision, top-grade amenities, and verified ownership records.',
      features: ['Waterfront & Beachfront Luxury Villas', 'Penthouse & Skyline Apartments', 'Private Gated Communities', '100% Clear Title Verification']
    },
    {
      id: 'commercial',
      title: 'Commercial & Retail Hubs',
      icon: Building2,
      tagline: 'Grade-A office towers, retail plazas & IT park spaces',
      desc: 'Strategic commercial real estate acquisitions engineered for high rental yield and sustained corporate capital appreciation.',
      features: ['Grade-A IT Park Office Units', 'High-Street Retail Storefronts', 'Pre-Leased Commercial Assets', 'Corporate Leasing Assistance']
    },
    {
      id: 'plots',
      title: 'Land Plots & Resort Acres',
      icon: Compass,
      tagline: 'Prime residential land, hill estate plots & coastal property',
      desc: 'Verified land parcels ready for immediate villa construction, resort hospitality projects, or long-term land wealth holding.',
      features: ['Villa Layout Plots with Approvals', 'Hill Station & Resort Acreages', 'Coastal & Beachfront Land Parcels', 'Boundary & Soil Testing Verified']
    },
    {
      id: 'advisory',
      title: 'Investment & Valuation',
      icon: DollarSign,
      tagline: 'High-ROI real estate portfolio management & market advisory',
      desc: 'Expert real estate consulting providing data-backed market analysis, property valuation, and high-yielding asset allocation.',
      features: ['Property Valuation & Market Reports', 'Portfolio Diversification Strategy', 'NRI Investment Management', 'Legal & Registration Assistance']
    }
  ];

  const mktServices = [
    {
      id: 'strategy',
      title: 'Strategy & Brand Identity',
      icon: Target,
      tagline: 'Distinctive brand narrative & visual identity positioning',
      desc: 'We craft your core brand story, define visual design standards, and position your business to command authority in your niche.',
      features: ['Brand Identity & Logo Design', 'Market & Competitor Analysis', 'Visual Guidelines & Color Systems', 'Brand Positioning & Messaging']
    },
    {
      id: 'performance',
      title: 'Performance Marketing',
      icon: TrendingUp,
      tagline: 'High-converting ad campaigns engineered for maximum ROAS',
      desc: 'Precision targeted Meta (Instagram/Facebook) and Google ad campaigns optimized to drive qualified leads, calls, and online orders.',
      features: ['Meta Ads Management (IG/FB)', 'Google Search & Video Ads', 'A/B Creative & Audience Testing', 'Real-Time ROI & Conversion Analytics']
    },
    {
      id: 'content',
      title: 'Content & Social Media',
      icon: Layers,
      tagline: 'High-engagement viral reels & aesthetic grid curation',
      desc: 'End-to-end social media management, short-form video production, and visual storytelling that builds brand trust and customer loyalty.',
      features: ['Reels & Video Content Production', 'Social Media Account Growth', 'Creator & Influencer Outreach', 'Aesthetic Grid & Post Curation']
    },
    {
      id: 'growth',
      title: 'Funnel & Web Growth',
      icon: Zap,
      tagline: 'Optimized conversion funnels & high-speed landing pages',
      desc: 'Turn casual traffic into paying clients with high-speed landing pages, automated lead capture funnels, and conversion rate optimization.',
      features: ['High-Converting Landing Pages', 'Lead Magnet & Sales Funnels', 'SEO & Organic Search Visibility', 'Automated Lead Capture & CRM']
    }
  ];

  return (
    <div className="w-full bg-[#090A0F] text-white py-6 sm:py-10 space-y-10 sm:space-y-14 font-sans relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366F1]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#10B981]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-[#8B5CF6]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* TOP BRAND BANNER & DUAL BUSINESS SWITCHER */}
      <section className="relative z-10 text-center max-w-4xl mx-auto space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 bg-[#131528] border border-[#6366F1]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#A5B4FC]">
          <Sparkles className="w-4 h-4 text-[#8B5CF6]" /> Vastgoed Commercial Ventures
        </div>

        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[1.08]">
          VASTGOED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#8B5CF6]">GROUP</span>
        </h1>
        
        <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Delivering premium real estate properties & luxury villa developments, along with results-driven digital marketing agency solutions.
        </p>

        {/* Business Switcher Tabs */}
        <div className="pt-3 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveBusiness('realestate')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg ${
              activeBusiness === 'realestate'
                ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white border border-[#A7F3D0]/40 shadow-emerald-500/25 scale-105'
                : 'bg-[#11131F] text-[#94A3B8] hover:text-white border border-[#1E2338] hover:bg-[#1A1D2E]'
            }`}
          >
            <Building2 className="w-4 h-4 text-emerald-300" /> Vastgoed Real Estate & Realty
          </button>

          <button
            onClick={() => setActiveBusiness('marketing')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg ${
              activeBusiness === 'marketing'
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border border-[#A5B4FC]/40 shadow-indigo-500/25 scale-105'
                : 'bg-[#11131F] text-[#94A3B8] hover:text-white border border-[#1E2338] hover:bg-[#1A1D2E]'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-indigo-300" /> Vastgoed Digital Marketing Agency
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. REAL ESTATE BUSINESS SECTION */}
      {/* ========================================================================= */}
      {activeBusiness === 'realestate' && (
        <motion.div
          key="realestate"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* REAL ESTATE HERO */}
          <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#1E2338] pt-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#064E3B]/60 border border-[#10B981]/50 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#6EE7B7]">
                <Home className="w-3.5 h-3.5" /> Premium Property & Villa Development
              </div>

              <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-white uppercase leading-[1.1]">
                LUXURY HOMES • <br />
                <span className="text-[#10B981]">COMMERCIAL HUB</span> • LAND
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                {VASTGOED_REALESTATE.subTagline} We help homeowners, investors, and business leaders acquire high-value property with 100% legal transparency and maximum appreciation potential.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#property-gallery"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-lg shadow-emerald-500/25 text-center cursor-pointer"
                >
                  Explore Property Listings <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={DOQUAD_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#131728] hover:bg-[#1C223A] border border-[#2B324D] text-[#6EE7B7] text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-full transition-all text-center"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Property Inquiry
                </a>
              </div>
            </div>

            {/* Right Card Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#11131F]/90 border border-[#1E2338] rounded-3xl p-4 sm:p-5 shadow-2xl relative backdrop-blur-xl group hover:border-[#10B981]/60 transition-colors">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={REAL_ESTATE_PROPERTIES[0].image} 
                    alt={REAL_ESTATE_PROPERTIES[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-[#10B981] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {REAL_ESTATE_PROPERTIES[0].badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#090A0F]/90 border border-white/20 text-white font-display text-base font-bold px-3 py-1 rounded-xl">
                    {REAL_ESTATE_PROPERTIES[0].price}
                  </span>
                </div>

                <div className="space-y-2 px-1">
                  <span className="text-[11px] font-semibold text-[#10B981] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {REAL_ESTATE_PROPERTIES[0].location}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white uppercase">{REAL_ESTATE_PROPERTIES[0].title}</h3>
                  <p className="text-xs text-[#94A3B8] line-clamp-2">{REAL_ESTATE_PROPERTIES[0].desc}</p>
                  
                  <div className="pt-2 flex items-center justify-between border-t border-[#1E2338] text-xs text-[#CBD5E1]">
                    <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#10B981]" /> {REAL_ESTATE_PROPERTIES[0].bedrooms} Beds</span>
                    <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-[#10B981]" /> {REAL_ESTATE_PROPERTIES[0].bathrooms} Baths</span>
                    <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-[#10B981]" /> {REAL_ESTATE_PROPERTIES[0].area}</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* REAL ESTATE METRICS STRIP */}
          <section className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#10B981]/50 transition-colors">
              <div className="font-display text-3xl text-[#10B981]">{VASTGOED_REALESTATE.portfolioValue}</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Real Estate Portfolio</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#10B981]/50 transition-colors">
              <div className="font-display text-3xl text-white">{VASTGOED_REALESTATE.dealsCompleted}</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Deals Closed</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#10B981]/50 transition-colors">
              <div className="font-display text-3xl text-[#38BDF8]">{VASTGOED_REALESTATE.titleVerified}</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Verified Documentation</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#10B981]/50 transition-colors">
              <div className="font-display text-3xl text-[#A5B4FC]">{VASTGOED_REALESTATE.satisfiedClients}</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Happy Investors</div>
            </div>
          </section>

          {/* REAL ESTATE PROPERTY SHOWCASE GALLERY */}
          <section id="property-gallery" className="relative z-10 py-4 border-t border-[#1E2338]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981] block mb-1.5">
                Exclusive Real Estate Portfolio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                FEATURED <span className="text-[#10B981]">PROPERTIES</span> & LAND
              </h2>
              <p className="font-sans text-sm text-[#94A3B8] mt-2">
                Explore handpicked luxury villas, modern skyline penthouses, commercial hubs, and green land plots.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['All', 'Villas', 'Apartments', 'Commercial', 'Plots'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPropertyCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    propertyCategory === cat
                      ? 'bg-[#10B981] text-white shadow-md shadow-emerald-500/20'
                      : 'bg-[#11131F] text-[#94A3B8] hover:text-white border border-[#1E2338]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((prop) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#11131F]/90 border border-[#242940] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#10B981]/60 backdrop-blur-xl"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedProperty(prop)}>
                      <img 
                        src={prop.image} 
                        alt={prop.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/90 via-transparent to-black/30" />
                      
                      <span className="absolute top-3 left-3 bg-[#10B981] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {prop.badge}
                      </span>

                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 text-[#10B981]" />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-[#090A0F]/90 border border-[#10B981]/40 text-[#6EE7B7] font-display text-lg font-bold px-3 py-1 rounded-xl">
                          {prop.price}
                        </span>
                        <span className="text-[11px] text-[#CBD5E1] bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                          {prop.priceSub}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">
                          {prop.categoryLabel}
                        </span>
                        <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#10B981]" /> {prop.location}
                        </span>
                      </div>

                      <h3 className="font-display text-lg uppercase text-white font-bold group-hover:text-[#10B981] transition-colors">
                        {prop.title}
                      </h3>

                      <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                        {prop.desc}
                      </p>
                    </div>
                  </div>

                  {/* Specs & Action */}
                  <div className="px-5 pb-5 pt-3 border-t border-[#1E2338] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#CBD5E1]">
                      {prop.bedrooms > 0 ? (
                        <>
                          <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#10B981]" /> {prop.bedrooms} Beds</span>
                          <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-[#10B981]" /> {prop.bathrooms} Baths</span>
                        </>
                      ) : (
                        <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#10B981]" /> Title Clear</span>
                      )}
                      <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-[#10B981]" /> {prop.area}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="w-full bg-[#131728] hover:bg-[#10B981] text-[#6EE7B7] hover:text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#1E2338] hover:border-[#10B981]"
                    >
                      <Eye className="w-4 h-4" /> View Full Specs & Photos
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* REAL ESTATE SPECIALIZATIONS */}
          <section className="relative z-10 py-4 border-t border-[#1E2338]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981] block mb-1.5">
                Real Estate Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                OUR REAL ESTATE <span className="text-[#10B981]">SPECIALIZATIONS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {reServices.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div key={srv.id} className="bg-[#11131F]/90 border border-[#242940] rounded-3xl p-6 shadow-xl space-y-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#064E3B]/60 border border-[#10B981]/50 text-[#6EE7B7] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl uppercase text-white">{srv.title}</h3>
                        <p className="text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">{srv.tagline}</p>
                      </div>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">{srv.desc}</p>

                    <div className="space-y-2 bg-[#0D0F19] p-4 rounded-2xl border border-[#1E2338]">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                          <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* REAL ESTATE CONSULTATION & INQUIRY FORM */}
          <section id="re-consultation" className="relative z-10 py-4 border-t border-[#1E2338]">
            <div className="bg-[#11131F]/95 border border-[#242940] rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl relative backdrop-blur-xl">
              
              <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">
                  Vastgoed Real Estate Direct Inquiry
                </span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
                  SCHEDULE A <span className="text-[#10B981]">PROPERTY VISIT</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  Fill out your property requirements below. Our luxury real estate advisory team will assist you immediately.
                </p>
              </div>

              {reFormSubmitted ? (
                <div className="bg-[#0D0F19] border border-[#10B981]/60 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                  <h3 className="font-display text-2xl uppercase text-white">Property Request Received!</h3>
                  <p className="text-xs text-[#CBD5E1]">
                    Thank you for contacting Vastgoed Real Estate & Realty. Our property consultant will call you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReFormSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={reFormData.name}
                        onChange={(e) => setReFormData({ ...reFormData, name: e.target.value })}
                        placeholder="e.g. Anoop Kumar"
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={reFormData.phone}
                        onChange={(e) => setReFormData({ ...reFormData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-1.5">
                        Requirement Type
                      </label>
                      <select
                        value={reFormData.interest}
                        onChange={(e) => setReFormData({ ...reFormData, interest: e.target.value })}
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
                      >
                        <option value="Buying Villa / Home">Buying Villa / Luxury Home</option>
                        <option value="Apartment / Penthouse">Apartment / Penthouse</option>
                        <option value="Commercial Space">Commercial / Office Space</option>
                        <option value="Land Plot / Resort Acres">Land Plot / Resort Acres</option>
                        <option value="Selling Property">Selling My Property</option>
                        <option value="Real Estate Investment">Real Estate Investment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={reFormData.budget}
                        onChange={(e) => setReFormData({ ...reFormData, budget: e.target.value })}
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#10B981]"
                      >
                        <option value="Under ₹1 Cr">Under ₹1 Cr</option>
                        <option value="₹1 Cr - ₹3 Cr">₹1 Cr - ₹3 Cr</option>
                        <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Cr</option>
                        <option value="₹5 Cr+">₹5 Cr+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-1.5">
                      Property Specifications / Location Preference
                    </label>
                    <textarea
                      rows="3"
                      value={reFormData.message}
                      onChange={(e) => setReFormData({ ...reFormData, message: e.target.value })}
                      placeholder="Mention your preferred location (Kochi, Calicut, Wayanad, etc.) or specific property features..."
                      className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" /> Submit Property Inquiry
                  </button>
                </form>
              )}

            </div>
          </section>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 2. DIGITAL MARKETING AGENCY SECTION */}
      {/* ========================================================================= */}
      {activeBusiness === 'marketing' && (
        <motion.div
          key="marketing"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* MARKETING HERO SECTION */}
          <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#1E2338] pt-10">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#131528] border border-[#6366F1]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#A5B4FC]">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" /> Vastgoed Digital Marketing Agency
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[1.08]">
                STRATEGY • BRANDING • <br />
                <span className="text-[#8B5CF6]">PERFORMANCE</span>
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                {VASTGOED_AGENCY.subTagline}. We elevate brands through strategic content, precision targeted advertising, and revenue-driven growth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#mkt-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-lg shadow-indigo-500/25 text-center cursor-pointer"
                >
                  Book Growth Consultation <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={agencyInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#131728] hover:bg-[#1C223A] border border-[#2B324D] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-full transition-all text-center"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A5B4FC]" /> Follow @vastgoed_agency
                </a>
              </div>
            </div>

            {/* Right Column: Instagram Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#11131F]/90 border border-[#242940] rounded-3xl p-6 shadow-2xl space-y-5 relative backdrop-blur-xl">
                <div className="flex items-center gap-4 border-b border-[#1E2338] pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#6366F1] p-1 shrink-0 shadow-md">
                    <div className="w-full h-full rounded-full bg-[#0D0F19] flex items-center justify-center border border-[#A5B4FC]/30">
                      <span className="font-display text-sm font-bold tracking-wider text-[#A5B4FC]">VAST</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-lg font-bold text-white tracking-wide">{VASTGOED_AGENCY.handle}</h3>
                      <CheckCircle2 className="w-4 h-4 text-[#6366F1] fill-current shrink-0" />
                    </div>
                    <p className="text-xs font-semibold text-[#A5B4FC] mt-0.5">{VASTGOED_AGENCY.name}</p>
                    <p className="text-[11px] text-[#94A3B8]">{VASTGOED_AGENCY.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center bg-[#0D0F19] p-3 rounded-2xl border border-[#1E2338]">
                  <div>
                    <div className="font-display text-base font-bold text-white">{VASTGOED_AGENCY.posts}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Posts</div>
                  </div>
                  <div className="border-x border-[#1E2338]">
                    <div className="font-display text-base font-bold text-[#A5B4FC]">{VASTGOED_AGENCY.followers}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Followers</div>
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">{VASTGOED_AGENCY.following}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Following</div>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-[#CBD5E1] bg-[#090A12] p-3.5 rounded-xl border border-[#1E2338] font-sans">
                  <p className="font-semibold text-white">{VASTGOED_AGENCY.tagline}</p>
                  <p className="text-[#A5B4FC] font-medium">{VASTGOED_AGENCY.subTagline}</p>
                </div>

                <a
                  href={agencyInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <InstagramIcon className="w-4 h-4" /> View Instagram Profile
                </a>
              </div>
            </div>

          </section>

          {/* MARKETING METRICS STRIP */}
          <section className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#6366F1]/50 transition-colors">
              <div className="font-display text-3xl text-[#A5B4FC]">448+</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Growth Followers</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#6366F1]/50 transition-colors">
              <div className="font-display text-3xl text-white">17+</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Campaigns Delivered</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#6366F1]/50 transition-colors">
              <div className="font-display text-3xl text-[#38BDF8]">5x - 10x</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Average ROAS Focus</div>
            </div>
            <div className="bg-[#11131F]/90 border border-[#1E2338] p-5 rounded-2xl text-center backdrop-blur-md hover:border-[#6366F1]/50 transition-colors">
              <div className="font-display text-3xl text-[#10B981]">100%</div>
              <div className="text-xs font-semibold uppercase text-[#94A3B8] tracking-wider mt-1">Data Driven</div>
            </div>
          </section>

          {/* MARKETING SERVICES */}
          <section className="relative z-10 py-4 border-t border-[#1E2338]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A5B4FC] block mb-1.5">
                Tailored Marketing Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                OUR MARKETING <span className="text-[#8B5CF6]">SPECIALIZATIONS</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {mktServices.map((srv) => {
                const Icon = srv.icon;
                const isActive = activeTab === srv.id;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setActiveTab(srv.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#6366F1] text-white border border-[#A5B4FC]/40 shadow-md shadow-indigo-500/20' 
                        : 'bg-[#11131F] text-[#94A3B8] hover:text-white border border-[#1E2338]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#94A3B8]'}`} />
                    {srv.title}
                  </button>
                );
              })}
            </div>

            {mktServices.map((srv) => {
              if (srv.id !== activeTab) return null;
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-[#11131F]/90 border border-[#242940] rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-xl space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#181B2E] border border-[#6366F1]/30 text-[#A5B4FC] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl uppercase text-white">{srv.title}</h3>
                      <p className="text-xs font-semibold uppercase text-[#38BDF8] tracking-wider">{srv.tagline}</p>
                      <p className="text-sm text-[#94A3B8] leading-relaxed font-normal">{srv.desc}</p>
                    </div>

                    <div className="md:col-span-5 bg-[#0D0F19] border border-[#1E2338] p-5 rounded-2xl space-y-2.5">
                      <h4 className="text-xs font-semibold uppercase text-[#A5B4FC] tracking-wider mb-2">Key Deliverables:</h4>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                          <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* MARKETING CONSULTATION FORM */}
          <section id="mkt-consultation" className="relative z-10 py-4 border-t border-[#1E2338]">
            <div className="bg-[#11131F]/95 border border-[#242940] rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl relative backdrop-blur-xl">
              
              <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A5B4FC]">
                  Work With Vastgoed Marketing
                </span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
                  REQUEST A <span className="text-[#8B5CF6]">GROWTH PROPOSAL</span>
                </h2>
              </div>

              {mktFormSubmitted ? (
                <div className="bg-[#0D0F19] border border-[#6366F1]/60 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                  <h3 className="font-display text-2xl uppercase text-white">Strategy Request Received!</h3>
                </div>
              ) : (
                <form onSubmit={handleMktFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5B4FC] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={mktFormData.name}
                        onChange={(e) => setMktFormData({ ...mktFormData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5B4FC] mb-1.5">
                        Phone / Email *
                      </label>
                      <input
                        type="text"
                        required
                        value={mktFormData.contact}
                        onChange={(e) => setMktFormData({ ...mktFormData, contact: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5B4FC] mb-1.5">
                      Marketing Goals
                    </label>
                    <textarea
                      rows="3"
                      value={mktFormData.message}
                      onChange={(e) => setMktFormData({ ...mktFormData, message: e.target.value })}
                      placeholder="Describe your current business goals..."
                      className="w-full bg-[#0B0C15] border border-[#24283C] rounded-xl px-4 py-3 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-indigo-500/20"
                  >
                    <Send className="w-4 h-4" /> Send Strategy Request
                  </button>
                </form>
              )}

            </div>
          </section>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* PROPERTY LIGHTBOX / QUICK VIEW MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#11131F] border border-[#242940] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative text-white space-y-5 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 bg-[#1E2338] hover:bg-red-600 text-white p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 bg-[#10B981] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {selectedProperty.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-[#6EE7B7]">
                    {selectedProperty.price}
                  </span>
                  <span className="bg-black/60 text-xs text-white px-3 py-1 rounded-lg">
                    {selectedProperty.priceSub}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#10B981] font-semibold uppercase">
                  <MapPin className="w-4 h-4" /> {selectedProperty.location}
                </div>

                <h3 className="font-display text-2xl uppercase text-white font-bold">{selectedProperty.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{selectedProperty.desc}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-[#0D0F19] p-4 rounded-2xl border border-[#1E2338] text-center text-xs">
                <div>
                  <div className="text-[#10B981] font-bold">{selectedProperty.bedrooms > 0 ? selectedProperty.bedrooms : 'N/A'}</div>
                  <div className="text-[10px] uppercase text-[#94A3B8] mt-0.5">Bedrooms</div>
                </div>
                <div className="border-x border-[#1E2338]">
                  <div className="text-[#10B981] font-bold">{selectedProperty.bathrooms > 0 ? selectedProperty.bathrooms : 'N/A'}</div>
                  <div className="text-[10px] uppercase text-[#94A3B8] mt-0.5">Bathrooms</div>
                </div>
                <div>
                  <div className="text-[#10B981] font-bold">{selectedProperty.area}</div>
                  <div className="text-[10px] uppercase text-[#94A3B8] mt-0.5">Total Area</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/919539836019?text=${encodeURIComponent(`Hi Vastgoed Real Estate, I am interested in ${selectedProperty.title} (${selectedProperty.price}) located at ${selectedProperty.location}. Please provide details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Details & Pricing
                </a>

                <button
                  onClick={() => {
                    setSelectedProperty(null);
                    const el = document.getElementById('re-consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-[#131728] hover:bg-[#1E223D] border border-[#242940] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4 text-[#10B981]" /> Request Site Visit
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
