import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Home, Mail, MapPin } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;
  const textColorClass = 'text-white';
  const linkColorClass = 'text-gray-100 hover:text-white';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white selection:bg-accent selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent ? 'bg-transparent py-4 sm:py-6' : 'bg-black/95 backdrop-blur-md shadow-sm py-3 sm:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center z-50">
            <img 
              src="https://i.imgur.com/fLETy82.png" 
              alt="Prime Property Care Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                    location.pathname === link.path 
                      ? 'text-accent' 
                      : linkColorClass
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-6 ml-4">
                <a href="tel:209-646-2432" className={`flex items-center gap-2 font-bold transition-colors ${linkColorClass}`}>
                  <Phone className="w-4 h-4" />
                  (209) 646-2432
                </a>
                <Link to="/contact" className="bg-accent hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(46,163,242,0.4)] hover:-translate-y-0.5">
                  Get a Quote
                </Link>
              </div>
            </nav>

            <button className="md:hidden z-50 p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className={`w-7 h-7 ${textColorClass}`} />
              ) : (
                <Menu className={`w-7 h-7 ${textColorClass}`} />
              )}
            </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 h-screen bg-black pt-28 px-6 flex flex-col gap-6 md:hidden overflow-y-auto pb-32"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-3xl font-black tracking-tighter ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a href="tel:209-646-2432" className="flex items-center justify-center gap-2 font-bold text-white py-4 bg-gray-900 rounded-xl text-lg border border-gray-800">
                  <Phone className="w-5 h-5" /> (209) 646-2432
                </a>
                <Link to="/contact" className="bg-accent text-white py-4 rounded-xl font-bold text-center text-lg shadow-lg">
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-[#051020] text-gray-400 py-16 border-t border-gray-800 pb-28 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src="https://i.imgur.com/fLETy82.png" 
                  alt="Prime Property Care Logo" 
                  className="h-24 md:h-32 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </Link>
              <p className="mb-6 max-w-md text-lg leading-relaxed">
                Premium exterior cleaning and home upgrades serving Stanislaus County. Elevating properties with precision and care.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /> (209) 646-2432</li>
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /> primepropertycare209@gmail.com</li>
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /> Stanislaus County, CA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm">
            <div>&copy; {new Date().getFullYear()} Prime Property Care. All rights reserved.</div>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-50 flex gap-3">
        <a href="tel:209-646-2432" className="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" /> Call
        </a>
        <Link to="/contact" className="flex-1 bg-accent text-white py-3.5 rounded-xl font-bold flex items-center justify-center">
          Get Quote
        </Link>
      </div>
    </div>
  );
}
