import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === productId);
      if (existingItem?.quantity === 1) {
        return prevCart.filter((item) => item._id !== productId);
      }
      return prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  // ENSURE THIS RETURN IS INSIDE THE CartProvider BRACKETS
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);