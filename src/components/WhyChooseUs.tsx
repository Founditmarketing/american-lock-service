import { motion } from 'motion/react';
import { Zap, Heart, ShieldCheck, DollarSign } from 'lucide-react';

const reasons = [
  { 
    icon: Zap, 
    title: "Maximum Efficiency", 
    desc: "We respect your time. Our local Greenville dispatch ensures we get to you faster than anyone else.",
    detail: "Average response time under 30 minutes for city-wide emergencies. Equipped with state-of-the-art mobile units."
  },
  { 
    icon: Heart, 
    title: "Polite & Courteous", 
    desc: "A locksmith is someone you invite into your space. We prioritize professional behavior and absolute ethics.",
    detail: "Every technician undergoes background checks and professional training. Proudly family-owned and values-driven."
  },
  { 
    icon: ShieldCheck, 
    title: "Expert Affordability", 
    desc: "Fair, transparent pricing for all services. No hidden fees or bait-and-switch tactics.",
    detail: "Upfront estimates provided before work begins. Competitive rates for high-security commercial installations."
  },
  { 
    icon: DollarSign, 
    title: "Licensed & Insured", 
    desc: "Fully registered LLC with $1M+ liability coverage for your absolute protection.",
    detail: "Texas Locksmith License #B14093. Continuous training ensures we stay ahead of modern lock-picking techniques."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-navy font-sans text-5xl font-black mb-4 uppercase tracking-tighter">
            THE <span className="text-crimson text-6xl">GUARDIAN</span> STANDARD
          </h2>
          <div className="thick-rule mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-8 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-crimson/20 hover:bg-white hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-crimson/10 transition-colors">
                <r.icon className="w-8 h-8 text-navy group-hover:text-crimson transition-colors" />
              </div>
              <h4 className="text-navy font-display text-2xl font-bold mb-4">{r.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{r.desc}</p>
              
              <div className="pt-6 border-t border-navy/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-navy/70 italic font-medium">{r.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
