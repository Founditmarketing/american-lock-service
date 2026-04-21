import { motion } from 'motion/react';
import { Home, Building2, Key, ShieldAlert, DoorOpen, HardDriveDownload } from 'lucide-react';

const resServices = [
  { icon: Key, title: "Precision Re-keying", desc: "Change your locks without changing the hardware. Ideal for new homeowners and moving in." },
  { icon: DoorOpen, title: "New Lock Installation", desc: "Upgrade your entry points with professional-grade hardware and expert alignment." },
  { icon: ShieldAlert, title: "Home Security Audit", desc: "Expert assessment of your home's weak points with professional reinforcement recommendations." }
];

const comServices = [
  { icon: Building2, title: "Lock Servicing & Repairs", desc: "Keep your business hardware functioning perfectly with professional maintenance and repair services." },
  { icon: Key, title: "Precision Business Re-keying", desc: "Maintain security control after staffing changes with fast, efficient commercial re-keying." },
  { icon: DoorOpen, title: "Commercial Installation", desc: "Professional installation of high-security commercial grade locks and panic hardware." }
];

export default function ServiceSections() {
  return (
    <div className="bg-navy overflow-hidden">
      {/* Residential Section */}
      <section id="residential" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-crimson/5 skew-x-[-15deg] transform origin-top" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-4xl md:text-6xl font-sans font-black mb-6 uppercase tracking-tighter">
                RESIDENTIAL <span className="text-crimson">PROTECTION</span>
              </h2>
              <div className="thick-rule mb-8" />
              <p className="text-slate-grey text-lg mb-8 leading-relaxed">
                Your home is your sanctuary. We specialize in precision residential re-keying and high-security lock installations designed to protect your family and modern Texas living.
              </p>
              
              <div className="space-y-6">
                {resServices.map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-crimson hover:bg-white/10 transition-all cursor-default">
                    <div className="w-12 h-12 bg-crimson/20 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon className="text-crimson w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{s.title}</h4>
                      <p className="text-slate-grey text-sm">{s.desc}</p>
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
        </div>
      </section>

      {/* Commercial Section */}
      <section id="commercial" className="relative py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <h2 className="text-white text-4xl md:text-6xl font-sans font-black mb-6 uppercase tracking-tighter">
                COMMERCIAL <span className="text-crimson">SECURITY</span>
              </h2>
              <div className="thick-rule mb-8" />
              <p className="text-slate-grey text-lg mb-8 leading-relaxed">
                Protecting Greenville businesses since 2004. We specialize in comprehensive lock servicing, repairs, and high-efficiency re-keying to keep your assets secure and accessible.
              </p>
              
              <div className="space-y-6">
                {comServices.map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 glass-dark rounded-2xl border-l-4 border-crimson hover:bg-white/5 transition-all cursor-default">
                    <div className="w-12 h-12 bg-crimson/20 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon className="text-crimson w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{s.title}</h4>
                      <p className="text-slate-grey text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
