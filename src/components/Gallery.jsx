import { motion } from 'framer-motion';

const images = [
  { src: '/images/catering_food_1781265480564.png', alt: 'Gourmet Catering Food' },
  { src: '/images/event_management_1781265493663.png', alt: 'Luxury Event Setup' },
  { src: '/images/salad_bowl.png', alt: 'Healthy Salad' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="min-h-screen py-24 flex items-center bg-[#0b2b16] font-sans relative overflow-hidden text-white">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#BDE346] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#BDE346] font-bold uppercase tracking-widest text-sm mb-4"
            >
              Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight"
            >
              A Glimpse of Our <br/> Finest Moments
            </motion.h2>
          </div>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-8 md:mt-0"
          >
            <a href="#contact" className="text-white border-b-2 border-[#BDE346] pb-1 hover:text-[#BDE346] transition-colors font-bold uppercase tracking-widest text-sm">
              Book Now
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative aspect-[4/5] overflow-hidden group rounded-3xl shadow-2xl border border-white/10"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b16]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
