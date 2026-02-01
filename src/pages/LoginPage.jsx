import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/authServices';
import Navbar from '../components/common/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await login({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);
      window.location.href = '/dashboard';
    } catch (err) { 
      alert("Invalid credentials"); 
    } finally {
      setLoading(false);
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
        <div className="w-full max-w-[460px] bg-white border border-slate-200 rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Terminal Header */}
          <div className="bg-slate-50/80 border-b border-slate-100 px-10 py-5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Deployment: Production</span>
          </div>

          <div className="p-10 lg:p-12">
            <header className="mb-10">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 italic">
                Platform Login<span className="text-blue-600">.</span>
              </h2>
              <p className="text-slate-500 text-sm font-medium">Enter your workspace credentials to continue.</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Input Group */}
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-blue-600 transition-colors">
                  Identity / Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="operator@momfood.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 focus:bg-white transition-all duration-300 font-bold text-base placeholder:text-slate-300"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Group */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    Access Key
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 focus:bg-white transition-all duration-300 font-bold text-base placeholder:text-slate-300"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center pt-2 px-1">
                  <Link to="/signup" className="text-xs font-bold text-blue-600 hover:text-slate-900 transition-colors">
                    Request Workspace
                  </Link>
                  <Link to="/forgot-password" className="text-xs font-bold text-slate-300 hover:text-blue-600 transition-colors">
                    Reset Key?
                  </Link>
                </div>
              </div>

              {/* Primary Action */}
              <button 
                disabled={loading}
                className="w-full py-4.5 bg-slate-900 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xl shadow-blue-900/10 disabled:bg-slate-200 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Initialize Session
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-50">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* SaaS Footer Badge */}
          <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Node: Active</span>
            </div>
            <span className="text-[10px] font-black text-slate-300 uppercase italic tracking-tighter">v2.4.0</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;