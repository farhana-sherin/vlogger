import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Helper component to handle section scrolling or top scroll on page/hash change
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Small timeout to allow page component rendering
      
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export default function MainLayout() {
  const { pathname } = useLocation();
  const isAgencyPage = ['/business', '/business-page', '/agency', '/vastgoed', '/vastgoed-agency', '/vastgoed-group'].includes(pathname);

  return (
    <div className="min-h-screen font-sans antialiased flex flex-col justify-between transition-colors duration-300 bg-[#0A0A0A] text-white">
      <ScrollToHash />

      {/* Top Main Content Container */}
      <div className="w-full flex-1">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Full Width Footer */}
      <Footer />
    </div>
  );
}
