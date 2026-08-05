import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b2b16]">
      
      {/* Abstract Background Blobs (Optional, using simple CSS shapes) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0f381d] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0f381d] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] blur-3xl opacity-50 pointer-events-none"></div>

      {/* Floating Leaves */}
      <LeafIcon className="absolute top-[20%] left-[20%] w-8 h-8 text-[#BDE346] -rotate-45 opacity-80" />
      <LeafIcon className="absolute bottom-[30%] left-[10%] w-10 h-10 text-[#BDE346] rotate-[120deg] opacity-80" />
      <LeafIcon className="absolute top-[30%] right-[15%] w-12 h-12 text-[#BDE346] rotate-[45deg] opacity-80" />
      <LeafIcon className="absolute top-[60%] right-[10%] w-10 h-10 text-[#BDE346] rotate-[10deg] opacity-80" />

      {/* Main Bottom-Anchored Container */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] md:translate-y-[30%] w-full max-w-[900px] aspect-square flex items-center justify-center">
        
        {/* Circular Text SVG Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none w-full h-full scale-[1.1]">
          <svg viewBox="0 0 1200 1200" className="w-full h-full">
            <defs>
              {/* Paths start at bottom (6 o'clock) and go clockwise to prevent text clipping at the start point */}
              <path id="outerCircle" d="M 600,1020 a 420,420 0 0,1 0,-840 a 420,420 0 0,1 0,840" />
              <path id="innerCircle" d="M 600,990 a 390,390 0 0,1 0,-780 a 390,390 0 0,1 0,780" />
            </defs>

            {/* Outer Text */}
            <text className="font-heading font-extrabold text-[85px] uppercase tracking-wider" fill="white" textAnchor="middle">
              {/* startOffset 50% places text exactly at the top (12 o'clock) since path starts at 6 o'clock */}
              <textPath href="#outerCircle" startOffset="50%">
                WELCOME TO <tspan fill="#BDE346">SILVER CATERING</tspan>
              </textPath>
            </text>

            {/* Inner Text */}
            <text className="font-sans font-semibold text-[22px] tracking-[0.6em]" fill="#BDE346" textAnchor="middle">
              <textPath href="#innerCircle" startOffset="50%">
                Healthy Food Restaurant Presentation
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Salad Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 w-[65%] max-w-[550px] aspect-square rounded-full overflow-hidden shadow-2xl border-[10px] border-white/5"
        >
          <img 
            src="/images/salad_bowl.png" 
            alt="Healthy Salad Bowl" 
            className="w-full h-full object-cover object-center scale-[1.1]"
          />
        </motion.div>
      </div>

      {/* Start Now Button */}
      <motion.button 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 bg-[#BDE346] text-[#0b2b16] font-sans font-bold text-base md:text-lg px-12 py-4 rounded-full shadow-[0_10px_30px_rgba(189,227,70,0.3)] hover:scale-105 hover:bg-white transition-all"
      >
        START NOW
      </motion.button>
    </section>
  );
}

// Simple Leaf SVG Component
function LeafIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.6 2c-4.3.4-9.3 3.6-11.8 7.5-.9 1.4-1.5 2.9-1.8 4.5l-2.6.9c-.3.1-.4.5-.2.7l1.7 1.7c-.4 1.3-.3 2.7.3 3.8.7 1.3 2 2.1 3.5 2.1 1.6 0 3-.8 3.7-2.1.6-1.1.7-2.5.3-3.8l1.7 1.7c.2.2.6.1.7-.2l.9-2.6c1.6-.3 3.1-.9 4.5-1.8 3.9-2.5 7.1-7.5 7.5-11.8.1-.6-.4-1.1-1-1.1h-.2c-2.4 0-4.9.2-7.2.5z" />
    </svg>
  );
}
