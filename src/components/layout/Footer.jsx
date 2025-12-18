import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { LogoBase, SharedGradientDefinitions, tornasoltextGreen } from '../common/Logos';

export const Footer = () => (
  <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h4 className="flex items-center text-2xl font-bold tracking-[0.2em] text-neutral-900 mb-2">
          {/* El logo ya se adapta al color del texto (neutral-900) */}
          <LogoBase
            viewBox="0 0 100 100"
            href="./assets/icons/bali-icons-html.svg#baliCircle"
            className="w-20 h-20 group-hover:scale-110 transition-transform duration-300"

          />
          <span className={tornasoltextGreen}>CYCLES</span>
        </h4>
        <p className="text-gray-500 text-xs uppercase tracking-widest">© 2025 High Performance Cycles.</p>
      </div>
      <div className="flex gap-6">
        <Instagram className={`w-8 h-8 text-purple-600 hover:stroke-[url(#logoTornasolSharedGreen)] cursor-pointer transition-colors`} />
        <Mail className={`w-8 h-8 text-purple-600 hover:stroke-[url(#logoTornasolSharedGreen)] cursor-pointer transition-colors`} />
      </div>
    </div>
  </footer>
);
