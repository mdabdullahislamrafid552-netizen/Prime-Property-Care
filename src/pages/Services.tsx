import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'roof',
      title: 'Roof Washing',
      desc: 'Our specialized soft wash system removes unsightly moss, algae, and lichen without the damaging effects of high pressure. Protect your shingles and extend the life of your roof.',
      features: ['Low-pressure soft wash', 'Kills organic growth at the root', 'Safe for all roof types', 'Instant curb appeal boost'],
      image: 'https://sterlingroofinggroup.com/wp-content/uploads/2017/08/roof-cleaning-basics.jpg'
    },
    {
      id: 'house',
      title: 'House Washing',
      desc: 'Restore your home’s exterior to its original glory. We use a zero-pressure cleaning method that safely removes dirt, grime, and mildew from siding, stucco, and brick.',
      features: ['Zero-pressure application', 'Safe for siding & stucco', 'Removes deep-set stains', 'Protects exterior paint'],
      image: 'https://giraffetools.com/cdn/shop/articles/52fdcb458097fa9a18ebedea1a936ceb.jpg?v=1740645014'
    },
    {
      id: 'solar',
      title: 'Solar Panel Cleaning',
      desc: 'Dirty solar panels can lose up to 25% of their efficiency. Our deionized water system leaves panels spotless and streak-free, maximizing your energy output.',
      features: ['Deionized pure water system', 'No harsh chemicals', 'Streak-free finish', 'Maximizes energy efficiency'],
      image: 'https://www.cleanertimes.com/wp-content/uploads/2024/07/iStock-1411145391.jpg'
    },
    {
      id: 'led',
      title: 'Permanent LED Lighting',
      desc: 'Never hang holiday lights again. We install premium, permanent LED track lighting that is invisible by day and stunning by night. Fully customizable via app.',
      features: ['Invisible track design', 'Customizable colors & patterns', 'App-controlled system', '3-year installation warranty'],
      image: 'https://blog.renovationfind.com/wp-content/uploads/2023/12/35cf61_8dc0a8b1cc4f40df9715935eab89ac1c_mv2-1.jpg'
    }
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">OUR SERVICES</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive exterior care designed to protect, preserve, and elevate your property's value.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-black text-primary text-xl">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-4xl font-black text-primary tracking-tighter mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-medium text-primary">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent transition-colors">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
