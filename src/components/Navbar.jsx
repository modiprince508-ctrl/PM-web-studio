import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PMLogo } from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? 'bg-[#faf9f6]/90 backdrop-blur-md border-b border-gray-200/50 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <PMLogo className="group-hover:opacity-80 transition-opacity duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path ? 'text-black' : 'text-gray-500 group-hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-[#111] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.1)] hover:shadow-lg hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-900 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-[#faf9f6] z-40 flex flex-col pt-24 pb-10 px-6 md:hidden"
            >
              <div className="flex flex-col h-full justify-between">
                <ul className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-bold tracking-tight ${
                          location.pathname === link.path ? 'text-black' : 'text-gray-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-auto pt-8 border-t border-gray-200"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center w-full bg-black text-white px-6 py-4 rounded-2xl text-lg font-medium active:scale-[0.98] transition-transform"
                  >
                    Start a Project
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
