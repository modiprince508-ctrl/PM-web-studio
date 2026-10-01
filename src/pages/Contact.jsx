import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    service: '',
    budget: '',
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleWhatsAppChange = (e) => {
    // Only allow digits and max 10
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, whatsapp: value });
    if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
  };

  const validate = () => {
    const newErrors = {};
    const nameStr = formData.name.trim();
    if (!nameStr) {
      newErrors.name = "Please enter your name.";
    } else if (nameStr.length > 100) {
      newErrors.name = "Name is too long.";
    }
    
    const emailStr = formData.email.trim();
    if (!emailStr) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
      newErrors.email = "Enter a valid email address.";
    } else if (emailStr.length > 254) {
      newErrors.email = "Email is too long.";
    }

    const waStr = formData.whatsapp;
    if (!waStr) {
      newErrors.whatsapp = "Please enter your WhatsApp number.";
    } else if (!/^[6-9]\d{9}$/.test(waStr)) {
      newErrors.whatsapp = "Enter a valid 10-digit Indian mobile number.";
    }

    const validServices = ["Landing Page", "Business Website", "Premium Digital Experiences", "Website Redesign", "Other"];
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    } else if (!validServices.includes(formData.service)) {
      newErrors.service = "Invalid service selection.";
    }

    const msgStr = formData.message.trim();
    if (!msgStr) {
      newErrors.message = "Please tell us a little about your project.";
    } else if (msgStr.length < 10) {
      newErrors.message = "Please provide more details.";
    } else if (msgStr.length > 3000) {
      newErrors.message = "Message is too long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check for bots
    if (honeypot) {
      setIsSuccess(true); // Fake success for bots
      return;
    }

    // Rate limiting check
    const lastSubmit = localStorage.getItem('lastEnquiryTime');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      setSubmitError('Please wait a moment before submitting again.');
      return;
    }
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([
          {
            name: formData.name.trim(),
            business_name: formData.businessName.trim().slice(0, 150) || null,
            email: formData.email.trim(),
            whatsapp: `+91${formData.whatsapp}`,
            service: formData.service,
            budget: formData.budget || null,
            message: formData.message.trim(),
            status: 'New'
          }
        ]);

      if (error) throw error;
      
      localStorage.setItem('lastEnquiryTime', now.toString());
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setSubmitError('Something went wrong while sending your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      whatsapp: '',
      service: '',
      budget: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi PM Web Studio, I'm interested in starting a project. Could we discuss?`);
    window.open(`https://wa.me/910000000000?text=${text}`, '_blank');
  };

  const inputClasses = (fieldName) => `
    w-full bg-transparent border-b ${errors[fieldName] ? 'border-red-400 text-red-900' : 'border-gray-300 focus:border-black'} 
    px-0 py-4 focus:outline-none transition-colors rounded-none
    placeholder-gray-400 font-light text-lg
  `;

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

      <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Editorial / Contact Info */}
            <div className="lg:col-span-5 flex flex-col">
              <FadeIn>
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">CONTACT / START A PROJECT</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">Have a project<br/>in mind?</h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16">
                  Tell us what you're building, what you need, and how we can help.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-auto hidden lg:block">
                <div className="space-y-10 border-t border-gray-200 pt-10">
                  <button onClick={handleWhatsApp} className="flex items-start gap-4 text-left group w-full">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">WhatsApp</div>
                    <div>
                      <div className="text-lg font-medium group-hover:text-gray-500 transition-colors flex items-center gap-2">
                        Start a chat <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </button>

                  <a href="mailto:hello@example.com" className="flex items-start gap-4 group">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">Email</div>
                    <div>
                      <div className="text-lg font-medium group-hover:text-gray-500 transition-colors">
                        hello@example.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">Location</div>
                    <div>
                      <div className="text-lg font-medium text-gray-800">
                        Surat, Gujarat, India
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>


                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center text-center py-20"
                      >
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight mb-4">Enquiry received.</h3>
                        <p className="text-gray-500 font-light text-lg mb-10 max-w-md">
                          Thanks for reaching out. We'll review your project details and get back to you shortly.
                        </p>
                        <button
                          onClick={handleReset}
                          className="text-sm font-semibold tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
                        >
                          Send another enquiry
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-8"
                      >
                        {/* Honeypot field for bots */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                          <input type="text" name="hp_field" tabIndex="-1" autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
                          <div className="relative group">
                            <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Name *</label>
                            <input 
                              type="text" id="name" name="name"
                              value={formData.name} onChange={handleChange}
                              className={inputClasses('name')}
                              placeholder="John Doe"
                              disabled={isSubmitting}
                              maxLength={100}
                            />
                            {errors.name && <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/>{errors.name}</div>}
                          </div>
                          
                          <div className="relative group">
                            <label htmlFor="businessName" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Business / Brand Name</label>
                            <input 
                              type="text" id="businessName" name="businessName"
                              value={formData.businessName} onChange={handleChange}
                              className={inputClasses('businessName')}
                              placeholder="Acme Corp (Optional)"
                              disabled={isSubmitting}
                              maxLength={150}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10 pt-4">
                          <div className="relative group">
                            <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Email *</label>
                            <input 
                              type="email" id="email" name="email"
                              value={formData.email} onChange={handleChange}
                              className={inputClasses('email')}
                              placeholder="john@example.com"
                              disabled={isSubmitting}
                              maxLength={254}
                            />
                            {errors.email && <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/>{errors.email}</div>}
                          </div>
                          
                          <div className="relative group">
                            <label htmlFor="whatsapp" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">WhatsApp Number (India Only) *</label>
                            <div className={`flex w-full border-b ${errors.whatsapp ? 'border-red-400' : 'border-gray-300 focus-within:border-black'} transition-colors`}>
                              <span className={`py-4 pr-2 text-lg font-light ${errors.whatsapp ? 'text-red-900' : 'text-gray-500'}`}>+91</span>
                              <input 
                                type="tel" id="whatsapp" name="whatsapp"
                                value={formData.whatsapp} onChange={handleWhatsAppChange}
                                className={`w-full bg-transparent px-0 py-4 focus:outline-none rounded-none placeholder-gray-400 font-light text-lg ${errors.whatsapp ? 'text-red-900' : ''}`}
                                placeholder="9876543210"
                                disabled={isSubmitting}
                                maxLength={10}
                              />
                            </div>
                            {errors.whatsapp && <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/>{errors.whatsapp}</div>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10 pt-4">
                          <div className="relative group">
                            <label htmlFor="service" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Service *</label>
                            <select 
                              id="service" name="service"
                              value={formData.service} onChange={handleChange}
                              className={`${inputClasses('service')} appearance-none bg-transparent cursor-pointer ${!formData.service ? 'text-gray-400' : 'text-[#111]'}`}
                              disabled={isSubmitting}
                            >
                              <option value="" disabled>Select a service</option>
                              <option value="Landing Page">Landing Page</option>
                              <option value="Business Website">Business Website</option>
                              <option value="Premium Digital Experiences">Premium Digital Experiences</option>
                              <option value="Website Redesign">Website Redesign</option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.service && <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/>{errors.service}</div>}
                          </div>
                          
                          <div className="relative group">
                            <label htmlFor="budget" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Budget</label>
                            <select 
                              id="budget" name="budget"
                              value={formData.budget} onChange={handleChange}
                              className={`${inputClasses('budget')} appearance-none bg-transparent cursor-pointer ${!formData.budget ? 'text-gray-400' : 'text-[#111]'}`}
                              disabled={isSubmitting}
                            >
                              <option value="" disabled>Select budget (Optional)</option>
                              <option value="₹5,000–₹10,000">₹5,000 – ₹10,000</option>
                              <option value="₹10,000–₹20,000">₹10,000 – ₹20,000</option>
                              <option value="₹20,000–₹50,000">₹20,000 – ₹50,000</option>
                              <option value="₹50,000+">₹50,000+</option>
                            </select>
                          </div>
                        </div>

                        <div className="relative group pt-4">
                          <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 absolute -top-4 left-0 transition-colors group-focus-within:text-black">Project Message *</label>
                          <textarea 
                            id="message" name="message"
                            value={formData.message} onChange={handleChange}
                            rows={4}
                            className={`${inputClasses('message')} resize-none`}
                            placeholder="Tell us a little about your project, goals, timeline, or anything else we should know."
                            disabled={isSubmitting}
                            maxLength={3000}
                          ></textarea>
                          {errors.message && <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/>{errors.message}</div>}
                        </div>

                        {submitError && (
                          <div className="pt-4">
                            <div className="p-4 bg-red-50/80 border border-red-100 rounded-lg text-red-600 text-sm flex items-start gap-3">
                              <AlertCircle size={18} className="shrink-0 mt-0.5" />
                              <p className="leading-relaxed">{submitError}</p>
                            </div>
                          </div>
                        )}

                        <div className="pt-8">
                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={`group inline-flex justify-center items-center gap-3 bg-[#111] text-white px-10 py-5 rounded-full text-sm font-medium transition-all duration-300 w-full sm:w-auto
                              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                            {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="lg:hidden col-span-1 border-t border-gray-200 pt-16">
              <FadeIn>
                 <div className="space-y-8">
                  <button onClick={handleWhatsApp} className="flex items-start gap-4 text-left group w-full">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">WhatsApp</div>
                    <div>
                      <div className="text-lg font-medium group-hover:text-gray-500 transition-colors flex items-center gap-2">
                        Start a chat <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </button>

                  <a href="mailto:hello@example.com" className="flex items-start gap-4 group">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">Email</div>
                    <div>
                      <div className="text-lg font-medium group-hover:text-gray-500 transition-colors">
                        hello@example.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="text-sm font-semibold tracking-wide uppercase text-gray-400 w-24 shrink-0 pt-1">Location</div>
                    <div>
                      <div className="text-lg font-medium text-gray-800">
                        Surat, Gujarat, India
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
