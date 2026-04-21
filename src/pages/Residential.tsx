import { motion } from 'motion/react';
import { Key, ShieldAlert, DoorOpen } from 'lucide-react';
import ContactFooter from '../components/ContactFooter';

const services = [
  { icon: Key, title: "Precision Re-keying", desc: "Change your locks without changing the hardware. Ideal for new homeowners and moving in." },
  { icon: DoorOpen, title: "New Lock Installation", desc: "Upgrade your entry points with professional-grade hardware and expert alignment." },
  { icon: ShieldAlert, title: "Home Security Audit", desc: "Expert assessment of your home's weak points with professional reinforcement recommendations." }
];

export default function Residential() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="bg-navy py-20 border-b-8 border-crimson">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            RESIDENTIAL <span className="text-crimson">SERVICES</span>
          </motion.h1>
          <div className="thick-rule mx-auto mt-6" />
          <p className="text-slate-400 mt-8 text-xl max-w-2xl mx-auto font-medium">
            Locking down the home front in Greenville since 2004.
          </p>
        </div>
      </div>

      <section className="py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-crimson/5 skew-x-[-15deg] transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-navy text-4xl md:text-5xl font-sans font-black mb-6 uppercase tracking-tighter">
                Rock-Solid <span className="text-crimson">Home Security</span>
              </h2>
              <div className="thick-rule mb-8" />
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Your home is your sanctuary. We specialize in precision residential re-keying and high-security lock installations designed to protect your family and modern Texas living. Whether you just closed on a new house or need to upgrade aging hardware, we bring 20 years of local trust to every doorway.
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

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-crimson/20 rounded-[4rem] rotate-6" />
              <img 
                src="https://picsum.photos/seed/locksmith-home/800/800" 
                alt="Residential Security" 
                className="relative z-10 w-full h-full object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="w-full bg-navy rounded-[3rem] p-12 text-center text-white Americana-border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-radial-[circle_at_center] from-crimson/10 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-black uppercase mb-4 relative z-10 italic">Moving into a new home?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              You never know who still has a key. Re-keying is the cost-effective way to ensure you are the only one with access.
            </p>
            <a 
              href="tel:9032177828" 
              className="inline-flex items-center gap-4 bg-crimson px-10 py-5 rounded-xl font-black text-xl hover:scale-105 transition-transform"
            >
              SCHEDULE A RE-KEY
            </a>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
