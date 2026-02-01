import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/authServices';
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { addToCart } = useCart();

  const loadInventory = async () => {
    try {
      const { data } = await fetchProducts();
      setProducts(data);
    } catch (err) { console.error("Sync Error:", err); }
  };

  useEffect(() => { loadInventory(); }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">
            Kitchen<span className="text-blue-600">Console</span>
          </h1>
          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all"
          >
            {isPanelOpen ? '✕ Close' : '+ Add Item'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {products.map((item) => (
            <div key={item._id} className="group relative">
              {/* Image Box with Add button hover effect */}
              <div className="aspect-square bg-[#f9f9f9] rounded-[2rem] flex items-center justify-center relative overflow-hidden mb-3 border border-transparent group-hover:border-slate-100 transition-all">
                <img
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400`}
                  alt={item.name}
                  className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Expandable Hover Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="absolute bottom-3 right-3 h-10 w-10 hover:w-24 bg-white border border-slate-100 text-slate-900 rounded-2xl flex items-center justify-center shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300 group/btn overflow-hidden"
                >
                  <span className="flex items-center gap-1 font-bold">
                    <span className="text-xl">+</span>
                    <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 text-[10px] uppercase tracking-tighter">
                      Add
                    </span>
                  </span>
                </button>
              </div>

              {/* Text Info */}
              <div className="space-y-0.5 px-1">
                <p className="text-lg font-bold text-slate-900">${item.price}</p>
                <h3 className="text-[13px] font-medium text-slate-500 leading-snug">{item.name}</h3>
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1 italic">
                  Stock: {item.stock}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <footer className="bg-slate-50 border-t border-slate-100 pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 mb-20">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-500">
                    <span className="text-white font-bold text-sm italic">M</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tighter italic">MomFood<span className="text-blue-600">.</span></span>
                </div>
                <p className="text-slate-500 text-base max-w-xs leading-relaxed font-medium">
                  The infrastructure for the next generation of cloud kitchens and multi-brand operators.
                </p>
              </div>

              {/* App Store Badges Integration */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#playstore" className="transition-transform hover:scale-105 active:scale-95">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" />
                </a>
                <a href="#appstore" className="transition-transform hover:scale-105 active:scale-95">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-auto" />
                </a>
              </div>
            </div>

            {/* Smart Links Sections */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Platform</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                  <li className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 group">
                    Inventory OS <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[10px]">↗</span>
                  </li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 group">
                    Dispatch API <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[10px]">↗</span>
                  </li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Live Analytics</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Kitchen Display</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Resources</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Documentation</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Help Center</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Community</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Partner Program</li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Stay Updated</h4>
                <div className="space-y-4">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">Join 5,000+ chefs receiving our weekly kitchen-tech teardown.</p>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="chef@kitchen.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                    <button className="absolute right-2 top-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                © 2026 MOMFOOD TECHNOLOGIES
              </p>
              <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-slate-900 transition-colors">Terms</a>
                <a href="#status" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Systems OK
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4 grayscale opacity-40 hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black italic tracking-tighter">STRIPE</span>
                <span className="text-[10px] font-black italic tracking-tighter">AWS</span>
                <span className="text-[10px] font-black italic tracking-tighter">POSTHOG</span>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Dashboard;