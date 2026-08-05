import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Camera, Star } from 'lucide-react';
import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Categories from '../components/home/Categories';
import FoodGallery from '../components/FoodGallery';
import Collaboration from '../components/Collaboration';
import QuickContact from '../components/home/QuickContact';

import { GALLERY_ITEMS } from '../constants/data';

export default function Home() {
  const featuredVideos = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Seamless Top Sections Group */}
      <div>
        {/* Hero Section */}
        <Hero />

        {/* Dedicated About Me Section */}
        <AboutMe />

        {/* Featured Food Spots Gallery */}
        <FoodGallery />

        {/* Categories Section */}
        <Categories />
      </div>

      {/* Featured Video Cards & Social Media Connect Section */}
      <Collaboration showContactBanners={true} />

      {/* Quick Small Contact Section */}
      <QuickContact />
    </div>
  );
}
