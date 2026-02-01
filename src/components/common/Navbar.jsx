import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Ensure this path is correct

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Connect to the Cart Context
  const { getCartCount } = useCart();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      {/* Cursive Logo */}
      <Link to="/" className="flex items-center gap-3 group no-underline">
        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-blue-600 transition-all duration-500">
          <svg viewBox="0 0 100 100" className="w-8 h-8 text-white fill-none stroke-current" strokeWidth="7" strokeLinecap="round">
            <path d="M15,75 C15,75 25,10 45,35 C65,60 75,10 85,35" />
            <circle cx="88" cy="18" r="6" className="fill-orange-500 stroke-none animate-pulse" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-slate-900 leading-none italic">
            Mom<span className="text-blue-600">Food</span><span className="text-orange-500">.</span>
          </span>
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.3em]">Management OS</span>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          {token && (
            <Link to="/dashboard" className="text-blue-600 font-black tracking-tighter italic">
              {role === 'admin' ? 'Dashboard' : 'Orders'}
            </Link>
          )}
          <Link to="/" className="hover:text-blue-600 transition">MomFood Corporate</Link>
          <Link to="/menu" className="hover:text-blue-600 transition">Search</Link>
          <Link to="/menu" className="hover:text-blue-600 transition">Offers</Link>
          <Link to="/menu" className="hover:text-blue-600 transition">Help</Link>
          <Link to="/menu" className="hover:text-blue-600 transition">Menu</Link>
        </nav>

        <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
          {token ? (
            <button onClick={handleLogout} className="text-[10px] font-black uppercase text-slate-400 hover:text-red-500 transition">Logout</button>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition">Login</Link>
          )}

          {/* Cart Icon with Dynamic Counter */}
          <Link to="/cart" className="relative p-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-600 transition-colors">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>

            {/* Only show badge if count > 0 */}
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce shadow-sm">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;