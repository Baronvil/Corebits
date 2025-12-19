import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, CheckCircle, Send, Loader2, FileText, Clock, Building2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { InquiryData } from '../lib/storage';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<InquiryData | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    type: 'Performance Management (PMS)',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await api.submitContactForm(formData);
      
      if (response.success && response.data) {
        setTicket(response.data);
        setSubmitted(true);
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Ready to elevate your <span className="text-brand-primary underline decoration-emerald-200 underline-offset-8">performance?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              Whether you're a government agency looking to modernize or a private firm scaling fast, our expert consultants are ready to help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-brand-primary transition-colors group">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 text-brand-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Lagos Office</h4>
              <p className="text-slate-500 text-sm">14B Victoria Arobieke Street, Lekki Phase 1, Lagos.</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-brand-primary transition-colors group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Abuja Office</h4>
              <p className="text-slate-500 text-sm">Suite 304, Banex Plaza, Wuse 2, Abuja, FCT.</p>
            </div>
          </div>

          <div className="space-y-4">
            <a href="mailto:consult@corebit.ng" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-3">
                <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </div>
              <span className="font-medium">consult@corebit.ng</span>
            </a>
            <a href="tel:+2348149297101" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-3">
                <Phone className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </div>
              <span className="font-medium">+234 814 929 7101</span>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          {submitted && ticket ? (
            <div className="py-8 animate-in fade-in zoom-in duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inquiry Received</h3>
                <p className="text-slate-500 text-sm">Our backend has successfully processed your request.</p>
              </div>

              {/* Digital Ticket */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary"></div>
                <div className="flex justify-between items-start mb-4 border-b border-slate-200 dark:border-slate-700 pb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ticket ID</span>
                    <div className="text-xl font-mono font-bold text-slate-900 dark:text-white">#{ticket.id}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    ticket.backendAnalysis?.priority === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {ticket.backendAnalysis?.priority} Priority
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="w-4 h-4 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 block">Assigned Department</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{ticket.backendAnalysis?.department}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 block">Estimated Response</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{ticket.backendAnalysis?.estimatedResponse}</span>
                    </div>
                  </div>

                  <div className="flex items-start bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <FileText className="w-4 h-4 text-slate-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 block">Internal Summary</span>
                      <span className="text-sm text-slate-600 dark:text-slate-300 italic">"{ticket.backendAnalysis?.summary}"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" onClick={() => {
                  setSubmitted(false);
                  setTicket(null);
                  setFormData({ name: '', organization: '', email: '', type: 'Performance Management (PMS)', message: '' });
                }}>
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500" 
                    placeholder="e.g. Adewale Bakare" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Organization</label>
                  <input 
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500" 
                    placeholder="Company Name" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500" 
                  placeholder="you@company.com.ng" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Inquiry Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 dark:text-white appearance-none"
                >
                  <option>Performance Management (PMS)</option>
                  <option>IT Strategy & Infrastructure</option>
                  <option>Digital Transformation</option>
                  <option>Data Analytics & BI</option>
                  <option>Corporate Training</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-slate-50 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 h-32" 
                  placeholder="Tell us about your project or performance challenges..."
                ></textarea>
              </div>
              
              <Button type="submit" disabled={loading} className="w-full h-14 text-lg relative overflow-hidden">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Processing with Gemini AI...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Initiate Consultation <Send className="ml-2 w-5 h-5" />
                  </span>
                )}
              </Button>
              <p className="text-center text-xs text-slate-400">
                By clicking "Initiate Consultation", you agree to our privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};