import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Search, Filter, X, ExternalLink, Calendar, Mail, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';

const STATUS_OPTIONS = ['New', 'Contacted', 'Follow-up', 'Converted', 'Closed', 'Not Interested'];

const StatusBadge = ({ status }) => {
  const styles = {
    'New': 'bg-blue-50 text-blue-600 border-blue-100',
    'Contacted': 'bg-amber-50 text-amber-600 border-amber-100',
    'Follow-up': 'bg-purple-50 text-purple-600 border-purple-100',
    'Converted': 'bg-green-50 text-green-600 border-green-100',
    'Closed': 'bg-gray-100 text-gray-600 border-gray-200',
    'Not Interested': 'bg-red-50 text-red-600 border-red-100'
  };
  const style = styles[status] || styles['New'];
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${style}`}>
      {status}
    </span>
  );
};

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('enquiries')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      
      setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
      }
    } catch (err) {
      alert('Failed to update status: ' + err.message);
    } finally {
      setUpdating(false);
    }
  };

  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch = 
      (enq.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (enq.business_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (enq.email?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (enq.whatsapp || '').includes(searchQuery);
      
    const matchesStatus = statusFilter === 'All' || enq.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 md:px-10 py-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#111]"></div>
          <h1 className="text-xl font-bold tracking-tight">Studio CRM</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors flex items-center gap-2"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Left List View */}
        <div className={`flex-1 flex flex-col bg-[#faf9f6] ${selectedEnquiry ? 'hidden md:flex md:max-w-md lg:max-w-lg border-r border-gray-200' : ''}`}>
          <div className="p-6 md:p-8 shrink-0">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Enquiries ({filteredEnquiries.length})</h2>
            
            <div className="space-y-4">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search name, email, whatsapp..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button 
                  onClick={() => setStatusFilter('All')}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${statusFilter === 'All' ? 'bg-[#111] text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'}`}
                >
                  All
                </button>
                {STATUS_OPTIONS.map(status => (
                  <button 
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${statusFilter === status ? 'bg-[#111] text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8">
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-gray-300" size={24} />
              </div>
            ) : error ? (
              <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex gap-3">
                <AlertCircle size={16} className="shrink-0" /> {error}
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="text-center py-16 text-gray-400 font-light">
                No enquiries found.
              </div>
            ) : (
              <div className="space-y-3">
                {filteredEnquiries.map((enq) => (
                  <button
                    key={enq.id}
                    onClick={() => setSelectedEnquiry(enq)}
                    className={`w-full text-left p-5 rounded-xl border transition-all ${selectedEnquiry?.id === enq.id ? 'bg-white border-black shadow-md' : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{enq.name}</h3>
                      <StatusBadge status={enq.status} />
                    </div>
                    {enq.business_name && <p className="text-sm font-medium text-gray-700 mb-3">{enq.business_name}</p>}
                    <p className="text-sm text-gray-500 mb-1 line-clamp-1">{enq.service}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-4">
                      {new Date(enq.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Detail View */}
        {selectedEnquiry ? (
          <div className="flex-1 bg-white flex flex-col h-full overflow-hidden absolute inset-0 md:relative z-10">
            <header className="border-b border-gray-100 p-6 flex justify-between items-center shrink-0">
              <h2 className="text-lg font-bold tracking-tight">Enquiry Details</h2>
              <button 
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-50 md:hidden"
              >
                <X size={20} />
              </button>
            </header>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-12">
              <div className="max-w-2xl mx-auto space-y-12 pb-20">
                
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl font-black tracking-tighter">{selectedEnquiry.name}</h1>
                    <select
                      value={selectedEnquiry.status}
                      onChange={(e) => handleUpdateStatus(selectedEnquiry.id, e.target.value)}
                      disabled={updating}
                      className="ml-auto text-sm font-semibold border-b-2 border-gray-200 pb-1 focus:outline-none focus:border-black cursor-pointer appearance-none pr-4"
                    >
                      {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  {selectedEnquiry.business_name && (
                    <p className="text-xl text-gray-500 font-light">{selectedEnquiry.business_name}</p>
                  )}
                  <div className="flex items-center gap-2 mt-4 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                    <Calendar size={14} />
                    {new Date(selectedEnquiry.created_at).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/${selectedEnquiry.whatsapp.replace(/\D/g, '')}`} 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                  <a 
                    href={`mailto:${selectedEnquiry.email}`}
                    className="inline-flex items-center gap-2 bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors shadow-sm"
                  >
                    <Mail size={18} /> Email
                  </a>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Service Requested</h4>
                    <p className="font-medium text-lg">{selectedEnquiry.service}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Budget Range</h4>
                    <p className="font-medium text-lg">{selectedEnquiry.budget || 'Not specified'}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Email Address</h4>
                    <p className="font-medium">{selectedEnquiry.email}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">WhatsApp Number</h4>
                    <p className="font-medium">{selectedEnquiry.whatsapp}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="pt-8 border-t border-gray-100">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Project Message</h4>
                  <div className="bg-[#faf9f6] p-6 rounded-xl border border-gray-100 text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedEnquiry.message}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                <MessageCircle className="text-gray-300" size={24} />
              </div>
              <p className="text-gray-400 font-light">Select an enquiry to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
