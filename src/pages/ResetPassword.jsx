import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../services/authServices';
import Navbar from '../components/common/Navbar';

const ResetPassword = () => {
  const [pass, setPass] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ email: state?.email, newPassword: pass });
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-blue-100 text-slate-900 bg-white relative overflow-hidden">

      {/* BACKGROUND ELEMENTS (Matched with Home, Login & Signup) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/60 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-slate-100">

          {/* LEFT PANEL: Security Branding */}
          <div className="md:w-[45%] bg-slate-900 p-16 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Security Protocol</span>
              </div>

              <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
                Secure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic">Overwrite.</span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed max-w-xs font-medium">
                Update your identity access keys. We recommend using a unique combination of symbols and numbers.
              </p>

              <div className="pt-8 flex items-center gap-3 text-blue-400 font-bold text-[11px] uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span>
                Encryption: AES-256
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Form (90% White dominant) */}
          <div className="md:w-[55%] p-16 bg-white flex flex-col justify-center">
            <header className="mb-10">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2 italic">New Password<span className="text-blue-600">.</span></h3>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest italic">Credential Synchronization</p>
            </header>

            <form onSubmit={handleReset} className="space-y-7">
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within:text-blue-600">New Secure Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-300 font-medium shadow-sm"
                  onChange={e => setPass(e.target.value)}
                  required
                />
                <p className="text-[10px] text-slate-400 font-medium ml-1 italic">Entropy requirement: Minimum 8 characters</p>
              </div>

              <button className="group w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3">
                Update Credentials
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>

            <footer className="mt-12 pt-8 border-t border-slate-50 text-center">
              <p className="text-slate-500 text-xs font-semibold">
                Powred by
                <Link to="/login" className="text-blue-600 font-black ml-2 hover:text-orange-500 transition-colors uppercase tracking-tighter">
                  <span className="text-xl font-black tracking-tighter text-slate-900 leading-none italic">
                    Mom<span className="text-blue-600">Food</span><span className="text-orange-500">.</span>
                  </span>
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;