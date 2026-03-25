import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const cities = [
    'Modesto', 'Turlock', 'Stockton', 'Tracy', 'Manteca', 
    'Livermore', 'Patterson', 'Atwater', 'Ceres', 'Oakdale'
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">WHERE WE SERVE</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Proudly providing top-tier exterior cleaning and home upgrades across Stanislaus County and surrounding areas.
          </p>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-[500px] mb-20 bg-gray-100">
          {/* Placeholder for an actual map or stylized image */}
          <img 
            src="https://picsum.photos/seed/californiamap/1920/1080" 
            alt="Service Area Map" 
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-12">
            <h2 className="text-4xl font-black text-white tracking-tighter">STANISLAUS COUNTY & BEYOND</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cities.map((city, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
            >
              <span className="font-bold text-lg">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
