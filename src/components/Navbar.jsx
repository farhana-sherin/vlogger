import { Utensils } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 py-3 bg-[#0b2b16]/60 backdrop-blur-md border border-white/10 rounded-full shadow-xl transition-all">
      <div className="w-full px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#BDE346] flex items-center justify-center text-[#0b2b16]">
            <Utensils size={20} strokeWidth={2.5} />
          </div>
          <span className="font-sans font-bold text-xl tracking-wide">
            silver caters
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-12 font-sans text-sm font-medium">
          <a href="#home" className="text-white hover:text-[#BDE346] transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-[#BDE346] transition-colors">About</a>
          <a href="#contact" className="text-[#BDE346] hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
