






// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create the CartContext
// const CartContext = createContext();

// // CartProvider component to provide cart state and functions to children
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     // Initialize cart from localStorage only once
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     console.log('Cart updated:', cart);
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Function to add an item to the cart
//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
//     if (existingItem) {
//       setCart(cart.map(item => 
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (id) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id, quantity) => {
//     if (quantity < 1) return;
//     setCart(cart.map(item =>
//       item.id === id ? { ...item, quantity } : item
//     ));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use the cart context in other components
// export const useCart = () => useContext(CartContext);



// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create the CartContext
// const CartContext = createContext();

// // CartProvider component to provide cart state and functions to children
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     // Initialize cart from localStorage only once
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     console.log('Cart updated:', cart);
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Function to add an item to the cart
//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
//     if (existingItem) {
//       setCart(cart.map(item => 
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (id) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id, quantity) => {
//     if (quantity < 1) return;
//     setCart(cart.map(item =>
//       item.id === id ? { ...item, quantity } : item
//     ));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use the cart context in other components
// export const useCart = () => useContext(CartContext);




import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider component to provide cart state and functions to children
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage only once
    const storedCart = localStorage.getItem('cart');
    console.log('Initializing cart from localStorage:', storedCart);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log('Cart updated:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log('Cart after adding:', cart);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    console.log('Removing item from cart:', id);
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    console.log('Clearing cart');
    setCart([]);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    console.log('Updating quantity:', id, quantity);
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context in other components
export const useCart = () => useContext(CartContext);

