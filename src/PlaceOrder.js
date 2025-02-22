

// import React, { useState, useEffect } from 'react';
// import { useCart } from './CartContext';
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   const { cart } = useCart();

//   // User details state
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     doorNo: '',
//     city: '',
//     pincode: '',
//     state: '',
//     landmark: '',
//     phoneNo: ''
//   });

//   const [isEditing, setIsEditing] = useState(true);
//   const [errors, setErrors] = useState({});

//   // Check if cart data is being retrieved correctly
//   useEffect(() => {
//     console.log('Cart Data:', cart);
//   }, [cart]);

//   // Validate the form
//   const validateForm = () => {
//     const newErrors = {};

//     if (!userDetails.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!userDetails.doorNo) {
//       newErrors.doorNo = 'Door No is required';
//     }
//     if (!userDetails.city) {
//       newErrors.city = 'City is required';
//     }
//     if (!userDetails.pincode) {
//       newErrors.pincode = 'Pincode is required';
//     }
//     if (!userDetails.state) {
//       newErrors.state = 'State is required';
//     }
//     if (!userDetails.phoneNo) {
//       newErrors.phoneNo = 'Phone No is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   // Handle saving the details
//   const handleSave = () => {
//     if (validateForm()) {
//       setIsEditing(false);
//     }
//   };

//   // Handle editing the details
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="placeorder-container">
//       <h1>Place Your Order</h1>
      
//       <div className="user-details-section">
//         <h2>Shipping Information</h2>
//         {isEditing ? (
//           <div className="user-details-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleInputChange}
//               />
//               {errors.name && <small className="error">{errors.name}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="doorNo"
//                 placeholder="Door No"
//                 value={userDetails.doorNo}
//                 onChange={handleInputChange}
//               />
//               {errors.doorNo && <small className="error">{errors.doorNo}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={userDetails.city}
//                 onChange={handleInputChange}
//               />
//               {errors.city && <small className="error">{errors.city}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="pincode"
//                 placeholder="Pincode"
//                 value={userDetails.pincode}
//                 onChange={handleInputChange}
//               />
//               {errors.pincode && <small className="error">{errors.pincode}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={userDetails.state}
//                 onChange={handleInputChange}
//               />
//               {errors.state && <small className="error">{errors.state}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="landmark"
//                 placeholder="Landmark"
//                 value={userDetails.landmark}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="phoneNo"
//                 placeholder="Phone No"
//                 value={userDetails.phoneNo}
//                 onChange={handleInputChange}
//               />
//               {errors.phoneNo && <small className="error">{errors.phoneNo}</small>}
//             </div>
//             <button
//               onClick={handleSave}
//               className="save-details-button"
//             >
//               Save Details
//             </button>
//           </div>
//         ) : (
//           <div className="user-details-view">
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Door No:</strong> {userDetails.doorNo}</p>
//             <p><strong>City:</strong> {userDetails.city}</p>
//             <p><strong>Pincode:</strong> {userDetails.pincode}</p>
//             <p><strong>State:</strong> {userDetails.state}</p>
//             <p><strong>Landmark:</strong> {userDetails.landmark}</p>
//             <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
//             <button onClick={handleEdit} className="edit-details-button">Edit</button>
//           </div>
//         )}
//       </div>

//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         {cart.length > 0 ? (
//           cart.map(item => (
//             <div key={item.id} className="order-item">
//               <img src={item.imgSrc} alt={item.name} />
//               <div className="item-details">
//                 <span><strong>Product Name:</strong> {item.name}</span>
//                 <span><strong>Price:</strong> ₹{item.price}</span>
//                 <span><strong>Delivery Date:</strong> {new Date().toLocaleDateString()}</span>
//                 <span><strong>Return:</strong> Return within 7 days</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>

//       <button
//         onClick={() => window.location.href = '/payment'}
//         className="go-to-payment-button"
//         disabled={isEditing} // Disable button if editing
//       >
//         Go to Payment
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;



// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import { useOrder } from './OrderContext'; // Assume you have an OrderContext
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   const { cart, clearCart } = useCart();
//   const { addOrder } = useOrder(); // Use the order context to save the order

//   // User details state
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     doorNo: '',
//     city: '',
//     pincode: '',
//     state: '',
//     landmark: '',
//     phoneNo: ''
//   });

//   const [isEditing, setIsEditing] = useState(true);
//   const [errors, setErrors] = useState({});

//   // Validate the form
//   const validateForm = () => {
//     const newErrors = {};

//     if (!userDetails.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!userDetails.doorNo) {
//       newErrors.doorNo = 'Door No is required';
//     }
//     if (!userDetails.city) {
//       newErrors.city = 'City is required';
//     }
//     if (!userDetails.pincode) {
//       newErrors.pincode = 'Pincode is required';
//     }
//     if (!userDetails.state) {
//       newErrors.state = 'State is required';
//     }
//     if (!userDetails.phoneNo) {
//       newErrors.phoneNo = 'Phone No is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   // Handle saving the details
//   const handleSave = () => {
//     if (validateForm()) {
//       setIsEditing(false);
//     }
//   };

