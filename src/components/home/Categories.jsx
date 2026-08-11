import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    UtensilsCrossed,
    Flame,
    Soup,
    Pizza,
    Sparkles,
    GlassWater,
    Fish,
    ShoppingBag
} from 'lucide-react';
import { FOOD_CATEGORIES } from '../../constants/data';

// Icon components for reference design badges
const CategoryIcon = ({ iconName }) => {
    switch (iconName) {
        case 'Bowl':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <path d="M20 13a8 8 0 0 1-16 0" />
                </svg>
            );
        case 'Skewer':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="21" x2="21" y2="3" />
                    <path d="M7 13.5L10.5 17" />
                    <path d="M11 9.5L14.5 13" />
                    <path d="M15 5.5L18.5 9" />
                </svg>
            );
        case 'Soup':
            return <Soup className="w-5.5 h-5.5" />;
        case 'Burger':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a8 8 0 0 1 16 0" />
                    <path d="M2 14h20" />
                    <path d="M4 17h16" />
                    <path d="M5 20h14a1 1 0 0 0 1-1v-2H4v2a1 1 0 0 0 1 1z" />
                </svg>
            );
        case 'Pizza':
            return <Pizza className="w-5.5 h-5.5" />;
        case 'Cupcake':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
                    <path d="M4 12c0-2.5 2-4 4.5-4 1.5 0 2.5.5 3.5 1.5C13 8.5 14 8 15.5 8c2.5 0 4.5 1.5 4.5 4" />
                    <circle cx="12" cy="5" r="2" />
                </svg>
            );
        case 'IceCream':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7 11 5 11 5-11" />
                    <path d="M12 2a5 5 0 0 0-5 5c0 1.5.8 2.8 2 3.5" />
                    <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.8 2.8-2 3.5" />
                </svg>
            );
        case 'Snack':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M9.5 15.5h.01M14.5 15.5h.01" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            );
        case 'Drink':
            return <GlassWater className="w-5.5 h-5.5" />;
        case 'Leaf':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
            );
        default:
            return <UtensilsCrossed className="w-5.5 h-5.5" />;
    }
};

export default function Categories() {
    return (
        <section
            id="categories"
            className="py-16 lg:py-24 relative overflow-hidden font-sans bg-[#080808] border-t border-b border-white/5"
        >
            {/* 1. Background Decorative Watermarks & Grids */}

            {/* Top Left Dot Matrix Grid */}
            <div className="absolute top-8 left-8 hidden md:grid grid-cols-5 gap-2 opacity-15 text-[#EA580C] pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
                ))}
            </div>

            {/* Top Right Dot Matrix Grid */}
            <div className="absolute top-8 right-8 hidden md:grid grid-cols-5 gap-2 opacity-15 text-[#EA580C] pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
                ))}
            </div>

            {/* Left Background Watermark Artwork (Chili Line Art) */}
            <div className="absolute top-1/3 -left-10 opacity-10 text-white pointer-events-none hidden lg:block">
                <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12 2a10 10 0 0 0-3 19.5c.5.2 1-.1 1-.6v-2.3a4 4 0 0 1 4-4c.5 0 .9.4.9.9v1c0 3.3 2.7 6 6 6h1a1 1 0 0 0 1-1 14 14 0 0 0-10.9-19.5z" />
                    <path d="M12 2c0 2-2 4-4 4" />
                </svg>
            </div>

            {/* Right Background Watermark Artwork (Tomato / Spice Line Art) */}
            <div className="absolute bottom-12 -right-10 opacity-10 text-white pointer-events-none hidden lg:block">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <circle cx="12" cy="13" r="9" />
                    <path d="M12 4V2M10 3c1 1 2 1 2 1s1 0 2-1M8 4c2 1 4 1 4 1s2 0 4-1" />
                </svg>
            </div>

            <div className="w-full max-w-[1550px] mx-auto relative px-6 md:px-12 lg:px-16">

                {/* 2. Section Header with Bi-Directional Scroll Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-14 relative z-10"
                >

                    {/* Top Accent Text with Doodle Accents */}
                    <div className="flex items-center justify-center gap-2 text-[#EA580C] font-handwriting text-2xl lg:text-3xl font-bold mb-1">
                        <svg width="24" height="14" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M2 12 Q 10 2, 28 8" />
                            <circle cx="4" cy="4" r="1.5" fill="currentColor" />
                        </svg>
                        <span>Explore by Taste</span>
                        <svg width="24" height="14" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M2 8 Q 20 2, 28 12" />
                            <circle cx="26" cy="4" r="1.5" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Main Headline */}
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white leading-tight">
                        FOOD <span className="text-[#EA580C]">CATEGORIES</span>
                    </h2>

                    {/* Crossed Utensils Icon Divider */}
                    <div className="flex items-center justify-center gap-3 my-4">
                        <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#EA580C]/80" />
                        <UtensilsCrossed className="w-5 h-5 text-[#EA580C]" />
                        <div className="w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#EA580C]/80" />
                    </div>

                    {/* Subtitle Description */}
                    <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                        From spicy street bites to sweet delights, click any category to watch our official YouTube playlist!
                    </p>
                </motion.div>

                {/* 3. Categories 4x2 Grid (8 Cards) with Staggered Scroll Animation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {FOOD_CATEGORIES.map((category, index) => (
                        <motion.a
                            key={category.id}
                            href={category.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40, scale: 0.94 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.15 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                            className="bg-[#121212] border border-white/10 hover:border-[#EA580C]/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#EA580C]/10 flex flex-col justify-between block"
                        >
                            {/* Upper Card: Food Image */}
                            <div className="p-3 pb-0">
                                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1A1A]">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out filter brightness-95 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                                    {/* YouTube Video Badge */}
                                    <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold text-white shadow-lg group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300">
                                        <svg className="w-3.5 h-3.5 fill-current text-red-500 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                        <span className="tracking-wider">VIDEO</span>
                                    </div>
                                </div>
                            </div>

                            {/* Lower Card Details Container */}
                            <div className="p-4 pt-3.5 flex items-center justify-between">

                                {/* Left Side: Circular Badge Icon & Text */}
                                <div className="flex items-start gap-3">

                                    {/* Circular Orange Icon Container */}
                                    <div className="w-11 h-11 rounded-full border border-[#EA580C]/50 bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#EA580C] group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <CategoryIcon iconName={category.iconName} />
                                    </div>

                                    {/* Category Details Text */}
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-white group-hover:text-[#EA580C] transition-colors leading-tight">
                                            {category.title}
                                        </h3>
                                        <p className="font-sans text-xs text-gray-400 mt-0.5 font-normal">
                                            {category.subtitle}
                                        </p>

                                        {/* Item Count CTA Link */}
                                        <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                            <span>{category.itemsCount}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>

                                </div>

                                {/* Right Side: Subtle Decorative 3x3 Dot Grid */}
                                <div className="grid grid-cols-3 gap-1 opacity-20 group-hover:opacity-40 transition-opacity self-start pt-1">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 rounded-full bg-white" />
                                    ))}
                                </div>

                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}
