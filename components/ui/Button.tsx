import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl focus:ring-brand-primary",
    secondary: "bg-brand-secondary hover:bg-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-brand-secondary",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
    white: "bg-white text-brand-dark hover:bg-gray-100 shadow-lg focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};