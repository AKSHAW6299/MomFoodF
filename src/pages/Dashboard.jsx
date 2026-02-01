import React, { useEffect, useState } from 'react';
import { fetchProducts, addProduct } from '../services/authServices'; 
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { addToCart } = useCart();

  // Form State
  const [newItem, setNewItem] = useState({ name: '', price: '', stock: '' });

  const loadInventory = async () => {
    try {
      const { data } = await fetchProducts();
      setProducts(data);
    } catch (err) { 
      console.error("Sync Error:", err); 
    }
  };

  useEffect(() => { loadInventory(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await addProduct(newItem);
      // Success Logic
      setIsPanelOpen(false); 
      setNewItem({ name: '', price: '', stock: '' }); 
      loadInventory(); 
    } catch (err) {
      console.error("Create Error:", err);
      alert("Unauthorized: Only admins can add items");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar />

      {/* --- ADD ITEM SIDE PANEL --- */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 border-l border-slate-100 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-black text-xl italic text-slate-900">Add <span className="text-blue-600">Stock</span></h2>
            <button onClick={() => setIsPanelOpen(false)} className="text-slate-400 hover:text-slate-900">✕</button>
          </div>

          <form onSubmit={handleCreate} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Product Name</label>
              <input 
                required
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none" 
                placeholder="e.g. Avocado Toast"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Price ($)</label>
              <input 
                required
                type="number"
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none" 
                placeholder="12.00"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Initial Stock</label>
              <input 
                required
                type="number"
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none" 
                placeholder="50"
                value={newItem.stock}
                onChange={(e) => setNewItem({...newItem, stock: e.target.value})}
              />
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 shadow-xl shadow-blue-100 transition-all">
              Deploy to Inventory
            </button>
          </form>
        </div>
      </div>

      {/* --- OVERLAY --- */}
      {isPanelOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsPanelOpen(false)}
        />
      )}

      {/* --- DASHBOARD CONTENT --- */}
      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">
            Kitchen<span className="text-blue-600">Console</span>
          </h1>
          <button
            onClick={() => setIsPanelOpen(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all shadow-lg"
          >
            + Add Item
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {products.map((item) => (
            <div key={item._id} className="group relative">
              <div className="aspect-square bg-[#f9f9f9] rounded-[2rem] flex items-center justify-center relative overflow-hidden mb-3 border border-transparent group-hover:border-slate-100 transition-all">
                <img
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400`}
                  alt={item.name}
                  className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => addToCart(item)}
                  className="absolute bottom-3 right-3 h-10 w-10 hover:w-24 bg-white border border-slate-100 text-slate-900 rounded-2xl flex items-center justify-center shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300 group/btn overflow-hidden"
                >
                  <span className="flex items-center gap-1 font-bold">
                    <span className="text-xl">+</span>
                    <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 text-[10px] uppercase tracking-tighter">Add</span>
                  </span>
                </button>
              </div>

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
    </div>
  );
};

export default Dashboard;