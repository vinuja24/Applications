// import React from 'react';
// import { useCart } from './CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

//   // Calculate total amount
//   const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
      
//       {cart.length === 0 ? (
//         <div className="empty-cart-message">
//           <p>Your cart is empty</p>
//           <button onClick={() => window.location.href = '/products'} className="continue-shopping-button">Continue Shopping</button>
//         </div>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cart.map(item => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.imgSrc} alt={item.name} className="cart-item-img" />
//                 <div className="cart-item-details">
//                   <span>{item.name}</span>
//                   <span>₹{item.price}</span>
                  
//                   {/* Quantity controls */}
//                   <div className="quantity-controls">
//                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                   </div>
//                 </div>
//                 <div className="cart-buttons">
//                   <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Total amount */}
//           <div className="total-amount">
//             <strong>Total: ₹{totalAmount}</strong>
//           </div>

//           {/* Clear cart and Place Order buttons */}
//           <div className="cart-actions">
//             <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
//             <button onClick={() => window.location.href = '/placeorder'} className="place-order-button">Place Order</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;




import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
          <button onClick={() => window.location.href = '/products'} className="continue-shopping-button">Continue Shopping</button>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.imgSrc} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                  
                  {/* Quantity controls */}
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="cart-buttons">
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total amount */}
          <div className="total-amount">
            <strong>Total: ₹{totalAmount}</strong>
          </div>

          {/* Clear cart and Place Order buttons */}
          <div className="cart-actions">
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
            <button onClick={() => window.location.href = '/placeorder'} className="place-order-button">Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

