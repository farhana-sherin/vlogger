import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAgencyPage = true;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/#about-me' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Food Spots', path: '/#gallery' },
    { name: 'Videos', path: '/#videos' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 border-b border-white/5 text-white backdrop-blur-xl">
      <nav className="flex justify-between items-center h-[80px] px-6 md:px-16 lg:px-[60px] max-w-[1600px] mx-auto w-full">

        {/* Logo matching the reference "Foodie EXPLORER" */}
        <Link to="/" onClick={() => handleNavClick('/')} className="flex items-baseline gap-1.5 whitespace-nowrap">
          <span className="font-handwriting font-bold text-3xl text-white">Foodie</span>
          <span className="font-display font-black text-xs tracking-wider uppercase text-[#EA580C]">EXPLORER</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-10 font-sans">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`text-[14px] font-semibold tracking-wider transition-colors cursor-pointer ${(item.path === '/contact' && location.pathname === '/contact') ||
                (item.path === '/' && location.pathname === '/' && !location.hash)
                ? 'text-[#EA580C] underline underline-offset-8 decoration-2'
                : 'text-gray-300 hover:text-[#EA580C]'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Circular Action Icons matching the reference UI */}
        <div className="flex items-center gap-3 font-sans">
          <a
            href="https://instagram.com/foodie_world_hakh?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 items-center justify-center text-white transition-all"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com/@foodieworldhakh"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 items-center justify-center text-white transition-all"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <button
            className="hidden sm:flex w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 items-center justify-center text-white transition-all"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors cursor-pointer text-white hover:bg-[#1E2338]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-b shadow-2xl absolute top-full left-0 w-full bg-[#0E1019]/95 border-white/10 text-white backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2 px-4 py-6 font-sans">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(item.path);
                  }}
                  className={`text-[14px] uppercase font-bold tracking-wider py-3.5 px-5 rounded-xl transition-colors cursor-pointer ${(item.path === '/contact' && location.pathname === '/contact') ||
                    (item.path === '/' && location.pathname === '/' && !location.hash)
                    ? 'bg-[#EA580C] text-white shadow-md'
                    : 'text-gray-300 hover:bg-white/5'
                    }`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="flex justify-center gap-4 pt-4 border-t border-white/10 mt-2">
                <a
                  href="https://instagram.com/foodie_world_hakh?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@foodieworldhakh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
