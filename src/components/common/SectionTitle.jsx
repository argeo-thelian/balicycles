import React from 'react';
import { tornasolGradient, tornasolGradientGreen, tornasolText, tornasoltextGreen } from './Logos';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h3 className={`${tornasoltextGreen} tracking-[0.3em] text-sm font-bold uppercase mb-3`}>{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-light text-neutral-900 uppercase">{title}</h2>
    <div className={`w-24 h-1 ${tornasolGradientGreen} mx-auto mt-6`}></div>
  </div>
);