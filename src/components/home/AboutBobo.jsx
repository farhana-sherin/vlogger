import React, { useState } from 'react';
import { Sparkles, Box, ArrowRight, RotateCw, Layers } from 'lucide-react';

export default function AboutBobo() {
  const [boboViewMode, setBoboViewMode] = useState('render'); // 'render', 'wireframe', 'pose'
  const [boboRotating, setBoboRotating] = useState(false);

  return (
    <section id="about" className="py-16 border-b border-[#EEEEEE]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <span className="font-handwriting font-bold text-2xl text-[#EA580C] block mb-1">
            Meet Our Channel Mascot ~
          </span>
          {/* Section Heading (Lilita One font) */}
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase text-[#1A1A1A]">
            ABOUT ME & PROJECT <span className="text-[#EA580C]">'BOBO'</span>
          </h2>
        </div>
        <p className="font-sans font-normal text-[#4A4A4A] text-sm md:text-base max-w-md mt-4 md:mt-0">
          Merging authentic food storytelling with cutting-edge 3D animation design to create a memorable brand experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch font-sans">
        
        {/* Clean Text Block */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#EA580C] text-white text-xs font-semibold uppercase tracking-wider rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Official 3D Mascot Project
            </div>
            {/* Display Subheading (Lilita One font) */}
            <h3 className="font-display text-3xl tracking-wide text-[#1A1A1A]">
              Meet 'Bobo' — The Animated Culinary Mascot
            </h3>
            {/* Paragraph (Poppins font) */}
            <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">
              Foodie World isn't just about restaurant visits; it's a digital universe of flavor discovery. 
              <strong className="text-[#1A1A1A]"> Project 'Bobo'</strong> is our signature 3D animated character project, designed to guide viewers through episode intros, animated taste-tests, interactive web experiences, and exclusive channel merchandise.
            </p>
            <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">
              Crafted with procedural 3D modeling, custom character rigging, and expressive facial blend shapes, Bobo brings humor and warmth to our food adventures across regional and global culinary media.
            </p>
          </div>

          {/* Technical Feature Chips */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 bg-white border border-[#EEEEEE] rounded-2xl flex items-center gap-3 shadow-sm">
              <Box className="w-6 h-6 text-[#EA580C] shrink-0" />
              <div>
                <div className="text-xs font-semibold uppercase text-[#1A1A1A]">3D Mesh Rigging</div>
                <div className="text-[11px] text-[#666666] font-normal">WebGL & Blender Engine</div>
              </div>
            </div>
            <div className="p-4 bg-white border border-[#EEEEEE] rounded-2xl flex items-center gap-3 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#EA580C] shrink-0" />
              <div>
                <div className="text-xs font-semibold uppercase text-[#1A1A1A]">Expressive Poses</div>
                <div className="text-[11px] text-[#666666] font-normal">12+ Custom Animations</div>
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2">
            <a 
              href="#gallery" 
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EA580C] border-b-2 border-[#EA580C] pb-1 hover:opacity-75 transition-opacity"
            >
              View Bobo In Animated Videos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Rectangular Canvas Placeholder for 3D Bobo */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-5 flex-1 flex flex-col justify-between shadow-sm">
            
            {/* Canvas Controls Header */}
            <div className="flex justify-between items-center pb-3 border-b border-[#EEEEEE] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-ping"></span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]">BOBO_3D_CANVAS_VIEWPORT</span>
              </div>
              
              {/* View Switcher Controls */}
              <div className="flex gap-1 bg-[#F8F9FA] p-1 rounded-full border border-[#EEEEEE]">
                <button 
                  onClick={() => setBoboViewMode('render')}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                    boboViewMode === 'render' ? 'bg-[#EA580C] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Render
                </button>
                <button 
                  onClick={() => setBoboViewMode('wireframe')}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                    boboViewMode === 'wireframe' ? 'bg-[#EA580C] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Wireframe
                </button>
                <button 
                  onClick={() => setBoboViewMode('pose')}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                    boboViewMode === 'pose' ? 'bg-[#EA580C] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Pose Mode
                </button>
              </div>
            </div>

            {/* Rectangular Interactive 3D Canvas Container */}
            <div className="relative w-full aspect-[4/3] bg-[#1A1A1A] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-white group">
              
              {/* Subtle Grid Lines */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                  backgroundSize: `20px 20px`
                }}
              />

              {/* 3D Character Simulation */}
              <div className={`relative z-10 flex flex-col items-center transition-transform duration-700 ${boboRotating ? 'rotate-12 scale-105' : ''}`}>
                
                {boboViewMode === 'render' && (
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#F97316] border-2 border-white/20 flex items-center justify-center shadow-2xl relative mb-3">
                      <div className="text-4xl md:text-5xl select-none">🍔</div>
                      <div className="absolute -top-1 -right-1 bg-white text-[#1A1A1A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        3D Rig
                      </div>
                    </div>
                    <h4 className="font-display text-xl text-white tracking-wide uppercase">BOBO THE FOODIE</h4>
                    <p className="text-xs text-gray-300 font-mono">Mascot Rig v2.4 • Textured Render</p>
                  </div>
                )}

                {boboViewMode === 'wireframe' && (
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-dashed border-[#EA580C] flex items-center justify-center mb-3 bg-[#262626]">
                      <Layers className="w-12 h-12 text-[#EA580C] stroke-[1.5]" />
                    </div>
                    <h4 className="font-mono text-lg text-gray-200">BOBO_GEOMETRY_MESH</h4>
                    <p className="text-xs text-gray-400 font-mono">Vertices: 24,580 • Polygons: 18,200</p>
                  </div>
                )}

                {boboViewMode === 'pose' && (
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#262626] border border-[#EA580C] flex items-center justify-center mb-3 relative">
                      <span className="text-4xl animate-bounce">😋</span>
                      <span className="absolute bottom-2 text-[10px] bg-[#EA580C] px-2 py-0.5 rounded-full font-mono text-white">Action: Tasting</span>
                    </div>
                    <h4 className="font-display text-xl text-white uppercase">REACTION ANIMATION #04</h4>
                    <p className="text-xs text-gray-400">Keyframe sequence: Delicious Taste Reaction</p>
                  </div>
                )}
              </div>

              {/* Rotation Simulator Button */}
              <div className="absolute bottom-3 right-3 z-20 flex gap-2">
                <button 
                  onClick={() => setBoboRotating(!boboRotating)}
                  className="flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shadow-md"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${boboRotating ? 'animate-spin' : ''}`} />
                  {boboRotating ? 'Stop Spin' : 'Rotate View'}
                </button>
              </div>
            </div>

            {/* Viewport Metadata Footer */}
            <div className="flex justify-between items-center pt-3 text-[11px] font-mono text-[#666666]">
              <span>Status: 3D Rig Active</span>
              <span>Engine: WebGL / Three.js</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
