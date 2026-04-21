import { motion } from 'motion/react';
import { ShieldCheck, Users, Building, History } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="thick-rule" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">Since 2004</span>
            </div>
            <h2 className="text-navy font-sans text-5xl font-black mb-8 uppercase tracking-tighter leading-none">
              The <span className="text-crimson">Guardians</span> of <br />Greenville Security
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              For over two decades, American Lock Service has been the bedrock of security in Greenville, TX. We’re a local locksmith based in Greenville, serving a 40-mile radius with patriotic service and professional excellence, providing rock-solid protection for families and businesses alike.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-crimson/10 rounded-lg flex items-center justify-center">
                    <History className="text-crimson w-5 h-5" />
                  </div>
                  <h4 className="text-navy font-bold uppercase tracking-tight text-sm">20 Years Local</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Deeply rooted in the Greenville community with over 20,000 successful service calls.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="text-navy w-5 h-5" />
                  </div>
                  <h4 className="text-navy font-bold uppercase tracking-tight text-sm">Triple Certified</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Licensed, Insured, and ALOA certified. We maintain the highest ethical standards.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-crimson/5 rounded-full blur-3xl" />
            <div className="glass p-4 americana-border border-slate-200">
              <img 
                src="/about.jpg" 
                alt="Professional locksmith tools on a workbench" 
                className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border-2 border-crimson/20 shadow-2xl flex items-center gap-4">
               <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center">
                  <Building className="text-white w-6 h-6" />
               </div>
               <div>
                  <p className="text-navy font-black text-xs uppercase tracking-widest">Main Office</p>
                  <p className="text-crimson font-bold">Greenville, TX</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
