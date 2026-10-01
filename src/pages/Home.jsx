import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
    category: 'Real Estate Website',
    description: 'Modern lead-generation website designed for a local real-estate business, with a premium visual identity and enquiry-focused user experience.',
    features: ['Premium responsive UI', 'Lead enquiry flow', 'Mobile optimization'],
    image: '/madhav.jpg',
  },
  {
    id: '02',
    title: 'StudentNav',
    category: 'EdTech / Startup',
    description: 'An admissions guidance platform concept designed to simplify the college admission journey for students.',
    features: ['Modern product UI', 'Guidance-focused UX', 'Responsive design'],
    image: '/studentnav.jpg',
  },
  {
    id: '03',
    title: 'Local Business Demo',
    category: 'Business Website',
    description: 'A modern website concept demonstrating how a local business can build a stronger online presence.',
    features: ['Service showcase', 'Contact forms', 'SEO-friendly structure'],
    image: '/local_business.jpg',
  }
];

const services = [
  { id: '01', title: 'Landing Pages', desc: 'Focused, high-converting pages designed around one clear business goal.' },
  { id: '02', title: 'Business Websites', desc: 'Professional multi-page websites that establish credibility and make it easy for customers to contact you.' },
  { id: '03', title: 'Premium Digital Experiences', desc: 'Custom-designed experiences with advanced interactions, animations and polished UI.' },
  { id: '04', title: 'Website Maintenance', desc: 'Updates, improvements and ongoing technical support.' },
];

