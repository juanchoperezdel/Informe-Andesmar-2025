
import React from 'react';

export const Section: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className }) => (
  <section id={id} className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center ${className || ''}`}>
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </section>
);

export const Heading: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light }) => (
  <div className="mb-12">
    <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter ${light ? 'text-white' : 'text-gray-900'}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-xl font-medium ${light ? 'text-blue-100' : 'text-andesmar-blue'}`}>{subtitle}</p>}
  </div>
);

export const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="flex flex-col mb-16 relative">
    <span className="text-8xl md:text-[12rem] font-black text-gray-100 absolute -top-16 -left-8 -z-10 leading-none">
      {number}
    </span>
    <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-gray-900 mt-4">
      {title}
    </h3>
    <div className="h-6 w-full max-w-lg bg-andesmar-blue mt-8"></div>
  </div>
);
