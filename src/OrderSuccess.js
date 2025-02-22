import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); // Redirects to the home page
  };

  return (
    <div className="order-success-container">
      <h2>Order Placed Successfully!</h2>
      <p>Your order has been placed and will be delivered soon.</p>
      <button className="continue-shopping-button" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
