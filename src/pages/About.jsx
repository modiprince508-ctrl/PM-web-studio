import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <div className="bg-[#faf9f6] text-[#111] overflow-hidden min-h-screen">
      
      {/* Background System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
        <div className="hidden md:flex absolute inset-0 justify-between px-6 md:px-12 w-full max-w-7xl mx-auto opacity-[0.03]">
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">ABOUT / PM WEB STUDIO</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">Digital experiences,<br className="hidden md:block"/> built with purpose.</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                PM Web Studio designs and builds modern websites and digital experiences for businesses and products.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Studio Introduction */}
      <section className="py-24 md:py-32 relative z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-6">The Studio</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8">A focused approach to digital design.</h3>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed space-y-6">
                  <p>
                    PM Web Studio is an independent digital studio founded by Prince Modi. We combine design, frontend development, interaction, and technical execution to build websites that work.
                  </p>
                  <p>
                    Our focus is on creating refined, high-performance platforms. We believe that a strong digital presence requires both strong visual identity and solid technical foundations. No bloated templates, just precise execution.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32 relative z-10 border-b border-gray-200 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-16">Our Approach</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {[
              { num: '01', title: 'Purposeful Design', desc: 'Every section has a reason to exist.' },
              { num: '02', title: 'Technical Precision', desc: 'Clean implementation, responsive behavior and thoughtful details.' },
              { num: '03', title: 'Interactive Experiences', desc: 'Motion and interaction are used to improve the experience, not distract from it.' },
              { num: '04', title: 'Built for Business', desc: 'Websites should communicate clearly and make it easy for people to take action.' }
            ].map((item, index) => (
              <FadeIn key={item.num} delay={index * 0.1}>
                <div className="relative pt-6 border-t border-gray-200">
                  <div className="text-[10px] font-mono text-gray-400 mb-4">{item.num}</div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Design Philosophy */}
      <section className="py-24 md:py-32 relative z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Design Philosophy */}
            <div>
              <FadeIn>
                 <div className="mb-12">
                   <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-8">Design Philosophy</h2>
                   <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-6">
                     Less decoration.<br/>More intention.
                   </h3>
                   <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                     We avoid unnecessary noise. Every layout, interaction, and technical choice is designed to guide the user and communicate value.
                   </p>
                 </div>
              </FadeIn>
            </div>

            {/* Capabilities */}
            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-8">Capabilities</h2>
                <div className="flex flex-col gap-0 border-t border-gray-100">
                  {['WEB DESIGN', 'FRONTEND DEVELOPMENT', 'RESPONSIVE DESIGN', 'INTERACTION & MOTION', 'BUSINESS WEBSITES', 'LANDING PAGES', 'DIGITAL PRODUCTS'].map((cap, i) => (
                    <div key={i} className="flex items-center gap-6 py-4 border-b border-gray-100 group transition-colors hover:bg-gray-50 px-4 -mx-4 rounded-lg">
                      <div className="text-[10px] font-mono text-gray-300">0{i+1}</div>
                      <div className="text-sm md:text-base font-semibold tracking-widest text-[#111] uppercase">{cap}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Work Connection */}
      <section className="py-24 md:py-32 relative z-10 bg-[#fafafa] border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Don't just take our word for it.
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg mx-auto mb-10">
              The best way to understand our approach is to see the digital experiences we've built.
            </p>
            <Link to="/work" className="group inline-flex items-center gap-2 text-sm font-semibold hover:text-gray-500 transition-colors">
              See selected work 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 relative z-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] text-gray-500 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">Have a project<br className="hidden md:block"/> in mind?</h2>
            <Link to="/contact" className="group inline-flex justify-center items-center gap-3 bg-[#111] text-white px-10 py-5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
