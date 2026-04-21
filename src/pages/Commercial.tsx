import { motion } from 'motion/react';
import { Building2, Key, DoorOpen } from 'lucide-react';
import ContactFooter from '../components/ContactFooter';

const services = [
  { icon: Building2, title: "Lock Servicing & Repairs", desc: "Keep your business hardware functioning perfectly with professional maintenance and repair services." },
  { icon: Key, title: "Precision Business Re-keying", desc: "Maintain security control after staffing changes with fast, efficient commercial re-keying." },
  { icon: DoorOpen, title: "Commercial Installation", desc: "Professional installation of high-security commercial grade locks and panic hardware." }
];

export default function Commercial() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="bg-navy py-20 border-b-8 border-crimson">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            COMMERCIAL <span className="text-crimson">ARMOR</span>
          </motion.h1>
          <div className="thick-rule mx-auto mt-6" />
          <p className="text-slate-400 mt-8 text-xl max-w-2xl mx-auto font-medium">
            Professional-grade security for Greenville businesses since 2004.
          </p>
        </div>
      </div>

      <section className="py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-navy/5 -skew-x-[-15deg] transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1 relative aspect-square"
            >
              <div className="absolute inset-0 bg-navy/40 rounded-[4rem] -rotate-6 border-2 border-crimson/30" />
              <img 
                src="https://picsum.photos/seed/security-office/800/800" 
                alt="Commercial Security" 
                className="relative z-10 w-full h-full object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-navy text-4xl md:text-5xl font-sans font-black mb-6 uppercase tracking-tighter">
                Secure Your <span className="text-crimson">Enterprise</span>
              </h2>
              <div className="thick-rule mb-8" />
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Protecting Greenville businesses since 2004. We specialize in comprehensive lock servicing, repairs, and high-efficiency re-keying to keep your assets secure and accessible. We understand that business downtime costs money, which is why we provide priority response for all commercial clients.
              </p>
              
              <div className="space-y-6">
                {services.map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-crimson hover:bg-white transition-all shadow-sm">
                    <div className="w-12 h-12 bg-crimson/20 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon className="text-crimson w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-navy font-bold text-xl">{s.title}</h4>
                      <p className="text-slate-600 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full bg-navy rounded-[3rem] p-12 text-center text-white Americana-border border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-full bg-radial-[circle_at_bottom_right] from-crimson/10 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-black uppercase mb-4 relative z-10 italic">Need Commercial Grade Hardware?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              From panic bars to master key systems, we install ironclad solutions that meet Texas commercial codes and insurance requirements.
            </p>
            <a 
              href="tel:9032177828" 
              className="inline-flex items-center gap-4 bg-crimson px-10 py-5 rounded-xl font-black text-xl hover:scale-105 transition-transform"
            >
              REQUEST BULK QUOTE
            </a>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
