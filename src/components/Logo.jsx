import React from 'react';

export const PMLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <PMLogoCompact />
    <div className="flex flex-col">
      <span className="text-lg font-bold tracking-tight leading-none text-current">PM WEB STUDIO</span>
      <span className="text-[9px] tracking-[0.2em] font-semibold uppercase mt-0.5 text-current opacity-60">Digital Agency</span>
    </div>
  </div>
);

export const PMLogoCompact = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`}>
    {/* P */}
    <path d="M4 4H14C18.4183 4 22 7.58172 22 12C22 16.4183 18.4183 20 14 20H10V28H4V4Z" fill="currentColor"/>
    {/* M */}
    <path d="M16 28L16 16H20L24 22L28 16H32V28H28V21.5L24 27.5L20 21.5V28H16Z" fill="currentColor" className="text-gray-400"/>
  </svg>
);