export default function Home() {
  return (
    <div className="bg-[#faf9f6] text-[#111] overflow-hidden">
      
      {/* Background System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
        {/* Subtle vertical guides */}
        <div className="hidden md:flex absolute inset-0 justify-between px-6 md:px-12 w-full max-w-7xl mx-auto opacity-[0.03]">
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
          <div className="h-full w-px bg-black"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative">
            
            {/* Left Column */}
            <div className="lg:col-span-6 z-20 xl:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#111]"></div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">Premium Digital Studio</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 max-w-[90%]"
              >
                Websites that move businesses forward.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl text-gray-500 leading-relaxed font-light mb-10 max-w-lg"
              >
                PM Web Studio creates modern, high-quality websites for businesses ready to build a stronger digital presence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="group flex justify-center items-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  Start a Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/work" className="group flex justify-center items-center gap-2 bg-transparent text-[#111] border border-gray-300 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:border-[#111] hover:bg-gray-50 shadow-sm hover:shadow hover:-translate-y-1">
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Premium Design Collage */}
            <div className="lg:col-span-6 relative h-[500px] hidden lg:block w-full max-w-lg ml-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
              >
                <div className="absolute top-10 right-10 text-[9px] font-mono text-gray-300 tracking-widest">X: 1440 Y: 900</div>
                <div className="absolute bottom-10 left-0 text-[9px] font-mono text-gray-300 tracking-widest rotate-[-90deg]">DESIGN COLLAGE</div>

                {/* Base Architecture Screen */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute w-[320px] h-[240px] bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden left-[10%] top-[15%] z-10"
                >
                  <div className="w-full h-[140px] bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200/50 mix-blend-multiply"></div>
                    <div className="absolute bottom-4 left-4 text-[16px] font-serif font-medium text-gray-800">Visual Identity.</div>
                  </div>
                  <div className="p-4">
                    <div className="w-1/3 h-1.5 bg-gray-300 rounded-full mb-3"></div>
                    <div className="w-full h-1 bg-gray-200 rounded-full mb-1.5"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Main Minimal Screen */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative z-20 w-[300px] bg-white border border-gray-200/80 rounded shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden mt-10"
                >
                  <div className="h-6 border-b border-gray-100 flex items-center px-4 justify-between bg-gray-50/80">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                  <div className="p-8 bg-gray-50 flex flex-col items-center h-[200px] justify-center relative overflow-hidden border-b border-gray-100">
                    <div className="text-2xl font-bold text-[#111] leading-tight mb-3 text-center tracking-tight">Clarity &<br/>Purpose.</div>
                    <div className="px-4 py-1.5 bg-[#111] text-white text-[8px] font-bold rounded-sm tracking-widest shadow-lg">EXPLORE</div>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-2 bg-white">
                    <div className="h-10 bg-gray-50 border border-gray-100 rounded-sm"></div>
                    <div className="h-10 bg-gray-50 border border-gray-100 rounded-sm"></div>
                  </div>
                </motion.div>

                {/* Overlay Floating Element */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute w-[200px] bg-[#111] border border-gray-800 rounded-sm shadow-xl overflow-hidden right-[5%] bottom-[15%] z-30"
                >
                  <div className="p-5 text-white">
                    <div className="text-[10px] font-bold tracking-widest mb-4 text-gray-400">SERVICES</div>
                    <div className="space-y-3">
                      {['Design', 'Development', 'Strategy'].map((srv, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-1.5">
                          <span className="text-[11px] font-serif">{srv}</span>
                          <span className="text-[7px] text-gray-500 font-mono">0{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Mobile Preview Overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute w-[100px] h-[200px] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden left-[5%] bottom-[5%] z-40 hidden sm:block"
                >
                   <div className="w-1/3 h-1 bg-gray-200 mx-auto mt-3 rounded-full mb-3"></div>
                   <div className="px-3 space-y-2">
                     <div className="w-full h-16 bg-gray-50 rounded mb-1"></div>
                     <div className="w-3/4 h-1.5 bg-gray-200 rounded-full"></div>
                     <div className="w-1/2 h-1.5 bg-gray-200 rounded-full"></div>
                   </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 relative z-10 border-b border-gray-200 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Built for businesses that take their online presence seriously.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                Your website is often the first interaction someone has with your business. We design that interaction to build trust, communicate value, and make taking the next step effortless.
              </p>
            </FadeIn>
            <div className="flex flex-col justify-center items-start md:items-end gap-6 md:pl-12 border-l-0 md:border-l border-gray-200/60">
              <FadeIn delay={0.1}>
                 <div className="text-[10px] tracking-[0.2em] font-bold text-gray-400 mb-2 uppercase">Core Principles</div>
              </FadeIn>
              {['Premium Quality', 'Purposeful Design', 'Technical Excellence'].map((word, i) => (
                <FadeIn key={word} delay={0.2 + (i * 0.1)}>
                  <div className="text-2xl md:text-3xl font-bold text-[#111] tracking-tight">
                    {word}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 relative z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">What we build.</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gray-500 transition-colors w-fit group">
                View All Services 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Link to={`/services?s=${service.id}`} className="group block">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-xs font-mono text-gray-400 shrink-0">{service.id}</span>
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-gray-600 transition-colors">{service.title}</h4>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed pl-8 max-w-sm">
                    {service.desc}
                  </p>
                  <div className="pl-8 mt-6">
                    <div className="w-10 h-px bg-gray-300 group-hover:w-16 group-hover:bg-[#111] transition-all duration-300"></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 relative z-10 border-b border-gray-200 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-24">
            <FadeIn>
              <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400">Selected Work</h2>
            </FadeIn>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-7 order-1 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <FadeIn delay={0.1}>
                    <Link to="/work" className="block relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 border border-gray-200/50">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#111] px-6 py-3 rounded-full text-xs font-bold tracking-wider flex items-center gap-2">
                          VIEW PROJECT
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                </div>
                
                <div className={`lg:col-span-5 order-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <FadeIn delay={0.2}>
                    <div className="flex flex-col">
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">{project.id} — {project.category}</div>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h3>
                      <p className="text-gray-500 text-lg mb-8 leading-relaxed font-light">{project.description}</p>
                      
                      <div className="mb-10">
                        <ul className="flex flex-wrap gap-2">
                          {project.features.map(feature => (
                            <li key={feature} className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-semibold text-gray-600 tracking-wider">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 relative z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm tracking-[0.2em] font-semibold uppercase text-gray-400 mb-16">The Process</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { step: '01', name: 'DISCOVER', desc: 'We start by understanding your business, goals, and technical requirements.' },
              { step: '02', name: 'DESIGN', desc: 'Crafting the visual direction, wireframes, and premium UI concepts.' },
              { step: '03', name: 'BUILD', desc: 'Developing the website using fast, modern, and reliable technology.' },
              { step: '04', name: 'LAUNCH', desc: 'Thorough testing, deployment, and handing over the keys.' }
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="relative pt-6 border-t border-gray-200">
                  <div className="text-[10px] font-mono text-gray-400 mb-4">{s.step}</div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight">{s.name}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 relative z-10 bg-[#fafafa]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] text-gray-500 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8">
              Have a project<br className="hidden md:block"/> in mind?
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-12">
              Tell us what you're working on. Let's build a premium digital experience that moves your business forward.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#111] text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
