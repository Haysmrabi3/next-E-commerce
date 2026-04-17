"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ✅ تحميل الكارت من localStorage أول ما الصفحة تفتح
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ حفظ الكارت في localStorage كل ما يتغير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // لو المنتج موجود نزود الكمية
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, q: item.q + 1 }
            : item
        );
      }

      // لو جديد
      return [...prev, { ...product, q: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart , setCart }}>
      {children}
    </CartContext.Provider>
  );
}