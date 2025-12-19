import React from 'react';
import { Section } from './ui/Section';
import { Cloud, Lock, BarChart, Users, Cpu, Briefcase, Zap } from 'lucide-react';

const services = [
  {
    icon: BarChart,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with Power BI and Tableau custom dashboards designed for decision-makers.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure migration and management of cloud infrastructure (AWS, Azure) ensuring high availability and cost optimization.'
  },
  {
    icon: Lock,
    title: 'Cybersecurity Advisory',
    description: 'Protecting critical infrastructure with NDPR-compliant security audits, penetration testing, and risk assessments.'
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description: 'End-to-end digitization of workflows to eliminate paper trails and improve efficiency in government and private agencies.'
  },
  {
    icon: Users,
    title: 'Capacity Building',
    description: 'Corporate training workshops, IT skill acquisition programs, and leadership development seminars.'
  },
  {
    icon: Briefcase,
    title: 'Strategy Consulting',
    description: 'Aligning technology investments with business objectives to drive long-term sustainable growth.'
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center p-2 mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Comprehensive Offerings</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Holistic IT & Business Solutions</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          We combine local expertise with global best practices to solve complex challenges for Nigerian organizations. Our services are tailored to drive efficiency, security, and growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30"
          >
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <service.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-brand-primary/5 dark:bg-brand-primary/10 rounded-3xl p-8 md:p-12 text-center border border-brand-primary/10">
         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Don't see exactly what you need?</h3>
         <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            We offer bespoke consulting packages tailored to specific government mandates or corporate requirements. Let's discuss your unique challenges.
         </p>
      </div>
    </Section>
  );
};