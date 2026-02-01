import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userName = localStorage.getItem('userName') || '';

  const { getCartCount } = useCart();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      {/* BRAND SECTION */}
      <Link to="/" className="flex items-center gap-3 group no-underline">
        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-all duration-500">
          <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-none stroke-current" strokeWidth="8" strokeLinecap="round">
            <path d="M15,75 C15,75 25,10 45,35 C65,60 75,10 85,35" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black tracking-tighter text-slate-900 leading-none italic">
            Mom<span className="text-blue-600">Food</span><span className="text-orange-500">.</span>
          </span>
          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.3em]">Kitchen OS</span>
        </div>
      </Link>

      {/* NAVIGATION LINKS */}
      <nav className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
        <Link to="/menu" className="hover:text-blue-600 transition-colors">Explorer</Link>
        <Link to="/offers" className="hover:text-blue-600 transition-colors">Offers</Link>
        {token && (
          <Link to="/dashboard" className="text-slate-900 font-bold border-b-2 border-blue-600 pb-1">
            {role === 'admin' ? 'Admin Console' : 'My Orders'}
          </Link>
        )}
      </nav>

      {/* ACTION SECTION */}
      <div className="flex items-center gap-5">
        
        {/* CART BUTTON */}
        <Link to="/cart" className="relative p-2.5 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-500 group-hover:text-blue-600">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {getCartCount() > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-md">
              {getCartCount()}
            </span>
          )}
        </Link>

        {token ? (
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            {/* USER IDENTITY CHIP */}
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] font-black text-slate-900 leading-none capitalize tracking-tight">
                {userName}
              </span>
              <span className={`text-[8px] font-bold uppercase tracking-widest mt-1 px-1.5 py-0.5 rounded-md ${
                role === 'admin' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
              }`}>
                {role}
              </span>
            </div>

            {/* AVATAR & DROPDOWN */}
            <div className="relative group">
              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:border-blue-400 group-hover:bg-white transition-all overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>

              {/* FLOATING LOGOUT MENU */}
              <div className="absolute right-0 mt-3 w-44 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                <div className="px-3 py-2 border-b border-slate-50 mb-1">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Account Settings</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">Sign Out</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;