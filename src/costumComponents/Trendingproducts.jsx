import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiCheck } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import productImage from '../assets/images/pexels-madebymath-90946.jpg';
import { useCart } from '../context/CartContext';

const Trendingproducts = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const products = [
    { name: "Designer Chair", price: 149.99, oldPrice: 199.99, rating: 4.8, badge: "Hot" },
    { name: "Modern Lamp", price: 79.99, rating: 4.5, badge: "New" },
    { name: "Coffee Table", price: 249.99, oldPrice: 299.99, rating: 4.7 },
    { name: "Wall Art", price: 59.99, rating: 4.3, badge: "Sale" },
  ];

  const handleAddToCart = (product) => {
    addToCart({ name: product.name, price: product.price, image: productImage });
    setAddedItems(prev => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.name]: false }));
    }, 2000);
  };

  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className="stagger-item card w-72 group"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            {product.badge && (
              <span className={`badge ${product.badge === 'Sale' || product.badge === 'Hot' ? 'badge-sale' : 'badge-new'} absolute top-4 left-4 z-10`}>
                {product.badge}
              </span>
            )}

            <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <FiHeart />
            </button>

            <img
              src={productImage}
              alt={product.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => handleAddToCart(product)}
                className={`btn-primary text-sm py-2 flex items-center gap-1 ${addedItems[product.name] ? 'bg-green-700' : ''}`}
              >
                {addedItems[product.name] ? (
                  <>
                    <FiCheck /> Added!
                  </>
                ) : (
                  <>
                    <FiShoppingCart className="inline mr-1" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
            </div>

            <h3 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">${product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through">${product.oldPrice}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Trendingproducts;