import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">THE PRIME DIFFERENCE</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a locally owned and operated exterior cleaning company dedicated to setting the highest standard in property care across Stanislaus County.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5]"
          >
            <img 
              src="https://www.drewspws.com/uplift-data/images/services/house-washing-service.jpg" 
              alt="Our Story - House Washing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-primary tracking-tighter mb-6">OUR STORY</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Prime Property Care was founded on a simple principle: deliver exceptional results with unwavering reliability. We noticed a gap in the local market for exterior cleaning services that truly understood the science behind the clean.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Instead of blasting every surface with high pressure, we invested in specialized soft washing equipment, deionized water systems, and advanced training. Today, we are proud to be the trusted choice for hundreds of homeowners in our community.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-primary text-xl mb-2">Fully Licensed & Insured</h3>
              <p className="text-gray-600">Your property is protected. We carry comprehensive liability insurance and workers' compensation for complete peace of mind.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Precision', desc: 'We don\'t cut corners. Every job is executed with meticulous attention to detail.' },
            { icon: ShieldCheck, title: 'Integrity', desc: 'Honest pricing, transparent communication, and a 100% satisfaction guarantee.' },
            { icon: Users, title: 'Community', desc: 'As a local business, we treat our clients like neighbors, because they are.' }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary p-10 rounded-3xl text-white"
            >
              <value.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
