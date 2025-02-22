import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshowimg from './Slideshowimg';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import { useAuth } from './AuthContext';
import { useOrder } from './OrderContext';
import './Home.css';


export default function Home() {
  const { isAuthenticated } = useAuth();
  const { orders = [] } = useOrder(); // Ensure orders has a default value
  const navigate = useNavigate();

  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 7));
    return deliveryDate.toLocaleDateString();
  };

  const handleOrderClick = (orderId) => {
    // Navigate to order detail page (or any other page you want)
    navigate(`/order/${orderId}`);
  };

  return (
    <div>
      <Slideshowimg />

      {orders.length > 0 ? (
        <div className="ordered-products">
          <h2>Your Orders</h2>
          {orders.map((order, index) => (
            <div key={index} className="order-summary">
              {order.items.map(item => (
                <div
                  key={item.id}
                  className="order-item-small"
                  onClick={() => handleOrderClick(order.id)}
                >
                  <img src={item.imgSrc} alt={item.name} className="order-img-small" />
                  <div className="item-details-small">
                    <span><strong>{item.name}</strong></span>
                    <span>₹{item.price}</span>
                    <span>Delivered by: {calculateDeliveryDate()}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>No orders to display</p> // Add a fallback message if there are no orders
      )}

      {isAuthenticated && (
        <>
          <Product />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}
