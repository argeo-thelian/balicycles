import React from 'react';
import { tornasolGradient, tornasolGradientGreen, tornasoltextGreen} from './Logos';

export const ButtonPrimary = ({ children, onClick, className = "" }) => (
    <button onClick={onClick} className={`${tornasolGradientGreen} hover:opacity-90 text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${className}`}>
        {children}
    </button>
);

export const ButtonOutline = ({ children, onClick }) => (
    <button onClick={onClick} className={`border border-purple-500/50 hover:border-purple-500 text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 relative group overflow-hidden`}>
        <span className={`absolute inset-0 ${tornasolGradientGreen} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
        <span className="relative z-10">{children}</span>
    </button>
);
