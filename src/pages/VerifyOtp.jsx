import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { verifyOtp } from '../services/authServices';
import Navbar from '../components/common/Navbar';
import { toast } from 'react-toastify';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const { state } = useLocation();
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  // Safety redirect if accessed without email state
  useEffect(() => {
    if (!state?.email) {
      navigate('/login');
    }
  }, [state, navigate]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);

    // Auto-focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    try {
      await verifyOtp({ 
        email: state?.email, 
        otp: finalOtp, 
        purpose: state?.purpose || 'reset' 
      });
      
      toast.success("Identity Confirmed");
      
      // Navigate based on intent
      if (state?.purpose === 'signup') {
        navigate('/login');
      } else {
        navigate('/reset-password', { state: { email: state?.email } });
      }
    } catch (err) {
      toast.error("Security code invalid or expired");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-blue-100 text-slate-900 bg-white relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/60 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* LEFT PANEL: Security Logic */}
          <div className="md:w-[45%] bg-slate-900 p-16 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Two-Factor Auth</span>
              </div>

              <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
                Verify <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic">Access.</span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed max-w-xs font-medium">
                We've dispatched a secure code to <span className="text-white font-bold">{state?.email}</span>. Please enter it to proceed.
              </p>

              <div className="pt-8 flex items-center gap-3 text-orange-500 font-bold text-[11px] uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                Waiting for input...
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Professional OTP Grid */}
          <div className="md:w-[55%] p-16 bg-white flex flex-col justify-center">
            <header className="mb-10 text-center md:text-left">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Secure Gateway</h3>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest italic">Authorization Required</p>
            </header>

            <form onSubmit={handleVerify} className="space-y-10">
              <div className="flex justify-between gap-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={el => inputRefs.current[index] = el}
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    className="w-full h-16 md:h-20 text-center text-3xl font-black border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm"
                  />
                ))}
              </div>

              <button className="group w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.98] flex items-center justify-center gap-3">
                Verify Identity
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>

            <footer className="mt-12 pt-8 border-t border-slate-50 text-center flex flex-col items-center gap-4">
              <button className="text-xs text-orange-600 font-bold uppercase tracking-widest hover:text-orange-700 transition-colors">
                Resend Security Code
              </button>
              
              <Link to="/login" className="text-blue-600 font-black flex items-center gap-2 text-xs uppercase tracking-tighter">
                <span className="text-xl font-black tracking-tighter text-slate-900 italic">
                  Mom<span className="text-blue-600">Food</span><span className="text-orange-500">.</span>
                </span>
              </Link>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifyOTP;