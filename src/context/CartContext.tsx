import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  restaurant?: string;
}

interface CartContextValue {
  items: Record<string, CartItem>;
  addItem: (item: Omit<CartItem, 'quantity'>, delta?: number) => void;
  updateQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  totalQuantity: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'foodexpress_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Record<string, CartItem>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem: CartContextValue['addItem'] = (item, delta = 1) => {
    setItems((prev) => {
      const existing = prev[item.id];
      const nextQty = (existing?.quantity ?? 0) + delta;
      if (nextQty <= 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item.id]: { ...item, quantity: nextQty } };
    });
  };

  const updateQty = (id: string, delta: number) => {
    setItems((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...existing, quantity: nextQty } };
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const clear = () => setItems({});

  const totalQuantity = Object.values(items).reduce((s, i) => s + i.quantity, 0);
  const subtotal = Object.values(items).reduce((s, i) => s + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear, totalQuantity, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
