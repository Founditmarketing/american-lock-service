import WhyChooseUs from '../components/WhyChooseUs';
import ContactFooter from '../components/ContactFooter';
import { motion } from 'motion/react';
import { ShieldCheck, Crosshair, Wrench, Clock, Award, KeyRound } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Banner */}
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
      
      {/* Expanded History Section (Replaces AboutSection) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-crimson/10 rounded-2xl transform rotate-3 blur-sm" />
              <div className="relative glass p-4 americana-border border-slate-200">
                <img 
                  src="/about-expanded.jpg" 
                  alt="Thick metal keyring holding dozens of master keys resting on blue architectural commercial building blueprints" 
                  className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border-l-4 border-crimson shadow-xl animate-float">
                  <div className="flex gap-4 items-center">
                    <div className="text-crimson font-black text-5xl">20+</div>
                    <div className="text-navy font-bold text-sm uppercase tracking-widest leading-tight">
                      Years of<br />Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="thick-rule" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">Greenville's Trusted Locksmith</span>
              </div>
              
              <h2 className="text-navy font-sans text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Securing Our <span className="text-crimson">Community</span>
              </h2>
              
              <div className="prose prose-lg text-slate-600 mb-8 space-y-4 font-medium">
                <p>
                  American Lock Service didn't start as a corporate franchise. We started in 2004 with a single service van and a commitment to doing right by our neighbors in Greenville, Texas. 
                </p>
                <p>
                  For over two decades, we have seen the security industry shift dramatically—from simple pin-tumbler deadbolts to high-tech, biometric, and networked master-key systems. Through it all, we have evolved our expertise while maintaining the old-school integrity that our community expects.
                </p>
                <p>
                  Whether we are rescuing a family locked out in the middle of the night, or auditing the security architecture of a multi-story commercial facility, we treat every job with the same priority, discretion, and perfectionism.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-slate-100">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0 group-hover:bg-crimson transition-colors">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <span className="text-navy font-bold text-sm uppercase">Fully Licensed<br/>& Bonded</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0 group-hover:bg-crimson transition-colors">
                    <KeyRound className="text-white w-6 h-6" />
                  </div>
                  <span className="text-navy font-bold text-sm uppercase">ALOA Certified<br/>Member</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <div className="py-20 bg-slate-50 overflow-hidden border-t-2 border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-navy font-sans text-4xl font-black uppercase mb-8">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6 font-medium">
              To provide the highest quality locksmith services with unmatched integrity and speed. We believe that physical security is a fundamental right, and we treat every home and business hardware installation as if it were protecting our own family.
            </p>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-navy text-white font-black text-xs uppercase tracking-widest rounded-lg flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4" /> Excellence
               </div>
               <div className="px-6 py-3 border-2 border-navy text-navy font-black text-xs uppercase tracking-widest rounded-lg flex items-center gap-2">
                 <Crosshair className="w-4 h-4" /> Precision
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 americana-border border-slate-200 relative"
          >
             <div className="absolute top-0 right-8 -translate-y-1/2 bg-crimson w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
               <Wrench className="text-white w-6 h-6" />
             </div>
             <h3 className="text-navy font-black text-2xl uppercase mb-4 mt-2">Community Focused</h3>
             <p className="text-slate-500 text-base italic leading-relaxed">
               "American Lock Service has been a partner in our business growth for over a decade. Their master key systems are flawless, and knowing they are just a phone call away gives me absolute peace of mind."
             </p>
             <p className="font-bold text-navy mt-4 uppercase text-xs tracking-widest">— Greenville Local Business Owner</p>
          </motion.div>
        </div>
      </div>

      <WhyChooseUs />
      <ContactFooter />
    </div>
  );
}
