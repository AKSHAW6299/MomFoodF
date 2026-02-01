import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authServices';
import Navbar from '../components/common/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);
      window.location.href = '/dashboard';
    } catch (err) { alert("Invalid credentials"); }
  };


  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-blue-100 text-slate-900 bg-white relative overflow-hidden">
      
      {/* ADAPTIVE BACKGROUND BLOBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/60 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* LEFT PANEL: Enterprise Branding */}
          <div className="md:w-[45%] bg-slate-900 p-16 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Secure Node 01</span>
              </div>

              <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic">Login.</span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed max-w-xs font-medium">
                Access your MomFood workspace and manage your assets with our secure cloud infrastructure.
              </p>

              <div className="pt-8 flex items-center gap-3 text-orange-500 font-bold text-[11px] uppercase tracking-[0.2em]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                System Status: Operational
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Form */}
          <div className="md:w-[55%] p-16 bg-white flex flex-col justify-center">
            <header className="mb-10 text-center md:text-left">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2 italic">Sign In<span className="text-blue-600">.</span></h3>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest italic">Authorized Personnel Only</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-7">
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within:text-blue-600">Work Email</label>
                <input
                  type="email"
                  placeholder="name@enterprise.com"
                  autoComplete="email"
                  className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-300 font-medium shadow-sm placeholder:text-slate-300"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within:text-blue-600">Access Key</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-300 font-medium shadow-sm placeholder:text-slate-300"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between pt-1">
                  <Link to="/signup" className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-orange-500 transition-colors">
                    Create Account
                  </Link>
                  <Link to="/forgot-password" className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-orange-500 transition-colors">
                    Reset Key?
                  </Link>
                </div>
              </div>

              <button 
                disabled={loading}
                className="group w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-blue-600 disabled:bg-slate-400 transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3"
              >
                {loading ? "Authenticating..." : "Authorize Session"}
                {!loading && <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>}
              </button>
            </form>

            <footer className="mt-12 pt-8 border-t border-slate-50 text-center flex flex-col items-center gap-4">
              <p className="text-slate-500 text-xs font-semibold flex items-center gap-2">
                Powered by
                <span className="text-xl font-black tracking-tighter text-slate-900 leading-none italic">
                  Mom<span className="text-blue-600">Food</span><span className="text-orange-500">.</span>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;