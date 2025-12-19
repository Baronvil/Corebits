import React from 'react';
import { BarChart3, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-primary p-1.5 rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Corebit<span className="text-brand-primary">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering African enterprises through technology and data-driven performance strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">PMS Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for the latest industry insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-brand-primary outline-none text-white text-sm"
              />
              <button className="bg-brand-primary text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors text-sm font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Corebit Consulting Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};