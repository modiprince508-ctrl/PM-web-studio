import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ShowcaseWrapper = ({ id, children }) => (
  <div className="w-full h-full relative p-4 md:p-8 overflow-hidden bg-[#fafafa] rounded-3xl border border-gray-200/60 group min-h-[400px] md:min-h-[500px]">
    <div className="absolute top-6 left-6 text-[9px] font-mono tracking-widest text-gray-400 z-10">PM / {id}</div>
    <div className="absolute bottom-6 right-6 text-[9px] font-mono tracking-widest text-gray-400 z-10">DESIGN COLLAGE</div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {children}
    </div>
  </div>
);

const LandingPagePreview = () => {
  return (
    <ShowcaseWrapper id="01">
      {/* Mobile view (Background left) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute w-[100px] md:w-[120px] aspect-[9/19] bg-white rounded-[1.5rem] border-[4px] border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden left-2 md:left-8 top-4 md:top-12 z-10 pointer-events-auto hidden sm:block"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="w-1/3 h-1 bg-gray-200 mx-auto mt-2 rounded-full"></div>
        <div className="p-2 mt-2">
          <div className="w-full h-12 bg-gray-50 rounded mb-2"></div>
          <div className="w-3/4 h-1.5 bg-gray-200 rounded-full mb-1"></div>
          <div className="w-1/2 h-1.5 bg-gray-200 rounded-full mb-3"></div>
          <div className="w-full h-6 bg-[#111] rounded-sm"></div>
        </div>
      </motion.div>

      {/* Main Hero Screen (Center) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-[240px] md:w-[320px] bg-white border border-gray-200/80 rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden pointer-events-auto"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="h-6 border-b border-gray-100 flex items-center px-3 gap-1.5 bg-gray-50/80">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
        <div className="p-6 md:p-8 flex flex-col items-center">
          <div className="px-2 py-0.5 bg-gray-100 text-[6px] md:text-[7px] font-bold tracking-widest text-gray-500 rounded-full mb-4">NEW RELEASE</div>
          <div className="text-2xl md:text-3xl font-bold text-[#111] mb-2 text-center leading-tight tracking-tight">Convert Better.</div>
          <div className="text-[9px] md:text-[10px] text-gray-400 text-center mb-6 max-w-[80%] leading-relaxed">High-performance landing pages built to drive focused results and elevate your brand.</div>
          <div className="px-5 py-2 bg-[#111] text-white text-[8px] md:text-[9px] font-bold rounded hover:bg-gray-800 cursor-pointer transition-colors shadow-lg">START BUILDING</div>
        </div>
      </motion.div>

      {/* Features Screen (Top Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute w-[160px] md:w-[200px] bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden right-2 md:right-8 top-8 md:top-16 z-15 pointer-events-auto hidden md:block"
        whileHover={{ y: -5, zIndex: 30 }}
      >
        <div className="p-4 border-b border-gray-50 bg-gray-50/50">
          <div className="text-[8px] font-bold text-gray-800 tracking-wider">CORE FEATURES</div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-2 bg-white">
          <div className="h-12 bg-gray-50 border border-gray-100 rounded-sm p-2 flex flex-col justify-end">
            <div className="w-4 h-4 bg-gray-200 rounded-sm mb-auto"></div>
            <div className="w-full h-1 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-12 bg-gray-50 border border-gray-100 rounded-sm p-2 flex flex-col justify-end">
            <div className="w-4 h-4 bg-gray-200 rounded-sm mb-auto"></div>
            <div className="w-full h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Dark CTA Screen (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute w-[180px] md:w-[240px] bg-[#111] border border-gray-800 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden right-4 md:right-12 bottom-6 md:bottom-12 z-25 pointer-events-auto"
        whileHover={{ scale: 1.03 }}
      >
        <div className="p-5 flex flex-col items-center">
          <div className="text-white text-[12px] md:text-[14px] font-bold mb-4 text-center leading-snug">Ready to accelerate<br/>your growth?</div>
          <div className="w-full py-2.5 bg-white text-[#111] text-[8px] font-bold rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">CONTACT SALES</div>
        </div>
      </motion.div>
    </ShowcaseWrapper>
  );
};

const BusinessWebsitePreview = () => {
  return (
    <ShowcaseWrapper id="02">
      {/* Background large image-heavy screen (Architecture/About) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute w-[240px] md:w-[320px] bg-white border border-gray-200 rounded-sm shadow-lg overflow-hidden left-2 md:left-8 top-4 md:top-8 z-10 pointer-events-auto hidden md:block"
        whileHover={{ y: -5, zIndex: 30 }}
      >
        <div className="w-full h-[140px] bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-200/60 mix-blend-multiply"></div>
          <div className="absolute bottom-4 left-4 text-[16px] font-serif font-medium text-gray-800">Our Studio.</div>
        </div>
        <div className="p-4 bg-white">
          <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mb-3"></div>
          <div className="w-full h-1 bg-gray-200 rounded-full mb-1.5"></div>
          <div className="w-3/4 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </motion.div>

      {/* Main Home Screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-20 w-[240px] md:w-[300px] bg-white border border-gray-200/80 rounded shadow-[0_30px_70px_rgba(0,0,0,0.12)] overflow-hidden pointer-events-auto mt-8 md:mt-0"
        whileHover={{ scale: 1.02 }}
      >
        {/* Nav */}
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="text-[10px] font-bold tracking-widest text-[#111]">ARCHETYPE</div>
          <div className="flex gap-2">
            <div className="w-3 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-0.5 bg-gray-300"></div>
          </div>
        </div>
        {/* Hero */}
        <div className="p-6 md:p-8 bg-gray-50 flex flex-col justify-end h-[160px] md:h-[200px] relative overflow-hidden border-b border-gray-100">
           <div className="absolute right-0 top-0 w-40 h-40 bg-gray-200/50 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="text-2xl md:text-3xl font-serif font-medium text-[#111] leading-tight mb-3 relative z-10">Building spaces<br/>for tomorrow.</div>
           <div className="w-20 h-6 border border-[#111] text-[#111] flex items-center justify-center text-[6px] font-bold tracking-widest relative z-10 cursor-pointer hover:bg-[#111] hover:text-white transition-colors">EXPLORE</div>
        </div>
        <div className="p-3 md:p-4 grid grid-cols-2 gap-2 bg-white">
           <div className="text-[7px] text-gray-500 uppercase tracking-widest">Selected Works</div>
           <div className="text-[7px] text-gray-500 uppercase tracking-widest text-right">2026 / 2027</div>
        </div>
      </motion.div>

      {/* Services Screen */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute w-[180px] md:w-[220px] bg-[#111] border border-gray-800 rounded-sm shadow-xl overflow-hidden right-4 md:right-10 bottom-8 md:bottom-12 z-25 pointer-events-auto hidden sm:block"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="p-5 text-white">
          <div className="text-[12px] font-serif font-medium mb-4">Expertise</div>
          <div className="flex flex-col gap-3">
            {['Architecture', 'Interior Design', 'Urban Planning'].map((srv, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-1.5 cursor-pointer hover:text-gray-300 transition-colors">
                <span className="text-[8px] tracking-wider">{srv}</span>
                <span className="text-[7px] text-gray-500 font-mono">0{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact floating card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute w-[140px] bg-white border border-gray-100 p-4 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] left-6 md:left-20 bottom-6 md:bottom-16 z-30 pointer-events-auto hidden lg:block"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-[8px] font-bold text-gray-400 tracking-widest mb-2">LET'S TALK</div>
        <div className="text-[11px] font-serif font-medium text-[#111] mb-3">hello@archetype.com</div>
        <div className="w-full h-px bg-gray-100 mb-2"></div>
        <div className="text-[7px] text-gray-400 uppercase tracking-widest">San Francisco, CA</div>
      </motion.div>
    </ShowcaseWrapper>
  );
};

const PremiumDigitalPreview = () => {
  return (
    <ShowcaseWrapper id="03">
      {/* Dark mode / technical screen (Top Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute w-[220px] md:w-[300px] aspect-video bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden left-2 md:left-10 top-6 md:top-12 z-10 pointer-events-auto hidden md:flex flex-col"
        whileHover={{ y: -5, scale: 1.02, zIndex: 30 }}
      >
        <div className="p-3 border-b border-gray-800 flex justify-between items-center bg-black/50">
          <div className="text-[8px] text-gray-400 font-mono tracking-widest">APP_STATE // ACTIVE</div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
        </div>
        <div className="flex-1 p-4 flex gap-3">
           <div className="w-1/3 h-full bg-gray-900 rounded border border-gray-800 flex flex-col gap-1.5 p-2.5">
             <div className="w-full h-1 bg-gray-700 rounded-full"></div>
             <div className="w-3/4 h-1 bg-gray-800 rounded-full"></div>
             <div className="w-full h-1 bg-gray-800 rounded-full mt-auto"></div>
           </div>
           <div className="flex-1 h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] border border-blue-500/10 rounded flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')]"></div>
             <div className="w-10 h-10 rounded-full border border-blue-500/40 flex items-center justify-center relative z-10">
               <div className="w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
             </div>
           </div>
        </div>
      </motion.div>

      {/* Main Glassmorphic Dashboard (Center) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-20 w-[260px] md:w-[380px] bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_40px_80px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden pointer-events-auto flex flex-col md:flex-row mt-12 md:mt-0"
        whileHover={{ scale: 1.02 }}
      >
        {/* Sidebar */}
        <div className="md:w-16 bg-gray-50/80 border-r border-gray-100 flex md:flex-col items-center justify-between p-4 shrink-0 hidden sm:flex">
          <div className="w-6 h-6 bg-[#111] rounded-lg shadow-md"></div>
          <div className="flex flex-col gap-4">
             <div className="w-5 h-5 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
             </div>
             <div className="w-5 h-5 rounded-md bg-transparent border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"></div>
             <div className="w-5 h-5 rounded-md bg-transparent border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"></div>
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 mt-auto border border-gray-200"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-5 md:p-6 relative bg-white/50">
          <div className="text-[14px] md:text-[18px] font-bold text-[#111] tracking-tight mb-5">System Overview</div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">TOTAL USERS</div>
              <div className="text-xl font-mono text-[#111]">24,592</div>
            </div>
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold relative z-10">REVENUE</div>
              <div className="text-xl font-mono text-green-600 relative z-10">$12.4k</div>
            </div>
          </div>
          <div className="w-full h-20 bg-white rounded-lg border border-gray-100 flex items-end p-2 gap-1.5 overflow-hidden shadow-sm">
            {[4,7,3,8,5,9,6,10,7,5].map((h, i) => (
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: `${h}0%` }}
                transition={{ delay: 0.3 + (i * 0.05), duration: 0.5 }}
                key={i} 
                className="flex-1 bg-blue-50 border-t-2 border-blue-500 rounded-t-sm hover:bg-blue-100 transition-colors cursor-pointer"
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Card (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute w-[160px] md:w-[200px] bg-white border border-gray-100 p-3 md:p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] right-2 md:right-8 bottom-4 md:bottom-12 z-30 pointer-events-auto flex items-center gap-3"
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
          <div className="w-3 h-3 rounded-sm bg-purple-500 rotate-45"></div>
        </div>
        <div>
          <div className="text-[10px] md:text-[11px] font-bold text-gray-800">Action Required</div>
          <div className="text-[7px] md:text-[8px] text-gray-400 mt-1 leading-tight">Review new design system changes.</div>
        </div>
      </motion.div>
    </ShowcaseWrapper>
  );
};

const WebsiteMaintenancePreview = () => {
  return (
    <ShowcaseWrapper id="04">
      {/* Background Code / Log Screen */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute w-[220px] md:w-[320px] h-[180px] bg-gray-900 border border-gray-800 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden left-4 md:left-10 top-4 md:top-8 z-10 pointer-events-auto p-4 hidden md:block"
        whileHover={{ scale: 1.02, zIndex: 30 }}
      >
        <div className="flex gap-1.5 mb-3">
           <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
           <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
           <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[8px] md:text-[9px] font-mono text-green-400 mb-2">&gt; Starting system diagnostics...</div>
        <div className="text-[8px] md:text-[9px] font-mono text-gray-400 mb-1">&gt; Checking SSL certificates: OK</div>
        <div className="text-[8px] md:text-[9px] font-mono text-gray-400 mb-1">&gt; Verifying database integrity: OK</div>
        <div className="text-[8px] md:text-[9px] font-mono text-gray-400 mb-1">&gt; Scanning for vulnerabilities...</div>
        <div className="text-[8px] md:text-[9px] font-mono text-blue-400 mt-2">&gt; 0 threats found. System secure.</div>
      </motion.div>

      {/* Main Status Dashboard */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-20 w-[260px] md:w-[340px] bg-white border border-gray-200/80 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden pointer-events-auto mt-12 md:mt-16"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="p-4 md:p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/80">
          <div className="flex items-center gap-2.5">
            <Shield size={16} className="text-[#111]" />
            <span className="text-[11px] font-bold tracking-widest text-[#111]">MAINTENANCE HUB</span>
          </div>
          <div className="px-2.5 py-1 bg-green-50 text-green-700 border border-green-200/50 text-[7px] font-bold tracking-widest rounded-full flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            ALL SYSTEMS NOMINAL
          </div>
        </div>
        <div className="p-4 md:p-5 bg-white">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-3 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
               <div className="text-[8px] text-gray-400 uppercase font-bold tracking-widest mb-1.5">UPTIME</div>
               <div className="text-xl font-mono text-[#111]">99.99%</div>
            </div>
            <div className="p-3 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
               <div className="text-[8px] text-gray-400 uppercase font-bold tracking-widest mb-1.5">LATENCY</div>
               <div className="text-xl font-mono text-[#111]">42ms</div>
            </div>
          </div>
          <div className="text-[9px] font-bold text-gray-800 tracking-wider mb-3">RECENT UPDATES</div>
          <div className="space-y-2.5">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold text-gray-800">System Package Update</div>
                  <div className="text-[7px] text-gray-500 mt-0.5">Core dependencies successfully updated.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Alert Screen */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute w-[180px] md:w-[220px] bg-white border border-gray-200 p-3 md:p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] right-2 md:right-10 bottom-6 md:bottom-12 z-30 pointer-events-auto flex items-start gap-3 hidden sm:flex"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5 border border-green-100">
          <CheckCircle2 size={12} className="text-green-600" />
        </div>
        <div>
          <div className="text-[10px] md:text-[11px] font-bold text-[#111]">Weekly Backup Complete</div>
          <div className="text-[8px] text-gray-500 mt-1 leading-relaxed">Snapshot successfully stored in encrypted cold storage.</div>
        </div>
      </motion.div>
    </ShowcaseWrapper>
  );
};

const services = [
  {
    id: '01',
    title: 'Landing Pages',
    desc: 'Focused, high-converting pages designed around one clear business goal. Ideal for marketing campaigns, product launches, or specific service offerings.',
    preview: <LandingPagePreview />,
    features: ['High-conversion design', 'Fast load times', 'Clear call-to-actions', 'Mobile optimized'],
  },
  {
    id: '02',
    title: 'Business Websites',
    desc: 'Professional multi-page websites that establish credibility and make it easy for customers to contact you. The foundation of your online presence.',
    preview: <BusinessWebsitePreview />,
    features: ['Custom design', 'Service pages', 'About & Contact', 'SEO optimized'],
  },
  {
    id: '03',
    title: 'Premium Digital Experiences',
    desc: 'Custom-designed experiences with advanced interactions, animations and polished UI. For businesses that want to stand out from the competition.',
    preview: <PremiumDigitalPreview />,
    features: ['Framer Motion animations', 'Advanced UI components', 'Custom illustrations', 'Premium typography'],
  },
  {
    id: '04',
    title: 'Website Maintenance',
    desc: 'Updates, improvements and ongoing technical support to keep your website fast, secure, and up-to-date.',
    preview: <WebsiteMaintenancePreview />,
    features: ['Content updates', 'Performance monitoring', 'Security checks', 'Priority support'],
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">What we do.</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                We build websites that look great and perform even better. Every project is designed to solve specific business problems and drive measurable results.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={0}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">
                  <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="text-[#111] font-mono text-sm tracking-[0.2em] mb-8 flex items-center gap-4">
                      <span className="w-8 h-px bg-gray-300 group-hover:bg-black transition-colors duration-500"></span>
                      {service.id}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">{service.title}</h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-4 mb-12">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-gray-800">
                          <CheckCircle2 size={18} className="text-gray-300 group-hover:text-black transition-colors duration-500" />
                          <span className="font-medium tracking-wide">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all border-b-2 border-transparent hover:border-black pb-1">
                      Request this service <ArrowRight size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                    </Link>
                  </div>

                  <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                    <div className="aspect-[5/4] md:aspect-[4/3] flex items-center justify-center relative w-full h-full">
                         {service.preview}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">Ready to start?</h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you with a proposal and timeline.
            </p>
            <Link to="/contact" className="group inline-flex justify-center items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
