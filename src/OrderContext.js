// import React, { createContext, useState, useContext } from 'react';

// const OrderContext = createContext();

// export const useOrder = () => useContext(OrderContext);

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = (order) => {
//     setOrders([...orders, order]);
//   };

//   return (
//     <OrderContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// import React, { createContext, useState, useContext } from 'react';

// const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = (orderData) => {
//     setOrders((prevOrders) => [...prevOrders, orderData]); // Correctly add new orders to the existing list
//   };

//   return (
//     <OrderContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export const useOrder = () => useContext(OrderContext);




import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderData) => {
    setOrders((prevOrders) => [...prevOrders, orderData]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
