import { motion } from 'framer-motion';

const LeafIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6 2c-4.3.4-9.3 3.6-11.8 7.5-.9 1.4-1.5 2.9-1.8 4.5l-2.6.9c-.3.1-.4.5-.2.7l1.7 1.7c-.4 1.3-.3 2.7.3 3.8.7 1.3 2 2.1 3.5 2.1 1.6 0 3-.8 3.7-2.1.6-1.1.7-2.5.3-3.8l1.7 1.7c.2.2.6.1.7-.2l.9-2.6c1.6-.3 3.1-.9 4.5-1.8 3.9-2.5 7.1-7.5 7.5-11.8.1-.6-.4-1.1-1-1.1h-.2c-2.4 0-4.9.2-7.2.5z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f4fcf6] font-sans relative overflow-hidden text-[#0b2b16]">
      {/* Background Leaves */}
      <LeafIcon className="absolute top-[10%] left-[45%] w-8 h-8 text-[#558b2f] rotate-[-45deg] opacity-40" />
      <LeafIcon className="absolute bottom-[20%] left-[5%] w-6 h-6 text-[#558b2f] rotate-[45deg] opacity-40" />
      <LeafIcon className="absolute bottom-[15%] right-[15%] w-8 h-8 text-[#558b2f] rotate-[-20deg] opacity-40" />
      
      {/* Decorative Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-[#BDE346] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            {/* Main Circular Image */}
            <div className="relative w-full max-w-[450px] aspect-square rounded-full border-[12px] border-[#BDE346] overflow-hidden shadow-2xl">
              <img 
                src="/images/biryani.png" 
                alt="Delicious Biryani" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Icon Circle */}
            <div className="absolute bottom-[5%] left-[5%] md:left-[10%] w-28 h-28 bg-[#BDE346] rounded-full flex items-center justify-center shadow-xl border-[6px] border-[#0b2b16]">
              {/* Three Leaves Icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#0b2b16]">
                <path d="M12 22C12 22 12 16 12 12C12 8 8 4 8 4C8 4 4 8 4 12C4 16 12 22 12 22ZM12 22C12 22 12 16 12 12C12 8 16 4 16 4C16 4 20 8 20 12C20 16 12 22 12 22ZM12 12C12 12 12 8 12 4C12 0 16 0 16 0C16 0 20 0 20 4C20 8 12 12 12 12Z" />
              </svg>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-[#558b2f] uppercase tracking-wide">
              Who We Are ?
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#0b2b16]">
              Short Info About Silver Catering
            </h3>
            
            <p className="text-[#0b2b16]/80 font-medium text-lg leading-relaxed mb-10">
              With over 6 years of experience, Silver Catering has been dedicated to elevating events through exquisite, healthy, and vibrant culinary artistry. We believe that food is the heart of every great gathering.
            </p>
            
            <div className="flex items-start gap-6">
              <span className="text-5xl md:text-6xl font-heading font-black text-[#558b2f] leading-none mt-1">
                01
              </span>
              <p className="text-[#0b2b16]/70 font-medium leading-relaxed text-sm md:text-base">
                Our experienced team meticulously curates every menu using the freshest ingredients, ensuring a presentation that is as stunning as it is delicious. We treat your event like our own.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
