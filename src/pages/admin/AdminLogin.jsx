import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
    } catch (err) {
      setError(err.message || 'Invalid login credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-8 left-8">
        <Link to="/" className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors">
          ← Back to Site
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">STUDIO CRM</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Access</h1>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 focus:outline-none focus:border-black transition-colors rounded-none font-light"
                placeholder="admin@pmwebstudio.com"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 focus:outline-none focus:border-black transition-colors rounded-none font-light"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50/80 border border-red-100 rounded-lg text-red-600 text-sm flex items-start gap-3 mt-4">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{error}</p>
              </div>
            )}

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`group inline-flex justify-center items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 w-full
                  ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-900 shadow-md hover:shadow-lg'}`}
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : 'Sign In'}
                {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
