import React from 'react';
import { Section } from './ui/Section';

const testimonials = [
  {
    quote: "Corebit's PMS implementation transformed how we track civil servant performance. Efficiency improved by 40% in the first year.",
    author: "Dr. Adebayo Ogunlesi",
    role: "Director of Planning",
    company: "Federal Ministry of Transport"
  },
  {
    quote: "Their IT advisory team helped us navigate a complex cloud migration with zero downtime. Truly world-class service right here in Lagos.",
    author: "Chidinma Okeke",
    role: "CTO",
    company: "FinTech Synergy Ltd"
  },
  {
    quote: "The capacity building workshops were a game-changer for our mid-level management. Practical, engaging, and highly relevant.",
    author: "Musa Ibrahim",
    role: "HR Head",
    company: "Northern Agro-Allied Inc."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" dark className="relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Leaders</h2>
          <p className="text-slate-400">Hear from the partners we've helped succeed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
              <div className="text-4xl text-brand-primary absolute top-4 left-4 font-serif opacity-30">"</div>
              <p className="text-slate-300 mb-6 relative z-10 italic">
                {t.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="mt-20 pt-10 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest">Our Ecosystem Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos as per standard practice when real logos aren't available, or generic names */}
             <span className="text-xl font-bold text-white">Microsoft</span>
             <span className="text-xl font-bold text-white">Oracle</span>
             <span className="text-xl font-bold text-white">SAP</span>
             <span className="text-xl font-bold text-white">Cisco</span>
             <span className="text-xl font-bold text-white">AWS Partner</span>
          </div>
        </div>
      </div>
    </Section>
  );
};