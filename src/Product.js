

import React from 'react';
import { Link } from 'react-router-dom';
import tanRemove from './images/tanremove.webp';
import './Product.css';
import cleaneser from './images/cleaneser.webp';
import moisturizer from './images/moisturizer.webp';
import serums from './images/serums.webp';
import antiaging from './images/antiaging.webp';
import sunscreen from './images/sunscreen.webp';

export default function Product() {
  const products = [
    { id: 1, name: 'Tan Removal', imgSrc: tanRemove },
    { id: 2, name: 'Cleanser', imgSrc: cleaneser },
    { id: 3, name: 'Moisturizers', imgSrc: moisturizer },
    { id: 4, name: 'Brightening Serums', imgSrc: serums },
    { id: 5, name: 'Anti Aging Cream', imgSrc: antiaging },
    { id: 6, name: 'Sunscreen', imgSrc: sunscreen },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.imgSrc} alt={product.name} />
            <span>{product.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
