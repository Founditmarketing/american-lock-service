import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock, Send, ShieldCheck } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-navy pt-24 pb-12 overflow-hidden border-t-8 border-crimson">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-sans text-4xl font-black mb-4 uppercase">
              RAPID <span className="text-crimson">RESPONSE</span> FORM
            </h3>
            <div className="thick-rule mb-8" />
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:border-crimson outline-none transition-all font-bold text-sm"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:border-crimson outline-none transition-all font-bold text-sm"
                />
              </div>
              <select 
                className="w-full bg-navy border-2 border-white/10 rounded-xl p-4 text-white focus:border-crimson outline-none transition-all font-bold text-sm appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select Service Type</option>
                <option value="residential">Residential Service</option>
                <option value="commercial">Commercial Security</option>
                <option value="emergency">Emergency Lockout</option>
                <option value="master-key">Master Key System</option>
                <option value="audit">Home Security Audit</option>
                <option value="rekey">Re-keying Service</option>
                <option value="other">Other Inquiry</option>
              </select>
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:border-crimson outline-none transition-all font-bold resize-none text-sm"
              ></textarea>
              <button className="w-full bg-crimson text-white font-sans font-black py-5 rounded-xl hover:shadow-crimson-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-xl uppercase tracking-tighter">
                <Send className="w-6 h-6" />
                HELP NOW
              </button>
            </form>
          </motion.div>

          {/* Location & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border-l-4 border-crimson">
                <MapPin className="text-crimson w-10 h-10 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Visit Our Shop</h4>
                <p className="text-slate-grey">4109 CR 2206,<br />Greenville, TX 75402</p>
              </div>
              <div className="glass p-8 rounded-3xl border-l-4 border-crimson">
                <Clock className="text-crimson w-10 h-10 mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Service Hours</h4>
                <p className="text-slate-grey">Mon - Fri: 8:00 AM - 5:00 PM<br />Emergency: 24/7 Priority</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-white/10 rounded-3xl border-2 border-white/5 overflow-hidden group">
              <div className="absolute inset-0 bg-navy opacity-40 mix-blend-multiply" />
              <img 
                src="https://picsum.photos/seed/greenville-map/800/400?blur=2" 
                alt="Map to American Lock Service" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-crimson p-4 rounded-full animate-bounce shadow-[0_0_30px_rgba(215,25,32,0.6)]">
                  <MapPin className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO Footer */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="text-crimson w-8 h-8" />
                <h2 className="font-display text-2xl font-bold text-white tracking-tighter uppercase">
                  American Lock <span className="text-crimson">Service</span>
                </h2>
              </div>
              <p className="text-slate-grey text-sm mb-6 max-w-md">
                We’re a local locksmith based in Greenville, TX, serving a 40-mile radius since 2004. Specializing in residential lock security, commercial master key systems, and priority emergency response.
              </p>
              <div className="flex gap-4">
                <Phone className="text-crimson w-5 h-5" />
                <a href="tel:9032177828" className="text-white font-bold hover:text-crimson transition-colors">903.217.7828</a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h5>
              <ul className="space-y-3 text-slate-grey text-sm">
                <li><a href="#" className="hover:text-crimson transition-colors">Residential Locksmith</a></li>
                <li><a href="#" className="hover:text-crimson transition-colors">Commercial Security</a></li>
                <li><a href="#" className="hover:text-crimson transition-colors">Emergency Triage</a></li>
                <li><a href="#" className="hover:text-crimson transition-colors">Safe & Vault Entry</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Coverage</h5>
              <ul className="space-y-3 text-slate-grey text-sm">
                <li><a href="#" className="underline-offset-4 hover:underline">Locksmith Greenville TX</a></li>
                <li><a href="#" className="underline-offset-4 hover:underline">Commercial Safety Texas</a></li>
                <li><a href="#" className="underline-offset-4 hover:underline">Licensed Locksmith 75402</a></li>
                <li><a href="#" className="underline-offset-4 hover:underline">Fast Reponse Locks 75401</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold text-slate-grey tracking-widest pt-8 border-t border-white/5">
            <p>© 2026 American Lock Service LLC. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span>TX LICENSE #B14093</span>
              <span>ALOA MEMBER #49302</span>
              <span>Nights & Weekend Priority Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