//   // Handle editing the details
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handlePlaceOrder = () => {
//     if (!isEditing) {
//       // Save the order
//       addOrder({
//         userDetails,
//         items: cart,
//       });

//       // Clear the cart after placing the order
//       clearCart();

//       // Redirect to home or show a success message
//       window.location.href = '/payment';
//     }
//   };

//   return (
//     <div className="placeorder-container">
//       <h1>Place Your Order</h1>
      
//       <div className="user-details-section">
//         <h2>Shipping Information</h2>
//         {isEditing ? (
//           <div className="user-details-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleInputChange}
//               />
//               {errors.name && <small className="error">{errors.name}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="doorNo"
//                 placeholder="Door No"
//                 value={userDetails.doorNo}
//                 onChange={handleInputChange}
//               />
//               {errors.doorNo && <small className="error">{errors.doorNo}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={userDetails.city}
//                 onChange={handleInputChange}
//               />
//               {errors.city && <small className="error">{errors.city}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="pincode"
//                 placeholder="Pincode"
//                 value={userDetails.pincode}
//                 onChange={handleInputChange}
//               />
//               {errors.pincode && <small className="error">{errors.pincode}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={userDetails.state}
//                 onChange={handleInputChange}
//               />
//               {errors.state && <small className="error">{errors.state}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="landmark"
//                 placeholder="Landmark"
//                 value={userDetails.landmark}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="phoneNo"
//                 placeholder="Phone No"
//                 value={userDetails.phoneNo}
//                 onChange={handleInputChange}
//               />
//               {errors.phoneNo && <small className="error">{errors.phoneNo}</small>}
//             </div>
//             <button
//               onClick={handleSave}
//               className="save-details-button"
//             >
//               Save Details
//             </button>
//           </div>
//         ) : (
//           <div className="user-details-view">
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Door No:</strong> {userDetails.doorNo}</p>
//             <p><strong>City:</strong> {userDetails.city}</p>
//             <p><strong>Pincode:</strong> {userDetails.pincode}</p>
//             <p><strong>State:</strong> {userDetails.state}</p>
//             <p><strong>Landmark:</strong> {userDetails.landmark}</p>
//             <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
//             <button onClick={handleEdit} className="edit-details-button">Edit</button>
//           </div>
//         )}
//       </div>

//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         {cart.length > 0 ? (
//           cart.map(item => (
//             <div key={item.id} className="order-item">
//               <img src={item.imgSrc} alt={item.name} />
//               <div className="item-details">
//                 <span><strong>Product Name:</strong> {item.name}</span>
//                 <span><strong>Price:</strong> ₹{item.price}</span>
//                 <span><strong>Delivery Date:</strong> {new Date().toLocaleDateString()}</span>
//                 <span><strong>Return:</strong> Return within 7 days</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="go-to-payment-button"
//         disabled={isEditing} // Disable button if editing
//       >
//        Go To Payment
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;



// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import { useOrder } from './OrderContext';
// import { useNavigate } from 'react-router-dom';
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   const { cart, clearCart } = useCart();
//   const { addOrder } = useOrder();
//   const navigate = useNavigate();

//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     doorNo: '',
//     city: '',
//     pincode: '',
//     state: '',
//     landmark: '',
//     phoneNo: ''
//   });

//   const [isEditing, setIsEditing] = useState(true);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!userDetails.name) newErrors.name = 'Name is required';
//     if (!userDetails.doorNo) newErrors.doorNo = 'Door No is required';
//     if (!userDetails.city) newErrors.city = 'City is required';
//     if (!userDetails.pincode) newErrors.pincode = 'Pincode is required';
//     if (!userDetails.state) newErrors.state = 'State is required';
//     if (!userDetails.phoneNo) newErrors.phoneNo = 'Phone No is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       setIsEditing(false);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handlePlaceOrder = () => {
//     if (!isEditing) {
//       addOrder({
//         userDetails,
//         items: cart,
//       });

//       clearCart();
//       navigate('/payment');
//     }
//   };

//   return (
//     <div className="placeorder-container">
//       <h1>Place Your Order</h1>

//       <div className="user-details-section">
//         <h2>Shipping Information</h2>
//         {isEditing ? (
//           <div className="user-details-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleInputChange}
//               />
//               {errors.name && <small className="error">{errors.name}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="doorNo"
//                 placeholder="Door No"
//                 value={userDetails.doorNo}
//                 onChange={handleInputChange}
//               />
//               {errors.doorNo && <small className="error">{errors.doorNo}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={userDetails.city}
//                 onChange={handleInputChange}
//               />
//               {errors.city && <small className="error">{errors.city}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="pincode"
//                 placeholder="Pincode"
//                 value={userDetails.pincode}
//                 onChange={handleInputChange}
//               />
//               {errors.pincode && <small className="error">{errors.pincode}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={userDetails.state}
//                 onChange={handleInputChange}
//               />
//               {errors.state && <small className="error">{errors.state}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="landmark"
//                 placeholder="Landmark"
//                 value={userDetails.landmark}
//                 onChange={handleInputChange}
//               />
//               {errors.landmark && <small className="error">{errors.landmark}</small>}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="phoneNo"
//                 placeholder="Phone No"
//                 value={userDetails.phoneNo}
//                 onChange={handleInputChange}
//               />
//               {errors.phoneNo && <small className="error">{errors.phoneNo}</small>}
//             </div>
//             <button
//               onClick={handleSave}
//               className="save-details-button"
//             >
//               Save Details
//             </button>
//           </div>
//         ) : (
//           <div className="user-details-view">
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Door No:</strong> {userDetails.doorNo}</p>
//             <p><strong>City:</strong> {userDetails.city}</p>
//             <p><strong>Pincode:</strong> {userDetails.pincode}</p>
//             <p><strong>State:</strong> {userDetails.state}</p>
//             <p><strong>Landmark:</strong> {userDetails.landmark}</p>
//             <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
//             <button onClick={handleEdit} className="edit-details-button">Edit</button>
//           </div>
//         )}
//       </div>

//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         {cart.length > 0 ? (
//           cart.map(item => (
//             <div key={item.id} className="order-item">
//               <img src={item.imgSrc} alt={item.name} />
//               <div className="item-details">
//                 <span><strong>Product Name:</strong> {item.name}</span>
//                 <span><strong>Price:</strong> ₹{item.price}</span>
//                 <span><strong>Delivery Date:</strong> {new Date().toLocaleDateString()}</span>
//                 <span><strong>Return:</strong> Return within 7 days</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>

//       <button
//         onClick={handlePlaceOrder}
//         className="go-to-payment-button"
//         disabled={isEditing}
//       >
//        Go To Payment
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;





import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useOrder } from './OrderContext';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    doorNo: '',
    city: '',
    pincode: '',
    state: '',
    landmark: '',
    phoneNo: ''
  });

  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!userDetails.name) newErrors.name = 'Name is required';
    if (!userDetails.doorNo) newErrors.doorNo = 'Door No is required';
    if (!userDetails.city) newErrors.city = 'City is required';
    if (!userDetails.pincode) newErrors.pincode = 'Pincode is required';
    if (!userDetails.state) newErrors.state = 'State is required';
    if (!userDetails.phoneNo) newErrors.phoneNo = 'Phone No is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (validateForm()) {
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handlePlaceOrder = () => {
    if (!isEditing) {
      addOrder({
        userDetails,
        items: cart,
      });

      clearCart();
      navigate('/payment');
    }
  };

  // Calculate delivery date (7 days from today)
  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 7));
    return deliveryDate.toLocaleDateString();
  };

  return (
    <div className="placeorder-container">
      <h1>Place Your Order</h1>

      <div className="user-details-section">
        <h2>Shipping Information</h2>
        {isEditing ? (
          <div className="user-details-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleInputChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="doorNo"
                placeholder="Door No"
                value={userDetails.doorNo}
                onChange={handleInputChange}
              />
              {errors.doorNo && <small className="error">{errors.doorNo}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={userDetails.city}
                onChange={handleInputChange}
              />
              {errors.city && <small className="error">{errors.city}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={userDetails.pincode}
                onChange={handleInputChange}
              />
              {errors.pincode && <small className="error">{errors.pincode}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={userDetails.state}
                onChange={handleInputChange}
              />
              {errors.state && <small className="error">{errors.state}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="landmark"
                placeholder="Landmark"
                value={userDetails.landmark}
                onChange={handleInputChange}
              />
              {errors.landmark && <small className="error">{errors.landmark}</small>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phoneNo"
                placeholder="Phone No"
                value={userDetails.phoneNo}
                onChange={handleInputChange}
              />
              {errors.phoneNo && <small className="error">{errors.phoneNo}</small>}
            </div>
            <button
              onClick={handleSave}
              className="save-details-button"
            >
              Save Details
            </button>
          </div>
        ) : (
          <div className="user-details-view">
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Door No:</strong> {userDetails.doorNo}</p>
            <p><strong>City:</strong> {userDetails.city}</p>
            <p><strong>Pincode:</strong> {userDetails.pincode}</p>
            <p><strong>State:</strong> {userDetails.state}</p>
            <p><strong>Landmark:</strong> {userDetails.landmark}</p>
            <p><strong>Phone No:</strong> {userDetails.phoneNo}</p>
            <button onClick={handleEdit} className="edit-details-button">Edit</button>
          </div>
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.imgSrc} alt={item.name} />
              <div className="item-details">
                <span><strong>Product Name:</strong> {item.name}</span>
                <span><strong>Price:</strong> ₹{item.price}</span>
                <span><strong>Delivery Date:</strong> {calculateDeliveryDate()}</span>
                <span><strong>Return:</strong> Return within 7 days</span>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <button
        onClick={handlePlaceOrder}
        className="go-to-payment-button"
        disabled={isEditing}
      >
        Go To Payment
      </button>
    </div>
  );
};

export default PlaceOrder;
