import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, addToCart, getCartCount } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center space-y-6">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 italic">Your cart is empty.</h2>
          <Link to="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all">
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <div className="p-8 max-w-4xl mx-auto w-full">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic">
            Your<span className="text-blue-600">Order</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Review your selection</p>
        </header>

        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center gap-6 p-6 bg-[#fcfcfc] rounded-[2rem] border border-slate-50 group hover:border-blue-50 transition-all">
              {/* Product Mini Image */}
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <img 
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200`} 
                  alt={item.name} 
                  className="w-16 h-16 object-contain" 
                />
              </div>

              {/* Item Details */}
              <div className="flex-grow">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-400 font-medium">${item.price} per unit</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-slate-100">
                <button 
                  onClick={() => removeFromCart(item._id)}
                  className="w-8 h-8 flex items-center justify-center font-bold text-slate-400 hover:text-red-500 transition-colors"
                >
                  -
                </button>
                <span className="font-black text-slate-900 w-4 text-center">{item.quantity}</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-8 h-8 flex items-center justify-center font-bold text-slate-400 hover:text-blue-600 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Price Calculation */}
              <div className="text-right min-w-[80px]">
                <p className="text-lg font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Summary */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Amount</p>
            <p className="text-4xl font-black text-slate-900">${total.toFixed(2)}</p>
          </div>
          <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:bg-blue-600 shadow-2xl transition-all active:scale-95">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;