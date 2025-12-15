import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiEye, FiCheck } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import productImage from '../assets/images/pexels-madebymath-90946.jpg';
import { useCart } from '../context/CartContext';

const ProductCard = ({
  name = "Premium Product",
  price = 99.99,
  oldPrice = null,
  rating = 4.5,
  image = productImage,
  badge = null,
  delay = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price, image });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div
      className="product-card stagger-item w-72 relative group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Badge */}
      {badge && (
        <span className={`badge ${badge === 'Sale' ? 'badge-sale' : 'badge-new'} absolute top-4 left-4 z-10`}>
          {badge}
        </span>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover-scale ${isLiked
            ? 'bg-green-500 text-white'
            : 'bg-white/90 text-gray-600 hover:bg-green-500 hover:text-white'
          }`}
      >
        <FiHeart className={isLiked ? 'fill-current' : ''} />
      </button>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="product-img"
        />

        {/* Overlay with buttons */}
        <div className="product-overlay">
          <div className="flex gap-3">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-green-500 hover:text-white transition-all hover-scale">
              <FiEye className="text-xl" />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-green-500 hover:text-white transition-all hover-scale"
            >
              <FiShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Title */}
        <h3 className="product-title text-gray-800 group-hover:text-green-600 transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          Premium quality product with amazing features
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="product-price">${price}</span>
            {oldPrice && (
              <span className="product-price-old">${oldPrice}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`btn-primary py-2 px-4 text-sm flex items-center gap-1 ${addedToCart ? 'bg-green-600' : ''}`}
          >
            {addedToCart ? (
              <>
                <FiCheck /> Added
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
