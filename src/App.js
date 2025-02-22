

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Product from "./Product";
// import Navbar from "./Navbar";
// import Home from './Home';
// import About from "./About";
// import Contact from "./Contact";
// import Tanremoveproduct from './Tanremoveproduct';
// import Clenserproduct from "./Clenserproduct";
// import Productdetail from './Productdetail';
// import Cart from './Cart';
// import PlaceOrder from "./PlaceOrder";
// import { CartProvider } from './CartContext';  
// import Signin from './Signin';
// import Signup from './Signup';
// import { AuthProvider } from './AuthContext'; // Import AuthProvider
// import Payment from './Payment';
// import OrderSuccess from './OrderSuccess';

// function App() {
//   return (
//     <AuthProvider>  {/* Wrap your app with AuthProvider */}
//       <CartProvider>  {/* Wrap your app with CartProvider */}
//         <Router>
//           <div>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/signin" element={<Signin />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/products" element={<Product />} />
//               <Route path="/product/1" element={<Tanremoveproduct />} />
//               <Route path="/product/2" element={<Clenserproduct />} />
//               <Route path="/products/:id" element={<Productdetail />} />
//               <Route path="/products/tan" element={<Tanremoveproduct />} />
//               <Route path="/products/cleanser" element={<Clenserproduct />} />
//               <Route path="/productdetail/:id" element={<Productdetail />} />
//               <Route path="/about" element={<About/>}/>
//               <Route path="/contactus" element={<Contact/>}/>
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/placeorder" element={<PlaceOrder/>}/>
//               <Route path="/payment" element={<Payment/>}/>
//               <Route path="/ordersuccess" element={<OrderSuccess/>}/>
//             </Routes>
//           </div>
//         </Router>
//       </CartProvider>
//     </AuthProvider> 
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Product from "./Product";
import Navbar from "./Navbar";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Tanremoveproduct from './Tanremoveproduct';
import Clenserproduct from "./Clenserproduct";
import Productdetail from './Productdetail';
import Cart from './Cart';
import PlaceOrder from "./PlaceOrder";
import { CartProvider } from './CartContext';  
import Signin from './Signin';
import Signup from './Signup';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import Payment from './Payment';
import OrderSuccess from './OrderSuccess';
import { OrderProvider } from './OrderContext'; // Import OrderProvider

function App() {
  return (
    <AuthProvider>  {/* Wrap your app with AuthProvider */}
      <CartProvider>  {/* Wrap your app with CartProvider */}
        <OrderProvider>  {/* Wrap your app with OrderProvider */}
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Product />} />
                <Route path="/product/1" element={<Tanremoveproduct />} />
                <Route path="/product/2" element={<Clenserproduct />} />
                <Route path="/products/:id" element={<Productdetail />} />
                <Route path="/products/tan" element={<Tanremoveproduct />} />
                <Route path="/products/cleanser" element={<Clenserproduct />} />
                <Route path="/productdetail/:id" element={<Productdetail />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contactus" element={<Contact/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/placeorder" element={<PlaceOrder/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/ordersuccess" element={<OrderSuccess/>}/>
              </Routes>
            </div>
          </Router>
        </OrderProvider>
      </CartProvider>
    </AuthProvider> 
  );
}

export default App;

