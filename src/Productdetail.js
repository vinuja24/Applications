

import { useParams, useLocation } from 'react-router-dom';
import './productdetail.css';
import himalaya from './images/himalaya.avif';
import cosmetofood from './images/cosmetofood.webp';
import mamaearth from './images/mamaearth.webp';
import biotiqueclenser from './images/biotiqueclenser.webp';
import raagaclenser from './images/raagaclenser.jpg';
import lakmecleanser from './images/lakmecleanser.jpg';
import { useCart } from './CartContext'; 

const tanRemovalProducts = [
  { id: 1, name: 'Himalaya Nourishing skin cream', price: 100, brand: 'Himalaya', gender: 'Unisex', imgSrc: himalaya, skinType: 'All Skin Types', packageType: 'Bottle' },
  { id: 2, name: 'Cosmetofood Tomato De-Tan', price: 600, brand: 'Cosmetofood', gender: 'Men', imgSrc: cosmetofood, skinType: 'Normal', packageType: 'Jar' },
  { id: 3, name: 'Mamaearth D-Tan Cream', price: 190, brand: 'Mamaearth', gender: 'Unisex', imgSrc: mamaearth, skinType: 'Oily', packageType: 'Tube' },
];

const cleanserProducts = [
  { id: 1, name: 'Almond oil deep cleanse purifying cleansing oil 120ml', price: 100, brand: 'Biotique', gender: 'Unisex', imgSrc: biotiqueclenser , skinType: 'All Skin Types', packageType: 'Bottle' },
  { id: 2, name: 'Raaga cleanser 120ml', price: 200, brand: 'Raaga', gender: 'Men', imgSrc: raagaclenser, skinType: 'Normal', packageType: 'Jar' },
  { id: 3, name: 'Lakme deep cleanser 120ml', price: 278, brand: 'Lakme', gender: 'Unisex', imgSrc: lakmecleanser, skinType: 'Oily', packageType: 'Tube' },
];

const Productdetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  
  let products = [];
  if (category === 'tan') {
    products = tanRemovalProducts;
  } else if (category === 'cleanser') {
    products = cleanserProducts;
  }

  const product = products.find(p => p.id === parseInt(id));
  
  const { addToCart } = useCart();
  // const [isInWishlist, setIsInWishlist] = useState(false);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const addToCartHandler = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };



  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 7));
    return deliveryDate.toDateString();
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.imgSrc} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Brand: {product.brand}</p>
        {product.skinType && <p>Skin Type: {product.skinType}</p>}
        {product.packageType && <p>Package Type: {product.packageType}</p>}
        <p>Delivery Date: {getDeliveryDate()}</p>
        <p>Return within 10 days</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
        {/* <button onClick={toggleWishlist} className={isInWishlist ? 'wishlist active' : 'wishlist'}>
          {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          <span className="heart-icon">{isInWishlist ? '❤️' : '🤍'}</span>
        </button> */}
      </div>
    </div>
  );
};

export default Productdetail;



