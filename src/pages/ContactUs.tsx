import ContactFooter from '../components/ContactFooter';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="bg-navy py-20 border-b-8 border-crimson">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-sans text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            CONTACT <span className="text-crimson">US</span>
          </motion.h1>
          <div className="thick-rule mx-auto mt-6" />
          <p className="text-slate-400 mt-8 text-xl max-w-2xl mx-auto font-medium">
            24/7 Priority Emergency Service across Greenville and Hunt County.
          </p>
        </div>
      </div>

      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12 mb-24">
          <div className="bg-white p-10 americana-border border-navy/10 shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mb-6 shadow-lg shadow-crimson/20">
              <Phone className="text-white w-8 h-8" />
            </div>
            <h3 className="text-navy font-black text-2xl uppercase mb-2">Phone</h3>
            <p className="text-slate-500 font-bold mb-4">Immediate Triage</p>
            <a href="tel:9032177828" className="text-crimson text-3xl font-black hover:scale-105 transition-transform">903.217.7828</a>
          </div>

          <div className="bg-white p-10 americana-border border-navy/10 shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6 shadow-lg shadow-navy/20">
              <Mail className="text-white w-8 h-8" />
            </div>
            <h3 className="text-navy font-black text-2xl uppercase mb-2">Email</h3>
            <p className="text-slate-500 font-bold mb-4">Non-Emergency Quotes</p>
            <a href="mailto:service@americanlock.com" className="text-navy text-xl font-bold break-all hover:text-crimson transition-colors">service@americanlock.com</a>
          </div>

          <div className="bg-white p-10 americana-border border-navy/10 shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-slate-grey rounded-full flex items-center justify-center mb-6 shadow-lg shadow-slate-grey/20">
              <MapPin className="text-white w-8 h-8" />
            </div>
            <h3 className="text-navy font-black text-2xl uppercase mb-2">Location</h3>
            <p className="text-slate-500 font-bold mb-4">Visit Our Shop</p>
            <p className="text-navy font-black leading-tight text-lg">4109 CR 2206,<br />Greenville, TX 75402</p>
          </div>
        </div>
      </div>

      {/* Reusing ContactFooter's form and map logic by just rendering it */}
      <ContactFooter />
    </div>
  );
}
