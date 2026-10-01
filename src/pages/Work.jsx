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

const projects = [
  {
    id: '01',
    title: 'Madhav Real Estate',
    category: 'REAL ESTATE / LEAD GENERATION',
    description: 'A premium lead-generation platform designed for a high-end real estate agency. Built with a focus on capturing enquiries, showcasing property portfolios with high-resolution imagery, and providing a seamless mobile experience.',
    features: ['WEB DESIGN', 'DEVELOPMENT', 'RESPONSIVE', 'REAL ESTATE'],
    year: '2025',
    image: '/madhav.jpg',
    layout: 'full'
  },
  {
    id: '02',
    title: 'StudentNav',
    category: 'EDTECH / PRODUCT',
    description: 'An admissions guidance platform designed to simplify the college application journey. The interface presents complex admission data in an easily digestible format, acting as a digital product rather than a standard website.',
    features: ['PRODUCT', 'WEB DESIGN', 'REACT', 'RESPONSIVE'],
    year: '2025',
    image: '/studentnav.png',
    layout: 'left'
  },
  {
    id: '03',
    title: 'Local Business Demo',
    category: 'LOCAL BUSINESS / WEB DESIGN',
    description: 'A polished website concept demonstrating how local businesses can build trust immediately online. Features straightforward navigation, prominent contact information, and a professional aesthetic.',
    features: ['WEB DESIGN', 'DEVELOPMENT', 'RESPONSIVE'],
    year: '2026',
    image: '/local_business.jpg',
    layout: 'right'
  }
];

export default function Work() {
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

      {/* Header */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">SELECTED PROJECTS / 03</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">Selected Work.</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                Digital experiences designed and built for modern businesses and products.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-32 relative z-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 space-y-32 md:space-y-48">
          
          {/* Project 01: Full Width */}
          <div className="group">
            <FadeIn>
              <div className="mb-8 flex items-baseline justify-between border-b border-gray-200 pb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">PROJECT {projects[0].id} / 03</div>
                <div className="text-[10px] font-mono text-gray-400">{projects[0].year}</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="block relative aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-sm bg-gray-100 border border-gray-200/80 mb-12 cursor-default">
                <motion.img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#111] px-6 py-3 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2 shadow-lg">
                      VIEW PROJECT <ArrowRight size={14} />
                   </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <FadeIn delay={0.2}>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{projects[0].title}</h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">{projects[0].category}</div>
                </FadeIn>
              </div>
              <div className="lg:col-span-7">
                <FadeIn delay={0.3}>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-8 max-w-2xl">{projects[0].description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {projects[0].features.map(feature => (
                      <li key={feature} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-[9px] font-semibold tracking-wider text-gray-600 uppercase">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Project 02: Image Left */}
          <div className="group border-t border-gray-200 pt-32">
            <FadeIn>
              <div className="mb-12 flex items-baseline justify-between border-b border-gray-200 pb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">PROJECT {projects[1].id} / 03</div>
                <div className="text-[10px] font-mono text-gray-400">{projects[1].year}</div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <FadeIn delay={0.1}>
                  <div className="block relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 border border-gray-200/80 cursor-default">
                    <motion.img 
                      src={projects[1].image} 
                      alt={projects[1].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                       <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#111] px-6 py-3 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2 shadow-lg">
                          VIEW PROJECT <ArrowRight size={14} />
                       </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="lg:col-span-5">
                <FadeIn delay={0.2}>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{projects[1].title}</h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">{projects[1].category}</div>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-8">{projects[1].description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {projects[1].features.map(feature => (
                      <li key={feature} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-[9px] font-semibold tracking-wider text-gray-600 uppercase">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Project 03: Image Right */}
          <div className="group border-t border-gray-200 pt-32">
            <FadeIn>
              <div className="mb-12 flex items-baseline justify-between border-b border-gray-200 pb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">PROJECT {projects[2].id} / 03</div>
                <div className="text-[10px] font-mono text-gray-400">{projects[2].year}</div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
               <div className="lg:col-span-5 order-2 lg:order-1">
                <FadeIn delay={0.2}>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{projects[2].title}</h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">{projects[2].category}</div>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-8">{projects[2].description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {projects[2].features.map(feature => (
                      <li key={feature} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-[9px] font-semibold tracking-wider text-gray-600 uppercase">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <FadeIn delay={0.1}>
                  <div className="block relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 border border-gray-200/80 cursor-default">
                    <motion.img 
                      src={projects[2].image} 
                      alt={projects[2].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                       <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#111] px-6 py-3 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2 shadow-lg">
                          VIEW PROJECT <ArrowRight size={14} />
                       </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 relative z-10 bg-[#fafafa] border-t border-gray-200">
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
