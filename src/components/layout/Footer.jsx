import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Globe } from 'lucide-react';
import { DOQUAD_CONTACT, SOCIAL_LINKS } from '../../constants/data';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 mt-12 sm:mt-16 border-t-4 border-[#EA580C]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-4 sm:px-6 md:px-16 lg:px-[120px] max-w-[1440px] mx-auto"
      >

        {/* Top Newsletter & Brand Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-16 border-b border-[#2A2A2A] items-center">

          {/* Brand Summary */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-3 text-center lg:text-left">
            <Link to="/" className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white block">
              FOODIE<span className="text-[#EA580C]">WORLD</span>.
            </Link>
            <p className="font-sans text-xs sm:text-sm text-[#A0A0A0] max-w-sm mx-auto lg:mx-0 leading-relaxed font-normal">
              Exploring culinary destinations, street food treasures, and authentic recipes across the globe. Join our community of 760K+ food enthusiasts.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-7 font-sans">
            <div className="bg-[#242424] border border-[#333333] p-4 sm:p-6 rounded-2xl">
              <span className="font-handwriting font-bold text-xl sm:text-2xl text-[#EA580C] block mb-1">
                Stay In The Tasty Loop ~
              </span>
              <h4 className="font-display text-base sm:text-xl text-white mb-1 uppercase tracking-wide">
                Subscribe to Foodie World Newsletter
              </h4>
              <p className="text-[11px] sm:text-xs text-[#A0A0A0] mb-3 sm:mb-4 font-normal">
                Get weekly food guides, secret restaurant spots, and video updates directly in your inbox.
              </p>

              {subscribed ? (
                <div className="bg-[#2A3A2A] text-emerald-300 text-xs font-semibold px-4 py-3 rounded-full flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing! You'll receive our next food story soon.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#1A1A1A] border border-[#3A3A3A] text-white text-xs px-4 py-3 rounded-full focus:outline-none focus:border-[#EA580C] placeholder-[#777777] transition-colors font-sans w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#EA580C] text-white hover:bg-[#C2410C] text-xs font-semibold uppercase tracking-wider px-6 sm:px-7 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-md font-sans w-full sm:w-auto text-center"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Navigation Links Columns (Poppins font) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-14 border-b border-[#2A2A2A] font-sans">

          {/* Quick Links */}
          <div>
            <h5 className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#EA580C] mb-3 sm:mb-4">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs font-medium tracking-wide text-[#CCCCCC]">
              <li><Link to="/" className="hover:text-[#EA580C] transition-colors">Home</Link></li>
              <li><Link to="/videos" className="hover:text-[#EA580C] transition-colors">Food Gallery & Videos</Link></li>
              <li><Link to="/business" className="hover:text-[#FF85B3] font-semibold transition-colors">Business & Vastgoed Group</Link></li>
              <li><Link to="/contact" className="hover:text-[#EA580C] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Food Categories */}
          <div>
            <h5 className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#EA580C] mb-3 sm:mb-4">
              Top Categories
            </h5>
            <ul className="space-y-2 text-xs font-medium tracking-wide text-[#CCCCCC]">
              <li><Link to="/videos" className="hover:text-[#EA580C] transition-colors">Biryani Specials</Link></li>
              <li><Link to="/videos" className="hover:text-[#EA580C] transition-colors">Malabar Mandhi</Link></li>
              <li><Link to="/videos" className="hover:text-[#EA580C] transition-colors">Street Food Trails</Link></li>
              <li><Link to="/business" className="hover:text-[#FF85B3] transition-colors">Business & Marketing (Vastgoed)</Link></li>
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h5 className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#EA580C] mb-3 sm:mb-4">
              Social Media
            </h5>
            <ul className="space-y-2 text-xs font-medium tracking-wide text-[#CCCCCC]">
              <li>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C] transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-[#FF0000] shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube (770K)
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C] transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-[#E1306C] shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram (420K)
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.vastgoedAgencyInstagram || "https://instagram.com/vastgoed_agency"} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF85B3] transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-[#FF85B3] shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @vastgoed_agency
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C] transition-colors inline-flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#4267B2] shrink-0" /> Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#EA580C] mb-3 sm:mb-4">
              Get In Touch
            </h5>
            <ul className="space-y-2 text-xs text-[#CCCCCC]">
              <li className="font-semibold text-white">Foodie World Support</li>
              <li className="inline-flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                <a href={`tel:${DOQUAD_CONTACT.phone}`} className="hover:underline font-mono font-bold text-xs sm:text-sm">
                  {DOQUAD_CONTACT.phone}
                </a>
              </li>
              <li className="text-[#888888]">Available for Collaborations</li>
              <li>
                <a href={`mailto:${DOQUAD_CONTACT.email}`} className="hover:text-[#EA580C] text-xs transition-colors font-medium break-all">
                  {DOQUAD_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#888888] gap-3 sm:gap-4 font-sans text-center sm:text-left border-t border-[#222222] mt-6">
          <div>
            © 2026 FOODIEWORLD. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-end">
            <span>Designed & Developed by</span>
            <a
              href={DOQUAD_CONTACT.companyUrl || "https://doquad.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#EA580C] hover:underline hover:text-white transition-colors uppercase tracking-wider"
            >
              {DOQUAD_CONTACT.companyName || "DOQUAD"} ({DOQUAD_CONTACT.websiteDisplay || "doquad.in"})
            </a>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
