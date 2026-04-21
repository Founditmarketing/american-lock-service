import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactFooter from '../components/ContactFooter';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="pt-20 bg-white">
      <div className="bg-navy py-20 border-b-8 border-crimson">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            OUR <span className="text-crimson">STORY</span>
          </motion.h1>
          <div className="thick-rule mt-6" />
          <p className="text-slate-400 mt-8 text-xl max-w-2xl font-medium">
            Dedicated to the safety and security of Greenville, Texas since 2004.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      <div className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-navy font-sans text-4xl font-black uppercase mb-8">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              To provide the highest quality locksmith services with unmatched integrity and speed. We believe that security is a fundamental right, and we treat every home and business as if it were our own.
            </p>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-navy text-white font-black text-xs uppercase tracking-widest rounded-lg">Excellence</div>
               <div className="px-6 py-3 border-2 border-navy text-navy font-black text-xs uppercase tracking-widest rounded-lg">Integrity</div>
            </div>
          </div>
          <div className="glass p-8 americana-border border-slate-200">
             <h3 className="text-navy font-black text-2xl uppercase mb-4">Community Focused</h3>
             <p className="text-slate-500 text-sm italic">
               "American Lock Service has been a partner in our business growth for over a decade. Their master key systems are the best in the county." — Local Business Owner
             </p>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ContactFooter />
    </div>
  );
}
