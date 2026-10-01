import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';

export default function AdminLayout() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      
      if (!session && location.pathname !== '/admin/login') {
        navigate('/admin/login', { replace: true });
      } else if (session && location.pathname === '/admin/login') {
        navigate('/admin', { replace: true });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      
      if (!session && location.pathname !== '/admin/login') {
        navigate('/admin/login', { replace: true });
      } else if (session && location.pathname === '/admin/login') {
        navigate('/admin', { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="animate-spin text-gray-400" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#111] font-sans selection:bg-[#111] selection:text-white flex flex-col">
      <Outlet context={{ session }} />
    </div>
  );
}
