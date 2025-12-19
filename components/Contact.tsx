import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Let's Transform Your Business</h2>
          <p className="text-slate-600 mb-8">
            Ready to optimize your performance? Reach out to our team in Lagos or Abuja for a consultation tailored to your specific needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-brand-primary mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Head Office (Lagos)</h4>
                <p className="text-slate-600 text-sm">14B Victoria Arobieke Street, Lekki Phase 1, Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-brand-primary mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Abuja Office</h4>
                <p className="text-slate-600 text-sm">Suite 304, Banex Plaza, Wuse 2, Abuja, FCT.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-brand-primary mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Email Us</h4>
                <p className="text-slate-600 text-sm">consult@corebit.ng</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-brand-primary mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Call Us</h4>
                <p className="text-slate-600 text-sm">+234 (0) 800 COREBIT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Adewale" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Johnson" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white">
                <option>Performance Management System</option>
                <option>IT Consulting & Strategy</option>
                <option>Data Analytics</option>
                <option>Corporate Training</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all h-32" placeholder="Tell us about your project requirements..."></textarea>
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};