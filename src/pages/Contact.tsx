import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">LET'S TALK</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to elevate your property? Request a free, no-obligation estimate today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">Contact Info</h3>
              <div className="space-y-8">
                <a href="tel:209-646-2432" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</div>
                    <div className="text-2xl font-bold text-primary">(209) 646-2432</div>
                  </div>
                </a>
                
                <a href="mailto:primepropertycare209@gmail.com" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-lg font-bold text-primary break-all">primepropertycare209@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Hours</div>
                    <div className="text-lg font-bold text-primary">Mon-Sat: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-gray-50 p-10 md:p-16 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent py-3 outline-none transition-colors text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent py-3 outline-none transition-colors text-lg" placeholder="(209) 555-0123" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Zip Code</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent py-3 outline-none transition-colors text-lg" placeholder="95350" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Service Needed</label>
                  <select className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent py-3 outline-none transition-colors text-lg appearance-none">
                    <option value="">Select a service...</option>
                    <option value="roof">Roof Washing</option>
                    <option value="house">House Washing</option>
                    <option value="gutters">Gutter Cleaning</option>
                    <option value="solar">Solar Panel Cleaning</option>
                    <option value="windows">Window Cleaning</option>
                    <option value="led">Permanent LED Lighting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent py-3 outline-none transition-colors text-lg resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-bold text-lg transition-colors w-full flex items-center justify-center gap-3 uppercase tracking-wide">
                Send Request <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
