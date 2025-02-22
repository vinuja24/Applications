


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Tanremoveproduct.css';
// import Filter from './Filter';
// import himalaya from './images/himalaya.avif';
// import cosmetofood from './images/cosmetofood.webp';
// import mamaearth from './images/mamaearth.webp';
// // import biotique from './images/biotique.jpg';

// const tanRemovalProducts = [
//   { id: 1, name: 'Himalaya Nourishing skin cream 120ml', price: 100, brand: 'Himalaya', gender: 'Unisex', imgSrc: himalaya },
//   { id: 2, name: 'Cosmetofood Tomato De-Tan 120ml', price: 600, brand: 'Cosmetofood', gender: 'Men', imgSrc: cosmetofood },
//   { id: 3, name: 'Mamaearth D-Tan Cream 120ml', price: 190, brand: 'Mamaearth', gender: 'Women', imgSrc: mamaearth },
//   // { id: 4, name: 'Biotique Tan Removal Cream', price: 410, brand: 'Biotique', gender: 'Unisex', imgSrc: biotique },
// ];

// export default function Tanremoveproduct() {
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
//               <Link to={`/productdetail/${product.id}?category=tan`}>
//                 <img src={product.imgSrc} alt={product.name} className="product-image" />
//                 <h3>{product.name}</h3>
//                 <p>&#8377;{product.price}</p>
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
import himalaya from './images/himalaya.avif';
import cosmetofood from './images/cosmetofood.webp';
import mamaearth from './images/mamaearth.webp';

const tanRemovalProducts = [
  { id: 1, name: 'Himalaya Nourishing skin cream 120ml', price: 100, brand: 'Himalaya', gender: 'Unisex', imgSrc: himalaya },
  { id: 2, name: 'Cosmetofood Tomato De-Tan 120ml', price: 600, brand: 'Cosmetofood', gender: 'Men', imgSrc: cosmetofood },
  { id: 3, name: 'Mamaearth D-Tan Cream 120ml', price: 190, brand: 'Mamaearth', gender: 'Women', imgSrc: mamaearth },
];

export default function Tanremoveproduct() {
  const [filteredProducts, setFilteredProducts] = useState(tanRemovalProducts);

  const handleFilter = (filters) => {
    let filtered = tanRemovalProducts;

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
              <Link to={`/productdetail/${product.id}?category=tan`}>
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>&#8377;{product.price}</p>
                <p>{product.brand}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
