import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}