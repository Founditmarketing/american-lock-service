import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ServiceAreaMap from './ServiceAreaMap';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactFooter({ hideFooterNavigation = false }: { hideFooterNavigation?: boolean }) {
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
              <input 
                type="text" 
                placeholder="Service Address" 
                className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:border-crimson outline-none transition-all font-bold text-sm"
              />
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
            
            <ServiceAreaMap />
          </motion.div>
        </div>

        {/* SEO Footer */}
        {!hideFooterNavigation && (
          <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="inline-block bg-white rounded-lg px-4 py-2 mb-6">
                <img
                  src="/ALS logo full.png"
                  alt="American Lock Services"
                  className="h-14 w-auto"
                />
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
                <li><Link to="/residential" className="hover:text-crimson transition-colors">Residential Locksmith</Link></li>
                <li><Link to="/commercial" className="hover:text-crimson transition-colors">Commercial Security</Link></li>
                <li><Link to="/contact" className="hover:text-crimson transition-colors">Emergency Triage</Link></li>
                <li><Link to="/commercial" className="hover:text-crimson transition-colors">Safe & Vault Entry</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Credentials</h5>
              <ul className="space-y-3 text-slate-grey text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-crimson" /> TX License #B14093</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-crimson" /> ALOA Member #49302</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-crimson" /> Fully Bonded & Insured</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-crimson" /> Top Rated locally</li>
              </ul>
            </div>
          </div>
          
          <div className="text-[10px] uppercase font-bold text-slate-grey tracking-widest pt-8 border-t border-white/5 text-center">
            <p>© {new Date().getFullYear()} American Lock Service LLC. All Rights Reserved.</p>
          </div>
        </div>
        )}
      </div>
    </footer>
  );
}
