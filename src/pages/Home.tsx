import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, ThumbsUp, Home as HomeIcon, Droplets, Sun, Camera, Zap, Wrench } from 'lucide-react';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = "", prefix = "", decimals = 0 }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentVal = from + (to - from) * easeOutQuart;
        
        if (ref.current) {
          ref.current.textContent = prefix + currentVal.toFixed(decimals) + suffix;
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          if (ref.current) {
            ref.current.textContent = prefix + to.toFixed(decimals) + suffix;
          }
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
};

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const services = [
    { icon: HomeIcon, title: 'Roof Washing', desc: 'Soft wash that removes moss & algae safely.', image: 'https://sterlingroofinggroup.com/wp-content/uploads/2017/08/roof-cleaning-basics.jpg' },
    { icon: Droplets, title: 'House Washing', desc: 'Zero-pressure cleaning for siding & exterior.', image: 'https://giraffetools.com/cdn/shop/articles/52fdcb458097fa9a18ebedea1a936ceb.jpg?v=1740645014' },
    { icon: Sun, title: 'Solar Panel Cleaning', desc: 'Boost performance with streak-free cleaning.', image: 'https://www.cleanertimes.com/wp-content/uploads/2024/07/iStock-1411145391.jpg' },
    { icon: Zap, title: 'Permanent LED Lighting', desc: 'Clean installation + 3-year warranty.', image: 'https://blog.renovationfind.com/wp-content/uploads/2023/12/35cf61_8dc0a8b1cc4f40df9715935eab89ac1c_mv2-1.jpg' }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 bg-primary">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury home exterior" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-16 sm:pt-20 pb-32 sm:pb-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-5xl flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 shadow-2xl border-white/20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 fill-blue-400" />
              Stanislaus County's Premier Service
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black text-white leading-[0.9] tracking-tighter mb-6 sm:mb-8 font-heading">
              ELEVATING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#3b82f6]">EXTERIORS.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl font-light leading-relaxed px-2">
              Roof washing, house washing, and permanent LED lighting — handled by trusted local professionals.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
              <Link to="/contact" className="w-full sm:w-auto bg-blue-600 hover:bg-white hover:text-primary text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest group">
                Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="relative z-20 -mt-12 sm:-mt-20 mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
        <div className="glass-dark rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-10 hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-accent/20 border border-accent/30 shrink-0">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-accent fill-accent" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-heading"><AnimatedCounter to={5.0} decimals={1} suffix="★" /></div>
                <div className="text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:text-xs mt-1">Top Rated</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-10 hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-accent/20 border border-accent/30 shrink-0">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-heading"><AnimatedCounter to={100} suffix="%" /></div>
                <div className="text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:text-xs mt-1">Licensed & Insured</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-10 hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-accent/20 border border-accent/30 shrink-0">
                <ThumbsUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-heading"><AnimatedCounter to={1000} suffix="+" /></div>
                <div className="text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:text-xs mt-1">Jobs Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES BENTO */}
      <section className="py-20 sm:py-32 bg-bg-light relative">
        <div className="absolute top-0 left-0 w-full h-[300px] sm:h-[500px] bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-xs sm:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-3 sm:mb-4">Our Expertise</h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9] font-heading">
                PRECISION CLEANING & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#3b82f6]">PREMIUM UPGRADES</span>
              </h3>
            </div>
            <Link to="/services" className="inline-flex items-center justify-center gap-3 bg-white text-primary border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl text-sm sm:text-base w-full md:w-auto">
              View All Services <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[300px] sm:auto-rows-[400px]">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 ${i === 0 || i === 3 ? 'lg:col-span-2' : 'col-span-1'}`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                
                <div className="relative z-10 h-full p-6 sm:p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-3 font-heading">{service.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md opacity-100 sm:opacity-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs sm:text-sm group-hover:translate-x-2 transition-transform">
                    Explore <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX / BRAND */}
      <section className="py-24 sm:py-40 bg-primary relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 15, ease: "linear" }}
            src="https://ozwashing.com/cdn/shop/files/ld-export-db410564-07242023_28e69e4c-f86e-4778-bfee-133cfbe6d913.png?v=1690334670&width=3840" 
            alt="Water cleaning" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-80"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6 sm:mb-8 font-heading">
              NOT JUST CLEAN.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#3b82f6]">PRIME CONDITION.</span>
            </h2>
            <Link to="/about" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:text-accent transition-colors group mt-4 sm:mt-8">
              <span className="border-b-2 border-accent pb-1">Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-accent-light rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-xs sm:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-3 sm:mb-4">Client Success</h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter font-heading">WHAT THEY SAY</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { text: "Roof looks brand new. Fast and professional. They explained the soft wash process clearly and delivered exactly what they promised.", author: "Sarah M.", loc: "Modesto" },
              { text: "Best window cleaning we've had. The team was respectful of our property and left everything spotless. Highly recommend Prime Property Care!", author: "Mike R.", loc: "Turlock" }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow duration-500"
              >
                <div className="absolute top-8 sm:top-12 right-8 sm:right-12 text-gray-100">
                  <svg width="40" height="40" className="sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596C16.65 13.956 16.77 13.316 16.77 12.676C16.77 11.076 16.21 9.796 15.09 8.836C13.97 7.876 12.53 7.396 10.77 7.396V4.996C13.33 4.996 15.45 5.676 17.13 7.036C18.81 8.396 19.65 10.276 19.65 12.676C19.65 13.636 19.49 14.596 19.17 15.556L16.417 21H14.017ZM5.017 21L7.41 14.596C7.65 13.956 7.77 13.316 7.77 12.676C7.77 11.076 7.21 9.796 6.09 8.836C4.97 7.876 3.53 7.396 1.77 7.396V4.996C4.33 4.996 6.45 5.676 8.13 7.036C9.81 8.396 10.65 10.276 10.65 12.676C10.65 13.636 10.49 14.596 10.17 15.556L7.417 21H5.017Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6 sm:mb-8 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 sm:w-6 sm:h-6 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl font-medium text-primary leading-relaxed mb-8 sm:mb-10 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4 sm:gap-5 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base sm:text-lg font-heading">{review.author}</div>
                    <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider font-semibold">{review.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
