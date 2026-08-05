import { motion } from 'framer-motion';
import { Utensils, CalendarDays, Award, Clock, Flame, Briefcase, Heart, BookOpen } from 'lucide-react';

const services = [
  {
    title: "Premium Catering",
    description: "Gourmet menus tailored to your taste using the finest, freshest ingredients.",
    icon: <Utensils className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Event Management",
    description: "From concept to flawless execution, our dedicated team ensures perfection.",
    icon: <CalendarDays className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Exquisite Quality",
    description: "Uncompromising commitment to culinary excellence, hygiene, and service.",
    icon: <Award className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Punctual Delivery",
    description: "Your timeline is sacred. We guarantee perfectly timed coordination.",
    icon: <Clock className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Live Cooking",
    description: "Engage your guests with interactive, freshly prepared live food stations.",
    icon: <Flame className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Corporate Events",
    description: "Professional catering solutions for meetings, conferences, and galas.",
    icon: <Briefcase className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Wedding Packages",
    description: "Elegant, unforgettable dining experiences crafted for your special day.",
    icon: <Heart className="w-6 h-6 text-[#0b2b16]" />
  },
  {
    title: "Custom Menus",
    description: "Personalized culinary journeys designed specifically for your unique event.",
    icon: <BookOpen className="w-6 h-6 text-[#0b2b16]" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="about" className="min-h-screen py-24 flex items-center bg-[#f4fcf6] text-[#0b2b16] font-sans relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#BDE346] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-[#558b2f] font-bold tracking-widest text-sm uppercase mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black"
          >
            What We Do
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-black/5 group">
              <div className="w-14 h-14 rounded-full bg-[#BDE346] flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-[#0b2b16]/70 font-medium text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
