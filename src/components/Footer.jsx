import { Utensils, MessageCircle, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants/data';

export default function Footer() {
  const whatsappNumber = "919526223034"; 
  const message = encodeURIComponent("Hello Silver Catering! I would like to inquire about booking an event.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <footer id="contact" className="min-h-screen flex flex-col justify-between bg-[#051c0d] text-white pt-24 md:pt-32 pb-8 font-sans relative overflow-hidden rounded-t-[3rem] mt-[-2rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-[-10%] w-[40%] h-[100%] bg-[#BDE346] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[30%] h-[50%] bg-[#BDE346] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Big Call to Action Section */}
        <div className="container mx-auto px-6 md:px-12 text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-6 text-white leading-tight">
          Let's Create Something <br/>
          <span className="text-[#BDE346]">Extraordinary</span>
        </h2>
        <p className="text-white/70 font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether it's an intimate gathering or a grand celebration, our team is ready to craft the perfect culinary experience for you.
        </p>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#BDE346] text-[#0b2b16] font-bold text-lg px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(189,227,70,0.15)] hover:shadow-[0_0_60px_rgba(189,227,70,0.3)]"
        >
          <MessageCircle className="w-6 h-6" />
          Book Your Event
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#BDE346] flex items-center justify-center text-[#0b2b16] shadow-lg">
              <Utensils size={24} strokeWidth={2.5} />
            </div>
            <span className="font-heading font-black text-3xl tracking-wide uppercase">
              Silver <span className="text-[#BDE346]">Caters</span>
            </span>
          </div>
          <p className="font-medium text-base leading-relaxed text-white/70 max-w-sm">
            Elevating your special moments with exquisite, healthy culinary artistry and flawless event coordination. We bring your vision to the table.
          </p>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#BDE346] inline-block"></span> Contact Us
          </h4>
          <ul className="space-y-6 font-medium text-base text-white/80">
            <li className="flex items-center gap-4 hover:text-[#BDE346] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#BDE346]">
                <MapPin size={18} />
              </div>
              Kerala, India
            </li>
            <li className="flex items-center gap-4 hover:text-[#BDE346] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#BDE346]">
                <Phone size={18} />
              </div>
              +91 95262 23034
            </li>
            <li className="flex items-center gap-4 hover:text-[#BDE346] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#BDE346]">
                <Mail size={18} />
              </div>
              hello@silvercatering.com
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#BDE346] inline-block"></span> Explore
          </h4>
          <ul className="space-y-4 font-medium text-base text-white/80">
            <li><a href="#home" className="hover:text-[#BDE346] transition-colors flex items-center gap-2"><span className="text-[#BDE346] text-xl leading-none">&bull;</span> Home</a></li>
            <li><a href="#about" className="hover:text-[#BDE346] transition-colors flex items-center gap-2"><span className="text-[#BDE346] text-xl leading-none">&bull;</span> About Us</a></li>
            <li><a href="#services" className="hover:text-[#BDE346] transition-colors flex items-center gap-2"><span className="text-[#BDE346] text-xl leading-none">&bull;</span> What We Do</a></li>
          </ul>
        </div>
      </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-white/10 text-sm font-medium text-white/50 flex flex-col md:flex-row justify-between items-center relative z-10">
        <p>&copy; {new Date().getFullYear()} Silver Catering. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#BDE346] hover:text-[#0b2b16] transition-all duration-300">
            <Instagram size={18} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#BDE346] hover:text-[#0b2b16] transition-all duration-300">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
