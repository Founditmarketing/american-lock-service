import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full bg-navy border-b-2 border-slate-700 px-4 md:px-8 py-3 flex items-center justify-between"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="bg-white rounded-lg px-3 py-1">
            <img
              src="/ALS logo full.png"
              alt="American Lock Services"
              className="h-12 w-auto"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-white">
          <Link to="/" className={`${isActive('/') ? 'text-crimson border-b-2 border-crimson pb-1' : 'hover:text-crimson transition-colors'} outline-none`}>Home</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-crimson border-b-2 border-crimson pb-1' : 'hover:text-crimson transition-colors'} outline-none`}>About Us</Link>
          <Link to="/residential" className={`${isActive('/residential') ? 'text-crimson border-b-2 border-crimson pb-1' : 'hover:text-crimson transition-colors'} outline-none`}>Residential</Link>
          <Link to="/commercial" className={`${isActive('/commercial') ? 'text-crimson border-b-2 border-crimson pb-1' : 'hover:text-crimson transition-colors'} outline-none`}>Commercial</Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'text-crimson border-b-2 border-crimson pb-1' : 'hover:text-crimson transition-colors'} outline-none`}>Contact Us</Link>
          
          <div className="flex flex-col items-end mr-2 ml-4">
            <span className="text-[9px] text-slate-400 lowercase leading-none">Priority Dispatch</span>
            <a href="tel:9032177828" className="text-lg font-black text-white leading-tight hover:text-crimson transition-colors outline-none">903.217.7828</a>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-crimson text-white px-6 py-3 rounded-lg text-sm font-black hover:shadow-crimson-glow hover:-translate-y-0.5 transition-all duration-300 uppercase outline-none"
          >
            FREE QUOTE
          </Link>
        </nav>

        {/* Mobile Call Button */}
        <a 
          href="tel:9032177828" 
          className="lg:hidden bg-crimson text-white p-3 rounded-lg hover:shadow-crimson-glow transition-all"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}
