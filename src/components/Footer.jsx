import { Link } from 'react-router-dom';
import { PMLogo } from './Logo';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 border-t border-gray-800 relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          <div className="md:col-span-5 lg:col-span-6">
            <Link to="/" className="mb-8 inline-block text-white">
              <PMLogo className="text-white hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed">
              Modern websites for businesses that want to move forward. Built with design. Driven by technology.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Services</Link></li>
              <li><Link to="/work" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Work</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li><span className="text-gray-500 text-sm font-medium">LinkedIn (Coming Soon)</span></li>
              <li><span className="text-gray-500 text-sm font-medium">Twitter / X (Coming Soon)</span></li>
              <li><span className="text-gray-500 text-sm font-medium">GitHub (Coming Soon)</span></li>
            </ul>
            <div className="mt-8">
              <a href="mailto:hello@pmwebstudio.com" className="inline-flex items-center gap-2 text-white border-b border-gray-700 hover:border-white pb-1 transition-colors text-sm font-medium">
                hello@pmwebstudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
            &copy; {currentYear} PM Web Studio.
          </p>
          <div className="flex gap-6 text-xs text-gray-600 font-medium tracking-wide uppercase">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
