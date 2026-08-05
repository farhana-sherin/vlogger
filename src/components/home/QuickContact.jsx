import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function QuickContact() {
    return (
        <section id="contact-banner" className="py-12 lg:py-20 relative font-sans bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-[1550px] mx-auto px-6 md:px-12 lg:px-16">

                {/* Main Rectangular 3D Box with Pop-up Spring Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 18,
                        mass: 0.8
                    }}
                    className="relative rounded-3xl lg:rounded-[36px] bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#121212] border border-[#EA580C]/30 hover:border-[#EA580C]/70 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 group"
                >

                    {/* Subtle Corner Dotted Matrix Grids */}
                    <div className="absolute top-6 left-6 grid grid-cols-4 gap-1.5 opacity-15 text-[#EA580C] pointer-events-none">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
                        ))}
                    </div>

                    <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-1.5 opacity-15 text-[#EA580C] pointer-events-none">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
                        ))}
                    </div>

                    {/* Background Glow Orbs */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#EA580C]/25 transition-colors duration-700" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* 3D Floating Mail Envelope Illustration in Center Right with Bounce Pop-Up */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4, rotate: -30, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -10, y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        viewport={{ once: false }}
                        transition={{
                            initial: { type: "spring", stiffness: 220, damping: 15, delay: 0.2 },
                            animate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute right-1/4 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none z-10 group-hover:scale-110 transition-transform duration-500"
                    >
                        <div className="relative w-40 h-28 bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#C2410C] rounded-2xl shadow-2xl shadow-[#EA580C]/40 rotate-[-10deg] border border-white/20 p-4 flex flex-col justify-between overflow-hidden">
                            <div className="w-full h-0.5 bg-white/20" />
                            <div className="flex items-center justify-center text-white">
                                <Mail className="w-10 h-10 drop-shadow-md" />
                            </div>
                            <div className="flex justify-between items-center text-[9px] text-white/80 font-mono">
                                <span>FOODIE WORLD</span>
                                <span>★ ★ ★</span>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full blur-sm" />
                        </div>
                    </motion.div>

                    {/* Grid Layout: Left Content & Right Action Buttons */}
                    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Content with Stagger Pop-Up */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="lg:col-span-7 space-y-4"
                        >

                            {/* Top Pill Tag */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.25 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/40 text-[#EA580C] text-xs font-semibold uppercase tracking-wider shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                                <span>Let's Work Together</span>
                            </motion.div>

                            {/* Headline */}
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                HAVE A RESTAURANT OR <span className="text-[#EA580C]">BRAND IN MIND?</span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                                Partner with <strong>Foodie World</strong> to feature your food spot, showcase signature dishes, or launch viral food vlogs to <strong>770K+ passionate foodies</strong>.
                            </p>
                        </motion.div>

                        {/* Right Action Pill Buttons with Spring Pop-Up */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 25 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.3 }}
                            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center justify-end gap-3.5 relative z-20"
                        >

                            {/* Primary Orange Pill Button */}
                            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#C2410C] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#EA580C]/30 transition-all group/btn whitespace-nowrap"
                                >
                                    <span>Get In Touch</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* Secondary Dark Glass Pill Button */}
                            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all group/btn backdrop-blur-md whitespace-nowrap"
                                >
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
