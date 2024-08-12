import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}

// Provider component to manage cart state and actions
export function CartProvider({ children }) {
  // Initialize cart state from sessionStorage if available, otherwise set to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save the cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart or update the quantity if it already exists
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Update the quantity of the existing product
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add the new product to the cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update the quantity of a specific product in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
