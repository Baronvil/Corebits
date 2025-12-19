import React from 'react';
import { Section } from './ui/Section';
import { Cloud, Lock, BarChart, Users, Cpu, Briefcase } from 'lucide-react';

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
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Holistic IT & Business Solutions</h2>
        <p className="text-lg text-slate-600">
          We combine local expertise with global best practices to solve complex challenges for Nigerian organizations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};