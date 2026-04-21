import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background radial gradient overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-[circle_at_center] from-crimson/10 to-navy/0 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-left py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="thick-rule w-8 h-px bg-crimson" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">Established 2004</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-[5.5rem] font-sans font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Securing<br />
            <span className="text-crimson">Greenville</span><br />
            For 20 Years.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-md text-lg text-slate-300 mb-6 font-medium"
          >
            We are a full-service locksmith company, specializing in both residential and commercial lock services. Certified, Licensed, and Insured.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-2 text-crimson font-bold text-xs uppercase tracking-widest mb-12"
          >
            <MapPin className="w-3 h-3" />
            <span>Serving Greenville, TX & 40-Mile Radius</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              to="/residential" 
              className="americana-border w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-sm text-white hover:bg-slate-grey/10 transition-all duration-300"
            >
              Residential
            </Link>
            <Link 
              to="/commercial" 
              className="americana-border w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-sm text-white hover:bg-slate-grey/10 transition-all duration-300"
            >
              Commercial
            </Link>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8 max-w-2xl">
            <div className="text-left">
              <div className="text-2xl font-black text-white">20+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Years Exp</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white">ALOA</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Certified</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Emergency</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Licensed</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 p-4 md:p-8 flex flex-col gap-6">
           {/* Card A: Residential */}
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: hoveredCard === 'commercial' ? 0.8 : 1, 
                y: 0,
                scale: hoveredCard === 'residential' ? 1.02 : 1,
                backgroundColor: hoveredCard === 'residential' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'
              }}
              onMouseEnter={() => setHoveredCard('residential')}
              onMouseLeave={() => setHoveredCard(null)}
              transition={{ duration: 0.5 }}
              className="glass p-8 americana-border border-white/5 relative z-10"
           >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-sans font-black uppercase text-xl text-white leading-tight pr-4">
                  Residential: Protect Your Home & Family
                </h3>
                <ShieldCheck className="text-[#D2122E] w-7 h-7 shrink-0" />
              </div>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed font-medium">
                Moving in or upgrading? We provide precision re-keying and new lock installations backed by 20 years of local Greenville trust.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:9032177828"
                  className="w-full py-4 inline-flex items-center justify-center border-2 border-[#D2122E] text-[#D2122E] hover:bg-[#D2122E] hover:text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  Get a Free Home Quote
                </a>
                <p className="text-[10px] text-slate-400 italic text-center">Prompt Emergency Service</p>
              </div>
           </motion.div>

           {/* Card B: Commercial */}
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: hoveredCard === 'residential' ? 0.8 : 1, 
                y: 0,
                scale: hoveredCard === 'commercial' ? 1.02 : 1,
                backgroundColor: hoveredCard === 'commercial' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'
              }}
              onMouseEnter={() => setHoveredCard('commercial')}
              onMouseLeave={() => setHoveredCard(null)}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-8 border-slate-600/50 relative z-10"
           >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-sans font-black uppercase text-xl text-white leading-tight pr-4">
                  Commercial: Secure Your Business & Assets
                </h3>
                <Lock className="text-slate-grey w-7 h-7 shrink-0" />
              </div>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed font-medium">
                Professional servicing, repairs, and re-keys of commercial locks for Greenville businesses. Licensed, insured, and ALOA certified.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:9032177828"
                  className="w-full py-4 inline-flex items-center justify-center bg-[#002366] text-white text-xs font-black uppercase tracking-widest rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule Commercial Service
                </a>
                <p className="text-[10px] text-slate-300 font-bold text-center uppercase tracking-widest">License #B14093</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
