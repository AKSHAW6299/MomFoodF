import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../services/authServices';
import Navbar from '../components/common/Navbar';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      navigate('/verify-otp', { state: { email: form.email, purpose: 'signup' } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden relative">
      {/* SaaS Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        {/* Main Terminal Card */}
        <div className="w-full max-w-[480px] bg-white border border-slate-200 rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Terminal Header */}
          <div className="bg-slate-50/80 border-b border-slate-100 px-10 py-5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Protocol: Node Provisioning</span>
          </div>

          <div className="p-10 lg:p-12">
            <header className="mb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 italic">
                Create Account<span className="text-blue-600">.</span>
              </h2>
              <p className="text-slate-500 text-sm font-medium">Initialize your enterprise workspace.</p>
            </header>

            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-blue-600 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 focus:bg-white transition-all duration-300 font-bold text-base placeholder:text-slate-300"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-blue-600 transition-colors">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="name@momfood.com"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 focus:bg-white transition-all duration-300 font-bold text-base placeholder:text-slate-300"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-blue-600 transition-colors">
                  Secure Key
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 focus:bg-white transition-all duration-300 font-bold text-base placeholder:text-slate-300"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>

              {/* Secondary Actions */}
              <div className="flex justify-between items-center pt-2 px-1">
                <Link to="/login" className="text-xs font-bold text-blue-600 hover:text-slate-900 transition-colors">
                  Already have an account?
                </Link>
                <Link to="/forgot-password" size="sm" className="text-[10px] text-slate-300 font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                  Forgot?
                </Link>
              </div>

              {/* Submit Button */}
              <button className="group w-full py-4.5 bg-slate-900 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3">
                Join the Platform
                <span className="group-hover:translate-x-1 transition-transform duration-300 opacity-50">→</span>
              </button>
            </form>
          </div>

          {/* SaaS Footer Badge */}
          <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deployment: Ready</span>
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase italic tracking-tighter">
              MomFood <span className="text-blue-600">v2.4.0</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;