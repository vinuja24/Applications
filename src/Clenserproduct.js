
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Tanremoveproduct.css';
// import Filter from './Filter';
// import biotiqueclenser from './images/biotiqueclenser.webp';
// import raagaclenser from './images/raagaclenser.jpg';
// import lakmecleanser from './images/lakmecleanser.jpg';
// // import biotique from './images/biotique.jpg';

// const cleanserProducts = [
//   { id: 4, name: 'Almond oil deep cleanse purifying cleansing oil 120ml', price: 100, brand: 'Biotique', gender: 'Unisex', imgSrc: biotiqueclenser },
//   { id: 5, name: 'Raaga cleanser 120ml', price: 200, brand: 'Raaga', gender: 'Men', imgSrc: raagaclenser },
//   { id: 6, name: 'Lakme deep cleanser 120ml', price: 278, brand: 'Lakme', gender: 'Unisex', imgSrc: lakmecleanser },
//   // { id: 4, name: 'Biotique Tan Removal Cream', price: 410, brand: 'Biotique', gender: 'Unisex', imgSrc: biotique },
// ];

// export default function Clenserproduct() {
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const handleFilter = (filters) => {
//     let filtered = products;

//     if (filters.price.length > 0) {
//       filtered = filtered.filter(product => 
//         filters.price.includes('Below 500') ? product.price < 500 : product.price >= 500 && product.price <= 800
//       );
//     }

//     if (filters.brand.length > 0) {
//       filtered = filtered.filter(product => filters.brand.includes(product.brand));
//     }

//     if (filters.gender.length > 0) {
//       filtered = filtered.filter(product => filters.gender.includes(product.gender));
//     }

//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <Filter onFilter={handleFilter} />
//       </div>
//       <div className="main-content">
//         <div className="product-list">
//           {filteredProducts.map(product => (
//             <div key={product.id} className="product-item">
//               <Link to={`/products/${product.id}`}>
//                 <img src={product.imgSrc} alt={product.name} className="product-image" />
//                 <h3>{product.name}</h3>
//                 <p>₹{product.price}</p>
//                 <p>{product.brand}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tanremoveproduct.css';
import Filter from './Filter';
import biotiqueclenser from './images/biotiqueclenser.webp';
import raagaclenser from './images/raagaclenser.jpg';
import lakmecleanser from './images/lakmecleanser.jpg';

const cleanserProducts = [
  { id: 1, name: 'Almond oil deep cleanse purifying cleansing oil 120ml', price: 100, brand: 'Biotique', gender: 'Unisex', imgSrc: biotiqueclenser },
  { id: 2, name: 'Raaga cleanser 120ml', price: 200, brand: 'Raaga', gender: 'Men', imgSrc: raagaclenser },
  { id: 3, name: 'Lakme deep cleanser 120ml', price: 278, brand: 'Lakme', gender: 'Unisex', imgSrc: lakmecleanser },
];

export default function Clenserproduct() {
  const [filteredProducts, setFilteredProducts] = useState(cleanserProducts);

  const handleFilter = (filters) => {
    let filtered = cleanserProducts;

    if (filters.price.length > 0) {
      filtered = filtered.filter(product => 
        filters.price.includes('Below 500') ? product.price < 500 : product.price >= 500 && product.price <= 800
      );
    }

    if (filters.brand.length > 0) {
      filtered = filtered.filter(product => filters.brand.includes(product.brand));
    }

    if (filters.gender.length > 0) {
      filtered = filtered.filter(product => filters.gender.includes(product.gender));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Filter onFilter={handleFilter} />
      </div>
      <div className="main-content">
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <Link to={`/productdetail/${product.id}?category=cleanser`}>
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <p>{product.brand}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

