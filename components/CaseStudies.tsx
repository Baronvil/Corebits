import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const cases = [
  {
    category: 'Government',
    title: 'State Civil Service Digitalization',
    result: 'Reduced administrative processing time by 65% across 24 ministries.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    tags: ['PMS Implementation', 'Cloud Migration']
  },
  {
    category: 'Finance',
    title: 'FinTech Performance Scaling',
    result: 'Optimized developer KPI tracking, leading to 40% faster product releases.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop',
    tags: ['Data Analytics', 'IT Strategy']
  },
  {
    category: 'Logistics',
    title: 'Nationwide Fleet Performance System',
    result: 'Real-time tracking of 500+ assets with predictive maintenance alerts.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Business Intelligence', 'IoT Integration']
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <Section id="cases" className="bg-white dark:bg-slate-950">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Transforming Nigerian Organizations Through Excellence
          </h2>
        </div>
        <div className="flex-shrink-0">
          <a href="#contact" className="text-brand-primary font-bold flex items-center hover:translate-x-1 transition-transform">
            View all success stories <ArrowUpRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-64 mb-6 overflow-hidden rounded-2xl shadow-md transition-shadow group-hover:shadow-xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-brand-dark dark:text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-primary transition-colors">
              {item.title}
            </h3>
            
            <div className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                "{item.result}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};