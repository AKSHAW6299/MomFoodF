import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../services/authServices';
import Navbar from '../components/common/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword({ email });
      navigate('/verify-otp', { state: { email, purpose: 'reset' } });
    } catch (err) {
      alert("Account not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200 min-h-[600px]">
          
          {/* Information Panel */}
          <div className="md:w-5/12 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to Platform
              </Link>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">Secure Account <br/>Recovery</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Enter your workspace email and we'll send a high-priority 6-digit access code to verify your identity.
              </p>
              
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <p className="text-xs text-orange-400 font-bold uppercase tracking-widest mb-2">Support Note</p>
                <p className="text-sm text-slate-300">If you don't receive an email within 2 minutes, check your spam folder or contact your system administrator.</p>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 font-mono tracking-tighter">ENCRYPTION: AES-256 BIT READY</p>
          </div>

          {/* Form Panel */}
          <div className="md:w-7/12 p-12 flex flex-col justify-center bg-white">
            <div className="max-w-sm mx-auto w-full">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h3>
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Work Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 placeholder:text-slate-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {loading ? "Authenticating..." : "Send Recovery Code"}
                </button>
              </form>

              <div className="mt-10 pt-10 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  Know your password? <Link to="/login" className="text-blue-600 hover:underline">Sign in to workspace</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;